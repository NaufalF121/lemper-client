import { Path } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

export const load = async (event: any) => {
    const token = event.cookies.get('token', {path: '/'});
    console.log('token : ', token);
    if (token) {
        event.cookies.set('token',"", {path: '/'});
        
        throw redirect(301, '/');
    }
}