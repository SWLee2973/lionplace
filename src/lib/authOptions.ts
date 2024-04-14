import dbConnect from '@/dbConnect/dbConnect';
import User from '@/models/User';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcryptjs from 'bcryptjs';
import { NextAuthOptions } from 'next-auth';

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        id: {},
        password: {},
      },

      async authorize(credentials) {
        const id = credentials?.id as string;
        const plainPassword = credentials?.password as string;

        await dbConnect();

        const isUserExist = await User.findOne({ id: id });
        if (!isUserExist) {
          return null;
        }

        // 비밀번호 확인
        const isValidPassword = await bcryptjs.compare(
          plainPassword,
          isUserExist?.password,
        );
        if (!isValidPassword) {
          return null;
        }

        return {
          userId: isUserExist?._id,
          id: isUserExist?.id || 'Anonymous',
        };
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
};

export default authOptions;
