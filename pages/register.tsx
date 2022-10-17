import type { NextPage } from 'next';
import { ProtectedRoute } from '@/components/Protected';
import { _register } from '@/components/Auth/register';

const Register: NextPage = () => {
  return (
    <ProtectedRoute>
      <_register />
    </ProtectedRoute>
  );
};

export default Register;
