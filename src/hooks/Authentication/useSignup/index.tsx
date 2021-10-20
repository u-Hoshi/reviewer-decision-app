import { useRef } from 'react';
import { FireSignupType } from '../../../utlis/Firebase/signup';
import { signup as fireSignup } from '../../../utlis/Firebase/signup';
import { SetErrorFn, useAuthHelper } from '../useAuthHelper';
import { useNavigate } from 'react-router-dom';

export type SignupPropsType = {
  name: string;
} & FireSignupType;

export const useSignup = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const formValidation = (setError: SetErrorFn) => {
    let invalidValidation = false;
    if (!nameRef.current?.value) {
      setError('name', '名前が入力されていません。');
      invalidValidation = true;
    }

    if (!emailRef.current?.value) {
      setError('email', 'メールアドレスを入力してください。');
      invalidValidation = true;
    }

    if (!passwordRef.current?.value) {
      setError('password', 'パスワードを入力してください。');
      invalidValidation = true;
    }

    return invalidValidation;
  };

  const signup = async () => {
    const { user } = await fireSignup({
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
    });

    if (!user?.uid) {
      throw new Error('ユーザーの登録に失敗しました。');
    }
    navigate('/');
  };

  const { authExecute, error, loading } = useAuthHelper(signup, formValidation);

  return {
    ref: {
      nameRef,
      emailRef,
      passwordRef,
    },
    signup: authExecute,
    error,
    loading,
  };
};
