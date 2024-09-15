import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from './db';
import { session, user } from './schema';
import { Google } from 'arctic';
import { config } from '$lib/config';

const adapter = new DrizzleSQLiteAdapter(db, session, user);
const baseUrl = config.env.HOST_URL;
enum AuthProvider {
  Google = 'google'
}
function getRedirectUri(provider: AuthProvider) {
  return `${baseUrl}/auth/${provider}/callback`;
}
export const google = new Google(
  config.env.GOOGLE_CLIENT_ID,
  config.env.GOOGLE_CLIENT_SECRET,
  getRedirectUri(AuthProvider.Google)
);
export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: !dev
    }
  },
  getUserAttributes: (attributes) => {
    return {
      email: attributes.email,
      firstName: attributes.firstName,
      lastName: attributes.lastName
    };
  }
});
declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: {
      firstName: string;
      lastName: string;
      email: string;
    };
  }
}
