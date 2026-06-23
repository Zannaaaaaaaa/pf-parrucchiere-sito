import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "P.F. Parrucchiere | Villorba",
  description: "Taglio, colore, barba e trattamenti su misura a Villorba (TV).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${playfair.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-charcoal font-sans">{children}</body>
    </html>
  );
}
