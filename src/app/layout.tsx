import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const inter = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mahara one",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
