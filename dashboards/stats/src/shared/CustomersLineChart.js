import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { fetchCustomersData } from '../domain/services/dashboardService';

export default function CustomersLineChart() {
  const data = fetchCustomersData();
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-bold text-primary mb-2">Customers (Monthly)</h2>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="customers" stroke="#2563eb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
