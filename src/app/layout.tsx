import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Toaster } from "sonner";
import { Footer } from "@/components/footer";
import { BasketSyncer } from "@/components/basket/basket-syncer";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Ceramic",
  description: "The best ceramic on the world",
  keywords: ["ceramic", "design", "home"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${garamond.variable} h-full antialiased`}
    >
      <body className="h-full">
        <Header />
        {children}
        <Footer />
        <BasketSyncer />
        <Toaster />
      </body>
    </html>
  );
}
