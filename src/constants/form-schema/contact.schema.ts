import z from "zod";

export const contactFormSchema = z.object({
<<<<<<< HEAD
  name: z.string().min(2, "minimum 2 symbol"),
  email: z.email("invalid email"),
  phone: z.string().regex(/^\+374\d{8}$/, { error: "invalid phone" }),
=======
  name: z.string().min(2, "minimum 2 symbols"),
  email: z.email("invalid email"),
  phone: z.string().regex(/^\+374\d{8}$/, { error: "invalid phone number" }),
>>>>>>> Inga
  company: z.string().optional(),
  message: z.string(),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
<<<<<<< HEAD
=======
//Z.INFER-TESAKAVORUM E
>>>>>>> Inga
