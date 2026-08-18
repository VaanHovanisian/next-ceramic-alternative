import { Product } from "@prisma/client";

export type BasketItem = Product & { quantity: number };
