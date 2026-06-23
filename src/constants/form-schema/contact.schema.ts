import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "minimum 2 symbol"),
  phone: z.string().regex(/^\+374\d{8}$/, { error: "invalid phone" }),
  email: z.email("invalid email"),
  company: z.string().optional(),
  message: z.string(),
});

export type contactFormSchemaType = z.infer<typeof contactFormSchema>;
