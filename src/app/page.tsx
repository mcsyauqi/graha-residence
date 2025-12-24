"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Trophy, Home, Building, Users, Shield, Banknote, Building2, TreePine, Star, MessageCircle, Phone, ArrowRight, Check } from "lucide-react";
import { projects, facilities, testimonials } from "@/lib/data";
import { formatCurrency, calculateKPR } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <FacilitiesSection />
      <KPRCalculator />
      <PromoSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Modern House"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(30,58,95,0.95) 0%, rgba(30,58,95,0.8) 50%, rgba(30,58,95,0.6) 100%)",
          }}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 10, padding: "60px 16px" }}>
        <div style={{ maxWidth: "700px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              backgroundColor: "rgba(201,169,98,0.2)",
              border: "1px solid rgba(201,169,98,0.3)",
              borderRadius: "50px",
              marginBottom: "24px",
            }}
          >
            <Trophy size={18} color="#C9A962" />
            <span style={{ color: "#C9A962", fontSize: "14px", fontWeight: "600" }}>Developer Terpercaya Sejak 2005</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 60px)",
              fontWeight: "800",
              color: "white",
              lineHeight: "1.1",
              marginBottom: "24px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Wujudkan Rumah Impian <span style={{ color: "#C9A962" }}>Keluarga Anda</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: "1.7",
              marginBottom: "32px",
              maxWidth: "550px",
            }}
          >
            Hunian berkualitas dengan lokasi strategis, fasilitas lengkap, dan skema pembayaran yang fleksibel untuk kenyamanan Anda.
          </p>

          {/* Search Box */}
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
              className="search-grid"
            >
              <div style={{ position: "relative" }}>
                <Search size={20} color="#9ca3af" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
                <input type="text" placeholder="Cari properti..." style={{ paddingLeft: "44px" }} />
              </div>
              <div style={{ position: "relative" }}>
                <MapPin size={20} color="#9ca3af" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
                <select style={{ paddingLeft: "44px" }}>
                  <option value="">Pilih Lokasi</option>
                  <option value="serpong">Serpong</option>
                  <option value="bekasi">Bekasi</option>
                  <option value="depok">Depok</option>
                  <option value="bogor">Bogor</option>
                </select>
              </div>
              <Link href="/proyek" className="btn btn-primary" style={{ width: "100%" }}>
                <Search size={20} />
                Cari Properti
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "48px" }}>
            <Link href="/proyek" className="btn btn-secondary">
              Jelajahi Proyek
            </Link>
            <a href="https://wa.me/628111GRAHA" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Hubungi Marketing
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { icon: Home, value: "20.000+", label: "Unit Terjual" },
              { icon: Building, value: "15+", label: "Proyek Sukses" },
              { icon: Users, value: "19", label: "Tahun Pengalaman" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <stat.icon size={24} color="#C9A962" />
                </div>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "700", color: "white", fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .search-grid {
            grid-template-columns: 1fr 1fr auto !important;
          }
        }
      `}</style>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Koleksi Premium</span>
          <h2 className="section-title">Proyek Unggulan Kami</h2>
          <p className="section-subtitle">Pilihan hunian terbaik dengan kualitas premium untuk keluarga Indonesia</p>
        </div>

        <div className="grid-4" style={{ gap: "24px" }}>
          {projects.map((project) => (
            <Link key={project.id} href={`/proyek/${project.slug}`}>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ position: "relative", height: "200px" }}>
                  <Image src={project.image} alt={project.name} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />

                  {/* Badges */}
                  <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        padding: "6px 12px",
                        fontSize: "11px",
                        fontWeight: "600",
                        borderRadius: "20px",
                        backgroundColor: project.status === "Now Selling" ? "#4A7C59" : project.status === "New Launching" ? "#C9A962" : project.status === "Limited Stock" ? "#ef4444" : "#1E3A5F",
                        color: project.status === "New Launching" ? "#1E3A5F" : "white",
                      }}
                    >
                      {project.status}
                    </span>
                    {project.badge && (
                      <span style={{ padding: "6px 12px", fontSize: "11px", fontWeight: "600", borderRadius: "20px", backgroundColor: "#C9A962", color: "#1E3A5F" }}>
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
                    <span style={{ color: "white", fontWeight: "700", fontSize: "18px", fontFamily: "'Playfair Display', serif" }}>{project.priceDisplay}</span>
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px", color: "#1E3A5F", fontFamily: "'Playfair Display', serif" }}>{project.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#64748b", fontSize: "14px", marginBottom: "12px" }}>
                    <MapPin size={16} color="#C9A962" />
                    {project.location}
                  </div>
                  <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "16px" }}>
                    {project.type} • LT: {project.landArea}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", color: "#1E3A5F", fontSize: "14px", fontWeight: "600" }}>
                    Lihat Detail <ArrowRight size={16} style={{ marginLeft: "4px" }} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/proyek" className="btn btn-primary">
            Lihat Semua Proyek <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    { icon: Shield, title: "Legalitas Terjamin", desc: "Sertifikat SHM/SHGB, IMB lengkap, dan bebas sengketa." },
    { icon: Banknote, title: "Pembayaran Fleksibel", desc: "KPR dengan 15+ bank rekanan, DP mulai 5%." },
    { icon: Building2, title: "Kualitas Premium", desc: "Material berkualitas tinggi. Garansi struktur 10 tahun." },
    { icon: TreePine, title: "Lingkungan Asri", desc: "Keamanan 24 jam, taman hijau, fasilitas lengkap." },
  ];

  return (
    <section className="section bg-gray">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Keunggulan Kami</span>
          <h2 className="section-title">Mengapa Memilih Graha Residence?</h2>
          <p className="section-subtitle">Kami berkomitmen memberikan yang terbaik untuk hunian keluarga Anda</p>
        </div>

        <div className="grid-4">
          {features.map((f, i) => (
            <div key={i} className="card" style={{ padding: "32px", textAlign: "center" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  backgroundColor: "rgba(30,58,95,0.08)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <f.icon size={32} color="#1E3A5F" />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "#1E3A5F", fontFamily: "'Playfair Display', serif" }}>{f.title}</h3>
              <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Fasilitas</span>
          <h2 className="section-title">Fasilitas Lengkap di Setiap Cluster</h2>
          <p className="section-subtitle">Nikmati berbagai fasilitas premium untuk kenyamanan keluarga Anda</p>
        </div>

        <div className="grid-3">
          {facilities.map((f, i) => (
            <div key={i} style={{ position: "relative", height: "240px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src={f.image} alt={f.name} fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,58,95,0.9), rgba(30,58,95,0.3))" }} />
              <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
                <h3 style={{ color: "white", fontSize: "20px", fontWeight: "700", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>{f.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/fasilitas" className="btn btn-primary">
            Lihat Semua Fasilitas <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function KPRCalculator() {
  const [harga, setHarga] = useState(1000000000);
  const [dp, setDp] = useState(20);
  const [tenor, setTenor] = useState(15);
  const [bunga, setBunga] = useState(7);

  const result = calculateKPR(harga, dp, tenor, bunga);

  return (
    <section className="section bg-gray">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Kalkulator</span>
          <h2 className="section-title">Simulasi KPR</h2>
          <p className="section-subtitle">Hitung estimasi cicilan bulanan Anda</p>
        </div>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "white",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="kpr-grid">
            {/* Form */}
            <div style={{ padding: "32px" }}>
              <div style={{ marginBottom: "28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <label style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>Harga Properti</label>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>{formatCurrency(harga)}</span>
                </div>
                <input type="range" min={500000000} max={3000000000} step={50000000} value={harga} onChange={(e) => setHarga(Number(e.target.value))} />
              </div>

              <div style={{ marginBottom: "28px" }}>
                <label style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F", display: "block", marginBottom: "10px" }}>Uang Muka (DP): {dp}%</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  {[10, 20, 30].map((v) => (
                    <button
                      key={v}
                      onClick={() => setDp(v)}
                      style={{
                        flex: 1,
                        padding: "12px",
                        borderRadius: "10px",
                        border: "none",
                        fontWeight: "600",
                        cursor: "pointer",
                        backgroundColor: dp === v ? "#1E3A5F" : "#f1f5f9",
                        color: dp === v ? "white" : "#1E3A5F",
                      }}
                    >
                      {v}%
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "28px" }}>
                <label style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F", display: "block", marginBottom: "10px" }}>Tenor: {tenor} Tahun</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  {[5, 10, 15, 20].map((v) => (
                    <button
                      key={v}
                      onClick={() => setTenor(v)}
                      style={{
                        flex: 1,
                        padding: "12px",
                        borderRadius: "10px",
                        border: "none",
                        fontWeight: "600",
                        cursor: "pointer",
                        backgroundColor: tenor === v ? "#1E3A5F" : "#f1f5f9",
                        color: tenor === v ? "white" : "#1E3A5F",
                      }}
                    >
                      {v} Th
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <label style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>Suku Bunga</label>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>{bunga}%</span>
                </div>
                <input type="range" min={5} max={12} step={0.5} value={bunga} onChange={(e) => setBunga(Number(e.target.value))} />
              </div>
            </div>

            {/* Result */}
            <div style={{ padding: "32px", backgroundColor: "#1E3A5F", color: "white" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "24px", fontFamily: "'Playfair Display', serif", color: "white" }}>Estimasi Cicilan</h3>

              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>Cicilan Per Bulan</p>
                <p style={{ fontSize: "36px", fontWeight: "800", color: "#C9A962", fontFamily: "'Playfair Display', serif" }}>{formatCurrency(result.cicilanPerBulan)}</p>
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Total Uang Muka</span>
                  <span style={{ fontWeight: "600", fontSize: "14px" }}>{formatCurrency(result.totalUangMuka)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Total Pinjaman</span>
                  <span style={{ fontWeight: "600", fontSize: "14px" }}>{formatCurrency(result.totalPinjaman)}</span>
                </div>
              </div>

              <a
                href="https://wa.me/628111GRAHA?text=Halo, saya tertarik dengan simulasi KPR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: "100%", marginTop: "24px" }}
              >
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (min-width: 768px) {
            .kpr-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

function PromoSection() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #C9A962 0%, #E5D4A1 50%, #C9A962 100%)",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            backgroundColor: "rgba(30,58,95,0.1)",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>Promo Terbatas</span>
        </span>

        <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800", color: "#1E3A5F", marginBottom: "32px", fontFamily: "'Playfair Display', serif" }}>
          Promo Spesial Akhir Tahun 2025
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", maxWidth: "600px", margin: "0 auto 40px" }} className="promo-grid">
          {["DP 0% untuk Semua Unit", "Free BPHTB & AJB", "Gratis Biaya KPR", "Bonus AC + Water Heater"].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 20px", backgroundColor: "rgba(255,255,255,0.5)", borderRadius: "12px" }}>
              <Check size={20} color="#4A7C59" />
              <span style={{ fontWeight: "600", color: "#1E3A5F", fontSize: "15px" }}>{item}</span>
            </div>
          ))}
        </div>

        <Link href="/promo" className="btn btn-primary" style={{ fontSize: "16px", padding: "16px 40px" }}>
          Klaim Promo <ArrowRight size={20} />
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .promo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimoni</span>
          <h2 className="section-title">Apa Kata Mereka?</h2>
          <p className="section-subtitle">Testimoni dari keluarga yang telah mempercayakan hunian mereka kepada kami</p>
        </div>

        <div className="grid-3">
          {testimonials.map((t, i) => (
            <div key={i} className="card" style={{ padding: "32px" }}>
              <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="#C9A962" color="#C9A962" />
                ))}
              </div>
              <p style={{ fontSize: "16px", color: "#2D3748", lineHeight: "1.7", marginBottom: "20px" }}>"{t.message}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#1E3A5F",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontWeight: "600", color: "#1E3A5F", fontSize: "15px" }}>{t.name}</p>
                  <p style={{ fontSize: "13px", color: "#64748b" }}>{t.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800", color: "white", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
          Tertarik dengan Proyek Kami?
        </h2>
        <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px" }}>
          Tim marketing kami siap membantu Anda menemukan hunian impian
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a href="https://wa.me/628111GRAHA" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: "#25D366", color: "white" }}>
            <MessageCircle size={20} />
            Chat WhatsApp
          </a>
          <a href="tel:02155512345" className="btn" style={{ backgroundColor: "white", color: "#1E3A5F" }}>
            <Phone size={20} />
            Hubungi Kami
          </a>
          <Link href="/hubungi" className="btn btn-secondary">
            <MapPin size={20} />
            Kunjungi Show Unit
          </Link>
        </div>
      </div>
    </section>
  );
}
