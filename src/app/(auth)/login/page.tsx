import React from 'react';
import Logo from '@/components/level1/Logo';
import LoginForm from '@/components/level2/auth/LoginForm';

export default function Login() {
  return (
    <section className="flex h-screen w-full items-center bg-primary">
      <h1 className="sr-only">로그인 화면</h1>
      <div className="flex h-3/5 w-full flex-col items-center gap-24">
        <Logo option="small" />
        <LoginForm />
      </div>
    </section>
  );
}
