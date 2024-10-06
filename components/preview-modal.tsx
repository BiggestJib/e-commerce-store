"use client";
import usePreviewModal from "@/hooks/use-preview-modal";
import React from "react";
import Modal from "./modal";
import Gallery from "./gallery/gallery";
import { Info } from "./info";

export const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = previewModal.data;

  // Return null if no product data is available
  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      {/* Main layout for modal content */}
      <div className="flex flex-col lg:flex-row w-full gap-y-8 lg:gap-y-0 lg:gap-x-8 transition-all duration-500 ease-in-out transform-gpu">
        {/* Left: Gallery Section with Fade-in Effect */}
        <div className="w-full lg:w-1/2 transition-transform duration-700 ease-in-out transform ">
          <Gallery images={product.images} />
        </div>

        {/* Right: Product Info Section */}
        <div className="w-full lg:w-1/2 transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-90">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};
