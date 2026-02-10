import React from 'react';
import { fetchStats } from '../domain/services/dashboardService';
import { UserIcon, ShoppingCartIcon, CurrencyDollarIcon, ClockIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const statsConfig = [
  { label: 'Customers', key: 'customers', bg: 'bg-stat1', icon: UserIcon },
  { label: 'Orders', key: 'orders', bg: 'bg-stat2', icon: ShoppingCartIcon },
  { label: 'Total Revenue', key: 'totalRevenue', bg: 'bg-stat3', icon: CurrencyDollarIcon },
  { label: "Today's Orders", key: 'todaysOrders', bg: 'bg-stat4', icon: ClockIcon },
  { label: "Today's Revenue", key: 'todaysRevenue', bg: 'bg-stat5', icon: ArrowTrendingUpIcon },
];

export default function StatsCards() {
  const stats = fetchStats();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
      {statsConfig.map(({ label, key, bg, icon: Icon }) => (
        <div key={key} className={`${bg} text-white rounded-lg shadow p-4 flex items-center gap-4`}>
          <Icon className="w-8 h-8" />
          <div>
            <div className="text-lg font-semibold">{stats[key]}</div>
            <div className="text-sm">{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
