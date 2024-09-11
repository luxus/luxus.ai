import type { RequestHandler } from '@sveltejs/kit';
import { app } from '$lib/server/api';

export const GET: RequestHandler = ({ request }) => app.handle(request);
export const PUT: RequestHandler = ({ request }) => app.handle(request);
export const DELETE: RequestHandler = ({ request }) => app.handle(request);
export const POST: RequestHandler = ({ request }) => app.handle(request);
export const PATCH: RequestHandler = ({ request }) => app.handle(request);
export const fallback: RequestHandler = ({ request }) => app.handle(request);
