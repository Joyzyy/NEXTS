import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';

// export const config = {
//   runtime: 'experimental-edge',
// };

// export default async function handler(req: NextRequest) {
//   try {
//     // ce dracu fac, oare fac bine? ------ 1
//     const { pathname } = new URL(req.url);
//     const paths = pathname.split('/');
//     const myParam = paths[paths.length - 1];

//     const data = await prisma.product.findFirst({
//       where: {
//         name: myParam,
//       },
//     });

//     return new Response(JSON.stringify({ data: data, error: null }), {
//       status: 200,
//       headers: {
//         'content-type': 'applicaton/json',
//         'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
//       },
//     });
//   } catch (error: any) {
//     return new Response(error.message);
//   }
// }

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
