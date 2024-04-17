'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Test() {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push('/login');
  }
  console.log(session);

  return (
    <>
      {session && (
        <div className="text-white">안녕하세요! {session.user.nickname}님!</div>
      )}
    </>
  );
}
