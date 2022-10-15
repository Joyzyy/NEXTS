import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';

import { Spinner, Center } from '@chakra-ui/react';

export { ProtectedRoute };

type Props = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { loggedIn } = useAuth();

  useEffect(() => {
    if (loggedIn === true) router.push('/');
  }, [loggedIn]);

  return (
    <>
      {loggedIn === undefined ? (
        <Center justifyContent={'center'} alignItems={'center'} h={'92.5vh'}>
          <Spinner size={'xl'} />
        </Center>
      ) : loggedIn ? null : (
        children
      )}
    </>
  );
};
