import React from "react";
import "../../../shared/styles/otp.css";

const OTPPage = () => {
  return (
    <div className="otp-container">
      <div className="logo">LOGO</div>

      <h2>Secure Your Account</h2>
      <p className="description">
        For added security, please verify your identity.
        <br />
        Enter the 6-digit code sent to your email or phone.
      </p>

      <div className="code-inputs">
        {[...Array(6)].map((_, i) => (
          <input key={i} type="text" maxLength="1" className="code-box" />
        ))}
      </div>

      <button className="otp-btn">Verify</button>

      <p className="resend-text">
        Didn’t receive a code? <span className="resend-link">Resend</span>
      </p>
    </div>
  );
};

export default OTPPage;