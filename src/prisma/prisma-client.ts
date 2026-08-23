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

>>>>>>> 855627fb70e37f5429500e054767eff1d2ed6bf0
export const prisma = new PrismaClient({ adapter });
