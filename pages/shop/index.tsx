import type { GetServerSideProps, NextPage } from 'next';
import { ProductResponse } from '@/lib/product';
import { _layout } from '@/components/Shop/_layout';
import axios from 'axios';

const Shop: NextPage<ProductResponse> = ({ data, error }) => {
  if (error) console.error(error);
  return <>{data ? <_layout layout_items={data} /> : <p>No items.</p>}</>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let url: string;
  if (process.env.NODE_ENV === 'production') url = `https://${context.req.rawHeaders[1]}`;
  else url = 'http://localhost:3000';

  const response = (await axios.get<ProductResponse>(`${url}/api/product`)).data;

  return {
    props: {
      data: response.data,
      error: response.error,
    },
  };
};

export default Shop;
