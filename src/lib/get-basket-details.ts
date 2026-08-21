import { BasketDTO } from "@/@types/basket";

export const getBasketDetails = (data: BasketDTO) => {
  if (!data?.items?.length) {
    return { items: [], totalAmount: 0 };
  }

  const items = data.items.map((el) => ({
    id: el.id,
    name: el.product.name,
    price: el.product.price,
    quantity: el.quantity,
    imgUrl: el.product.imgUrl,
    subtotal: el.product.price * el.quantity,
    color: el.color,
  }));

  const totalAmount = data.items.reduce(
    (acc, el) => acc + el.product.price * el.quantity,
    0,
  );

  return {
    items,
    totalAmount,
  };
};
