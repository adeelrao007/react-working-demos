import React, { useState } from 'react';
import { fetchNewCustomers } from '../../domain/services/customersService';

const PAGE_SIZE = 5;

export default function NewCustomers() {
  const [page, setPage] = useState(1);
  const customers = fetchNewCustomers();
  const totalPages = Math.ceil(customers.length / PAGE_SIZE);
  const paginated = customers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">New Customers This Week</h1>
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-blue-50">
            <th className="p-2 text-center">Name</th>
            <th className="p-2 text-center">Email</th>
            <th className="p-2 text-center">Joined</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="p-2 text-center">{c.name}</td>
              <td className="p-2 text-center">{c.email}</td>
              <td className="p-2 text-center">{c.joined}</td>
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
