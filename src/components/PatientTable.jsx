import React from 'react';
import './PatientTable.scss';

const PatientTable = ({ appointments, onEdit, onDelete }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Joined From</th>
            <th>Treatment</th>
            <th>Last Check</th>
            <th>Health Score</th>
            <th>Under Medications</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {appointments.length === 0 ? (
            <tr>
              <td colSpan="11" style={{ textAlign: 'center', padding: '1rem', color: '#888' }}>
                No appointments found.
              </td>
            </tr>
          ) : (
            appointments.map((appt, index) => {
              const joinDate = new Date(appt.joined);
              const lastCheckDate = new Date(appt.lastCheck);
              const apptDate = new Date(appt.start);
              const isMissed = apptDate < new Date();

              return (
                <tr key={appt.id || index}>
                  <td>{index + 1}</td>
                  <td>{appt.name || '-'}</td>
                  <td>{appt.age || '-'}</td>
                  <td>{appt.gender || '-'}</td>
                  <td>{isNaN(joinDate) ? '-' : joinDate.toLocaleDateString()}</td>
                  <td>{appt.treatment || '-'}</td>
                  <td>{isNaN(lastCheckDate) ? '-' : lastCheckDate.toLocaleDateString()}</td>
                  <td>{appt.score || 'Not Available'}</td>
                  <td>{appt.meds || '-'}</td>
                  <td>
                    <span className={`status-tag ${isMissed ? 'missed' : 'upcoming'}`}>
                      {isMissed ? 'Missed' : 'Upcoming'}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => onEdit(appt)}>📝</button>
                    <button onClick={() => onDelete(appt.id)} style={{ marginLeft: '8px' }}>
                      🗑️
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
