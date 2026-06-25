import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "minimum 2 symbols"),
  email: z.email("invalid email"),
  phone: z.string().regex(/^\+374\d{8}$/, { error: "invalid phone number" }),
  company: z.string().optional(),
  message: z.string(),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
//Z.INFER-TESAKAVORUM E
