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
  if (req.method === 'GET') {
    const { email, password } = req.body;

    await prisma.user
      .findFirst({
        where: {
          email: email,
        },
      })
      .then((found_user) => {
        found_user
          ? bcrypt.compare(password, found_user.password, (_, isValid) => {
              isValid
                ? res.setHeader(
                    'Set-Cookie',
                    serialize(
                      'rt_as_cookie',
                      jsonwebtoken.sign(
                        { id: found_user.id },
                        'someotherrandomkey_yahahahahimgoinginsane',
                        {
                          expiresIn: '14d',
                        },
                      ),
                      {
                        sameSite: 'lax',
                        httpOnly: true,
                        maxAge: 60 * 60 * 24 * 14,
                      },
                    ),
                  ) &&
                  res.json({
                    jwt: jsonwebtoken.sign({ id: found_user.id }, 'randomkey_BABYKEEMGOAT', {
                      expiresIn: '7d',
                    }),
                  })
                : res.json({ error: 'Password is incorrect' });
            })
          : res.json({ error: 'Couldnt find the user' });
      })
      .catch((error) => res.status(500).json({ error: error.message }));
    return;
  } else if (req.method === 'POST') {
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
                jsonwebtoken.sign(
                  { id: new_user.id },
                  'someotherrandomkey_yahahahahimgoinginsane',
                  { expiresIn: '14d' },
                ),
                {
                  sameSite: 'lax',
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
  }
}
