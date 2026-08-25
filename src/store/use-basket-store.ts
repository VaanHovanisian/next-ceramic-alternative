import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BasketItem {
  id: number;
  quantity: number;
}

interface BasketStateStore {
  basket: BasketItem[];
  quantity: number;
  addItem: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
  updateItem: (id: number, type: "increment" | "decrement") => void;
  deleteAllItems: () => void;
}

export const useBasketStore = create<BasketStateStore>()(
  persist(
    (set) => ({
      basket: [],
      quantity: 0,
      addItem: (id, qty = 1) => {
        set((state) => {
          const existing = state.basket.find((el) => el.id === id);
          const basket = existing
            ? state.basket.map((el) =>
                el.id === id ? { ...el, quantity: el.quantity + qty } : el,
              )
            : [...state.basket, { id, quantity: qty }];
          const quantity = basket.reduce((acc, el) => acc + el.quantity, 0);
          return { basket, quantity };
        });
      },
      updateItem: (id, type) => {
        set((state) => {
          const existing = state.basket.find((el) => el.id === id);
          const basket = existing
            ? state.basket.map((el) =>
                el.id === id
                  ? {
                      ...el,
                      quantity:
                        type === "increment"
                          ? el.quantity + 1
                          : el.quantity === 1
                            ? 1
                            : el.quantity - 1,
                    }
                  : el,
              )
            : [...state.basket];
          const quantity = basket.reduce((acc, el) => acc + el.quantity, 0);
          return { basket, quantity };
        });
      },
      removeItem: (id) => {
        set((state) => {
          const basket = state.basket.filter((el) => el.id !== id);
          const quantity = basket.reduce((acc, el) => acc + el.quantity, 0);
          return { basket, quantity };
        });
      },
      deleteAllItems: () => {
        set(() => ({ basket: [], quantity: 0 }));
      },
    }),
    { name: "basket" },
  ),
);
