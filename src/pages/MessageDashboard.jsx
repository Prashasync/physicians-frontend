// src/pages/MessageDashboard.jsx
import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { FiSend, FiSearch, FiPhone } from 'react-icons/fi';
import '../styles/MessageDashboard.scss';

const initialUsers = [
  {
    id: 1,
    name: 'Theresa Webb',
    initials: 'TW',
    age: 30,
    gender: 'Female',
    treatment: 'Therapy',
    tasks: ['Take a walk', 'Journal', 'Sleep 8 hrs'],
    messages: [
      { from: 'them', text: 'Hi, how are you feeling today?', time: '11:30 am' },
      { from: 'me', text: 'Feeling a bit anxious.', time: '11:35 am' },
    ],
    lastActive: '11:30 am'
  },
  {
    id: 2,
    name: 'Devon Lane',
    initials: 'DL',
    age: 34,
    gender: 'Male',
    treatment: 'Anxiety Counseling',
    tasks: ['Breathe deep', 'Exercise'],
    messages: [
      { from: 'them', text: 'Hi Matt, hope you\'re doing fine. How can I help you?', time: '1:30 pm' },
      { from: 'me', text: 'Hello Octavias', time: '1:25 pm' },
    ],
    lastActive: '1:30 pm'
  },
  {
    id: 3,
    name: 'Kathryn Murphy',
    initials: 'KM',
    age: 27,
    gender: 'Female',
    treatment: 'CBT',
    tasks: ['Gratitude list', 'Limit screen time'],
    messages: [
      { from: 'them', text: 'Checking in! How was your sleep last night?', time: '9:15 am' },
      { from: 'me', text: 'Better than yesterday, thank you!', time: '9:30 am' },
    ],
    lastActive: '9:15 am'
  },
];

const MessageDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(initialUsers[1]);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const messagesEndRef = useRef(null);

  const filteredUsers = initialUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [selectedUser]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    if (messageInput.trim() === '') return;

    const newMessage = {
      from: 'me',
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedUser = {
      ...selectedUser,
      messages: [...selectedUser.messages, newMessage],
      lastActive: 'Just now'
    };

    setSelectedUser(updatedUser);
    setMessageInput('');
    setTimeout(scrollToBottom, 100);
  };

  return (
    <Layout>
      <div className="message-dashboard">
        {/* Left Panel - Conversations */}
        <div className="conversations-panel">
          <h3>Messages</h3>
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: isMobile ? '100%' : '90%' }}
            />
          </div>
          <div className="conversations-list">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className={`conversation ${selectedUser.id === user.id ? 'active' : ''}`}
                onClick={() => setSelectedUser(user)}
              >
                <div className="avatar">
                  {user.initials}
                  <span className="online-dot"></span>
                </div>
                <div className="conversation-details">
                  <strong>{user.name}</strong>
                  <p className="last-message">
                    {user.messages[user.messages.length - 1]?.text.substring(0, 30)}...
                  </p>
                </div>
                <div className="conversation-meta">
                  <span className="time">{user.lastActive}</span>
                  {user.id === 1 && <span className="unread-count">2</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Panel - Chat */}
        <div className="chat-window">
          <div className="chat-header">
            <div className="user-info">
              <div className="avatar">{selectedUser.initials}</div>
              <div>
                <div className="name">
                  {selectedUser.name}
                  <span className="online-status"></span>
                </div>
                <div className="status">Online</div>
              </div>
            </div>
            <button className="call-btn">
              <FiPhone />
            </button>
          </div>

          <div className="chat-messages">
            {selectedUser.messages.map((msg, i) => (
              <div key={i} className={`message ${msg.from === 'me' ? 'sent' : 'received'}`}>
                <div className="message-text">{msg.text}</div>
                <div className="message-time">{msg.time}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-btn" onClick={handleSend}>
              <FiSend />
              {!isMobile && <span>Send</span>}
            </button>
          </div>
        </div>

        {/* Right Panel - Patient Info */}
        <div className="patient-info-panel">
          <div className="patient-header">
            <div className="avatar">{selectedUser.initials}</div>
            <h4>{selectedUser.name}</h4>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <div className="label">Age</div>
              <div className="value">{selectedUser.age}</div>
            </div>
            <div className="info-item">
              <div className="label">Gender</div>
              <div className="value">{selectedUser.gender}</div>
            </div>
            <div className="info-item">
              <div className="label">Treatment</div>
              <div className="value">{selectedUser.treatment}</div>
            </div>
          </div>

          <div className="tasks">
            <h5>Assigned Tasks</h5>
            {selectedUser.tasks.map((task, i) => (
              <div className="task-item" key={i}>
                <input type="checkbox" id={`task-${i}`} />
                <label htmlFor={`task-${i}`}>{task}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MessageDashboard;
