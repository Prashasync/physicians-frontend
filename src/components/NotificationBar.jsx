// src/components/NotificationBar.jsx
import React, { useState, useEffect } from 'react';
import './NotificationBar.scss';

const NotificationBar = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New appointment booked with John Doe', type: 'info' },
    { id: 2, message: 'Appointment cancelled by Jane Smith', type: 'warning' },
    { id: 3, message: 'Reminder: Follow-up session with Sara at 3 PM', type: 'reminder' },
  ]);

  // Optional: Simulate real-time updates
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          message: 'New appointment with Emily just confirmed!',
          type: 'info',
        },
      ]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="notification-bar">
      <h4>🔔 Notifications</h4>
      <ul>
        {notifications.map((note) => (
          <li key={note.id} className={`note ${note.type}`}>
            {note.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationBar;
