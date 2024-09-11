import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';

export const app = new Elysia({ prefix: '/api' })
  .use(await swagger())
  .get('/', () => 'hi')
  .get('/hello', () => 'world');
