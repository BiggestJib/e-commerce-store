"use client";
import { IconButton } from "@/components/icon-button";
import { Button } from "@/components/ui/button";
import { Color, Size } from "@/type";
import { Dialog, DialogPanel } from "@headlessui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { X } from "lucide-react";
import { Filter } from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export const MobileFilter = ({ sizes, colors }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      {/* Button to open filters */}
      <Button
        onClick={onOpen}
        className="relative lg:hidden flex items-center justify-center gap-x-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
      >
        Filters{" "}
        <FaPlus className="transition-transform duration-300 ease-in-out hover:rotate-90" />
      </Button>

      {/* Mobile Filter Dialog */}
      <Dialog
        onClose={onClose}
        open={open}
        as="div"
        className="relative z-50 lg:hidden"
      >
        {/* Overlay with fade-in and fade-out effect */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
          aria-hidden="true"
        />

        {/* Slide-in Panel with smooth transition */}
        <DialogPanel
          className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl transform transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex items-center justify-end p-4">
            <IconButton
              icon={
                <X
                  size={20}
                  className="hover:text-red-500 text-black transition-colors duration-300 ease-in-out"
                />
              }
              onClick={onClose}
            />
          </div>

          {/* Filter Options */}
          <div className="p-6 space-y-6">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};
