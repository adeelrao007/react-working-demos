import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { fetchRevenueData } from '../domain/services/dashboardService';

export default function RevenueLineChart() {
  const data = fetchRevenueData();
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-bold text-primary mb-2">Revenue (Monthly)</h2>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
