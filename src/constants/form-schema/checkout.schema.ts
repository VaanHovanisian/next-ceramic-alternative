import { z } from "zod";

export const formCheckoutSchema = z.object({
  firstName: z.string().min(2, "minimum 2 symbol"),
  lastName: z.string().min(2, "minimum 2 symbol"),
  email: z.email("invalid email"),
  phone: z.string().regex(/^\+374\d{8}$/, { error: "invalid phone" }),
  address: z.string().min(5, "minimum 5 symbol"),
  message: z.any().optional(),
});
