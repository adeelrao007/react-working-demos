// Static API for dashboard stats
export function getStats() {
  // Generate random numbers for demo
  return {
    customers: Math.floor(Math.random() * 2000) + 500, // 500-2499
    orders: Math.floor(Math.random() * 5000) + 1000,    // 1000-5999
    totalRevenue: Math.floor(Math.random() * 200000) + 50000, // 50,000-249,999
    todaysOrders: Math.floor(Math.random() * 100) + 10, // 10-109
    todaysRevenue: Math.floor(Math.random() * 5000) + 500, // 500-5499
  };
}

export function getRevenueData() {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months.map(month => ({
    month,
    revenue: Math.floor(Math.random() * 20000) + 5000 // 5,000-24,999
  }));
}

export function getCustomersData() {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months.map(month => ({
    month,
    customers: Math.floor(Math.random() * 300) + 50 // 50-349
  }));
}

export function getTopProducts() {
  const products = [
    { category: 'Electronics', name: 'Smartphone' },
    { category: 'Electronics', name: 'Laptop' },
    { category: 'Electronics', name: 'Headphones' },
    { category: 'Clothing', name: 'T-Shirt' },
    { category: 'Clothing', name: 'Jeans' },
    { category: 'Clothing', name: 'Jacket' },
    { category: 'Home', name: 'Blender' },
    { category: 'Home', name: 'Toaster' },
    { category: 'Home', name: 'Microwave' },
  ];
  return products
    .map(p => ({
      ...p,
      sales: Math.floor(Math.random() * 2000) + 100 // 100-2099
    }))
    .sort((a, b) => b.sales - a.sales);
}
