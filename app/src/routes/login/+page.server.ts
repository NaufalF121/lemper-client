import { error, redirect } from '@sveltejs/kit';

export const load = async (event:any) => {
	console.log('Load function called');
    

	const token = event.cookies.get('token', {
		maxAge: 60,
		path: '/',
		secure: false,
		sameSite: 'strict',
		httpOnly: false
	});

	console.log('Token retrieved:', token);

	if (token != '' && token != undefined) {
		console.log('Token is valid, redirecting...');
		throw redirect(301, '/latihan');
	}
};

export const actions = {
	login: async (event: any) => {
		const formData = await event.request.formData();
		const email = formData.get('username') as string;
		const password = formData.get('password') as string;

		if (!email || !password) {
			throw error(400, 'Invalid form data');
		}

		const response = await fetch('http://localhost:5530/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name: email, pass: password })
		});

		const responseData = await response.json();
		console.log('Response data:', responseData);
		if (!response.ok) {
			throw error(response.status, 'Failed to login');
			
		} else {
			const data = response.body ? response.body.toString() : '';
			event.cookies.set('token', responseData.token, {
				maxAge: 60,
				path: '/',
				secure: false,
				sameSite: 'strict',
				httpOnly: false
			});

			throw redirect(301, '/latihan');
		}
	}
};
