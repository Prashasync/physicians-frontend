import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterWithPhone = () => {
  const navigate = useNavigate();

  const hanldeClick = () => {
    navigate("/login");
  };
  return (
    <button onClick={hanldeClick} className="register-with-phone">
      Sign In with Phone
    </button>
  );
};

export default RegisterWithPhone;
