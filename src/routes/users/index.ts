import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
    const response = await api('get', `users/`);
    if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			body: {
				users_list: {}
			}
		};
	}

	if (response.status === 200) {
		return {
			body: {
				users_list: await response.json()
			}
		};
	}
    return {
		status: response.status
	};
};

// If the user has JavaScript disabled, the URL will change to
// include the method override unless we redirect back to /todos
const redirect = {
	status: 303,
	headers: {
		location: '/users'
	}
};

export const patch: RequestHandler = async ({ request, locals }) => {
	const form = await request.formData();
    const response = await api('patch', 'users/', {
		name: form.get("name"),
		address: form.get("address"),
		tel: form.get("tel"),
		mail: form.get("mail")
	});
    return redirect
};

export const del: RequestHandler = async ({request, locals}) => {
    const form = await request.formData();
    await api('delete', `users/${form.get('id')}`);
    return redirect
};