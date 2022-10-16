import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { serialize } from 'cookie';
import prisma from '@/lib/prisma';

type ReqBody = {
  username: string;
  email: string;
  password: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  body: ReqBody;
}

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
  if (!(req.method === 'POST')) {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { username, email, password } = req.body;

  await prisma.user
    .create({
      data: {
        name: username,
        email: email,
        password: await bcrypt.hash(password, await bcrypt.genSalt()),
      },
    })
    .then((new_user) => {
      new_user
        ? res.setHeader(
            'Set-Cookie',
            serialize(
              'rt_as_cookie',
              jsonwebtoken.sign({ id: new_user.id }, 'someotherrandomkey_yahahahahimgoinginsane', {
                expiresIn: '14d',
              }),
              {
                sameSite: 'none',
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 14,
              },
            ),
          ) &&
          res.json({
            jwt: jsonwebtoken.sign({ id: new_user.id }, 'randomkey_BABYKEEMGOAT', {
              expiresIn: '7d',
            }),
          })
        : res.json({ error: 'Couldnt create a new user' });
    })
    .catch((error) => res.status(500).json({ error: error.message }));

  prisma.$disconnect();
  return;
}
