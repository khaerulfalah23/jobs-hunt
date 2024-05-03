import { Prisma } from '@prisma/client';
import prisma from '../../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const filterCategory =
    searchParams.get('category') !== ''
      ? searchParams.get('category')?.split(',')
      : [];

  const categoryQuery: Prisma.JobWhereInput =
    filterCategory && filterCategory.length > 0
      ? {
          CategoryJob: {
            id: {
              in: filterCategory,
            },
          },
        }
      : {};

  const jobs = await prisma.job.findMany({
    where: { ...categoryQuery },
    include: {
      CategoryJob: true,
      Company: {
        include: {
          Companyoverview: true,
        },
      },
    },
  });

  return NextResponse.json(jobs);
}
