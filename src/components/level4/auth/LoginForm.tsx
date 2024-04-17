'use client';

import LinkButton from '@/components/level1/auth/LinkButton';
import LoginButton from '@/components/level1/auth/LoginButton';
import FormInput from '@/components/level1/common/FormInput';
import InputErrorMessage from '@/components/level1/common/InputErrorMessage';
import Separator from '@/components/level1/common/Separator';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ILogin {
  id: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    defaultValues: {
      id: '',
      password: '',
    },
  });
  const router = useRouter();

  const handleLoginForm = async (data: ILogin) => {
    const toastLoading = toast.loading('잠시만 기다려 주세요...');

    try {
      const response = await signIn('credentials', {
        id: data.id,
        password: data.password,
        redirect: false,
      });

      if (response?.status === 401) {
        toast.error('아이디와 비밀번호를 확인해 주세요.');
      } else {
        toast.success('환영합니다!');
        router.push('/test');
      }
    } catch (error: any) {
      toast.error(
        '로그인에 실패했어요.\n아이디와 비밀번호를 확인해 주세요.',
        error?.message,
      );
    } finally {
      toast.dismiss(toastLoading);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLoginForm)}
      className="flex flex-col items-start gap-6"
    >
      <h2 className="text-heading-xl text-white">로그인</h2>
      <div className="flex flex-col gap-3">
        <FormInput
          id="id"
          name="id"
          label="아이디"
          inputType="text"
          placeholder="아이디를 입력해 주세요."
          register={register('id', {
            required: '아이디를 입력해 주세요.',
          })}
        >
          {errors?.id?.message && (
            <InputErrorMessage message={errors.id.message} />
          )}
        </FormInput>
        <FormInput
          id="password"
          name="password"
          label="비밀번호"
          inputType="password"
          placeholder="비밀번호를 입력해 주세요"
          autoComplete="off"
          register={register('password', {
            required: '비밀번호를 입력해 주세요.',
          })}
        >
          {errors?.password?.message && (
            <InputErrorMessage message={errors.password.message} />
          )}
        </FormInput>
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
