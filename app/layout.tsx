import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Space Tourism App",
  description: "A 4-page fully responsive app for a space tourism app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
