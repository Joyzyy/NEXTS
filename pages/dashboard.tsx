import type { NextPage, GetServerSideProps } from 'next';

import { getCookies } from 'cookies-next';

const Dashboard: NextPage<{ data: any }> = ({ data }) => {
  console.log(data);
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let cookies = context.req.cookies['token'];

  return {
    props: {
      data: JSON.parse(JSON.stringify(cookies)),
    },
  };
};

export default Dashboard;
