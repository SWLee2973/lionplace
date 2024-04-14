import LinkButton from '@/components/level1/auth/LinkButton';
import Logo from '@/components/level1/Logo';

export default function Home() {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-primary">
      <h1 className="sr-only">시작 화면</h1>
      <div className="flex h-2/5 w-full flex-col items-center justify-between">
        <Logo option="large" />
        <LinkButton theme="white" to="/login">
          시작하기
        </LinkButton>
      </div>
    </section>
  );
}
