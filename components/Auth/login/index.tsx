import { useState } from 'react';
import { _layout } from '../_layout';
import { FiMail } from 'react-icons/fi';
import { MdPassword } from 'react-icons/md';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post<ResponseType>('/api/auth/login', {
        email: formState.email,
        password: formState.password,
      })
      .then((result) => {
        if (result.data.error) {
          setError(result.data.error);
          return;
        }

        localStorage.setItem('token', result.data.jwt);
      })
      .finally(() => setLoading(false));
  };

  return (
    <_layout
      title='Login'
      inputs={[
        {
          icon: <FiMail />,
          name: 'email',
          placeholder: 'Email',
          type: 'email',
          value: '',
          onChange: handleChange,
        },
        {
          icon: <MdPassword />,
          name: 'password',
          placeholder: 'Password',
          type: 'password',
          value: '',
          onChange: handleChange,
        },
      ]}
      onSubmit={handleOnSubmit}
      error={error}
      loading={loading}
    />
  );
}
