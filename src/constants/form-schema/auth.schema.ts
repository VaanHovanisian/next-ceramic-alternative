import z from "zod";
import { emailFormShema } from "./allowed-domains";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters.")
  .regex(/[a-z]/, "Must contain a lowercase letter.")
  .regex(/[A-Z]/, "Must contain an uppercase letter.")
  .regex(/\d/, "Must contain a number.")
  .regex(/[!@#$%^&*(),.?":{}|<>_\-]/, "Must contain a special character.");

export const authRegisterSchema = z
  .object({
    name: z.string().min(2, "minimum 2 symbol"),
    email: emailFormShema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => (data.password = data.confirmPassword), {
    path: ["confirmPassword"],
    message: "not correct",
  });

export const authLoginSchema = z.object({
  name: z.string().min(2, "minimum 2 symbol"),
  email: emailFormShema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
});
export type authRegisterSchemaType = z.infer<typeof authRegisterSchema>;
export type authLoginSchemaType = z.infer<typeof authLoginSchema>;
