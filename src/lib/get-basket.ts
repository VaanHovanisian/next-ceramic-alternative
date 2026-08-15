import { ApiRoutes } from "@/constants/api-routes";
import { axiosInstance } from "./instance";

export const getBasket = async (ids: number[]) =>
  (
    await axiosInstance.get(ApiRoutes.BASKET, {
      params: { ids: ids.join(",") },
    })
  ).data;
