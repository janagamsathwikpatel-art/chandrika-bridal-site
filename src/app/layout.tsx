import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHANDRIKA | A New Expression of Bridal & Quiet Luxury",
  description:
    "Modern bridal couture defined by clean lines, sculpted form, and understated luxury. An exploration of quiet luxury and poetic silhouettes.",
  keywords: [
    "Chandrika",
    "Bridal Couture",
    "Quiet Luxury",
    "Designer Wedding Dresses",
    "Minimalist Bridal",
    "Bespoke Bridal Wear",
  ],
  openGraph: {
    title: "CHANDRIKA | A New Expression of Bridal",
    description:
      "Modern wedding dresses defined by clean lines, sculpted form, and understated luxury.",
    url: "https://chandrikabride.com",
    siteName: "Chandrika Bridal",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fbfaf8] text-[#595955] selection:bg-[#201f1f] selection:text-white">
        {children}
      </body>
    </html>
  );
}
