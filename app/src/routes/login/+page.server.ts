import { Path } from "$env/static/private";
import { error, redirect } from "@sveltejs/kit";



export const load = async (event: any) => {
  const token = event.cookies.get('token');
    if (token) {
        throw redirect(301, '/latihan');
    }
}

export const actions = {
    default: async (event: any) => {
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
            body: JSON.stringify({ name:email, pass:password })
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw error(response.status, 'Failed to login');
        } else {
            const data = response.body ? response.body.toString() : '';
            event.cookies.set('token', responseData.token, {
                maxAge: 60 * 60 * 24 * 7,
                path: '/',
                secure: false,
            });

            throw redirect(301, '/latihan');
        }

        return{
            error: await response.json()
        }
    }
}