// src/components/LineChartCard.jsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import './LineChart.scss';

const data = [
  { week: 'Week 1', appointments: 40 },
  { week: 'Week 2', appointments: 52 },
  { week: 'Week 3', appointments: 45 },
  { week: 'Week 4', appointments: 60 },
];

const LineChartCard = () => {
  return (
    <div className="chart-card">
      <h3>Weekly Appointment Trends</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="appointments" stroke="#6366f1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCard;
