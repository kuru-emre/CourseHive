// Author: Dhruvil Trivedi
// This is the Registration page and it's logic for it

import React, { useEffect, useState } from "react";
import registerValidation from "./RegisterValidation";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [eduName, setEduName] = useState('');

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(registerValidation(email, password, name, eduName));
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && (email !== "" && password!== "" && name!== "" && eduName!== "")) {
            alert("Register Successful!");
            setEmail('');
            setPassword('');
            setName('');
            setEduName('');
        }        
    }, [errors])

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>

                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name"/>
                {errors.name && <p style={{color: "maroon", fontSize: "15px"}}>{errors.name}</p>}

                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                {errors.email && <p style={{color: "maroon", fontSize: "15px"}}>{errors.email}</p>}

                <label htmlFor="eduName">Institution Name</label>
                <input value={eduName} onChange={(e) => setEduName(e.target.value)} placeholder="e.g. Dalhousie University" id="eduName" name="eduName"/>
                {errors.eduName && <p style={{color: "maroon", fontSize: "15px"}}>{errors.eduName}</p>}

                <label htmlFor="email">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
                {errors.password && <p style={{color: "maroon", fontSize: "15px"}}>{errors.password}</p>}

                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    );
}