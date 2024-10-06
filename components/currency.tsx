"use client";
import { formatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CurrencyProps {
  value: string | number;
  className?: string; // Optional prop for custom styling
}

export const Currency = ({
  value,
  className = "font-semibold", // Default font styling
}: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  // Handle edge cases for invalid values
  const formattedValue =
    typeof value === "number" && !isNaN(value)
      ? formatter.format(value)
      : formatter.format(0);

  return <div className={className}>{formattedValue}</div>;
};
