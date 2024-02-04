// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-800 p-4 text-white">
      {/* Your Navbar content, such as links */}
      <img src="./assets/hp.png" alt="" />

      <Link to="/home" className="text-white mr-4">Home</Link>
      <Link to="/letter" className="text-white">Letter</Link>
    </nav>
  );
};

export default Navbar;
