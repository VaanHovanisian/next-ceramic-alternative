import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BasketItem {
  id: number;
  quantity: number;
}

interface BasketStateStore {
  basket: BasketItem[];
  addItem: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
}

export const useBasketStore = create<BasketStateStore>()(
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
    { name: "basket" },
  ),
);
