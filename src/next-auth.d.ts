import { DefaultSession } from 'next-auth';
import { ISODateString } from 'next-auth/core/types';

declare module 'next-auth' {
  interface Session {
    user?: {
      id?:  string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    expires: ISODateString;
  }
}
