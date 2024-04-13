'use client';

import LoginButton from '@/components/level1/auth/LoginButton';
import FormInput from '@/components/level1/common/FormInput';
import InputErrorMessage from '@/components/level1/common/InputErrorMessage';
import { useForm } from 'react-hook-form';

interface IRegister {
  id: string;
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

function RegisterForm() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    defaultValues: {
      id: '',
      nickname: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const handleSubmitForm = async (data: IRegister) => {
    try {
      console.log(data);
    } catch (error) {
    } finally {
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col items-start gap-4"
    >
      <h2 className="text-heading-xl text-white">회원가입</h2>
      <div className="flex flex-col gap-5">
        <FormInput
          id="id"
          label="아이디"
          inputType="text"
          placeholder="영문 3자 이상"
          register={register('id', {
            required: true,
            validate: (val: string) => {
              if (!val.match(/^[A-Za-z0-9]{3}/))
                return '아이디는 영문 3자 이상 입력해 주세요';
            },
          })}
        >
          {errors?.id?.message && (
            <InputErrorMessage message={errors.id.message} />
          )}
        </FormInput>
        <FormInput
          id="nickname"
          label="닉네임"
          inputType="text"
          placeholder="사용할 닉네임을 입력해주세요"
          register={register('nickname', {
            required: true,
            validate: (val: string) => {
              if (val === '') return '닉네임을 입력해 주세요';
            },
          })}
        >
          {errors?.nickname?.message && (
            <InputErrorMessage message={errors.nickname.message} />
          )}
        </FormInput>
        <FormInput
          id="email"
          label="이메일"
          inputType="email"
          placeholder="인증 가능한 이메일 주소"
          register={register('email', {
            required: true,
            validate: (val: string) => {
              if (
                !val.match(
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                )
              )
                return '이메일을 정확히 입력해 주세요.';
            },
          })}
        >
          {errors?.email?.message && (
            <InputErrorMessage message={errors.email.message} />
          )}
        </FormInput>
        <FormInput
          id="password"
          label="비밀번호"
          inputType="password"
          placeholder="8문자 이상, 특수 문자 포함"
          autoComplete="off"
          register={register('password', {
            required: true,
            validate: (val: string) => {
              if (
                !val.match(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8}$/,
                )
              )
                return '8문자 이상, 특수문자를 포함해 입력해 주세요.';
            },
          })}
        >
          {errors?.password?.message && (
            <InputErrorMessage message={errors.password.message} />
          )}
        </FormInput>
        <FormInput
          id="passwordConfirm"
          label="비밀번호 확인"
          inputType="password"
          placeholder="8문자 이상, 특수 문자 포함"
          autoComplete="off"
          register={register('passwordConfirm', {
            required: true,
            validate: (val: string) => {
              if (watch('password') != val)
                return '입력한 비밀번호를 똑같이 입력해 주세요.';
            },
          })}
        >
          {errors?.passwordConfirm?.message && (
            <InputErrorMessage message={errors.passwordConfirm.message} />
          )}
        </FormInput>
      </div>

      <div className="mt-6">
        <LoginButton />
      </div>
    </form>
  );
}

export default RegisterForm;
