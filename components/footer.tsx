import React from "react";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-6 sm:py-10">
      <div className="container mx-auto px-4">
        {/* Top Section with Links */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row sm:justify-between">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 ease-in-out"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300 ease-in-out"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors duration-300 ease-in-out"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Footer Links */}
          <div className="text-center sm:text-left">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-800 hover:underline transition duration-300"
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-800 hover:underline transition duration-300"
            >
              Terms of Service
            </a>
            <span className="mx-2">|</span>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-800 hover:underline transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            &copy; {new Date().getFullYear()} E-Commerce, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
