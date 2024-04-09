import Link from 'next/link';
import React from 'react';

const buttonTheme = {
  white: 'bg-white text-primary',
  transparent: 'border-white text-white border-[1px]',
};

export default function LinkButton({
  to,
  theme,
  children,
}: {
  to: string;
  theme: 'white' | 'transparent';
  children: string;
}) {
  return (
    <Link
      className={`${buttonTheme[theme]} flex h-12 w-64 items-center justify-center rounded-md text-label-small font-bold`}
      href={to}
    >
      {children}
    </Link>
  );
}
