"use client";
import { FaSearch } from "react-icons/fa";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const NoResults = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center space-y-6 p-6">
      {/* Icon */}
      <FaSearch className="text-gray-400 text-5xl sm:text-6xl lg:text-7xl" />

      {/* Message */}
      <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl font-semibold">
        No Results Found
      </p>

      {/* Call to Action */}
      <Button
        className="mt-4 px-5 py-2  text-white rounded-md text-sm sm:text-base lg:text-lg font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
        onClick={() => router.refresh()}
      >
        Try Again
      </Button>
    </div>
  );
};
