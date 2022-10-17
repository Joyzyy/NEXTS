import { FiMail } from 'react-icons/fi';
import { MdPassword } from 'react-icons/md';
import { HiUser } from 'react-icons/hi';

const LoginConstants = [
  {
    icon: <FiMail />,
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    value: '',
  },
  {
    icon: <MdPassword />,
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    value: '',
  },
];

const RegisterConstants = [
  {
    icon: <HiUser />,
    name: 'username',
    placeholder: 'Username',
    type: 'text',
    value: '',
  },
  {
    icon: <FiMail />,
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    value: '',
  },
  {
    icon: <MdPassword />,
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    value: '',
  },
];

export const AuthConstants = {
  LoginConstants,
  RegisterConstants,
};
