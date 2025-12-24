import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Graha Residence | Developer Perumahan Terpercaya Jabodetabek",
  description:
    "Developer properti dengan 20.000+ unit terjual. Proyek perumahan di Serpong, Bekasi, Depok, Bogor. DP 0%, KPR mudah, legalitas aman.",
  keywords: [
    "developer perumahan",
    "rumah dijual",
    "perumahan jabodetabek",
    "graha residence",
    "rumah serpong",
    "rumah bekasi",
    "rumah depok",
    "rumah bogor",
    "kpr murah",
    "dp 0%",
  ],
  authors: [{ name: "Graha Residence" }],
  openGraph: {
    title: "Graha Residence | Developer Perumahan Terpercaya Jabodetabek",
    description:
      "Developer properti dengan 20.000+ unit terjual. Proyek perumahan di Serpong, Bekasi, Depok, Bogor. DP 0%, KPR mudah, legalitas aman.",
    url: "https://graharesidence.co.id",
    siteName: "Graha Residence",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graha Residence | Developer Perumahan Terpercaya Jabodetabek",
    description:
      "Developer properti dengan 20.000+ unit terjual. Proyek perumahan di Serpong, Bekasi, Depok, Bogor. DP 0%, KPR mudah, legalitas aman.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
