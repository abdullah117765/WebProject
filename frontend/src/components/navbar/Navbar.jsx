import React from 'react';
import person from "../../Resources/person2.jpeg"
import logo from "../../Resources/logo.jpeg"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-6 bg-zinc-200  ">
      <div className="flex items-center">
      <img src={logo} alt="Website Logo" className="w-8 h-8 rounded-full mr-2" />

        <h1 className=" font-bold">Fast FYP PortaL</h1>
      </div>
      <div className="flex items-center px-7">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="font-bold hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-gray-300">Products</a>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-gray-300">Pricing</a>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-gray-300">Contact</a>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-gray-300 mr-10">About</a>
          </li>
        </ul>
        <img src={person} alt="User Profile" className="w-8 h-8 rounded-full ml-4" />
        <span className=" font-bold ml-2">'User ID'</span>
      </div>
    </nav>
  );
};

export default Navbar;
