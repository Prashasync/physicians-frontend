import React from "react";
import LoginForm from "../components/LoginForm";
import ImagePlaceholder from "../../../shared/components/ImagePlaceholder";
import "../../../shared/styles/login.css"

const LoginPage = () => {
  return (
    <div className="login">
      <LoginForm />
      <ImagePlaceholder />
    </div>
  );
};

export default LoginPage;
