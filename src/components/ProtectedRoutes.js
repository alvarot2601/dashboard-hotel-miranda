import React from "react";
import { Outlet, Navigate } from "react-router";
import Root from "./Root";
const useAuth = () => {
    if(localStorage.getItem('auth')){
        const authData = JSON.parse(localStorage.getItem('auth'));
        const mail = authData.email;
        const password = authData.password;
        const userLogged = (mail === 'alvaro@gmail.com' && password === '1234') ? true : false;
        console.log(mail)
        return userLogged && true;
    }
    return false;
}
const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return (
        isAuth ? (
            <>
                <Root/>
                <Outlet/>
            </>
        )
        : <Navigate to='/login' />
    );
}
export default ProtectedRoutes;