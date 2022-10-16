import type { NextPage, GetServerSideProps } from 'next';
import axios from 'axios';
import { ProductContext } from '@/lib/product';
import { HomeC } from '@/components/Home';

import { ProductResponse } from '@/lib/product';

const Home: NextPage<ProductResponse> = ({ error, data }) => {
  console.log(data);
  return (
    <ProductContext.Provider value={{ error, data }}>
      <HomeC />
    </ProductContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let url: string;
  if (process.env.NODE_ENV === 'production') url = `https://${context.req.rawHeaders[1]}`;
  else url = 'http://localhost:3000';

  const request = (await axios.get<ProductResponse>(`${url}/api/product`)).data;

  return {
    props: {
      error: request.error,
      data: request.data,
    },
  };
};

export default Home;
