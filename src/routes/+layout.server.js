import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	return { analyticsId: env.VERCEL_ANALYTICS_ID };
}
