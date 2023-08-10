import { api } from '$api/_api';
import type { RequestHandler } from '@sveltejs/kit';
import { account_uid } from '$stores/account';
import { API_ERROR } from '$config/config';
import { error_data } from '$stores/config';

export const get: RequestHandler = async ({ request, locals }) => {
	// locals.userid comes from src/hooks.js
	// const response = await api('get', `account/:signup`);

	let error = false
	let val = ""
	error_data.subscribe(value => {
		if ( value["ERROR_ID"] == 2 ) {
			error = true
		}
	})
	account_uid.subscribe(value => { val = value })
	return {
		status: 200,
		body: {
			data: {
				account_uid: val,
				login_error: error,
			}
		}
	};
};

// If the user has JavaScript disabled, the URL will change to
// include the method override unless we redirect back to /todos
const redirect_signin = {
	status: 303,
	headers: {
		location: '/signin'
	}
};
const redirect_home = {
	status: 303,
	headers: {
		location: '/'
	}
};

export const patch: RequestHandler = async ({ request }) => {
	const form = await request.formData();

	const data = await api('patch', `account`, {
		login_id: !!form.has('login_id') ? form.get('login_id') : undefined,
		login_password: !!form.has('login_password') ? form.get('login_password') : undefined
	});

	const json = await data.json()
	if (json.account_uid == API_ERROR.ALREADY_DATA_ERROR){
		error_data.set({ 'ERROR_ID': 2 })
		return redirect_signin
	}
	account_uid.set(json.account_uid)
	error_data.set({})

	return redirect_home;
};
