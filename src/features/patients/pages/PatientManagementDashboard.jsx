// src/pages/PatientManagementDashboard.jsx
import React, { useState } from 'react';
import Layout from '../../../shared/components/Layout';
import PatientListTable from '../components/PatientListTable';
import '../styles/PatientManagementDashboard.scss';

const PatientManagementDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [statusFilter, setStatusFilter] = useState('');

  const [patients] = useState([
    {
      id: 1,
      name: 'Jane Doe',
      age: 42,
      gender: 'F',
      treatment: 'Depression Counseling',
      lastCheck: '2025-04-10',
      score: 82,
      meds: 'Yes',
      status: 'Stable'
    },
    {
      id: 2,
      name: 'Mike Smith',
      age: 36,
      gender: 'M',
      treatment: 'Anxiety Therapy',
      lastCheck: '',
      score: 45,
      meds: 'No',
      status: 'Moderate'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      age: 28,
      gender: 'F',
      treatment: 'Sleep Disorder Care',
      lastCheck: '2025-04-08',
      score: 91,
      meds: 'Yes',
      status: 'Critical'
    }
  ]);

  const activePatients = patients.filter(p => p.score && p.score >= 50).length;
  const inactivePatients = patients.length - activePatients;

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleExportCSV = () => {
    const csvContent = [
      ['Name', 'Age', 'Gender', 'Treatment', 'Last Check', 'Score', 'Meds', 'Status'],
      ...patients.map(p => [p.name, p.age, p.gender, p.treatment, p.lastCheck, p.score, p.meds, p.status])
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'patients.csv';
    link.click();
  };

  const filteredAndSortedPatients = [...patients]
    .filter(p =>
      (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.treatment && p.treatment.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (!statusFilter || p.status === statusFilter)
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      const aVal = a[sortField] ?? '';
      const bVal = b[sortField] ?? '';

      if (typeof aVal === 'number') {
        return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
      }
      return sortOrder === 'asc'
        ? aVal.toString().localeCompare(bVal.toString())
        : bVal.toString().localeCompare(aVal.toString());
    });

  return (
    <Layout>
      <div className="patient-management-content">
        <h2>Patient Management Dashboard</h2>

        <div className="stats-grid">
          <div className="stat-card">Total Patients: {patients.length}</div>
          <div className="stat-card">Active Patients: {activePatients}</div>
          <div className="stat-card">Inactive Patients: {inactivePatients}</div>
        </div>

        <div className="patient-controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by name or condition..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <span className="search-icon">🔍</span>
          </div>

          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Statuses</option>
            <option value="Stable">Stable</option>
            <option value="Moderate">Moderate</option>
            <option value="Critical">Critical</option>
          </select>

          <button onClick={handleExportCSV}>Export CSV</button>
        </div>

        <PatientListTable
          patients={filteredAndSortedPatients}
          onSort={handleSort}
          sortField={sortField}
          sortOrder={sortOrder}
        />
      </div>
    </Layout>
  );
};

export default PatientManagementDashboard;
