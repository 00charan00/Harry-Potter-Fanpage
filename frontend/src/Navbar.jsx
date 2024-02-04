// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import hplogo from './assets/hp.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-800 p-4 text-white flex items-center ">
      {/* Logo */}
      <img className="h-10 w-10 " src={hplogo} alt="Logo" />

      {/* Links */}
      <div className="flex items-center">
        <Link to="/home" className="text-white ml-4">Home</Link>
        <Link to="/letter" className="text-white ml-4">Letter</Link>
        <Link to="/letter" className="text-white ml-4">Letter</Link>
        <Link to="/letter" className="text-white ml-4">Letter</Link>
      </div>
    </nav>
  );
};

export default Navbar;
