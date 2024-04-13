import Logo from '@/components/level1/Logo';
import LoginForm from '@/components/level4/auth/LoginForm';

export default function Login() {
  return (
    <section className="relative flex h-screen min-h-[600px] w-full items-center bg-primary">
      <h1 className="sr-only">로그인 화면</h1>
      <div className="absolute top-1/3 flex h-fit w-full -translate-y-1/3 flex-col items-center gap-24">
        <Logo option="small" />
        <LoginForm />
      </div>
    </section>
  );
}
