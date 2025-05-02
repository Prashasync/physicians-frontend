import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import "../../../shared/styles/register.css";
import ImagePlaceholder from "../../../shared/components/ImagePlaceholder";
import CompleteProfile from "../components/CompleteProfile";

const RegisterPage = () => {
  const [isContinue, setIsContinue] = useState(false);
  return (
    <section className="register">
      {isContinue ? (
        <CompleteProfile />
      ) : (
        <RegisterForm setIsContinue={setIsContinue} />
      )}
      <ImagePlaceholder />
    </section>
  );
};

export default RegisterPage;
