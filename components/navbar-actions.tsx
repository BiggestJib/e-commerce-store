"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button"; // Assuming Button is a custom component
import { FaShoppingBag } from "react-icons/fa";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart(); // Replace with actual cart item count
  const cartItemCount = cart.items.length;

  const router = useRouter();

  // Mount detection to avoid SSR issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Avoid rendering on SSR
  if (!isMounted) return null;

  return (
    <div className="ml-auto lg:ml-0 flex group items-center gap-x-4">
      {/* Shopping cart button with animation */}
      <Button
        onClick={() => router.push("/cart")}
        className="relative flex items-center justify-center rounded-full bg-black w-full px-3 py-2 md:px-4 md:py-2 hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        aria-label="Shopping Cart"
      >
        {/* Shopping bag icon with animation */}
        <FaShoppingBag
          size={18}
          className="text-white md:w-5 md:h-5 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />

        {/* Cart count with bounce effect */}
        <span className="ml-2 text-sm font-medium text-white transition-all duration-300 ease-in-out transform group-hover:translate-y-1">
          {cartItemCount}
        </span>

        {/* Pulse animation for cart item count (shown when cartItemCount > 0) */}
        {cartItemCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
            {cartItemCount}
          </div>
        )}
      </Button>
    </div>
  );
};
