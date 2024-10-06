"use client";
import { Currency } from "@/components/currency";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

export const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [loading, setLoading] = useState(false);

  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Order placed successfully!");
      removeAll();
    }
    if (searchParams.has("canceled")) {
      toast.error("Order canceled.");
    }
  }, [removeAll, searchParams]);

  // Function to handle checkout
  const onCheckout = async () => {
    // Set loading to true to disable the button and show a loading state
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );
      window.location = response.data.url;
    } catch (error) {
      toast.error("Checkout failed. Please try again.");
    } finally {
      // Ensure loading is set to false after the operation completes
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-xl px-8 py-10 lg:col-span-5 lg:mt-0 lg:p-10 sm:p-8 transition-transform duration-300 ease-in-out hover:shadow-2xl transform hover:scale-105">
      {/* Title */}
      <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center tracking-wide">
        Order Summary
      </h2>

      {/* List of Items */}
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4 border-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="text-base font-medium text-gray-700">
              {item.name}
            </span>
            <Currency value={item.price} />
          </div>
        ))}

        {/* Order Total */}
        <div className="flex items-center justify-between border-t border-gray-300 pt-6">
          <span className="text-lg font-semibold text-gray-900">Total</span>
          <Currency value={totalPrice} />
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        onClick={onCheckout}
        disabled={loading || items.length === 0}
        className={`flex  mt-10  text-lg font-semibold  bg-gradient-to-r from-blue-500 to-indigo-600  shadow-lg hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all duration-300 ease-in-out  items-center justify-center rounded-full bg-blue-600 text-white w-full px-4 py-3   transform hover:scale-105 hover:bg-blue-700 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin h-5 w-5 text-white mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <Loader
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Processing...
          </div>
        ) : (
          "Proceed to Checkout"
        )}
      </Button>
    </div>
  );
};
