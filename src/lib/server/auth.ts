import { Lucia } from 'lucia';
import { LibSQLAdapter } from '@lucia-auth/adapter-sqlite';
import { libSQLClient } from './db';

const adapter = new LibSQLAdapter(libSQLClient, {
	user: 'user',
	session: 'session'
});

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === 'production'
		}
	},
	getUserAttributes: (data) => {
		return {
			first_name: data.first_name,
			last_name: data.last_name,
			email: data.email,
			is_admin: data.is_admin
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			first_name: string;
			last_name: string;
			is_admin: boolean;
			email: string;
		};
	}
}
