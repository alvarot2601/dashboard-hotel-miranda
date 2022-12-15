import React from "react";
import styled, { css } from 'styled-components'
import { useState } from "react";
import {useNavigate } from "react-router";
const LoginForm = styled.div`
`;
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authentication = () => {
        if(email === 'alvaro@gmail.com' && password ==='1234')
        {
            const mail = email;
            const authData = JSON.stringify({
                email: email,
                password: password
            });
            localStorage.setItem('auth', authData);
            navigate('/dashboard');
        }
    }
    const saveCredentials = (e) => {
        e.target.type === 'email' ? setEmail(e.target.value) : setPassword(e.target.value);
    }
    
    return (
        <LoginForm method="POST" action="">
            <input type="email" onChange={saveCredentials}/>
            <input type="password" onChange={saveCredentials}/>
            <input type="submit" onClick={authentication}/>
        </LoginForm>
    );
}
export default Login;