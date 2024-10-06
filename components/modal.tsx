"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { IconButton } from "./icon-button";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay with subtle fade-in animation */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
            {/* Modal panel with scale and fade animation */}
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-2xl sm:max-w-3xl transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all duration-500 ease-in-out relative">
                {/* Close Button */}
                <div className="absolute top-4 right-4 z-50">
                  <IconButton
                    onClick={onClose}
                    icon={
                      <X
                        className="hover:text-red-500 text-black transition-colors duration-300 ease-in-out"
                        size={24}
                      />
                    }
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
                  />
                </div>

                {/* Modal Content */}
                <div className="relative">{children}</div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
