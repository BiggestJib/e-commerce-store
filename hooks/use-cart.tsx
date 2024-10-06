import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/type";
import { toast } from "sonner";

interface useCartProps {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<useCartProps>(
    (set, get) => ({
      items: [],

      // Add an item to the cart
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("This item is already in your cart.");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to your cart.");
      },

      // Remove a specific item from the cart
      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Item removed from your cart.");
      },

      // Remove all items from the cart
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
