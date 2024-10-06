import React from "react";
import { Tab } from "@headlessui/react";
import { Image as ImageTypes } from "@/type";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ImageTypes;
}

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white hover:shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out transform">
      {({ selected }) => (
        <div className="relative w-full h-full">
          {/* Image container */}
          <span className="absolute inset-0 w-full h-full aspect-square overflow-hidden rounded-md">
            <Image
              alt="Product image"
              fill
              className="object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              src={image.url}
            />
          </span>

          {/* Ring effect when the tab is selected */}
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2 transition-all duration-500 ease-in-out",
              selected ? "ring-blue-500" : "ring-transparent"
            )}
          />

          {/* Subtle Pulsing Effect for the selected tab */}
          {selected && (
            <div className="absolute inset-0 rounded-md bg-blue-500 opacity-20 animate-pulse" />
          )}
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
