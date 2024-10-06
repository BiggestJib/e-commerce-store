import React from "react";
import { Container } from "./container";
import Link from "next/link";
import { MainNav } from "./main-nav";
import getCategories from "@/actions/get-categories";
import { NavbarActions } from "./navbar-actions";
import NavbarClient from "./navbar-client";

export const Navbar = async () => {
  const categories = await getCategories(); // Fetch categories

  return (
    <>
      <div className="bg-gradient-to-r from-white via-gray-50 to-white transition-shadow duration-500 ease-in-out hover:shadow-2xl">
        <Container>
          {/* Desktop Navigation */}
          <div className="relative hidden lg:flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-y-0 lg:h-16 h-full pt-4 pb-4 lg:px-4 transition-all duration-500 ease-in-out">
            {/* Logo */}
            <Link
              href="/"
              className="font-bold text-2xl transition-all duration-300 ease-in-out hover:text-blue-600"
            >
              Categories
            </Link>

            {/* Main Navigation */}
            <div className="lg:flex-grow lg:w-auto flex justify-center">
              <MainNav data={categories} />
            </div>

            {/* Navbar Actions */}
            <div className="w-full lg:w-auto flex-shrink-0">
              <NavbarActions />
            </div>
          </div>
        </Container>

        {/* Mobile Navigation (only visible on small screens) */}
        <div className="lg:hidden sticky  top-0 left-0 w-full bg-white px-4 py-4 shadow-md z-50">
          <div className="flex justify-between gap-4 items-center">
            {/* Mobile Navbar Actions */}
            <div className="flex-shrink-0">
              <NavbarActions />
            </div>
            {/* Mobile Navbar Menu */}
            <NavbarClient categories={categories} />
          </div>
        </div>
      </div>
    </>
  );
};
