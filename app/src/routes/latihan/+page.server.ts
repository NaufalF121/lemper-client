export const load = async (event: any) => {
    const token = event.cookies.get('token');
    console.log('token : ', token);
  }
  