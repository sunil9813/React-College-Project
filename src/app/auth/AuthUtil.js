    const setToken = (token) => {
    localStorage.setItem("auth_token", token);
    const tk = localStorage.getItem("auth_token");
    console.log(tk != null);

}

const clearToken  = () => {
    localStorage.clear();
}
const getToken  = () => {
   return localStorage.getItem("auth_token");

}

const checkAuthenticated = () => {
    const token = localStorage.getItem("auth_token");
     return token != null ;

}
export default checkAuthenticated ;
export  { setToken, clearToken, getToken};