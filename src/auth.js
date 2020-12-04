const isAuthenticated = ()=>{
    const token = '123';

    if(token)
       return true;

    if(token === '')
       return false;
}

export default isAuthenticated;