import { Billboard as BillboardType } from "@/type";
import React from "react";

interface BillboardProps {
  data: BillboardType;
}

export const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-105"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        {/* Overlay to improve contrast and ensure readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative h-full w-full flex flex-col justify-center items-center text-center gap-y-4 sm:gap-y-8">
          {/* Billboard text with responsive typography */}
          <div className="font-bold text-white text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight transition-all duration-300 transform hover:scale-105 sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};
