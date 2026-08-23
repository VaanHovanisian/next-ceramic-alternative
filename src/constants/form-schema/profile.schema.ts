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
        .refine((data) => data.size <= 5 * 1024 * 1024, "Max size 5mb")
        .refine((data) => data.type.includes("image/"), "Only Image"),
    ])
    .optional(),
});
<<<<<<< HEAD

=======
>>>>>>> 855627fb70e37f5429500e054767eff1d2ed6bf0
export type ProfileFormSchemaType = z.infer<typeof profileFormSchema>;
