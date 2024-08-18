import NextAuth, { CredentialsSignin } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Google from 'next-auth/providers/google';
import { Adapter } from 'next-auth/adapters';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from './lib/prisma';
import bcrypt from 'bcryptjs';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: 'jwt',
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      profile(profile) {
        return {
          id: profile.id,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.image,
        };
      },
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log({ credentials });
        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!userFound) {
          throw new CredentialsSignin('User Not Found');
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          userFound.password as string
        );

        if (!passwordMatch) {
          throw new CredentialsSignin('Password Not Match');
        }

        return {
          id: userFound.id,
          name: userFound.name,
          email: userFound.email,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
      }
      if (trigger === 'update') {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    session({ session, token }) {
      session.user.id = token.id as string;

      return session;
    },
  },
});
