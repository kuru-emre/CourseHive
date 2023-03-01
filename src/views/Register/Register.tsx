// Author: Dhruvil Trivedi
// This is the Registration page and it's logic for it

import { FC, useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import { StyledRegister } from ".";
import { Link } from "react-router-dom";

export const Register: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [eduName, setEduName] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    eduName: "",
    password: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrors(validator.registerValidation(email, password, name, eduName));
  };

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      email !== "" &&
      password !== "" &&
      name !== "" &&
      eduName !== ""
    ) {
      alert("Register Successful!");
      setEmail("");
      setPassword("");
      setName("");
      setEduName("");
    }
  }, [errors]);

  return (
    <StyledRegister>
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            placeholder="Full Name"
          />
          {errors.name && (
            <p style={{ color: "maroon", fontSize: "15px" }}>{errors.name}</p>
          )}

          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          {errors.email && (
            <p style={{ color: "maroon", fontSize: "15px" }}>{errors.email}</p>
          )}

          <label htmlFor="eduName">Institution Name</label>
          <input
            value={eduName}
            onChange={(e) => setEduName(e.target.value)}
            placeholder="e.g. Dalhousie University"
            id="eduName"
            name="eduName"
          />
          {errors.eduName && (
            <p style={{ color: "maroon", fontSize: "15px" }}>
              {errors.eduName}
            </p>
          )}

          <label htmlFor="email">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          {errors.password && (
            <p style={{ color: "maroon", fontSize: "15px" }}>
              {errors.password}
            </p>
          )}

          <button type="submit">Register</button>
        </form>
        <button className="link-btn">
          <Link to='login'>Already have an account? Login here.</Link>
        </button>
      </div>
    </StyledRegister>
  );
};

export default Register;
