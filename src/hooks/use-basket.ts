"use client";
import { useMemo } from "react";
import useSWR from "swr";
import { Product } from "@prisma/client";
import { useSession } from "@/lib/auth-client";
import { useBasketStore } from "@/store/use-basket-store";
import { axiosInstance } from "@/lib/instance";
import { ApiRoutes } from "@/constants/api-routes";
import { fetcher } from "@/lib/fetcher";
import { BasketItem } from "@/@types/basket";

export function useBasket() {
  const { data: session, isPending: sessionLoading } = useSession();
  const isAuthed = !!session?.user;

  const localBasket = useBasketStore((s) => s.basket);
  const addLocal = useBasketStore((s) => s.addItem);
  const updateLocal = useBasketStore((s) => s.updateItem);
  const removeLocal = useBasketStore((s) => s.removeItem);
  const clearLocal = useBasketStore((s) => s.deleteAllItems);

  const {
    data: authedItems,
    mutate,
    isLoading: authedLoading,
  } = useSWR<BasketItem[]>(isAuthed ? ApiRoutes.BASKET : null, fetcher);

  const anonIds = useMemo(
    () =>
      localBasket
        .map((b) => b.id)
        .sort((a, b) => a - b)
        .join(","),
    [localBasket],
  );
  const { data: anonProducts, isLoading: anonLoading } = useSWR<Product[]>(
    !isAuthed && anonIds ? `${ApiRoutes.PRODUCTS}/${anonIds}` : null,
    fetcher,
  );

  const anonItems = useMemo<BasketItem[]>(() => {
    if (!anonProducts) return [];
    const validIds = new Set(anonProducts.map((p) => p.id));
    localBasket.forEach((b) => {
      if (!validIds.has(b.id)) removeLocal(b.id);
    });
    return anonProducts.map((p) => {
      const local = localBasket.find((b) => b.id === p.id);
      return { ...p, quantity: local?.quantity ?? 1 };
    });
  }, [anonProducts, localBasket, removeLocal]);

  const items: BasketItem[] = isAuthed ? (authedItems ?? []) : anonItems;
  const quantity = items.reduce((acc, i) => acc + i.quantity, 0);
  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const isLoading = sessionLoading || (isAuthed ? authedLoading : anonLoading);

  const addItem = async (productId: number, qty: number = 1) => {
    if (!isAuthed) {
      addLocal(productId, qty);
      return;
    }
    const cur = authedItems ?? [];
    const existing = cur.find((i) => i.id === productId);
    const optimistic = existing
      ? cur.map((i) =>
          i.id === productId ? { ...i, quantity: i.quantity + qty } : i,
        )
      : cur;
    await mutate(
      async () =>
        (
          await axiosInstance.post(ApiRoutes.BASKET, {
            productId,
            quantity: qty,
          })
        ).data,
      { optimisticData: optimistic, rollbackOnError: true, revalidate: false },
    );
  };

  const updateItem = async (
    productId: number,
    type: "increment" | "decrement",
  ) => {
    if (!isAuthed) {
      updateLocal(productId, type);
      return;
    }
    const cur = authedItems ?? [];
    const optimistic = cur.map((i) =>
      i.id === productId
        ? {
            ...i,
            quantity:
              type === "increment"
                ? i.quantity + 1
                : Math.max(1, i.quantity - 1),
          }
        : i,
    );
    await mutate(
      async () =>
        (
          await axiosInstance.patch(`${ApiRoutes.BASKET}/${productId}`, {
            type,
          })
        ).data,
      { optimisticData: optimistic, rollbackOnError: true, revalidate: false },
    );
  };

  const removeItem = async (productId: number) => {
    if (!isAuthed) {
      removeLocal(productId);
      return;
    }
    const optimistic = (authedItems ?? []).filter((i) => i.id !== productId);
    await mutate(
      async () =>
        (await axiosInstance.delete(`${ApiRoutes.BASKET}/${productId}`)).data,
      { optimisticData: optimistic, rollbackOnError: true, revalidate: false },
    );
  };

  const clear = async () => {
    if (!isAuthed) {
      clearLocal();
      return;
    }
    await axiosInstance.delete(ApiRoutes.BASKET);
    mutate([], {
      optimisticData: [],
      rollbackOnError: true,
      revalidate: false,
    });
  };

  return {
    items,
    quantity,
    total,
    isLoading,
    addItem,
    updateItem,
    removeItem,
    clear,
  };
}
