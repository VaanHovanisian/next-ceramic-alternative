import { AdminHero } from "@/components/admin/admin-hero";
import { prisma } from "@/prisma/prisma-client";

export default async function AdminHeroPage() {
  const data = await prisma.homeHero.findFirst();

  return <AdminHero data={data} />;
}
