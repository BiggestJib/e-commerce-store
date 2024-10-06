"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/type";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React from "react";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

export const Filter = ({ data, name, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };

    // If the same value is clicked, remove it
    if (current[valueKey] === id) {
      delete query[valueKey];
    }

    // Build the URL with updated query parameters
    const url = qs.stringifyUrl(
      {
        url: window.location.pathname, // Only use the path, not the entire href
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      {/* Filter Name */}
      <div className="text-lg font-bold text-gray-800">{name}</div>
      <hr className="my-4 border-gray-300" />

      {/* Filter Options */}
      <div className="flex flex-wrap gap-4">
        {data.map((filter) => (
          <div className="flex items-center" key={filter.id}>
            <Button
              className={cn(
                "relative flex items-center justify-center px-5 py-2 rounded-lg border transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-md text-base font-medium", // Enhanced button size and styling
                selectedValue === filter.id
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-white" // Gradient and hover styling for non-selected buttons
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
