import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="I-Snack Logo"
            width={60}
            height={60}
            className="rounded-lg"
          />
          <span className="text-white text-2xl font-bold font-poppins">I-Snack</span>
        </div>
        <ul className="flex gap-8 items-center">
          <li>
            <a href="#home" className="text-white font-semibold hover:text-blue-100 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className="text-white font-semibold hover:text-blue-100 transition-colors">
              Menu
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white font-semibold hover:text-blue-100 transition-colors">
              Contact
            </a>
          </li>
          <li>
            <a href="#about" className="text-white font-semibold hover:text-blue-100 transition-colors">
              About
            </a>
          </li>
          <li>
            <button className="bg-white text-teal-600 font-bold px-6 py-2 rounded-lg hover:bg-blue-50 transition-all shadow-md">
              Order Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;