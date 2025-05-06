// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterProfileInfoPage from '../features/auth/pages/RegisterProfileInfoPage.jsx';
import Register from '../features/auth/pages/RegisterPage.jsx';
import LoginPage from '../features/auth/pages/LoginPage.jsx';
import OTPPage from '../features/auth/pages/OTPPage.jsx';
import Dashboard from '../features/dashboard/pages/Dashboard';
import AppointmentDashboard from '../features/appointments/pages/AppointmentDashboard';
import PatientManagementDashboard from '../features/patients/pages/PatientManagementDashboard';
import MessageDashboard from '../features/messaging/pages/MessageDashboard';
import ClinicProfilePage from '../features/clinicProfile/pages/ClinicProfilePage';
import Layout from '../shared/components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
       <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {/* Wrap all pages with Layout */}

        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/otp" element={<OTPPage />}></Route>
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/Appointments" element={<Layout><AppointmentDashboard /></Layout>} />
        <Route path="/manage-patients" element={<Layout><PatientManagementDashboard /></Layout>} />
        <Route path="/messaging" element={<Layout><MessageDashboard /></Layout>} />
        <Route path="/clinic-profile" element={<Layout><ClinicProfilePage /></Layout>} />

      </Routes>
    </Router>
  );
}

export default App;
