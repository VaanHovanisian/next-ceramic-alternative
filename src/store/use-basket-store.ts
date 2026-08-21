import { BasketItemLocal } from "@/@types/basket";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BasketStateStore {
  items: BasketItemLocal[];
  quantity: number;
  addItem: (productId: number, quantity: number, colorId: number) => void;
  removeItem: (id: number) => void;
  updateItem: (id: number, type: "increment" | "decrement") => void;
  deleteAllItems: () => void;
}

export const useBasketStore = create<BasketStateStore>()(
  persist(
    (set) => ({
      items: [],
      quantity: 0,
      addItem: (id, qty, colorId) => {
        set((state) => {
          const existing = state.items.find((el) => el.id === id);
          const items = existing
            ? state.items.map((el) =>
                el.id === id
                  ? { ...el, colorId, quantity: el.quantity + qty }
                  : el,
              )
            : [...state.items, { id, colorId, quantity: qty }];
          const quantity = items.reduce((acc, el) => acc + el.quantity, 0);
          return { items, quantity };
        });
      },
      updateItem: (id, type) => {
        set((state) => {
          const existing = state.items.find((el) => el.id === id);
          const items = existing
            ? state.items.map((el) =>
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
            : [...state.items];
          const quantity = items.reduce((acc, el) => acc + el.quantity, 0);
          return { items, quantity };
        });
      },
      removeItem: (id) => {
        set((state) => {
          const items = state.items.filter((el) => el.id !== id);
          const quantity = items.reduce((acc, el) => acc + el.quantity, 0);
          return { items, quantity };
        });
      },
      deleteAllItems: () => {
        set(() => ({ items: [], quantity: 0 }));
      },
    }),
    { name: "basket" },
  ),
);
