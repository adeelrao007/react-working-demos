"use client";
import React, { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Registration request submitted. Admin will contact you soon.");
    setEmail("");
    setName("");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      <section className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="px-4 py-2 rounded border border-blue-200 focus:border-blue-500 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-2 rounded border border-blue-200 focus:border-blue-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
          >
            Register
          </button>
        </form>
        {message && <div className="mt-4 text-green-600 text-center">{message}</div>}
      </section>
    </main>
  );
}
