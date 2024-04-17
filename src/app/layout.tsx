import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/context/AuthProvider';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '라이언플레이스',
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ko-KR">
      <body className={`${notoSans.className} flex justify-center bg-primary`}>
        <main className="flex w-[1296px] justify-center desktop:w-full mobile:w-[640px]">
          <AuthProvider session={session}>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
