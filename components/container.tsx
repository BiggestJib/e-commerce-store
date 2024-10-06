import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // Optional className prop for custom styling
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
