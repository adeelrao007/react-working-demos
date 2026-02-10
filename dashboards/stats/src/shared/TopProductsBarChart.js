import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { fetchTopProducts } from '../domain/services/dashboardService';


// Color palette for unique product bars
const productColors = [
  '#6366f1', // indigo
  '#f59e42', // orange
  '#10b981', // green
  '#f43f5e', // rose
  '#fbbf24', // yellow
  '#2563eb', // blue
  '#a21caf', // purple
  '#e11d48', // pink
  '#0ea5e9', // sky
];

export default function TopProductsBarChart() {
  const data = fetchTopProducts();
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-8">
      <h2 className="text-lg font-bold text-primary mb-2">Top Products by Category</h2>
      <ResponsiveContainer width="100%" height={460}>
        <BarChart data={data} layout="vertical" margin={{ left: 120 }}>
          <XAxis type="number" />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={140}
            tick={{
              width: 130,
              angle: 0,
              textOverflow: 'ellipsis',
              overflow: 'visible',
              fontSize: 14,
              fontFamily: 'inherit',
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" name="Sales">
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={productColors[idx % productColors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
