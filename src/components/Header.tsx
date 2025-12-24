"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Beranda", href: "/" },
  {
    name: "Proyek",
    href: "/proyek",
    submenu: [
      { name: "Graha Serpong", href: "/proyek/graha-residence-serpong" },
      { name: "Graha Bekasi", href: "/proyek/graha-residence-bekasi" },
      { name: "Graha Depok", href: "/proyek/graha-residence-depok" },
      { name: "Graha Bogor", href: "/proyek/graha-residence-bogor" },
    ],
  },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Fasilitas", href: "/fasilitas" },
  { name: "Simulasi KPR", href: "/simulasi-kpr" },
  { name: "Promo", href: "/promo" },
  { name: "Hubungi", href: "/hubungi" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
              <span className="text-[#C9A962] font-bold text-xl font-heading">
                G
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[#1E3A5F] font-heading leading-tight">
                Graha Residence
              </h1>
              <p className="text-xs text-[#2D3748]/70 -mt-0.5">
                Hunian Impian Keluarga
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#2D3748] hover:text-[#1E3A5F] transition-colors rounded-lg hover:bg-[#1E3A5F]/5"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && openSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-3 text-sm text-[#2D3748] hover:bg-[#1E3A5F]/5 hover:text-[#1E3A5F] transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:02155512345"
              className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] hover:text-[#C9A962] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(021) 555-1234</span>
            </a>
            <a
              href="https://wa.me/628111GRAHA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#1E3A5F] text-white text-sm font-semibold rounded-lg hover:bg-[#1E3A5F]/90 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E3A5F]"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-[#2D3748] font-medium hover:bg-[#1E3A5F]/5 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-[#2D3748]/70 hover:text-[#1E3A5F] transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href="https://wa.me/628111GRAHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-[#1E3A5F] text-white text-center font-semibold rounded-lg hover:bg-[#1E3A5F]/90 transition-colors"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
