# ❓ Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- 💎 Next.js **12.2**
- ⚛️ React.js **18**
- ⚙️ ExpressJS - _backend_
- 🔮 **Chakra-UI**: _for the general styling of components_
- 🎁 **MongoDB**: _storing data in a cool way_
- ⚙️ **Amazon S3 Bucket**: _storing images_
- 🌈 .prettier for consistent code style

## Motivation

I wanted to learn all about front-end development, and during this project I can confidently say that I learned the following:

- React.js/Next.js/Express.js (Serverless functions + edge functions)
- Typescript
- REST APIs
- SSR, SSG
- AWS Services (S3 Bucket)

# 👀 Demo

The app will be hosted on VERCEL.

## Images:

![LandingPage](https://i.imgur.com/XTgaqwm.png)

# 🚀 Quickstart

In order to get started you need to run the following commands in your terminal:

```bash
git clone https://github.com/Joyzyy/NEXTS.git .
yarn install
yarn run dev
```

# 📘 Modules

## Typescript

TypeScript and Babel are pre-configured with custom module resolvers. This means you can use absolute imports with custom namespaces by default for the following modules:

```ts
import { Component } from '@/components/...';
import { Lib } from '@/lib/...';
import { Hook } from '@/hooks/...';
import { Constant } from '@/constants/...';
```
