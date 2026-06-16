import type { Metadata } from "next";
import { Inter, EB_Garamond, Manufacturing_Consent } from "next/font/google";
import "./globals.css";

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
  description: "the best ceramic in the world",
  keywords: ["ceramic", "design", "homemade", "manufactering", "culture"],
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
      <body className="h-full">{children}</body>
    </html>
  );
}
