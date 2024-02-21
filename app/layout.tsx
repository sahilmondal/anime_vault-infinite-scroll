import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Footer from "@/components/Footer";

import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="  bg-[#0F1117] overflow-hidden">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
