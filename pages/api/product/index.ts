import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextRequest } from 'next/server';
import type { Product } from '@/lib/product';
import prisma from '@/lib/prisma';

// export const config = {
//   runtime: 'experimental-edge',
// };

// async function streamToText(stream: ReadableStream<Uint8Array>): Promise<string> {
//   let result = '';

//   const reader = stream.pipeThrough(new TextDecoderStream()).getReader();
//   while (true) {
//     const { done, value } = await reader.read();
//     if (done) break;
//     result += value;
//   }

//   return result;
// }

// export default async function handler(req: NextRequest) {
//   if (req.method === 'GET') {
//     try {
//       const data = await prisma.product.findMany();
//       if (!data) return new Response('Couldnt find any products');

//       return new Response(JSON.stringify({ data: data, error: null }), {
//         status: 200,
//         headers: {
//           'content-type': 'applicaton/json',
//           'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
//         },
//       });
//     } catch (error: any) {
//       return new Response(JSON.stringify(error.message));
//     }
//   } else if (req.method === 'POST') {
//     try {
//       const body: Product = await req.json();
//       const data = await prisma.product.create({
//         data: {
//           name: body.name,
//           description: body.description,
//           category: body.category,
//           price: body.price,
//           image: body.image,
//           sizes: body.sizes,
//           tabtype: body.tabtype,
//         },
//       });

//       if (!data)
//         return new Response(
//           JSON.stringify({ product: null, error: 'Couldnt create a new product' }),
//         );

//       return new Response(
//         JSON.stringify({
//           product: data,
//           error: null,
//         }),
//         {
//           status: 200,
//           headers: {
//             'content-type': 'applicaton/json',
//           },
//         },
//       );
//     } catch (error: any) {
//       return new Response(JSON.stringify({ error: error.message }));
//     }
//   }
// }

interface ExtendedNextApiRequest extends NextApiRequest {
  body: Product;
}

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    await prisma.product
      .findMany()
      .then((product) => {
        product
          ? res.json({ data: product, error: null })
          : res.json({ data: null, error: 'Products not found.' });
      })
      .catch((error) => {
        console.log(error.message);
        res.status(500).json(error.message);
      });
    prisma.$disconnect();
    return;
  } else if (req.method === 'POST') {
    const body = req.body;

    await prisma.product
      .create({
        data: {
          name: body.name,
          description: body.description,
          category: body.category,
          price: body.price,
          image: body.image,
          sizes: body.sizes,
          tabtype: body.tabtype,
        },
      })
      .then((product) => {
        product
          ? res.json({ data: product, error: null })
          : res.json({ data: null, error: 'couldnt create a new product' });
      })
      .catch((error) => res.status(500).json({ error }));
    prisma.$disconnect();
    return;
  }
  return;
}
