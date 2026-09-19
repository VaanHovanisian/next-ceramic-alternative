import { Contact } from "@/components/contact";
import { prisma } from "@/prisma/prisma-client";
export default async function ContactPage() {
  const data = await prisma.contactHero.findFirst();
  return <Contact hero={data} />;
}
