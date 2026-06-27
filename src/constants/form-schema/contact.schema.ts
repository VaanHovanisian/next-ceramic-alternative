import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "minimum 2 symbols"),
  email: z.string().email("invalid email"),
  phone: z
    .string()
    .regex(/^\+374\d{8}$/, "Phone must be in format +374XXXXXXXX"),
  company: z.string().optional(),
  message: z.string(),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
