import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

type ReqQuery = {
  name: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  query: ReqQuery;
}

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
  const { name } = req.query;

  await prisma.product
    .findFirst({ where: { name: name } })
    .then((product) => {
      product
        ? res.json({ data: product, error: null })
        : res.json({ data: null, error: 'No product found' });
    })
    .catch((error) => res.status(500).json({ data: null, error: error.message }));

  return;
}
