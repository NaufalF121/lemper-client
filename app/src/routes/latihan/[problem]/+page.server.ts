import type { PageServerLoad } from './$types.ts';
import { json } from '@sveltejs/kit';




export const load: PageServerLoad = async (event:any) => {
    
    const response = await fetch(`http://localhost:5530/api/restricted/Problems/${event.params.problem}.md`);
    const data = await response.text();
    console.log(data);
    return {content: data};

};

