// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <Link to="/" className="text-white text-xl font-bold">YourLogo</Link>

        {/* Dropdown list 1 */}
        <div className="relative inline-block text-left">
          <button className="text-white hover:text-gray-300 focus:outline-none">
            Dropdown 1
          </button>
          <div className="hidden absolute z-10 mt-2 bg-gray-800 text-white">
            {/* Dropdown content */}
            <Link to="/dropdown1-item1" className="block px-4 py-2">Dropdown 1 - Item 1</Link>
            <Link to="/dropdown1-item2" className="block px-4 py-2">Dropdown 1 - Item 2</Link>
          </div>
        </div>

        {/* Dropdown list 2 */}
        <div className="relative inline-block text-left">
          <button className="text-white hover:text-gray-300 focus:outline-none">
            Dropdown 2
          </button>
          <div className="hidden absolute z-10 mt-2 bg-gray-800 text-white">
            {/* Dropdown content */}
            <Link to="/dropdown2-item1" className="block px-4 py-2">Dropdown 2 - Item 1</Link>
            <Link to="/dropdown2-item2" className="block px-4 py-2">Dropdown 2 - Item 2</Link>
          </div>
        </div>

        {/* Additional link elements */}
        <Link to="/link1" className="text-white hover:text-gray-300">Link 1</Link>
        <Link to="/link2" className="text-white hover:text-gray-300 ml-4">Link 2</Link>
      </div>
    </nav>
  );
};

export default Navbar;
