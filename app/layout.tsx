import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Care N Cure Multi-Speciality Dental Centre | Painless & Advanced Dental Care in Chennai",
  description:
    "Trusted dental clinic in Puzhal, Chennai. Pain-free treatments for teeth cleaning, implants, root canal, braces & cosmetic dentistry. 8+ years experience. Call 080563 90607.",
  keywords:
    "dental clinic Puzhal, dentist Chennai, teeth cleaning, dental implants, root canal treatment, braces Chennai, Care N Cure dental",
  openGraph: {
    title: "Care N Cure Multi-Speciality Dental Centre",
    description: "Painless & Advanced Dental Care You Can Trust",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
