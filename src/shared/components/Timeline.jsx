// src/components/Timeline.jsx
import React from 'react';
import './Timeline.scss';

const events = [
  { time: '10:00 AM', label: 'Session with John' },
  { time: '12:00 PM', label: 'Follow-up: Jane' },
  { time: '2:00 PM', label: 'Group Therapy: Michael' },
  { time: '4:00 PM', label: 'Review with Sara' },
];

const Timeline = () => {
  return (
    <div className="timeline-card">
      <h3>Today’s Timeline</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <span className="time">{event.time}</span>
            <span className="label">{event.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
