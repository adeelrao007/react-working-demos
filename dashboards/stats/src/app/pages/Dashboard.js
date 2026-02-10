import React from 'react';
import StatsCards from '../../shared/StatsCards';
import RevenueLineChart from '../../shared/RevenueLineChart';
import CustomersLineChart from '../../shared/CustomersLineChart';
import TopProductsBarChart from '../../shared/TopProductsBarChart';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-primary mb-4">Dashboard Overview</h1>
      <StatsCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RevenueLineChart />
        <CustomersLineChart />
      </div>
      <TopProductsBarChart />
    </div>
  );
}
