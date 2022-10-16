import type { GetServerSideProps, NextPage } from 'next';
import type { ProductResponseIndividual } from '@/lib/product';
import { ProductContextIndividual } from '@/lib/product';
import { ProductName } from '@/components/Shop/[name]';
import axios from 'axios';

const Product: NextPage<ProductResponseIndividual> = ({ data, error }) => {
  return (
    <ProductContextIndividual.Provider value={{ data, error }}>
      <ProductName />
    </ProductContextIndividual.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let url: string;
  if (process.env.NODE_ENV === 'production') url = `https://${context.req.rawHeaders[1]}`;
  else url = 'http://localhost:3000';

  const response = (
    await axios.get<ProductResponseIndividual>(`${url}/api/product/${context.query.name}`)
  ).data;

  return {
    props: {
      data: response.data,
      error: response.error,
    },
  };
};

export default Product;
