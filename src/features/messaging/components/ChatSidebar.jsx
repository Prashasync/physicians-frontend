// src/components/ChatSidebar.jsx
import React, { useState } from 'react';
import './ChatSidebar.scss';

const dummyPatients = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Thank you, doctor!',
    time: '10:32 AM',
  },
  {
    id: 2,
    name: 'Emily Smith',
    lastMessage: 'When should I take the meds?',
    time: '09:15 AM',
  },
  {
    id: 3,
    name: 'Mark Allen',
    lastMessage: 'Feeling much better now.',
    time: 'Yesterday',
  },
];

const ChatSidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = dummyPatients.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chat-sidebar">
      <div className="chat-search">
        <input
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="chat-list">
        {filteredPatients.map((patient) => (
          <li key={patient.id} className="chat-item">
            <div className="chat-name">{patient.name}</div>
            <div className="chat-meta">
              <span className="chat-message">{patient.lastMessage}</span>
              <span className="chat-time">{patient.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
