import { Basket, BasketCard, Color, Product } from "@prisma/client";

export type PostBasketValue = {
  productId: number;
  quantity: number;
  colorId: number;
};
export type BasketItemLocal = {
  id: number;
  quantity: number;
  colorId: number;
};

export interface BasketDTO extends Basket {
  items: BasketProductDTO[];
  totalAmount: number;
}

export type BasketProductDTO = BasketCard & {
  product: Product;
  color: Color;
};

export interface IBasketProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
  subtotal: number;
  color: Color;
}
