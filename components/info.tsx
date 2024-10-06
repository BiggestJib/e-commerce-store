"use client";
import { Product } from "@/type";
import React, { MouseEventHandler } from "react";
import { Currency } from "./currency";
import { FaShoppingBag } from "react-icons/fa";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

export const Info = ({ data }: InfoProps) => {
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div className="p-4 md:p-6">
      {/* Product Name */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-wide transition-all duration-500 ease-in-out hover:text-blue-600">
        {data.name}
      </h1>

      {/* Price Section */}
      <div className="mt-3 flex items-center justify-between">
        <p className="text-3xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-blue-500">
          <Currency value={data.price} />
        </p>
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Size and Color Info */}
      <div className="flex flex-col gap-y-6">
        {/* Size */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-lg text-black">Size:</h3>
          <div className="text-gray-700 text-lg">{data?.size?.name}</div>
        </div>

        {/* Color */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-lg text-black">Color:</h3>
          <div
            className="h-8 w-8 rounded-full border border-gray-300 transform transition-transform duration-300 hover:scale-110"
            style={{ backgroundColor: data?.color.value }}
          />
          <div className="text-gray-700 text-lg">{data?.color?.name}</div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="mt-10">
        <button
          onClick={onAddToCart}
          className="relative flex items-center justify-center gap-x-2 w-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-3 text-white text-lg font-semibold shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Add to Cart"
        >
          <span className="transition-colors duration-300 ease-in-out hover:text-gray-100">
            Add to Cart
          </span>

          {/* Shopping Bag Icon */}
          <FaShoppingBag
            size={20}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </button>
      </div>
    </div>
  );
};
