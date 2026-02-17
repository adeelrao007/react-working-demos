"use client";
import React, { useState } from "react";

const TABS = ["OpenAI Keys", "Change Name", "Reset Password"];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(0);

  // State for OpenAI Keys
  const [openaiKey, setOpenaiKey] = useState("");
  const [openaiMessage, setOpenaiMessage] = useState("");

  // State for Change Name
  const [name, setName] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  // State for Reset Password
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleOpenaiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenaiMessage("OpenAI key saved.");
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNameMessage("Name updated.");
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMessage("Passwords do not match.");
      return;
    }
    setPasswordMessage("Password reset successfully.");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      <section className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
        <h1 className="text-3xl font-bold mb-6 text-center">Profile</h1>
        <div className="flex mb-6 border-b border-blue-200">
          {TABS.map((tab, idx) => (
            <button
              key={tab}
              className={`flex-1 py-2 font-semibold ${activeTab === idx ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-500'} bg-transparent`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* OpenAI Keys Tab */}
        {activeTab === 0 && (
          <form onSubmit={handleOpenaiSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="OpenAI API Key"
              value={openaiKey}
              onChange={e => setOpenaiKey(e.target.value)}
              className="px-4 py-2 rounded border border-blue-200 focus:border-blue-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
            >
              Save Key
            </button>
            {openaiMessage && <div className="mt-2 text-green-600 text-center">{openaiMessage}</div>}
          </form>
        )}
        {/* Change Name Tab */}
        {activeTab === 1 && (
          <form onSubmit={handleNameSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="New Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="px-4 py-2 rounded border border-blue-200 focus:border-blue-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
            >
              Change Name
            </button>
            {nameMessage && <div className="mt-2 text-green-600 text-center">{nameMessage}</div>}
          </form>
        )}
        {/* Reset Password Tab */}
        {activeTab === 2 && (
          <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="px-4 py-2 rounded border border-blue-200 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="px-4 py-2 rounded border border-blue-200 focus:border-blue-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
            >
              Reset Password
            </button>
            {passwordMessage && <div className="mt-2 text-green-600 text-center">{passwordMessage}</div>}
          </form>
        )}
      </section>
    </main>
  );
}
