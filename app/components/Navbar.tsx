import Image from "next/image";
import React from "react";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-blue-600 via-teal-500 to-green-500 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="I-Snack Logo"
            width={60}
            height={60}
            priority
            className="rounded-lg w-15 h-15"
          />
          <span className="text-white text-2xl font-bold font-poppins">I-Snack</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
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
            <a href="#testimonials" className="text-white font-semibold hover:text-blue-100 transition-colors">
              Reviews
            </a>
          </li>
        </ul>

        {/* Mobile Burger Menu */}
        <BurgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;