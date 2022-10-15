import type { GetServerSideProps, NextPage } from 'next';
import { ProductResponse } from '@/lib/product';
import { _layout } from '@/components/Shop/_layout';
import axios from 'axios';

const Running: NextPage<ProductResponse> = ({ data, error }) => {
  return <_layout layout_items={data} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = (await axios.get<ProductResponse>(`${process.env.NEXT_PUBLIC_API}/product`))
    .data;

  const filtered_data = response.data.filter((item) => item.category.toLowerCase() === 'running');

  return {
    props: {
      data: filtered_data,
      error: response.error,
    },
  };
};

export default Running;
