
import { redirect } from "@sveltejs/kit";

export const load = async (event: any) => {
    const token = event.cookies.get('token', {
        maxAge: 60,
        path: '/',
        secure: false,
        sameSite: 'lax',
        httpOnly: false
        
    });
    console.log('token : ', token);
    if (token) {
        event.cookies.set('token',"", {path: '/', httpOnly: false});
        
        throw redirect(301, '/');
    }
}