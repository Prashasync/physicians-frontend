// src/pages/Dashboard.jsx
import React from 'react';
import Layout from '../components/Layout';
import WelcomeCard from '../components/WelcomeCard';
import StatsCards from '../components/StatsCards';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import AppointmentTable from '../components/AppointmentTable';
import Timeline from '../components/Timeline';
import NotificationBar from '../components/NotificationBar';
import '../styles/Dashboard.scss';

const Dashboard = () => {
  const [role, setRole] = React.useState('Doctor');

  return (
    <Layout>
      <div className="dashboard-content">
        <h2>Dashboard</h2>

        <div className="role-switcher">
          <label>Current Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Doctor</option>
            <option>Admin</option>
            <option>Patient</option>
          </select>
        </div>

        {role === 'Doctor' && <WelcomeCard />}
        {role !== 'Patient' && <StatsCards />}

        {role !== 'Patient' && (
          <div className="charts-grid">
            <PieChart />
            <LineChart />
          </div>
        )}

        {role !== 'Patient' && (
          <div className="dashboard-lower-section">
            <AppointmentTable />
            <Timeline />
          </div>
        )}

        <NotificationBar />
      </div>
    </Layout>
  );
};

export default Dashboard;
