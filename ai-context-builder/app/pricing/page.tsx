
"use client";
import React from 'react';

export default function PricingPage() {
  const [isYearly, setIsYearly] = React.useState(true);
  const fee = isYearly ? 10 : 1;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      <section className="w-full max-w-2xl p-8 rounded-lg shadow-lg bg-linear-to-br from-blue-50 to-blue-100">
        <h1 className="text-4xl font-bold mb-6 text-center">Pricing</h1>
        <div className="border border-blue-400 rounded-lg p-6 flex flex-col items-center bg-white shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Subscription</h2>
          <div className="mb-6 flex items-center justify-center gap-4">
            <button
              className={`px-4 py-2 rounded font-semibold ${isYearly ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'} transition`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
            <button
              className={`px-4 py-2 rounded font-semibold ${!isYearly ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'} transition`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
          </div>
          <p className="mb-4 text-center">
            <span className="font-bold">${fee}</span> as a platform fee.
          </p>
          <span className="text-3xl font-bold mb-2">Contact Admin to Subscribe</span>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Contact Admin</button>
        </div>
      </section>
    </main>
  );
}
