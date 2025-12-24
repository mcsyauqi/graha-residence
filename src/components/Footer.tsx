"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { companyInfo } from "@/lib/data";

const projectLinks = [
  { name: "Graha Serpong", href: "/proyek/graha-residence-serpong" },
  { name: "Graha Bekasi", href: "/proyek/graha-residence-bekasi" },
  { name: "Graha Depok", href: "/proyek/graha-residence-depok" },
  { name: "Graha Bogor", href: "/proyek/graha-residence-bogor" },
  { name: "Lihat Semua", href: "/proyek" },
];

const serviceLinks = [
  { name: "Simulasi KPR", href: "/simulasi-kpr" },
  { name: "Promo Terkini", href: "/promo" },
  { name: "Bank Rekanan", href: "/simulasi-kpr#bank-rekanan" },
  { name: "After Sales", href: "/hubungi" },
  { name: "FAQ", href: "/hubungi#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1E3A5F] font-bold text-2xl font-heading">
                  G
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold font-heading">
                  Graha Residence
                </h2>
                <p className="text-sm text-[#C9A962]">{companyInfo.tagline}</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {companyInfo.description}
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#C9A962] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#C9A962] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#C9A962] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Proyek Column */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Proyek</h3>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#C9A962] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan Column */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Layanan</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#C9A962] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak Column */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#C9A962] shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  {companyInfo.address}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/[^\d]/g, "")}`}
                  className="flex items-center gap-3 text-white/70 hover:text-[#C9A962] transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-[#C9A962]" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/628111GRAHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-[#C9A962] transition-colors text-sm"
                >
                  <MessageCircle className="w-5 h-5 text-[#C9A962]" />
                  {companyInfo.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-[#C9A962] transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-[#C9A962]" />
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2025 PT Graha Residence Indonesia. All rights reserved.
            </p>
            <p className="text-white/60 text-sm text-center md:text-right">
              Website ini dibuat dengan ❤️ oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A962] hover:underline"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
