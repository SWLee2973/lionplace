'use client';

import LoginButton from '@/components/level1/auth/LoginButton';
import FormInput from '@/components/level1/common/FormInput';

function RegisterForm() {
  return (
    <form className="flex flex-col items-start gap-4">
      <h2 className="text-heading-xl text-white">회원가입</h2>
      <div className="flex flex-col gap-3">
        <FormInput
          id="id"
          name="id"
          label="아이디"
          inputType="text"
          placeholder="영문 3자 이상"
        />
        <FormInput
          id="email"
          name="email"
          label="이메일"
          inputType="email"
          placeholder="인증 가능한 이메일 주소"
        />
        <FormInput
          id="password"
          name="password"
          label="비밀번호"
          inputType="password"
          placeholder="8문자 이상, 특수 문자 포함"
        />
        <FormInput
          id="passwordConfirm"
          name="passwordConfirm"
          label="비밀번호 확인"
          inputType="password"
          placeholder="8문자 이상, 특수 문자 포함"
        />
      </div>

      <div className="mt-6">
        <LoginButton />
      </div>
    </form>
  );
}

export default RegisterForm;
