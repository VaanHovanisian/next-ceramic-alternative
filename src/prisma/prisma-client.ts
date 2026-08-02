import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
<<<<<<< HEAD
const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});
=======

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

>>>>>>> Narine
export const prisma = new PrismaClient({ adapter });
