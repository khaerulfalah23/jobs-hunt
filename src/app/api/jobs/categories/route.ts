import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
	const categories = await prisma.categoryJob.findMany({
		include: {
			_count: {
				select: { Job: true },
			},
		},
	});

	return NextResponse.json(categories);
}
