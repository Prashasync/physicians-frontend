// src/components/Topbar.jsx
import React from 'react';
import logo from '../../assets/icons/logo.svg';
import './Topbar.scss';

const Topbar = ({ toggleSidebar,hamburgerRef }) => {
  // Base64 encoded dummy profile (gray avatar)
  const dummyProfile = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiNlZWVlZWUiLz48cGF0aCBkPSJNMTIgMTJjLTIuMiAwLTQtMS44LTQtNHMxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNHptMCAyYzIuNyAwIDggMS4zIDggNHYyaC0xNnYtMmMwLTIuNyA1LjMtNCA4LTR6IiBmaWxsPSIjODg4Ii8+PC9zdmc+';

  return (
    <div className="topbar">
      <div className="logo-section">
      <span className="hamburger" onClick={toggleSidebar} ref={hamburgerRef}>
          ☰
        </span>        
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="profile-section">
        <span className="notification">🔔<span className="badge">3</span></span>
        <img src={dummyProfile} alt="Dr. Matthew" className="profile-pic" />
        <span  className="username">Dr. Matthew</span>
      </div>
    </div>

    
  );
};

export default Topbar;