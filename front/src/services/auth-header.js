// This method is needed to create authentication header for server access
export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken){
        return { Authorization: 'Bearer ' + user.accessToken}
    }else{
        return {}
    }
}