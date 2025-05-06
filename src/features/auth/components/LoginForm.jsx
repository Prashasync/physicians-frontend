import React, { useState } from "react";
import GoogleButton from "../../../shared/components/GoogleButton";
import RegisterWithPhone from "./RegisterWithPhone";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-form-container">
      <div className="register-header">
        <h1>LOGO</h1>
        <h2>Welcome to PrashaSync</h2>
        <h3>
          Manage patients, track progress, and streamline appointments—all in
          one place.
        </h3>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <div className="login-form-inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
          />
        </div>
        <div className="login-form-inputs">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Enter your password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="">
        <h2>
          Dont have an account? Create one{" "}
          <span className="register-redirect" onClick={handleLoginRedirect}>here</span>
        </h2>
      </div>
      <div className="register-options">
        <GoogleButton />
        <RegisterWithPhone />
      </div>
    </div>
  );
};

export default LoginForm;