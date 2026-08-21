import { PostBasketValue } from "@/@types/basket";
import { ApiRoutes } from "@/constants/api-routes";
import { useSession } from "@/lib/auth-client";
import { fetcher } from "@/lib/fetcher";
import { getBasketDetails } from "@/lib/get-basket-details";
import { axiosInstance } from "@/lib/instance";
import { useBasketStore } from "@/store/use-basket-store";
import { Color, Product } from "@prisma/client";
import useSWR from "swr";

export const useBasket = () => {
  const { data: session } = useSession();
  const isAuthed = !!session?.user;

  const {
    addItem,
    deleteAllItems,
    removeItem,
    updateItem,
    items: basketLocal,
  } = useBasketStore();

  const anonIds = Array.from(new Set(basketLocal.map((b) => b.id)))
    .sort((a, b) => a - b)
    .join(",");

  const { data: authBasket, mutate } = useSWR(
    isAuthed ? ApiRoutes.BASKET : null,
    fetcher,
  );

  const dataAuthBasket = getBasketDetails(authBasket) ?? {
    totalAmount: 0,
    items: [],
  };

  const { data: anonProducts } = useSWR<(Product & { color: Color[] })[]>(
    !isAuthed && anonIds ? `${ApiRoutes.PRODUCTS}?ids=${anonIds}` : null,
    fetcher,
  );

  const productsById = new Map((anonProducts ?? []).map((p) => [p.id, p]));

  const anonItems = basketLocal.flatMap((b) => {
    const p = productsById.get(b.id);
    if (!p) return [];
    const color = p.color?.find((c) => c.id === b.colorId);
    return [
      {
        id: b.id,
        colorId: b.colorId,
        quantity: b.quantity,
        name: p.name,
        price: p.price,
        imgUrl: p.imgUrl,
        subtotal: p.price * b.quantity,
        color,
      },
    ];
  });
  const total = anonItems.reduce((acc, el) => acc + el.price * el.quantity, 0);
  const basket = isAuthed
    ? dataAuthBasket
    : { items: anonItems, totalAmount: total };
  const quantityBasket = isAuthed
    ? dataAuthBasket.items.reduce((acc, el) => acc + el.quantity, 0)
    : basketLocal.reduce((acc, el) => acc + el.quantity, 0);

  const addProduct = async (value: PostBasketValue) => {
    if (!isAuthed) {
      addItem(value.productId, value.quantity, value.colorId);
      return;
    }

    const updateData = (await axiosInstance.post(ApiRoutes.BASKET, value)).data;
    mutate(updateData, { populateCache: false });
  };
  const removeProduct = async (id: number, colorId: number) => {
    if (!isAuthed) {
      removeItem(id, colorId);
      return;
    }
    const updateData = (await axiosInstance.delete(`${ApiRoutes.BASKET}/${id}`))
      .data;
    mutate(updateData, { populateCache: false });
  };
  const updateProduct = async (
    id: number,
    colorId: number,
    type: "increment" | "decrement",
  ) => {
    if (!isAuthed) {
      updateItem(id, colorId, type);
      return;
    }

    const updateData = (
      await axiosInstance.patch(`${ApiRoutes.BASKET}/${id}`, {
        quantityType: type,
      })
    ).data;
    mutate(updateData, { populateCache: false });
  };
  const clearBasket = async () => {
    if (!isAuthed) {
      deleteAllItems();
      return;
    }
    const updateData = (await axiosInstance.delete(ApiRoutes.BASKET)).data;
    mutate(updateData, { populateCache: false });
  };
  const basketSyncer = async () => {
    const updateData = (await axiosInstance.post(ApiRoutes.BASKET_MERGE)).data;
    clearBasket();
    mutate(updateData, { populateCache: false });
  };
  return {
    basket,
    addProduct,
    removeProduct,
    updateProduct,
    clearBasket,
    basketSyncer,
    quantityBasket,
  };
};
