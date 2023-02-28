// Author: Dhruvil Trivedi
// This is the login page and it's logic for it

import React, { useState, useEffect } from "react";
import loginValidation from "./loginValidation";

export const Login = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(loginValidation(email,password));
    }
    

    useEffect(()=> {
        if(Object.keys(errors).length === 0 && (email !== "" && password!== "")) {
            alert("Login Successful");
            setEmail('');
            setPassword('');
        }
    }, [errors])

    return (
        <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            {errors.email && <p style={{color: "maroon", fontSize: "15px"}}>{errors.email}</p>}

            <label htmlFor="email">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
            {errors.password && <p style={{color: "maroon", fontSize: "15px"}}>{errors.password}</p>}

            <button type="submit">Log In</button>
        </form>
        <button className='link-btn'>Forget Password?</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    );
}