// src/components/PieChartCard.jsx
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './PieChart.scss';

const data = [
  { name: 'Adults', value: 40 },
  { name: 'Teens', value: 20 },
  { name: 'Seniors', value: 15 },
  { name: 'Children', value: 10 },
  { name: 'Couples', value: 8 },
  { name: 'Groups', value: 7 },
];

const COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6'];

const PieChartCard = () => {
  return (
    <div className="chart-card">
      <h3>Patient Type Distribution</h3>
      <PieChart width={300} height={250}>
        <Pie
          data={data}
          cx={150}
          cy={125}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default PieChartCard;
