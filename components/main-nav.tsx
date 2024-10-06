"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MainNavProps {
  data: Category[];
  setIsMenuOpen?: (isOpen: boolean) => void;
}

export const MainNav = ({ data, setIsMenuOpen }: MainNavProps) => {
  const pathName = usePathname();

  // Generate routes with active state based on current pathname
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));

  return (
    <nav className="w-full mx-4 my-8 flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-y-6 lg:gap-y-0 gap-x-4 lg:gap-x-6 overflow-x-auto scrollbar-hide">
      {routes.map((route) => (
        <Link
          href={route.href}
          onClick={() => {
            if (setIsMenuOpen) {
              setIsMenuOpen(false); // Only call if it's defined
            }
          }}
          className={cn(
            "relative text-base w-full text-center lg:w-auto font-semibold px-4 py-2 rounded-lg transition-all duration-500 ease-in-out hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700", // Gradient hover effect
            route.active
              ? "text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg scale-105" // Active state with background, shadow, and subtle scale
              : "text-gray-700  hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white shadow-sm"
          )}
          key={route.href}
        >
          {/* Link Label */}
          {route.label}

          {/* Hover Underline Animation */}
          <span
            className={cn(
              "absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-in-out",
              route.active ? "w-full" : "group-hover:w-full"
            )}
          />
        </Link>
      ))}
    </nav>
  );
};
