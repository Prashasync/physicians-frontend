// src/components/StatsCards.jsx
import React from 'react';
import './StatsCards.scss';

const StatsCards = () => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h4>Old Patients</h4>
        <p>300</p>
      </div>
      <div className="stat-card">
        <h4>New Patients</h4>
        <p>56</p>
      </div>
      <div className="stat-card highlight">
        <h4>Total Appointments</h4>
        <p>300 <span className="trend">+5.6%</span></p>
      </div>
    </div>
  );
};

export default StatsCards;
