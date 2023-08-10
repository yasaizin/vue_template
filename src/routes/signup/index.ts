import { api } from '$api/_api';
import type { RequestHandler } from '@sveltejs/kit';
import { account_uid } from '$stores/account';
import { error_data } from '$stores/config';
import { API_ERROR } from '$config/config';

export const get: RequestHandler = async ({ request, locals }) => {
	// locals.userid comes from src/hooks.js
	// const response = await api('get', `account/:signup`);

	let error = false
	let val = ""
	error_data.subscribe(value => {
		if ( value["ERROR_ID"] == 1 ) {
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

export const post: RequestHandler = async ({ request, locals }) => {
	const form = await request.formData();
	const data = await api('post', `account/:signup`, {
		login_id: form.has('login_id') ? form.get('login_id') : undefined,
		login_password: form.has('login_password') ? form.get('login_password') : undefined
	})
	
	const json = await data.json()
	if (json.account_uid == API_ERROR.NOT_FOUND_ERROR){
		error_data.set({ 'ERROR_ID': 1 })
		account_uid.set("")
		return redirect_signup
	}
	error_data.set({})
	account_uid.set(json.account_uid)
	return {
		status: 200,
	}
};

// If the user has JavaScript disabled, the URL will change to
// include the method override unless we redirect back to /todos
const redirect_signin = {
	status: 303,
	headers: {
		location: '/'
	}
};
const redirect_signup = {
	status: 303,
	headers: {
		location: '/signup'
	}
};

export const del: RequestHandler = async ({ }) => {
	let uid = ""
	account_uid.subscribe((value) => {
		uid = value
	})
	const response = await api('delete', `account/${uid}`);
	if (response.status == 200 ) {
		account_uid.set("")
		error_data.set({})
	}
	return redirect_signup;
};
