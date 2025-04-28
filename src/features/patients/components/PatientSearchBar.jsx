import React from 'react';
import '../components/PatientSearchBar.scss';

const PatientSearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by patient name or treatment..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Make the search icon clickable */}
      <span className="search-icon" onClick={onSearch} style={{ cursor: 'pointer' }}>
        🔍
      </span>
    </div>
  );
};

export default PatientSearchBar;
