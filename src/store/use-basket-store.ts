import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BAsketItem {
  id: number;
  quantity: number;
}

interface BAsketStateStore {
  basket: BAsketItem[];
  addItem: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
}

export const useBasketStore = create<BAsketStateStore>()(
  persist(
    (set, get) => ({
      basket: [],
      addItem: (id, qty = 1) => {
        set((state) => {
          const existing = state.basket.find((el) => el.id === id);
          const basket = existing
            ? state.basket.map((el) =>
                el.id === id ? { ...el, quantity: el.quantity + qty } : el,
              )
            : [...state.basket, { id, quantity: qty }];
          return { basket };
        });
      },
      removeItem: (id) => {
        set((state) => ({ basket: state.basket.filter((el) => el.id !== id) }));
      },
    }),
    {
      name: "basket",
    },
  ),
);
