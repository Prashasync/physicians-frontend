// src/components/WelcomeCard.jsx
import React from 'react';
import './WelcomeCard.scss';

const WelcomeCard = () => {
  return (
    <div className="welcome-card">
      <div className="welcome-text">
        <h2>Welcome back, Dr. Mathew</h2>
        <p>Here's a quick look at your appointments for today.</p>
      </div>
      <div className="welcome-actions">
        <button className="btn primary">View Appointments</button>
        <button className="btn outline">Follow-up Checklist</button>
      </div>
    </div>
  );
};

export default WelcomeCard;
