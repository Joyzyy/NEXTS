import type { NextPage, GetServerSideProps } from 'next';
import { ProductResponse } from '@/lib/product';
import { _layout } from '@/components/Shop/_layout';
import axios from 'axios';

const Lifestyle: NextPage<ProductResponse> = ({ data, error }) => {
  return <_layout layout_items={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let url: string;
  if (process.env.NODE_ENV === 'production') url = `https://${context.req.rawHeaders[1]}`;
  else url = 'http://localhost:3000';

  const response = (await axios.get<ProductResponse>(`${url}/api/product`)).data;

  const filtered_data = response.data.filter((item) => item.category.toLowerCase() === 'lifestyle');

  return {
    props: {
      data: filtered_data,
      error: response.error,
    },
  };
};

export default Lifestyle;
