import { useState } from 'react';
import { useRouter } from 'next/router';
import { _layout } from '../_layout';
import { AuthConstants } from '@/constants/Auth';
import { setCookie } from 'cookies-next';

import axios from 'axios';

export { _login };

type FormStateType = {
  email: string;
  password: string;
};

type ResponseType = {
  jwt: string;
  error: string;
};

function _login() {
  const [formState, setFormState] = useState<FormStateType>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post<ResponseType>(
        '/api/auth/login',
        {
          email: formState.email,
          password: formState.password,
          cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [],
        },
        {
          withCredentials: true,
        },
      )
      .then((result) => {
        if (result.data.error) {
          setError(result.data.error);
          return;
        }

        setCookie('token', result.data.jwt, {
          maxAge: 60 * 60 * 24 * 7,
          path: '/',
        });

        localStorage.setItem('jwt', result.data.jwt);
        localStorage.setItem('email', formState.email);
        router.push('/', undefined, { shallow: true });
      })
      .finally(() => setLoading(false));
  };

  return (
    <_layout
      title='Login'
      inputs={AuthConstants.LoginConstants.map((input) => ({
        ...input,
        onChange: handleChange,
      }))}
      onSubmit={handleOnSubmit}
      error={error}
      loading={loading}
    />
  );
}
