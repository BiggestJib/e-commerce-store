import { Product } from "@/type";
import React from "react";
import { NoResults } from "./no-results";
import { ProductCard } from "./product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

export const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className="space-y-6">
      {/* Title with consistent margin and larger font size */}
      <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800">
        {title}
      </h3>

      {/* If no items, show NoResults */}
      {items.length === 0 && <NoResults />}

      {/* Responsive Grid for Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
