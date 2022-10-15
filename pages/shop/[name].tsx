import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import {
  ProductContextIndividual,
  ProductResponse,
  ProductResponseIndividual,
} from '@/lib/product';
import axios from 'axios';

import prisma from '@/lib/prisma';

import { ProductName } from '@/components/Shop/[name]';

const ProductPage: NextPage<ProductResponseIndividual> = ({ error, data }) => {
  return (
    <ProductContextIndividual.Provider value={{ error, data }}>
      <ProductName />
    </ProductContextIndividual.Provider>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const response = (await axios.get<ProductResponse>(`${process.env.NEXT_PUBLIC_API}/product`))
  //   .data;

  const data = await prisma.product.findMany();

  const paths = data.map((product) => ({
    params: {
      name: product.name.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = (
    await axios.get<ProductResponseIndividual>(
      `https://nextsedge-di84.vercel.app/api/product/${params?.name}`,
    )
  ).data;

  return {
    props: {
      error: response.error,
      data: response.data,
    },
  };
};

export default ProductPage;
