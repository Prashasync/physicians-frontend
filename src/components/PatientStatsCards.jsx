import React from 'react';
import './PatientStatsCards.scss';

const PatientStatsCards = () => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h4>Patients</h4>
        <p>300 <span className="sub">Old Patients</span> | <span className="sub">56 New Patients</span></p>
      </div>
      <div className="stat-card">
        <h4>Active Patients</h4>
        <p>240 <span className="trend">+20.1%</span></p>
      </div>
      <div className="stat-card">
        <h4>Inactive Patients</h4>
        <p>60 <span className="trend">+20.1%</span></p>
      </div>
    </div>
  );
};

export default PatientStatsCards;
