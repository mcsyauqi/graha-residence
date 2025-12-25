"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1E3A5F", color: "white" }}>
      {/* Main Footer */}
      <div className="container" style={{ padding: "64px 16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "40px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#1E3A5F", fontWeight: "bold", fontSize: "24px", fontFamily: "'Cormorant Garamond', serif" }}>G</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: "700", fontSize: "20px" }}>Graha Residence</div>
                <div style={{ fontSize: "13px", color: "#C9A962" }}>Hunian Impian Keluarga</div>
              </div>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.7", maxWidth: "300px" }}>
              Developer properti terpercaya dengan 19 tahun pengalaman membangun hunian berkualitas untuk keluarga Indonesia.
            </p>
          </div>

          {/* Proyek */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "20px", fontFamily: "'Cormorant Garamond', serif" }}>Proyek</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/proyek/graha-residence-serpong" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Graha Serpong</Link>
              <Link href="/proyek/graha-residence-bekasi" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Graha Bekasi</Link>
              <Link href="/proyek/graha-residence-depok" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Graha Depok</Link>
              <Link href="/proyek/graha-residence-bogor" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Graha Bogor</Link>
              <Link href="/proyek" style={{ color: "#C9A962", fontSize: "14px", fontWeight: "500" }}>Lihat Semua</Link>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "20px", fontFamily: "'Cormorant Garamond', serif" }}>Layanan</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/simulasi-kpr" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Simulasi KPR</Link>
              <Link href="/promo" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Promo Terkini</Link>
              <Link href="/fasilitas" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Fasilitas</Link>
              <Link href="/hubungi" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Hubungi Kami</Link>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "20px", fontFamily: "'Cormorant Garamond', serif" }}>Kontak</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={18} style={{ color: "#C9A962", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.6" }}>
                  Menara Graha Lt. 15, Jl. Sudirman Kav. 52, Jakarta
                </span>
              </div>
              <a href="tel:02155512345" style={{ display: "flex", gap: "12px", alignItems: "center", color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                <Phone size={18} style={{ color: "#C9A962" }} />
                (021) 555-1234
              </a>
              <a href="https://wa.me/628111GRAHA" style={{ display: "flex", gap: "12px", alignItems: "center", color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                <MessageCircle size={18} style={{ color: "#C9A962" }} />
                0811-1GRAHA
              </a>
              <a href="mailto:info@graharesidence.co.id" style={{ display: "flex", gap: "12px", alignItems: "center", color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                <Mail size={18} style={{ color: "#C9A962" }} />
                info@graharesidence.co.id
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div
          className="container"
          style={{
            padding: "24px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
            © 2025 PT Graha Residence Indonesia. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
            Website dibuat dengan ❤️ oleh{" "}
            <a href="https://creativism.id" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A962" }}>
              Creativism Digital Marketing Agency
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1.2fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
