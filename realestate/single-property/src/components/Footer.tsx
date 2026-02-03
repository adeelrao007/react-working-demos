import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer bg-dark text-white py-4 mt-5">
    <div className="container text-center">
      <p className="mb-1">&copy; {new Date().getFullYear()} Real Estate. All rights reserved.</p>
      <ul className="list-inline mb-0">
        <li className="list-inline-item"><a href="/" className="text-white">Privacy Policy</a></li>
        <li className="list-inline-item"><a href="/" className="text-white">Terms of Service</a></li>
        <li className="list-inline-item"><a href="/" className="text-white">Contact</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
