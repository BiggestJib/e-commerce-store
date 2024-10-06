"use client";
import { Product } from "@/type";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { IconButton } from "./icon-button";
import { FaExpand, FaShoppingCart } from "react-icons/fa";
import { Currency } from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

export const ProductCard = ({ data }: ProductCardProps) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${data.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-4 space-y-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative overflow-hidden">
        {/* Image with smooth zoom-in effect on hover */}
        <Image
          className="aspect-square object-cover rounded-md group-hover:scale-110 transition-transform duration-700 ease-in-out"
          fill
          alt="Product Image"
          src={data?.images?.[0].url}
          priority
        />
        {/* Icons that fade in with smooth transition */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={
                <FaExpand
                  size="20"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                />
              }
              onClick={onPreview}
            />
            <IconButton
              icon={
                <FaShoppingCart
                  size="20"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                />
              }
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>

      {/* Product Name and Category */}
      <div className="space-y-1">
        <p className="font-semibold text-lg group-hover:text-gray-700 transition-colors duration-300">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>

      {/* Price and Add to Cart */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
