import { FC, useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import { StyledLogin } from ".";
import { Link } from "react-router-dom";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrors(validator.loginValidation(email, password));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && email !== "" && password !== "") {
      alert("Login Successful");
      setEmail("");
      setPassword("");
    }
  }, [errors]);

  return (
    <StyledLogin>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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

          <button type="submit">Log In</button>
        </form>
        <button className="link-btn">Forget Password?</button>
        <Link to='register'>
          <button className="link-btn">
            Don't have an account? Register here.
          </button>
        </Link>
      </div>
    </StyledLogin>
  );
};

export default Login;
