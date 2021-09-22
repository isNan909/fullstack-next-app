import Adapters from 'next-auth/adapters';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
});
