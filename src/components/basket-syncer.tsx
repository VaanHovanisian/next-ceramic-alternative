"use client";
import { useEffect, useRef } from "react";
import { mutate } from "swr";
import { useSession } from "@/lib/auth-client";
import { useBasketStore } from "@/store/use-basket-store";
import { axiosInstance } from "@/lib/instance";
import { ApiRoutes } from "@/constants/api-routes";

export const BasketSyncer = () => {
  const { data: session, isPending } = useSession();
  const basket = useBasketStore((s) => s.basket);
  const clearLocal = useBasketStore((s) => s.deleteAllItems);
  const synced = useRef(false);

  useEffect(() => {
    if (isPending) return;
    if (!session?.user) {
      synced.current = false;
      return;
    }
    if (synced.current) return;
    synced.current = true;

    if (basket.length === 0) {
      mutate(ApiRoutes.BASKET);
      return;
    }

    (async () => {
      try {
        await axiosInstance.post(ApiRoutes.BASKET_MERGE, basket);
        clearLocal();
        mutate(ApiRoutes.BASKET);
      } catch (e) {
        console.error("basket merge failed", e);
        synced.current = false;
      }
    })();
  }, [session, isPending, basket, clearLocal]);

  return null;
};
