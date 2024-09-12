import { env } from '$env/dynamic/private';
import { treaty } from '@elysiajs/eden';
import type { App } from '$lib/server/api';
import { building } from '$app/environment';
if (!building) {
  const client = treaty<App>('127.0.0.1:3000');
  const { data: index } = await client.api.hello.get();
}
export async function load() {
  console.log(env.TURSO_CONNECTION_URL); // secret 🤫
  console.log(index);
}
