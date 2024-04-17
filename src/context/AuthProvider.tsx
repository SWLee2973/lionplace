'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface IProps {
  children: React.ReactNode;
  session: Session | null;
}

export default function AuthProvider({ children, session }: IProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
