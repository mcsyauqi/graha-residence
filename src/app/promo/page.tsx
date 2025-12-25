"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Gift, Clock, CheckCircle, ArrowRight, MessageCircle, Calendar, Percent, CreditCard, Home, Star, ChevronDown, ChevronUp, Sparkles, Timer } from "lucide-react";
import { promos, testimonials } from "@/lib/data";

export default function PromoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Bagaimana cara mendapatkan promo DP 0%?", a: "Promo DP 0% berlaku untuk pembelian dengan skema KPR melalui bank rekanan kami. Hubungi tim marketing untuk informasi lengkap dan syarat ketentuan." },
    { q: "Apakah promo bisa digabung?", a: "Promo tidak dapat digabung dengan promo lainnya. Pilih promo yang paling sesuai dengan kebutuhan Anda." },
    { q: "Berapa lama promo berlaku?", a: "Setiap promo memiliki masa berlaku yang berbeda. Cek tanggal validasi pada masing-masing promo atau hubungi marketing untuk konfirmasi." },
    { q: "Apakah booking fee bisa dikembalikan?", a: "Booking fee dapat dikembalikan jika pengajuan KPR ditolak oleh bank. Namun tidak dapat dikembalikan jika pembeli membatalkan secara sepihak." },
  ];

  const paymentSchemes = [
    { icon: CreditCard, title: "Cash Keras", desc: "Diskon hingga 10% untuk pembayaran tunai", benefit: "Diskon 10%" },
    { icon: Calendar, title: "Cash Bertahap", desc: "Cicilan 12-24x tanpa bunga langsung ke developer", benefit: "0% Bunga" },
    { icon: Percent, title: "KPR Bank", desc: "Tenor hingga 20 tahun dengan bunga kompetitif", benefit: "DP 5%" },
    { icon: Home, title: "In-House", desc: "Cicilan langsung ke developer tanpa bank", benefit: "Proses Cepat" },
  ];

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "10%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(201,169,98,0.2) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="hero-grid">
            <div style={{ textAlign: "center" }} className="hero-text">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", backgroundColor: "rgba(201,169,98,0.2)", borderRadius: "20px", marginBottom: "20px" }}>
                <Sparkles size={18} color="#C9A962" />
                <span style={{ color: "#C9A962", fontSize: "14px", fontWeight: "600" }}>Promo Spesial Akhir Tahun</span>
              </div>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "800", color: "white", marginBottom: "20px", fontFamily: "'Playfair Display', serif" }}>
                Penawaran Terbaik untuk <span style={{ color: "#C9A962" }}>Rumah Impian</span>
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto 32px", lineHeight: "1.8" }}>
                Dapatkan berbagai keuntungan eksklusif untuk mewujudkan rumah impian keluarga Anda di akhir tahun ini
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                <a href="https://wa.me/628111GRAHA?text=Halo, saya tertarik dengan promo akhir tahun" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <MessageCircle size={20} />
                  Klaim Promo Sekarang
                </a>
                <Link href="/proyek" className="btn btn-outline">
                  Lihat Proyek
                </Link>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: "400px", borderRadius: "16px", overflow: "hidden" }}>
                <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Promo" fill style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: "-20px", left: "-20px", backgroundColor: "white", borderRadius: "16px", padding: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "56px", height: "56px", backgroundColor: "#C9A962", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Timer size={28} color="white" />
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>Promo berakhir</p>
                  <p style={{ fontSize: "20px", fontWeight: "700", color: "#1E3A5F" }}>31 Desember 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Promo Highlight */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #C9A962 0%, #E5D4A1 50%, #C9A962 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ display: "inline-block", padding: "8px 16px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "20px", marginBottom: "20px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>🔥 Promo Unggulan</span>
          </span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
            DP 0% + Free All-In Cost
          </h2>
          <p style={{ fontSize: "16px", color: "#1E3A5F", opacity: 0.8, marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
            Miliki rumah impian tanpa uang muka dan bebas semua biaya tambahan!
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", maxWidth: "700px", margin: "0 auto 40px" }} className="promo-benefits">
            {["DP 0% untuk Semua Unit", "Free BPHTB & AJB", "Gratis Biaya KPR", "Bonus AC + Water Heater", "Cicilan mulai 5 Juta/bulan", "Free SHM & IMB"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 20px", backgroundColor: "rgba(255,255,255,0.5)", borderRadius: "12px" }}>
                <CheckCircle size={20} color="#4A7C59" />
                <span style={{ fontWeight: "600", color: "#1E3A5F", fontSize: "15px" }}>{item}</span>
              </div>
            ))}
          </div>
          <a href="https://wa.me/628111GRAHA?text=Halo, saya tertarik promo DP 0%" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: "16px", padding: "16px 40px" }}>
            Klaim Promo DP 0% <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* All Promos */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Promo Terbatas</span>
            <h2 className="section-title">Promo Berlaku Saat Ini</h2>
            <p className="section-subtitle">Jangan lewatkan kesempatan emas ini!</p>
          </div>
          <div className="grid-2" style={{ gap: "32px" }}>
            {promos.map((promo, i) => (
              <div key={i} className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", height: "220px" }}>
                  <Image src={promo.image} alt={promo.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "16px", left: "16px", padding: "8px 16px", backgroundColor: "#C9A962", borderRadius: "8px", color: "white", fontSize: "12px", fontWeight: "700" }}>
                    PROMO
                  </div>
                  <div style={{ position: "absolute", bottom: "16px", right: "16px", padding: "8px 12px", backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Clock size={14} color="white" />
                    <span style={{ color: "white", fontSize: "12px" }}>s.d {promo.validUntil}</span>
                  </div>
                </div>
                <div style={{ padding: "28px" }}>
                  <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1E3A5F", marginBottom: "12px", fontFamily: "'Playfair Display', serif" }}>
                    {promo.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7", marginBottom: "20px" }}>
                    {promo.description}
                  </p>
                  <a href={`https://wa.me/628111GRAHA?text=Halo, saya tertarik dengan promo ${promo.title}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: "100%" }}>
                    Klaim Promo <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Schemes */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Skema Pembayaran</span>
            <h2 className="section-title">Pilihan Cara Bayar</h2>
            <p className="section-subtitle">Berbagai skema pembayaran untuk kemudahan Anda</p>
          </div>
          <div className="grid-4">
            {paymentSchemes.map((scheme, i) => (
              <div key={i} className="card" style={{ padding: "28px", textAlign: "center", position: "relative" }}>
                <div style={{ position: "absolute", top: "16px", right: "16px", padding: "6px 12px", backgroundColor: "#4A7C59", borderRadius: "20px", color: "white", fontSize: "12px", fontWeight: "600" }}>
                  {scheme.benefit}
                </div>
                <div style={{ width: "64px", height: "64px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <scheme.icon size={32} color="#1E3A5F" />
                </div>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>{scheme.title}</h4>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{scheme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Testimoni</span>
            <h2 className="section-title">Yang Sudah Memanfaatkan Promo</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill="#C9A962" color="#C9A962" />
                  ))}
                </div>
                <p style={{ fontSize: "15px", color: "#2D3748", lineHeight: "1.7", marginBottom: "20px" }}>"{t.message}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "44px", height: "44px", backgroundColor: "#1E3A5F", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "700" }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontWeight: "600", color: "#1E3A5F", fontSize: "14px" }}>{t.name}</p>
                    <p style={{ fontSize: "12px", color: "#64748b" }}>{t.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Pertanyaan Seputar Promo</h2>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ backgroundColor: "white", borderRadius: "12px", marginBottom: "12px", overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", padding: "20px 24px", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#1E3A5F" }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} color="#64748b" /> : <ChevronDown size={20} color="#64748b" />}
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px" }}>
                    <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="section-header">
              <span className="section-label">Info Penting</span>
              <h2 className="section-title">Syarat & Ketentuan</h2>
            </div>
            <div style={{ backgroundColor: "#f8fafc", borderRadius: "16px", padding: "32px" }}>
              <ul style={{ fontSize: "15px", color: "#64748b", lineHeight: "2", paddingLeft: "20px" }}>
                <li>Promo berlaku untuk unit tertentu dan tidak dapat digabung dengan promo lain</li>
                <li>Pembeli wajib melakukan booking fee sesuai ketentuan yang berlaku</li>
                <li>Promo DP 0% berlaku untuk KPR dengan bank rekanan tertentu</li>
                <li>Free BPHTB berlaku untuk harga jual di bawah 2 miliar</li>
                <li>Bonus AC & Water Heater berlaku untuk tipe unit tertentu</li>
                <li>Promo dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</li>
                <li>Syarat dan ketentuan lengkap dapat ditanyakan ke tim marketing</li>
                <li>Keputusan developer bersifat final dan tidak dapat diganggu gugat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "800", color: "white", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
            Jangan Lewatkan Promo Ini!
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
            Hubungi tim marketing kami sekarang untuk mendapatkan penawaran terbaik
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <a href="https://wa.me/628111GRAHA" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: "#25D366", color: "white" }}>
              <MessageCircle size={20} />
              Chat WhatsApp
            </a>
            <Link href="/hubungi" className="btn btn-secondary">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-text {
            text-align: left !important;
          }
        }
        @media (max-width: 640px) {
          .promo-benefits {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
