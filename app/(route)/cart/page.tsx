"use client";
import { Container } from "@/components/container";
import useCart from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";
import { CartItem } from "./components/cart-item";
import { Summary } from "./components/summary";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className=" min-h-screen py-8 transition-colors duration-500 ease-in-out">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-4xl font-bold mb-8 text-center animate-fadeIn transition-all duration-500">
            Shopping Cart
          </div>

          {/* Grid Layout for Cart Items and Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
            {/* Cart Items Section */}
            <div className="lg:col-span-7 space-y-4 transition-all duration-300 ease-in-out transform hover:scale-105">
              {cart.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center space-y-6">
                  <p className="text-neutral-500 text-xl animate-bounce">
                    No items added to the cart.
                  </p>
                  <Button
                    onClick={() => router.push("/")}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <ul className="space-y-6 animate-fadeIn">
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              )}
            </div>

            {/* Summary Section */}
            <div className="lg:col-span-5 mt-10 lg:mt-0 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform ">
              <Summary />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
