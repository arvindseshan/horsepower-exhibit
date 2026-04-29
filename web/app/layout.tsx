import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "From Horse Power to Horsepower | Exhibit",
  description:
    "Digital exhibit: horse-drawn transportation as an urban system— mobility, stables, feed, labor, and the decline of living machines.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${cormorant.variable} ${dmSans.variable} h-full min-h-0 font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
