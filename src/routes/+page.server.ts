import { env } from '$env/dynamic/private';
import { treaty } from '@elysiajs/eden';
import type { App } from '$lib/server/api';
const client = treaty<App>('localhost:5173');
export async function load() {
  console.log(env.TURSO_CONNECTION_URL); // secret 🤫
  console.log(index);
}

const { data: index } = await client.api.hello.get();
