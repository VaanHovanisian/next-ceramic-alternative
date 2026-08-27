export type PostBasketValue = {
  productId: number;
  quantity: number;
  colorId: number;
};

export interface BasketItem {
  id: number;
  quantity: number;
  colorId: number;
}
export interface BaasketItemsDTO {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
  subtotal: number;
  colorId: number;
}
