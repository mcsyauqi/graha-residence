"use client";

import Image from "next/image";
import Link from "next/link";
import { Gift, Clock, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { promos } from "@/lib/data";

export default function PromoPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", backgroundColor: "rgba(201,169,98,0.2)", borderRadius: "20px", marginBottom: "20px" }}>
            <Gift size={18} color="#C9A962" />
            <span style={{ color: "#C9A962", fontSize: "14px", fontWeight: "600" }}>Promo Spesial</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "white", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
            Promo & Penawaran Terbaik
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
            Dapatkan penawaran eksklusif untuk mewujudkan rumah impian Anda
          </p>
        </div>
      </section>

      {/* Main Promos */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Terbatas</span>
            <h2 className="section-title">Promo Berlaku Saat Ini</h2>
            <p className="section-subtitle">Jangan lewatkan kesempatan emas ini!</p>
          </div>
          <div className="grid-2" style={{ gap: "32px" }}>
            {promos.map((promo, i) => (
              <div key={i} className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", height: "200px" }}>
                  <Image src={promo.image} alt={promo.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "16px", left: "16px", padding: "8px 16px", backgroundColor: "#C9A962", borderRadius: "8px", color: "white", fontSize: "12px", fontWeight: "700" }}>
                    PROMO
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1E3A5F", marginBottom: "12px", fontFamily: "'Playfair Display', serif" }}>
                    {promo.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.6", marginBottom: "16px" }}>
                    {promo.description}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#C9A962", fontSize: "14px", fontWeight: "500" }}>
                    <Clock size={16} />
                    <span>Berlaku hingga {promo.validUntil}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto", backgroundColor: "white", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="highlight-grid">
              <div style={{ position: "relative", minHeight: "300px" }}>
                <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Promo Spesial" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "32px" }}>
                <span style={{ display: "inline-block", padding: "6px 12px", backgroundColor: "#4A7C59", color: "white", borderRadius: "6px", fontSize: "12px", fontWeight: "700", marginBottom: "16px" }}>
                  PROMO TERBAIK
                </span>
                <h3 style={{ fontSize: "26px", fontWeight: "800", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
                  DP 0% + Free All-In
                </h3>
                <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7", marginBottom: "24px" }}>
                  Dapatkan paket promo lengkap untuk pembelian unit baru. Tanpa uang muka dan bebas semua biaya!
                </p>
                <div style={{ marginBottom: "24px" }}>
                  {["DP 0% tanpa syarat rumit", "Gratis BPHTB & AJB", "Gratis biaya KPR bank", "Bonus AC & Water Heater", "Cicilan mulai 5 jutaan/bulan"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <CheckCircle size={20} color="#4A7C59" />
                      <span style={{ fontSize: "14px", color: "#1E3A5F" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/628111GRAHA?text=Halo, saya tertarik promo DP 0%" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Klaim Promo Sekarang <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div className="section-header">
              <span className="section-label">Info</span>
              <h2 className="section-title">Syarat & Ketentuan</h2>
            </div>
            <div style={{ backgroundColor: "#f8fafc", borderRadius: "16px", padding: "32px" }}>
              <ul style={{ fontSize: "15px", color: "#64748b", lineHeight: "2", paddingLeft: "20px" }}>
                <li>Promo berlaku untuk unit tertentu dan tidak dapat digabung dengan promo lain</li>
                <li>Pembeli wajib melakukan booking fee sesuai ketentuan</li>
                <li>Promo DP 0% berlaku untuk KPR dengan bank rekanan</li>
                <li>Free BPHTB berlaku untuk harga jual di bawah 2 miliar</li>
                <li>Bonus AC & Water Heater berlaku untuk tipe unit tertentu</li>
                <li>Promo dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</li>
                <li>Syarat dan ketentuan lengkap dapat ditanyakan ke marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #C9A962 0%, #E5D4A1 50%, #C9A962 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: "800", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
            Tertarik dengan Promo Kami?
          </h2>
          <p style={{ fontSize: "16px", color: "#1E3A5F", opacity: 0.8, marginBottom: "28px" }}>
            Hubungi tim marketing kami untuk informasi lebih lanjut
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <a href="https://wa.me/628111GRAHA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={20} />
              Hubungi via WhatsApp
            </a>
            <Link href="/proyek" className="btn" style={{ backgroundColor: "white", color: "#1E3A5F" }}>
              Lihat Proyek Kami
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 768px) {
          .highlight-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
