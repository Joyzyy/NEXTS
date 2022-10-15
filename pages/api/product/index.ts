import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextRequest } from 'next/server';
import { Product } from '@prisma/client';
import prisma from '@/lib/prisma';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  if (req.method === 'GET') {
    await prisma.product
      .findMany()
      .then((product) => {
        return product
          ? new Response(JSON.stringify({ data: product, error: null }), {
              status: 200,
              headers: {
                'content-type': 'application/json',
                'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
              },
            })
          : new Response(JSON.stringify({ data: null, error: 'No products found' }));
      })
      .catch((error) => new Response(JSON.stringify({ error: error.message }), { status: 500 }));
  }
}

// interface ExtendedNextApiRequest extends NextApiRequest {
//   body: Product;
// }

// export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     await prisma.product
//       .findMany()
//       .then((product) => {
//         product
//           ? res.json({ data: product, error: null })
//           : res.json({ data: null, error: 'Products not found.' });
//       })
//       .catch((error) => res.status(500).json({ error: error.message }));

//     return;
//   } else if (req.method === 'POST') {
//     const body = req.body;

//     await prisma.product
//       .create({
//         data: {
//           name: body.name,
//           description: body.description,
//           category: body.category,
//           price: body.price,
//           image: body.image,
//           sizes: body.sizes,
//           tabtype: body.tabtype,
//         },
//       })
//       .then((product) => {
//         product
//           ? res.json({ data: product, error: null })
//           : res.json({ data: null, error: 'couldnt create a new product' });
//       })
//       .catch((error) => res.status(500).json({ error }));

//     return;
//   }
//   return;
// }
