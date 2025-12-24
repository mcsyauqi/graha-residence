"use client";

import Image from "next/image";
import { Award, Users, Building, Heart, Target, Eye, Shield, Lightbulb } from "lucide-react";

export default function TentangPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="about-grid">
            <div style={{ textAlign: "center" }} className="about-text">
              <span style={{ display: "inline-block", padding: "8px 16px", backgroundColor: "rgba(201,169,98,0.2)", color: "#C9A962", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "20px" }}>
                Tentang Kami
              </span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "white", marginBottom: "20px", fontFamily: "'Playfair Display', serif" }}>
                Graha Residence
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", lineHeight: "1.8" }}>
                Developer properti terpercaya dengan 19 tahun pengalaman membangun hunian berkualitas untuk keluarga Indonesia. Kami telah dipercaya oleh lebih dari 20.000 keluarga.
              </p>
            </div>
            <div style={{ position: "relative", height: "300px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Building" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "48px 0", backgroundColor: "white" }}>
        <div className="container">
          <div className="grid-4">
            {[
              { icon: Building, value: "15+", label: "Proyek Selesai" },
              { icon: Users, value: "20.000+", label: "Unit Terjual" },
              { icon: Award, value: "19", label: "Tahun Pengalaman" },
              { icon: Heart, value: "98%", label: "Kepuasan Pelanggan" },
            ].map((s, i) => (
              <div key={i} className="card" style={{ padding: "24px", textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <s.icon size={28} color="#1E3A5F" />
                </div>
                <div style={{ fontSize: "32px", fontWeight: "800", color: "#1E3A5F", marginBottom: "4px", fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
                <div style={{ fontSize: "14px", color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="section bg-gray">
        <div className="container">
          <div className="grid-2" style={{ gap: "32px" }}>
            <div className="card" style={{ padding: "32px" }}>
              <div style={{ width: "64px", height: "64px", backgroundColor: "rgba(201,169,98,0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <Eye size={32} color="#C9A962" />
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>Visi Kami</h3>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7" }}>
                Menjadi developer properti terdepan yang menghadirkan hunian berkualitas, terjangkau, dan berkelanjutan untuk keluarga Indonesia.
              </p>
            </div>
            <div className="card" style={{ padding: "32px" }}>
              <div style={{ width: "64px", height: "64px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <Target size={32} color="#1E3A5F" />
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>Misi Kami</h3>
              <ul style={{ fontSize: "15px", color: "#64748b", lineHeight: "2", paddingLeft: "20px" }}>
                <li>Membangun hunian berkualitas dengan standar konstruksi terbaik</li>
                <li>Menyediakan skema pembayaran yang fleksibel dan terjangkau</li>
                <li>Menciptakan lingkungan yang aman, nyaman, dan asri</li>
                <li>Memberikan pelayanan terbaik sebelum dan sesudah penjualan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Prinsip</span>
            <h2 className="section-title">Nilai-Nilai Kami</h2>
          </div>
          <div className="grid-4">
            {[
              { icon: Shield, title: "Integritas", desc: "Menjalankan bisnis dengan jujur dan transparan" },
              { icon: Award, title: "Kualitas", desc: "Mengutamakan standar tertinggi dalam setiap proyek" },
              { icon: Lightbulb, title: "Inovasi", desc: "Terus berinovasi untuk memenuhi kebutuhan pelanggan" },
              { icon: Heart, title: "Kepedulian", desc: "Peduli terhadap pelanggan dan lingkungan" },
            ].map((v, i) => (
              <div key={i} className="card" style={{ padding: "28px", textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", backgroundColor: "#1E3A5F", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <v.icon size={28} color="white" />
                </div>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>{v.title}</h4>
                <p style={{ fontSize: "14px", color: "#64748b" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-text {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
}
