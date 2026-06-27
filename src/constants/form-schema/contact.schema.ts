import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "minimum 2 symbols"),
<<<<<<< HEAD
  email: z.string().email("invalid email"),
  phone: z
    .string()
    .regex(/^\+374\d{8}$/, "Phone must be in format +374XXXXXXXX"),
=======
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
