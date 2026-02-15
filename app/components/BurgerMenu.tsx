"use client"

import React, { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Burger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-transform duration-300 block ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-opacity duration-300 block ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-transform duration-300 block ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-linear-to-r from-blue-600 via-teal-500 to-green-500 md:hidden shadow-lg">
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <a
                href="#home"
                className="text-white font-semibold hover:text-blue-100 transition-colors block"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="text-white font-semibold hover:text-blue-100 transition-colors block"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white font-semibold hover:text-blue-100 transition-colors block"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-white font-semibold hover:text-blue-100 transition-colors block"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
