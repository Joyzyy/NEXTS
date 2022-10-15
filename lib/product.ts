import { createContext } from 'react';

// from prisma
export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  sizes: number[];
  tabtype: string;
};

export type ProductResponse = {
  error: string;
  data: Product[];
};

export type ProductResponseIndividual = {
  error: string;
  data: Product;
};

export const ProductContext = createContext({} as ProductResponse);
export const ProductContextIndividual = createContext({} as ProductResponseIndividual);
