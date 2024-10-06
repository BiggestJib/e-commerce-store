import React from "react";
import { Loader } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Loader className="animate-spin text-blue-600" size={40} />
    </div>
  );
};

export default LoadingSpinner;
