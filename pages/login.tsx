import type { NextPage } from 'next';
import { ProtectedRoute } from '@/components/Protected';
import { _login } from '@/components/Auth/login';

const Login: NextPage = () => {
  return (
    <ProtectedRoute>
      <_login />;
    </ProtectedRoute>
  );
};

export default Login;
