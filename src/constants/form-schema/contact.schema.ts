import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "minimum 2 symbol"),
<<<<<<< HEAD
  phone: z.string().regex(/^\+374\d{8}$/, { error: "invalid phone" }),
  email: z.email("invalid email"),
=======
  email: z.email("invalid email"),
  phone: z.string().regex(/^\+374\d{8}$/, { error: "invalid phone" }),
>>>>>>> Tagavor
  company: z.string().optional(),
  message: z.string(),
});

<<<<<<< HEAD
export type contactFormSchemaType = z.infer<typeof contactFormSchema>;
=======
export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
>>>>>>> Tagavor
