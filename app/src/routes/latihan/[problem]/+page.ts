import type { PageLoad } from './$types.js';





export const load: PageLoad = async (event:any) => {
    
    const response = await fetch(`http://localhost:5530/api/restricted/Problems/${event.params.problem}.md`);
    const data = await response.text();
    return {content: data};

};

