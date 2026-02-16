import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import AOSInit from "./components/AOSInit";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I-Snack | Fresh & Flavorful Snacks",
  description: "Discover fresh, fast, and flavorful snacks crafted for busy days and easy nights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-gray-50`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
