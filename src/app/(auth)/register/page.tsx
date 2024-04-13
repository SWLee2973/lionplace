import Logo from '@/components/level1/Logo';
import RegisterForm from '@/components/level4/auth/RegisterForm';

function Register() {
  return (
    <section className="relative flex h-screen min-h-[600px] w-full items-center bg-primary">
      <h1 className="sr-only">회원가입 화면</h1>
      <div className="absolute top-1/3 flex h-fit w-full -translate-y-1/3 flex-col items-center gap-16 pb-8 pt-8">
        <Logo option="small" />
        <RegisterForm />
      </div>
    </section>
  );
}

export default Register;
