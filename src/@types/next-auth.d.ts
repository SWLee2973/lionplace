import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      userId: string;
      id: string;
      nickname: string;
    };
  }

  interface User {
    userId: string;
    id: string;
    nickname: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    userId: string;
    id: string;
    nickname: string;
  }
}
