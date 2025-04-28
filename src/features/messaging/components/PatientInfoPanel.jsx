// src/components/PatientInfoPanel.jsx
import React from 'react';
import './PatientInfoPanel.scss';

const PatientInfoPanel = () => {
  return (
    <div className="patient-info-panel">
      <h3>Patient Info</h3>

      <div className="section">
        <p><strong>Name:</strong> Jane Doe</p>
        <p><strong>Age:</strong> 34</p>
        <p><strong>Gender:</strong> Female</p>
        <p><strong>Treatment:</strong> Anxiety Therapy</p>
      </div>

      <div className="section">
        <h4>Given Tasks</h4>
        <ul>
          <li>Complete journal exercise</li>
          <li>Take medication regularly</li>
        </ul>
      </div>

      <div className="section">
        <h4>Attachments</h4>
        <ul>
          <li><a href="#">Blood Test Report.pdf</a></li>
          <li><a href="#">Sleep Log.xlsx</a></li>
        </ul>
      </div>

      <div className="section">
        <h4>Prescriptions</h4>
        <ul>
          <li>Alprazolam 0.5mg - Once daily</li>
        </ul>
      </div>
    </div>
  );
};

export default PatientInfoPanel;
