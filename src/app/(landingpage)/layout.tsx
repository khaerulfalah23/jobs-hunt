import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import AuthProvider from '@/providers/AuthProvider';
import { Toaster } from '@/components/ui/toaster';

const epilogue = Epilogue({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Jobshuntly',
  description: 'Jobshuntly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} relative overflow-x-hidden`}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
