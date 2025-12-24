"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TreePine, Car, Zap, Droplets } from "lucide-react";
import { facilities } from "@/lib/data";

export default function FasilitasPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ display: "inline-block", padding: "8px 16px", backgroundColor: "rgba(201,169,98,0.2)", color: "#C9A962", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "20px" }}>
            Fasilitas Premium
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "white", marginBottom: "16px", fontFamily: "Montserrat" }}>
            Fasilitas Lengkap untuk Kenyamanan Keluarga
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
            Nikmati berbagai fasilitas premium yang tersedia di setiap cluster Graha Residence
          </p>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Fasilitas Utama</span>
            <h2 className="section-title">Fasilitas di Setiap Cluster</h2>
          </div>
          <div className="grid-3" style={{ gap: "24px" }}>
            {facilities.map((f, i) => (
              <div key={i} style={{ position: "relative", height: "280px", borderRadius: "16px", overflow: "hidden" }}>
                <Image src={f.image} alt={f.name} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,58,95,0.95), rgba(30,58,95,0.3))" }} />
                <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                  <h3 style={{ color: "white", fontSize: "22px", fontWeight: "700", marginBottom: "8px", fontFamily: "Montserrat" }}>{f.name}</h3>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: "1.6" }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Fitur Tambahan</span>
            <h2 className="section-title">Kenyamanan Hidup Sehari-hari</h2>
          </div>
          <div className="grid-4">
            {[
              { icon: TreePine, title: "Taman Hijau", desc: "Area hijau yang luas untuk udara segar" },
              { icon: Car, title: "Carport Luas", desc: "Dapat menampung 2 mobil" },
              { icon: Zap, title: "Listrik Underground", desc: "Sistem kelistrikan bawah tanah" },
              { icon: Droplets, title: "Air Bersih PDAM", desc: "Sumber air bersih 24 jam" },
            ].map((f, i) => (
              <div key={i} className="card" style={{ padding: "28px", textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <f.icon size={28} color="#1E3A5F" />
                </div>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "8px", fontFamily: "Montserrat" }}>{f.title}</h4>
                <p style={{ fontSize: "14px", color: "#64748b" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #C9A962 0%, #E5D4A1 50%, #C9A962 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: "800", color: "#1E3A5F", marginBottom: "24px", fontFamily: "Montserrat" }}>
            Tertarik dengan Fasilitas Kami?
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <Link href="/proyek" className="btn btn-primary">
              Lihat Proyek Kami <ArrowRight size={20} />
            </Link>
            <a href="https://wa.me/628111GRAHA" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: "white", color: "#1E3A5F" }}>
              Jadwalkan Kunjungan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
