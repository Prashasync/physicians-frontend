import React from "react";
import LoginForm from "../components/LoginForm";
import "../../../shared/styles/login.css";

const LoginPage = () => {
    return (
      <div className="login">
        <LoginForm />
        <imagePlaceholder />
      </div>
    );
  };
  
  export default LoginPage;

