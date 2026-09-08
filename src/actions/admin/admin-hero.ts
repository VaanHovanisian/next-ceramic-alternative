import {
  adminHeroSchema,
  AdminHeroSchemaType,
} from "@/constants/form-schema/admin-hero.schema";
import { prisma } from "@/prisma/prisma-client";
import z from "zod";

export const adminHeroAction = async (
  value: AdminHeroSchemaType,
  type: "home" | "contact",
) => {
  const parsed = z.safeParse(adminHeroSchema, value);

  if (!parsed.success) {
    throw new Error(parsed.error.message);
  }

  const data = parsed.data;

  if (type === "home") {
    await prisma.homeHero.create({
      data: {
        title: data.title,
        color: data.color,
        imgUrlDesktop: data.imgUrlDesktop as string,
        imgUrlMobile: data.imgUrlMobile as string,
      },
    });
  } else if (type === "contact") {
    await prisma.contactHero.create({
      data: {
        title: data.title,
        color: data.color,
        imgUrlDesktop: data.imgUrlDesktop as string,
        imgUrlMobile: data.imgUrlMobile as string,
      },
    });
  }
};
