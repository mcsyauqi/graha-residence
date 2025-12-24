"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Proyek", href: "/proyek" },
  { name: "Tentang", href: "/tentang" },
  { name: "Fasilitas", href: "/fasilitas" },
  { name: "Simulasi KPR", href: "/simulasi-kpr" },
  { name: "Promo", href: "/promo" },
  { name: "Hubungi", href: "/hubungi" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? "white" : "rgba(255,255,255,0.95)",
        boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: "#1E3A5F",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#C9A962", fontWeight: "bold", fontSize: "20px", fontFamily: "'Playfair Display', serif" }}>G</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: "700", fontSize: "18px", color: "#1E3A5F" }}>
                Graha Residence
              </div>
              <div style={{ fontSize: "12px", color: "#64748b" }}>Hunian Impian Keluarga</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "none" }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  padding: "8px 16px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#2D3748",
                  borderRadius: "8px",
                  transition: "all 0.2s",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: "none" }} className="desktop-cta">
            <a
              href="tel:02155512345"
              style={{ display: "flex", alignItems: "center", gap: "8px", color: "#1E3A5F", fontWeight: "500", fontSize: "14px" }}
            >
              <Phone size={16} />
              (021) 555-1234
            </a>
            <a
              href="https://wa.me/628111GRAHA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: "10px 20px", fontSize: "14px" }}
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
            className="mobile-menu-btn"
          >
            {isMobileOpen ? <X size={24} color="#1E3A5F" /> : <Menu size={24} color="#1E3A5F" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            right: 0,
            backgroundColor: "white",
            borderTop: "1px solid #e2e8f0",
            padding: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              style={{
                display: "block",
                padding: "14px 16px",
                fontSize: "16px",
                fontWeight: "500",
                color: "#2D3748",
                borderRadius: "8px",
              }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/628111GRAHA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "16px" }}
          >
            Hubungi Kami
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
            align-items: center;
            gap: 4px;
          }
          .desktop-cta {
            display: flex !important;
            align-items: center;
            gap: 24px;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
