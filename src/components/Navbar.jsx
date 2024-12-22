import React from "react";
import Button from "../utils/Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-10">
        <img
          src="/path/to/logo.png"
          alt="Logo"
          className="w-10 h-10"
        />
        <ul className="flex space-x-8 text-sm font-medium text-gray-800">
        <li className="hover:text-blue-600 cursor-pointer">About Us</li>
        <li className="hover:text-blue-600 cursor-pointer">Services</li>
        <li className="hover:text-blue-600 cursor-pointer">Products</li>
        <li className="hover:text-blue-600 cursor-pointer">More</li>
      </ul>
      </div>

      {/* Navigation Links */}
      <p>Changes are being pushed to the main branchs sadasdsa</p>


      {/* Buttons Section */}
      <div className="flex space-x-4">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Contact</Button>
      </div>
    </nav>
  );
};

export default Navbar;
