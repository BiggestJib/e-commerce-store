import { create } from "zustand";

import { Product } from "@/type";

interface PreviewModalProps {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
