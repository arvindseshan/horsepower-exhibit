import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "From Horse Power to Horsepower",
  description:
    "A museum-style digital exhibit on horse-drawn transportation as a technological system and its early twentieth-century decline."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
