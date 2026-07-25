import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { Prisma } from "@prisma/client";

export const auth = betterAuth({
  database: prismaAdapter(Prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),

  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.COOGLE_CLIENT_ID as string,
      clientSecret: process.env.COOGLE_CLIENT_SECRET as string,
    },
  },
});
