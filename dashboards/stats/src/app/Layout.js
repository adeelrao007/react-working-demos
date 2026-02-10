import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const menu = [
  { name: 'Dashboard', path: '/' },
  { name: 'Pending Orders', path: '/pending-orders' },
  { name: 'New Customers', path: '/new-customers' },
  { name: 'Profile', path: '/profile' },
];

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="bg-primary text-white px-6 py-4 flex items-center justify-between relative">
        <div className="font-bold text-xl">Stats Dashboard</div>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-4">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded hover:bg-blue-700 transition-colors ${pathname === item.path ? 'bg-blue-800' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-blue-700 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-primary text-white rounded shadow-lg flex flex-col z-50 md:hidden">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 hover:bg-blue-700 transition-colors ${pathname === item.path ? 'bg-blue-800' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
