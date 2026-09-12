import { Contact } from "@/components/contact";
import { prisma } from "@/prisma/prisma-client";


export default async function ContactPage() {
  const hero = await prisma.contactHero.findUnique({
    where: {
      id: 1,
    },
  });

  return <Contact hero={hero!} />;
}