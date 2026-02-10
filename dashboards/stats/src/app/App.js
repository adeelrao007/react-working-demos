import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import PendingOrders from './pages/PendingOrders';
import NewCustomers from './pages/NewCustomers';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pending-orders" element={<PendingOrders />} />
          <Route path="/new-customers" element={<NewCustomers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
