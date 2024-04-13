import Logo from '@/components/level1/Logo';

function Register() {
  return (
    <section className="flex h-screen w-full items-center bg-primary">
      <h1 className="sr-only">회원가입 화면</h1>
      <div className="flex h-3/5 w-full flex-col items-center gap-24">
        <Logo option="small" />
      </div>
    </section>
  );
}

export default Register;
