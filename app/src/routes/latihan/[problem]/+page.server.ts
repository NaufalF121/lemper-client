


export const load = async (event: any) => {
    const token = event.cookies.get('token', {
		maxAge: 60,
		path: '/',
		secure: false,
		sameSite: 'strict',
		httpOnly: false
	});
    console.log(token);
    const response = await fetch(`http://localhost:5530/api/restricted/Problems/${event.params.problem}.md`);
    const data = await response.text();
    console.log(data);
    return {content: data};

};