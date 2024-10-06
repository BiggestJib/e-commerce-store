// navbar-client.tsx (Client-side Component)
"use client";
import React, { useState } from "react";
import { MainNav } from "./main-nav"; // Import MainNav for the menu
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import { Category } from "@/type"; // Assuming this is your Category type

interface NavbarClientProps {
  categories: Category[];
}

const NavbarClient = ({ categories }: NavbarClientProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Hamburger Menu Button - Visible on mobile */}
      <div className="flex lg:hidden items-center gap-2">
        <div
          onClick={toggleMenu}
          className="font-bold text-2xl transition-all duration-300 ease-in-out hover:text-blue-600 cursor-pointer"
        >
          Categories
        </div>
        <button
          className="text-2xl p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Modal Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={toggleMenu}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevents the menu from closing when clicking inside it
      >
        {/* Close button inside the menu */}
        <button
          className="absolute top-4 right-4 text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>

        {/* Mobile Menu Navigation */}
        <nav className="flex flex-col items-center mt-16 space-y-6">
          {/* Main Navigation */}
          <MainNav setIsMenuOpen={setIsMenuOpen} data={categories} />
        </nav>
      </div>
    </>
  );
};

export default NavbarClient;
