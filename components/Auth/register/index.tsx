import { useState } from 'react';
import { useRouter } from 'next/router';
import { _layout } from '../_layout';
import { AuthConstants } from '@/constants/Auth';
import { setCookie } from 'cookies-next';

import axios from 'axios';

export { _register };

type FormStateType = {
  username: string;
  email: string;
  password: string;
};

type ResponseType = {
  jwt: string;
  error: string;
};

function _register() {
  const [formState, setFormState] = useState<FormStateType>({
    username: '',
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

    console.log(localStorage.getItem('cartItems'));

    await axios
      .post<ResponseType>(
        '/api/auth/register',
        {
          username: formState.username,
          email: formState.email,
          password: formState.password,
          cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(JSON.stringify(localStorage.getItem('cartItems')!))
            : null,
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

        localStorage.setItem('jwt', result.data.jwt);
        localStorage.setItem('email', formState.email);

        setCookie('token', result.data.jwt, {
          maxAge: 60 * 60 * 24 * 7,
          path: '/',
        });

        localStorage.removeItem('cartItems');
        router.push('/', undefined, { shallow: true });
      })
      .finally(() => setLoading(false));
  };

  return (
    <_layout
      title='Register'
      inputs={AuthConstants.RegisterConstants.map((input) => ({
        ...input,
        onChange: handleChange,
      }))}
      onSubmit={handleOnSubmit}
      error={error}
      loading={loading}
    />
  );
}
