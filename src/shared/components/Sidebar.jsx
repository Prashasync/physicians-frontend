import React from 'react';
import {
  MdDashboard,
  MdSchedule,
  MdCalendarToday,
  MdChatBubbleOutline,
  MdSettings,
  MdPeople
} from 'react-icons/md';
import './Sidebar.scss';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <nav className="nav-links">
        <a href="/dashboard" title="Dashboard">
          <span className="nav-icon"><MdDashboard /></span>
          <span className="nav-text">Dashboard</span>
        </a>
        <a href="/appointments" title="Appointments">
          <span className="nav-icon"><MdSchedule /></span>
          <span className="nav-text">Appointments</span>
        </a>
       
        <a href="/manage-patients" title="Manage Patients">
          <span className="nav-icon"><MdPeople /></span>
          <span className="nav-text">Manage Patients</span>
        </a>
        <a href="#" title="Calendar">
          <span className="nav-icon"><MdCalendarToday /></span>
          <span className="nav-text">Calendar</span>
        </a>
        <a href="/messaging" title="Messages">
          <span className="nav-icon"><MdChatBubbleOutline /></span>
          <span className="nav-text">Messages</span>
        </a>
        <a href="#" title="Settings">
          <span className="nav-icon"><MdSettings /></span>
          <span className="nav-text">Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
