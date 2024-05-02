'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const router = useRouter();

  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between">
      <div className="inline-flex items-center gap-12">
        <div>
          <Image
            src="/images/logo2.png"
            alt="/images/logo2.png"
            width={160}
            height={36}
          />
        </div>
        <div>
          <Link
            href="/find-jobs"
            className="font-medium text-muted-foreground mr-4 cursor-pointer"
          >
            Find Jobs
          </Link>
          <Link
            href="/find-companies"
            className="font-medium text-muted-foreground cursor-pointer"
          >
            Browse Companies
          </Link>
        </div>
      </div>
      <div className="inline-flex items-center gap-4 h-8">
        <Button onClick={() => router.push('/signin')} variant="link">
          Login
        </Button>
        <Button onClick={() => router.push('/signup')}>Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;
