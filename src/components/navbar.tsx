"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent text-black">
      <div className="flex flex-row justify-between items-center px-10 pt-4 pb-2">
        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="Logo" width={100} height={50} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex flex-row gap-10 font-bold">
            <li className="hover:text-gray-600 cursor-pointer">Home</li>
            <li className="hover:text-gray-600 cursor-pointer">Services</li>
            <li className="hover:text-gray-600 cursor-pointer">About Us</li>
            <li className="hover:text-gray-600 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-600 cursor-pointer">Get Start</li>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with solid background */}
      {isOpen && (
        <div className="md:hidden px-10 pb-4 bg-white shadow-md">
          <ul className="flex flex-col gap-4 font-bold">
            <li className="hover:text-gray-600 cursor-pointer">Home</li>
            <li className="hover:text-gray-600 cursor-pointer">Services</li>
            <li className="hover:text-gray-600 cursor-pointer">About Us</li>
            <li className="hover:text-gray-600 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-600 cursor-pointer">Get Start</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
