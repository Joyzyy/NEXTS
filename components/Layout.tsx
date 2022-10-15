import { ReactNode } from 'react';
import Head from 'next/head';

import { Appbar } from './Appbar';

export { Layout };

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = 'underground sneakers' }) => {
  return (
    <>
      <Head>
        <meta charSet={'utf-8'} />
        <meta name={'viewport'} content={'initial-scale=1.0, width=device-width'} />
        <title>{title}</title>
      </Head>

      <Appbar />
      {children}
    </>
  );
};
