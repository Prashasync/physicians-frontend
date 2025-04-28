import React from 'react';
import './PatientListTable.scss';

const PatientListTable = ({ patients, onSort, sortField, sortOrder }) => {
  const getSortClass = (field) => {
    if (sortField === field) {
      return sortOrder === 'asc' ? 'sorted-asc' : 'sorted-desc';
    }
    return '';
  };

  const getStatus = (score) => {
    if (score === null || score === undefined) return 'Unknown';
    if (score >= 80) return 'Stable';
    if (score >= 50) return 'Moderate';
    return 'Critical';
  };

  const getStatusClass = (status) => `status-tag ${status.toLowerCase()}`;

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => onSort('name')} className={getSortClass('name')}>Patient Name</th>
            <th onClick={() => onSort('age')} className={getSortClass('age')}>Age</th>
            <th>Gender</th>
            <th onClick={() => onSort('treatment')} className={getSortClass('treatment')}>Treatment</th>
            <th>Last Check-up</th>
            <th onClick={() => onSort('score')} className={getSortClass('score')}>Health Score</th>
            <th>Medication</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patients && patients.length === 0 ? (
            <tr>
              <td colSpan="9" className="empty-row">No patients found.</td>
            </tr>
          ) : (
            patients.map((p, index) => {
              const status = getStatus(p.score);
              return (
                <tr key={p.id || index}>
                  <td>{index + 1}</td>
                  <td>{p.name || '-'}</td>
                  <td>{p.age || '-'}</td>
                  <td>{p.gender || '-'}</td>
                  <td>{p.treatment || '-'}</td>
                  <td>{p.lastCheck ? new Date(p.lastCheck).toLocaleDateString() : 'N/A'}</td>
                  <td>
                    {p.score !== null && p.score !== undefined ? (
                      <div className="score-bar-wrapper">
                        <div className="score-bar" style={{ width: `${p.score}%` }}></div>
                        <span className="score-label">{p.score}%</span>
                      </div>
                    ) : (
                      <span className="not-available">Not Available</span>
                    )}
                  </td>
                  <td>{p.meds === 'Yes' ? '✅ Yes' : '❌ No'}</td>
                  <td><span className={getStatusClass(status)}>{status}</span></td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientListTable;
