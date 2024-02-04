import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">Your Logo</div>

        {/* Links */}
        <div className="space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">letter</a>

          {/* Dropdown */}
          <div className="relative inline-block text-white">
            <button className="focus:outline-none">Services</button>
            <div className="absolute hidden bg-gray-800 text-white mt-2 space-y-2">
              <a href="#" className="block px-4 py-2">Service 1</a>
              <a href="#" className="block px-4 py-2">Service 2</a>
              {/* Add more dropdown items as needed */}
            </div>
          </div>

          <a href="#" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
