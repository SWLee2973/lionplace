import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '라이언플레이스',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={`${notoSans.className} flex justify-center`}>
        <main className="flex h-screen w-[1296px] justify-center bg-primary desktop:w-full mobile:w-[640px]">
          {children}
        </main>
      </body>
    </html>
  );
}
