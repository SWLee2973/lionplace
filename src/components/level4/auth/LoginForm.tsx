'use client';

import LinkButton from '@/components/level1/auth/LinkButton';
import LoginButton from '@/components/level1/auth/LoginButton';
import FormInput from '@/components/level1/common/FormInput';
import Separator from '@/components/level1/common/Separator';
import Link from 'next/link';

function LoginForm() {
  return (
    <form className="flex flex-col items-start gap-6">
      <h2 className="text-heading-xl text-white">로그인</h2>
      <div className="flex flex-col gap-3">
        <FormInput
          id="id"
          name="id"
          label="아이디"
          inputType="text"
          placeholder="아이디를 입력해 주세요"
        />
        <FormInput
          id="password"
          name="password"
          label="비밀번호"
          inputType="password"
          placeholder="비밀번호를 입력해 주세요"
          autoComplete="off"
        />
        <div className="flex items-center justify-end gap-2 text-label-small text-white">
          <Link href="">아이디 찾기</Link>
          <Separator />
          <Link href="">비밀번호 찾기</Link>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <LoginButton />
        <LinkButton to="/register" theme="transparent">
          회원가입
        </LinkButton>
      </div>
    </form>
  );
}

export default LoginForm;
