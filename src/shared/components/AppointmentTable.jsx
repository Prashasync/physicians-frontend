// src/components/AppointmentsTable.jsx
import React from 'react';
import './AppointmentTable.scss';

const appointments = [
  { id: 1, name: 'John Doe', age: 35, gender: 'Male', treatment: 'Therapy', date: '2025-04-18', time: '10:00 AM' },
  { id: 2, name: 'Jane Smith', age: 28, gender: 'Female', treatment: 'Counseling', date: '2025-04-18', time: '11:00 AM' },
  { id: 3, name: 'Emily Rose', age: 42, gender: 'Female', treatment: 'Therapy', date: '2025-04-18', time: '1:00 PM' },
  { id: 4, name: 'Michael Lee', age: 30, gender: 'Male', treatment: 'Group Session', date: '2025-04-18', time: '2:00 PM' },
  { id: 5, name: 'Sara Ali', age: 24, gender: 'Female', treatment: 'Therapy', date: '2025-04-18', time: '3:00 PM' },
];

const AppointmentsTable = () => {
  return (
    <div className="appointments-card">
      <h3>Today's Appointments</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty-state">
                No appointments for today.
              </td>
            </tr>
          ) : (
            appointments.map((appt, index) => (
              <tr key={appt.id}>
                <td>{index + 1}</td>
                <td>{appt.name}</td>
                <td>{appt.age}</td>
                <td>{appt.gender}</td>
                <td>{appt.treatment}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
