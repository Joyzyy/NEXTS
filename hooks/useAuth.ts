import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export { useAuth };

function useAuth() {
  const [loggedIn, setLoggedIn] = useState<boolean | undefined>(undefined);
  const { pathname } = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('jwt')) setLoggedIn(true);
      else setLoggedIn(false);
    }
  }, [pathname]);

  return { loggedIn };
}
