import React, { MouseEventHandler } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface IconButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  ariaLabel?: string; // Accessibility improvement
}

export const IconButton = ({
  icon,
  onClick,
  className,
  ariaLabel = "Icon", // Default aria-label
}: IconButtonProps) => {
  return (
    <Button
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        // Main button styles with animation and hover effects
        "rounded-full flex items-center justify-center bg-white border shadow-md p-3  hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 ease-in-out hover:bg-gray-100",
        className
      )}
    >
      {/* Animate the icon with a subtle bounce effect on hover */}
      <span className="transform transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-12">
        {icon}
      </span>
    </Button>
  );
};
