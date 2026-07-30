import z from "zod";

export const profileFormSchema = z.object({
  name: z.string(),
  email: z.email(),
  avatar: z
    .union([
      z.string(),
      z.null(),
      z
        .file()
        .refine((data) => data.size <= 5 * 1024 * 1024, "max size smb")
        .refine((data) => data.type.includes("image/"), "Only Image"),
    ])
    .optional(),
});

export type profileFormSchemaType = z.infer<typeof profileFormSchema>;
