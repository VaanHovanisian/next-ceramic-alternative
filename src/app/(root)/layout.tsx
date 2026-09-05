import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";
import { BasketSyncer } from "@/components/basket/basket-syncer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BasketSyncer />
    </>
  );
}
