import React, { useState } from "react";
import { AuthServices } from "../services/AuthServices";
import GoogleButton from "../../../shared/components/GoogleButton";
import RegisterWithPhone from "./RegisterWithPhone";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({setIsContinue}) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const user = await AuthServices.registerUser(email);
      setIsContinue(true);
    } catch (error) {
      console.log("There was an error logging in the user:", error);
    }
  };
  return (
    <section className="register-form">
      <div className="register-form-container">
        <div className="register-header">
          <h1>LOGO</h1>
          <h2>Welcome to PrashaSync</h2>
          <h3>
            Manage patients, track progress, and streamline appointments—all in
            one place.
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="register-inputs">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <button>Continue</button>
        </form>
        <div className="">
          <h2>
            Already have an account
            <span onClick={handleRegisterRedirect} className="register-redirect">
              Login
            </span>
          </h2>
        </div>
        <div className="register-options">
          <GoogleButton />
          <RegisterWithPhone />
        </div>
        <div className="terms-policy">
          <p>Terms of use</p> | <p>Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;