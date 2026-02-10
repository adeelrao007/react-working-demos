// Static API for pending orders
export function getPendingOrders() {
  const baseOrders = [
    { id: 101, customer: 'Alice', date: '2026-02-09', status: 'Pending' },
    { id: 102, customer: 'Bob', date: '2026-02-09', status: 'Pending' },
    { id: 103, customer: 'Charlie', date: '2026-02-08', status: 'Pending' },
    { id: 104, customer: 'David', date: '2026-02-08', status: 'Pending' },
    { id: 105, customer: 'Eve', date: '2026-02-07', status: 'Pending' },
    { id: 106, customer: 'Frank', date: '2026-02-07', status: 'Pending' },
    { id: 107, customer: 'Grace', date: '2026-02-06', status: 'Pending' },
    { id: 108, customer: 'Heidi', date: '2026-02-06', status: 'Pending' },
    { id: 109, customer: 'Ivan', date: '2026-02-05', status: 'Pending' },
    { id: 110, customer: 'Judy', date: '2026-02-05', status: 'Pending' },
  ];
  return baseOrders.map(order => ({
    ...order,
    amount: Math.floor(Math.random() * 300) + 50 // 50-349
  }));
}
