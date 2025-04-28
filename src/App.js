// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout'; // ✅ Import layout
import Dashboard from './pages/Dashboard';
import AppointmentDashboard from './pages/AppointmentDashboard';
import PatientManagementDashboard from './pages/PatientManagementDashboard';
import MessageDashboard from './pages/MessageDashboard';

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
