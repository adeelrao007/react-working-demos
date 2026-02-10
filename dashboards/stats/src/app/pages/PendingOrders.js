import React, { useState } from 'react';
import { fetchPendingOrders } from '../../domain/services/ordersService';

const PAGE_SIZE = 5;

export default function PendingOrders() {
  const [page, setPage] = useState(1);
  const orders = fetchPendingOrders();
  const totalPages = Math.ceil(orders.length / PAGE_SIZE);
  const paginated = orders.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Pending Orders</h1>
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-blue-50">
            <th className="p-2 text-center">Order #</th>
            <th className="p-2 text-center">Customer</th>
            <th className="p-2 text-center">Date</th>
            <th className="p-2 text-center">Amount</th>
            <th className="p-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((order) => (
            <tr key={order.id} className="border-t">
              <td className="p-2 text-center">{order.id}</td>
              <td className="p-2 text-center">{order.customer}</td>
              <td className="p-2 text-center">{order.date}</td>
              <td className="p-2 text-center">${order.amount}</td>
              <td className="p-2 text-center text-yellow-600">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4 gap-2">
        <button
          className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="px-2">Page {page} of {totalPages}</span>
        <button
          className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
