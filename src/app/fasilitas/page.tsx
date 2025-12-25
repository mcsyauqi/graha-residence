"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TreePine, Car, Zap, Droplets, Shield, Wifi, Sun, Wind, Users, Baby, Dumbbell, ShoppingBag, GraduationCap, Heart, CheckCircle, MessageCircle, Star } from "lucide-react";
import { facilities, testimonials } from "@/lib/data";

export default function FasilitasPage() {
  const securityFeatures = [
    { icon: Shield, title: "Security 24 Jam", desc: "Petugas keamanan terlatih berpatroli sepanjang hari" },
    { icon: Users, title: "One Gate System", desc: "Satu akses masuk dengan pemeriksaan ketat" },
    { title: "CCTV", desc: "Kamera pengawas di setiap sudut area publik" },
    { title: "Kartu Akses", desc: "Sistem kartu untuk akses ke cluster" },
  ];

  const lifestyleAmenities = [
    { icon: Dumbbell, title: "Fitness Center", desc: "Gym lengkap dengan peralatan modern", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80" },
    { icon: ShoppingBag, title: "Mini Market", desc: "Kebutuhan sehari-hari dalam jangkauan", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80" },
    { icon: GraduationCap, title: "Area Belajar", desc: "Ruang belajar bersama untuk anak-anak", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80" },
    { icon: Heart, title: "Klinik Kesehatan", desc: "Fasilitas kesehatan dasar 24 jam", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  ];

  const houseSpecs = [
    { title: "Fondasi", items: ["Beton bertulang", "Kedalaman sesuai standar"] },
    { title: "Struktur", items: ["Beton bertulang K-225", "Garansi 10 tahun"] },
    { title: "Dinding", items: ["Bata merah", "Plester & aci halus"] },
    { title: "Atap", items: ["Rangka baja ringan", "Genteng beton flat"] },
    { title: "Lantai", items: ["Granit 60x60 ruang utama", "Keramik 40x40 service area"] },
    { title: "Plafon", items: ["Gypsum board", "Finishing cat putih"] },
    { title: "Pintu & Jendela", items: ["Kusen aluminium", "Pintu engineering door"] },
    { title: "Sanitair", items: ["Closet duduk TOTO", "Kran dan shower berkualitas"] },
  ];

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="hero-grid">
            <div style={{ textAlign: "center" }} className="hero-text">
              <span style={{ display: "inline-block", padding: "8px 16px", backgroundColor: "rgba(201,169,98,0.2)", color: "#C9A962", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "20px" }}>
                Fasilitas Premium
              </span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "white", marginBottom: "20px", fontFamily: "'Playfair Display', serif" }}>
                Fasilitas Lengkap untuk Kenyamanan Keluarga
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto 32px", lineHeight: "1.8" }}>
                Setiap cluster Graha Residence dilengkapi dengan fasilitas premium untuk mendukung gaya hidup modern dan kenyamanan keluarga Anda
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
                {[
                  { value: "6+", label: "Fasilitas Utama" },
                  { value: "24/7", label: "Keamanan" },
                  { value: "100%", label: "Area Hijau" },
                ].map((stat, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px", fontWeight: "800", color: "#C9A962", fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                    <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", height: "400px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80" alt="Swimming Pool" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Fasilitas Utama</span>
            <h2 className="section-title">Fasilitas di Setiap Cluster</h2>
            <p className="section-subtitle">Fasilitas premium yang tersedia untuk seluruh penghuni</p>
          </div>
          <div className="grid-3" style={{ gap: "24px" }}>
            {facilities.map((f, i) => (
              <div key={i} style={{ position: "relative", height: "320px", borderRadius: "16px", overflow: "hidden" }}>
                <Image src={f.image} alt={f.name} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,58,95,0.95), rgba(30,58,95,0.2))" }} />
                <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                  <h3 style={{ color: "white", fontSize: "24px", fontWeight: "700", marginBottom: "12px", fontFamily: "'Playfair Display', serif" }}>{f.name}</h3>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: "1.6" }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="security-grid">
            <div>
              <span className="section-label">Keamanan</span>
              <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#1E3A5F", marginBottom: "20px", fontFamily: "'Playfair Display', serif" }}>
                Sistem Keamanan Terpadu
              </h2>
              <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.8", marginBottom: "32px" }}>
                Keamanan keluarga adalah prioritas utama kami. Setiap cluster dilengkapi dengan sistem keamanan berlapis untuk memastikan kenyamanan dan ketenangan Anda.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  { icon: Shield, title: "Security 24 Jam", desc: "Petugas keamanan terlatih" },
                  { icon: Users, title: "One Gate System", desc: "Akses terbatas & terkontrol" },
                  { title: "CCTV", desc: "Pengawasan 24 jam" },
                  { title: "Kartu Akses", desc: "Sistem akses digital" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle size={20} color="#4A7C59" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: "600", color: "#1E3A5F", marginBottom: "4px" }}>{item.title}</h4>
                      <p style={{ fontSize: "13px", color: "#64748b" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", height: "400px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Security" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Home Features */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Fitur Rumah</span>
            <h2 className="section-title">Kenyamanan di Dalam Rumah</h2>
            <p className="section-subtitle">Setiap unit dirancang untuk kenyamanan maksimal</p>
          </div>
          <div className="grid-4">
            {[
              { icon: TreePine, title: "Taman Hijau", desc: "Area hijau depan & belakang rumah untuk udara segar" },
              { icon: Car, title: "Carport Luas", desc: "Area parkir yang dapat menampung 2 mobil" },
              { icon: Zap, title: "Listrik Underground", desc: "Sistem kelistrikan bawah tanah yang aman" },
              { icon: Droplets, title: "Air Bersih PDAM", desc: "Sumber air bersih 24 jam tersedia" },
              { icon: Wifi, title: "Fiber Optic Ready", desc: "Jaringan internet fiber optic tersedia" },
              { icon: Sun, title: "Pencahayaan Alami", desc: "Desain dengan pencahayaan alami optimal" },
              { icon: Wind, title: "Ventilasi Baik", desc: "Sirkulasi udara yang baik di setiap ruangan" },
              { icon: Baby, title: "Kid-Friendly", desc: "Desain aman untuk anak-anak" },
            ].map((f, i) => (
              <div key={i} className="card" style={{ padding: "28px", textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <f.icon size={28} color="#1E3A5F" />
                </div>
                <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1E3A5F", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>{f.title}</h4>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.5" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Amenities */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Gaya Hidup</span>
            <h2 className="section-title">Fasilitas Pendukung Gaya Hidup</h2>
            <p className="section-subtitle">Berbagai fasilitas untuk menunjang aktivitas sehari-hari</p>
          </div>
          <div className="grid-2" style={{ gap: "32px" }}>
            {lifestyleAmenities.map((item, i) => (
              <div key={i} className="card" style={{ display: "flex", overflow: "hidden" }}>
                <div style={{ position: "relative", width: "200px", flexShrink: 0 }}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(201,169,98,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                    <item.icon size={24} color="#C9A962" />
                  </div>
                  <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#1E3A5F", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>{item.title}</h4>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House Specifications */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Spesifikasi</span>
            <h2 className="section-title">Spesifikasi Bangunan</h2>
            <p className="section-subtitle">Material berkualitas tinggi dengan standar konstruksi terbaik</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {houseSpecs.map((spec, i) => (
              <div key={i} className="card" style={{ padding: "24px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>{spec.title}</h4>
                <ul style={{ margin: 0, paddingLeft: "0", listStyle: "none" }}>
                  {spec.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                      <CheckCircle size={16} color="#4A7C59" />
                      <span style={{ fontSize: "14px", color: "#64748b" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Testimoni</span>
            <h2 className="section-title">Kata Penghuni Kami</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="card" style={{ padding: "32px" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} fill="#C9A962" color="#C9A962" />
                  ))}
                </div>
                <p style={{ fontSize: "15px", color: "#2D3748", lineHeight: "1.7", marginBottom: "20px" }}>"{t.message}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "48px", height: "48px", backgroundColor: "#1E3A5F", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "700", fontSize: "18px" }}>
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

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #C9A962 0%, #E5D4A1 50%, #C9A962 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "800", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
            Ingin Melihat Langsung Fasilitas Kami?
          </h2>
          <p style={{ fontSize: "16px", color: "#1E3A5F", opacity: 0.8, marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
            Jadwalkan kunjungan ke show unit dan lihat langsung fasilitas premium kami
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <a href="https://wa.me/628111GRAHA?text=Halo, saya ingin jadwalkan kunjungan ke show unit" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={20} />
              Jadwalkan Kunjungan
            </a>
            <Link href="/proyek" className="btn" style={{ backgroundColor: "white", color: "#1E3A5F" }}>
              Lihat Proyek Kami <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 1024px) {
          .hero-grid, .security-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-text {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
}
