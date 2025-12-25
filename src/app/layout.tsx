import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Graha Residence | Developer Perumahan Terpercaya Jabodetabek",
  description: "Developer properti dengan 20.000+ unit terjual. Proyek perumahan di Serpong, Bekasi, Depok, Bogor. DP 0%, KPR mudah, legalitas aman.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
