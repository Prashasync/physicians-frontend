// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../features/dashboard/pages/Dashboard';
import AppointmentDashboard from '../features/appointments/pages/AppointmentDashboard';
import PatientManagementDashboard from '../features/patients/pages/PatientManagementDashboard';
import MessageDashboard from '../features/messaging/pages/MessageDashboard';
import Layout from '../shared/components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {/* Wrap all pages with Layout */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/Appointments" element={<Layout><AppointmentDashboard /></Layout>} />
        <Route path="/manage-patients" element={<Layout><PatientManagementDashboard /></Layout>} />
        <Route path="/messaging" element={<Layout><MessageDashboard /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
