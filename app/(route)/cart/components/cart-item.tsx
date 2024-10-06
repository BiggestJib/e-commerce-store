"use client";
import { Currency } from "@/components/currency";
import { IconButton } from "@/components/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/type";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CartItemProps {
  data: Product;
}

export const CartItem = ({ data }: CartItemProps) => {
  const cart = useCart();

  // Function to remove item from cart
  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex flex-col sm:flex-row py-6 border-b transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative w-24 h-24 rounded-md overflow-hidden sm:h-40 sm:w-40 transform transition-transform duration-500 hover:scale-110 hover:shadow-md">
        <Image
          alt={data.name}
          className="object-cover object-center rounded-lg"
          fill
          src={data.images[0]?.url}
        />
      </div>

      {/* Product Info */}
      <div className="relative pl-4 flex flex-1 flex-col justify-between sm:ml-6 mt-4 sm:mt-0">
        {/* Remove Button */}
        <div className="absolute z-10 -top-10 sm:-top-5 right-0 lg:top-0">
          <IconButton
            onClick={onRemove}
            icon={
              <X
                className="hover:text-red-600 text-gray-600 transition-colors duration-300 ease-in-out"
                size={24}
              />
            }
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
          />
        </div>

        {/* Product Details */}
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-0 sm:pr-0">
          {/* Product Name and Price */}
          <div className="flex flex-col justify-between">
            <p className="text-lg font-semibold text-gray-900">{data.name}</p>
            <div className="mt-2">
              <Currency value={data.price} />
            </div>
          </div>

          {/* Size and Color */}
          <div className="mt-3 flex items-center gap-6">
            <div className="flex items-center">
              <div
                className="h-6 w-6 rounded-full border border-gray-300 transform transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: data?.color.value }}
              />
              <p className="ml-2 text-sm text-gray-600">{data.color.name}</p>
            </div>

            <div className="flex items-center border-l border-gray-200 pl-4">
              <p className="text-sm text-gray-600">{data.size.name}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
