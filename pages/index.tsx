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

export const getServerSideProps: GetServerSideProps = async () => {
  const request = (await axios.get<ProductResponse>(`${process.env.NEXT_PUBLIC_API}/product`)).data;

  return {
    props: {
      error: request.error,
      data: request.data,
    },
  };
};

export default Home;
