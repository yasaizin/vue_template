// import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	// event.locals.error_data = cookies.error_data || undefined;

	const response = await resolve(event);

	// response.headers.set(
	// 	'set-cookie',
	// 	cookie.serialize('error_data', event.locals.error_data, {
	// 		path: '/',
	// 		httpOnly: true
	// 	})
	// );

	return response;
};
