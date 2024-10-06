"use client";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/type";
import { ProductCard } from "./product-card";

interface RelatedProductsProps {
  title: string;
  items: Product[];
}

export const RelatedProducts = ({ title, items }: RelatedProductsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (isAutoScrolling && scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          // If reached the end, scroll back to start
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll forward
          scrollContainerRef.current.scrollBy({
            left: clientWidth,
            behavior: "smooth",
          });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(scrollInterval); // Clear interval on unmount
  }, [isAutoScrolling]);

  return (
    <div className="space-y-6">
      {/* Title */}
      <h3 className="font-bold  text-3xl md:text-4xl lg:text-5xl text-gray-800">
        {title}
      </h3>

      {/* Horizontal Scrollable Container */}
      <div
        className="flex space-x-4 p-8  overflow-x-auto scroll-smooth snap-x snap-mandatory"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsAutoScrolling(false)} // Pause auto-scroll on hover
        onMouseLeave={() => setIsAutoScrolling(true)} // Resume auto-scroll when mouse leaves
      >
        {items.map((item) => (
          <div key={item.id} className="snap-center flex-shrink-0 w-full">
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
