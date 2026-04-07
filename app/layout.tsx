import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmileCare Dental Clinic | Advanced Dental Care You Can Trust",
  description:
    "Expert dental care in Chennai. Teeth whitening, implants, root canal, braces, and more. Book your appointment today.",
  keywords:
    "dental clinic, dentist, teeth whitening, dental implants, root canal, braces, Chennai",
  openGraph: {
    title: "SmileCare Dental Clinic",
    description: "Advanced Dental Care You Can Trust",
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
