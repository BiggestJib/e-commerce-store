"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Image as ImageType } from "@/type";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      {/* Tab List for Thumbnails */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>

      {/* Tab Panels for Main Image Display */}
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.url}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
              <Image
                fill
                src={image.url}
                alt="Gallery Image"
                className="object-cover object-center transition-transform duration-700 ease-in-out transform group-hover:scale-110"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
