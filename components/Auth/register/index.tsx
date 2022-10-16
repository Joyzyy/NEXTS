import { useState } from 'react';
import { _layout } from '../_layout';
import { FiMail } from 'react-icons/fi';
import { MdPassword } from 'react-icons/md';
import { HiUser } from 'react-icons/hi';

export { _register };

function _register() {
  const [formState, setFormState] = useState<{ username: string; email: string; password: string }>(
    {
      username: '',
      email: '',
      password: '',
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <_layout
      title='Register'
      inputs={[
        {
          icon: <HiUser />,
          name: 'username',
          placeholder: 'Username',
          type: 'text',
          value: '',
          onChange: handleChange,
        },
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
    />
  );
}
