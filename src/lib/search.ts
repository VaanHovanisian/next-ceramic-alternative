import { ApiRoutes } from "@/constants/api-routes";
import { axiosInstance } from "./instance";

<<<<<<< HEAD
export const getSearch = async (search: string, limit: number = 5) =>
=======
export const getSearch = async (search: string, limit: number = 3) =>
>>>>>>> main
  (
    await axiosInstance.get(ApiRoutes.PRODUCTS, {
      params: { search, limit },
    })
  ).data;
