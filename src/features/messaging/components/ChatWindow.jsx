// src/components/ChatWindow.jsx
import React, { useState } from 'react';
import './ChatWindow.scss';

const dummyMessages = [
  { id: 1, sender: 'doctor', text: 'Good morning, how are you feeling today?', time: '10:30 AM' },
  { id: 2, sender: 'patient', text: 'I’m feeling better, thank you!', time: '10:32 AM' },
  { id: 3, sender: 'doctor', text: 'Great. Continue your meds and let me know any side effects.', time: '10:33 AM' },
];

const ChatWindow = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: 'doctor',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="chat-window">
      <div className="messages-area">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-bubble ${msg.sender}`}>
            <p>{msg.text}</p>
            <span className="timestamp">{msg.time}</span>
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
