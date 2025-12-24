"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Ruler, Check, ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { projects } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div style={{ padding: "200px 20px", textAlign: "center" }}>Proyek tidak ditemukan</div>;
  }

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#f8fafc", padding: "16px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#64748b" }}>
            <Link href="/" style={{ color: "#64748b" }}>Beranda</Link>
            <span>/</span>
            <Link href="/proyek" style={{ color: "#64748b" }}>Proyek</Link>
            <span>/</span>
            <span style={{ color: "#1E3A5F", fontWeight: "500" }}>{project.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <section style={{ position: "relative", height: "400px" }}>
        <Image src={project.image} alt={project.name} fill style={{ objectFit: "cover" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
        <div style={{ position: "absolute", top: "20px", left: "20px", display: "flex", gap: "8px" }}>
          <span style={{
            padding: "8px 16px", fontSize: "13px", fontWeight: "600", borderRadius: "20px",
            backgroundColor: project.status === "Now Selling" ? "#4A7C59" : project.status === "New Launching" ? "#C9A962" : project.status === "Limited Stock" ? "#ef4444" : "#1E3A5F",
            color: project.status === "New Launching" ? "#1E3A5F" : "white",
          }}>
            {project.status}
          </span>
          {project.badge && <span style={{ padding: "8px 16px", fontSize: "13px", fontWeight: "600", borderRadius: "20px", backgroundColor: "#C9A962", color: "#1E3A5F" }}>{project.badge}</span>}
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }} className="detail-grid">
            {/* Main */}
            <div>
              <h1 style={{ fontSize: "32px", fontWeight: "800", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>{project.name}</h1>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b", fontSize: "16px", marginBottom: "24px" }}>
                <MapPin size={20} color="#C9A962" />
                {project.location}
              </div>
              <p style={{ fontSize: "16px", color: "#2D3748", lineHeight: "1.8", marginBottom: "32px" }}>{project.description}</p>

              {/* Features */}
              <div style={{ backgroundColor: "#f8fafc", padding: "24px", borderRadius: "16px", marginBottom: "32px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "20px", fontFamily: "'Playfair Display', serif" }}>Keunggulan Lokasi</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                  {project.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Check size={18} color="#4A7C59" />
                      <span style={{ fontSize: "14px", color: "#2D3748" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>Fasilitas Cluster</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.facilities.map((f, i) => (
                    <span key={i} style={{ padding: "8px 16px", backgroundColor: "rgba(30,58,95,0.1)", color: "#1E3A5F", borderRadius: "20px", fontSize: "14px", fontWeight: "500" }}>{f}</span>
                  ))}
                </div>
              </div>

              {/* Unit Types */}
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "20px", fontFamily: "'Playfair Display', serif" }}>Pilihan Tipe Unit</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {project.unitTypes.map((unit, i) => (
                    <div key={i} className="card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
                        <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", fontFamily: "'Playfair Display', serif" }}>{unit.name}</h4>
                        <span style={{ fontSize: "20px", fontWeight: "700", color: "#C9A962", fontFamily: "'Playfair Display', serif" }}>{formatCurrency(unit.price)}</span>
                      </div>
                      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#64748b" }}>
                          <Bed size={18} color="#1E3A5F" />
                          {unit.bedrooms} Kamar Tidur
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#64748b" }}>
                          <Bath size={18} color="#1E3A5F" />
                          {unit.bathrooms} Kamar Mandi
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#64748b" }}>
                          <Ruler size={18} color="#1E3A5F" />
                          LT: {unit.landArea}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#64748b" }}>
                          <Ruler size={18} color="#1E3A5F" />
                          LB: {unit.buildingArea}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="card" style={{ padding: "24px", position: "sticky", top: "100px" }}>
                <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>Harga mulai dari</p>
                <p style={{ fontSize: "28px", fontWeight: "800", color: "#1E3A5F", marginBottom: "24px", fontFamily: "'Playfair Display', serif" }}>{project.priceDisplay}</p>

                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "20px", marginBottom: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ color: "#64748b", fontSize: "14px" }}>Tipe</span>
                    <span style={{ fontWeight: "600", fontSize: "14px", color: "#1E3A5F" }}>{project.type}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ color: "#64748b", fontSize: "14px" }}>Luas Tanah</span>
                    <span style={{ fontWeight: "600", fontSize: "14px", color: "#1E3A5F" }}>{project.landArea}</span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <a href={`https://wa.me/628111GRAHA?text=Halo, saya tertarik dengan ${project.name}`} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: "#25D366", color: "white", width: "100%" }}>
                    <MessageCircle size={20} />
                    Chat WhatsApp
                  </a>
                  <a href="tel:02155512345" className="btn btn-primary" style={{ width: "100%" }}>
                    <Phone size={20} />
                    Hubungi Marketing
                  </a>
                </div>

                <Link href="/simulasi-kpr" style={{ display: "block", textAlign: "center", marginTop: "16px", fontSize: "14px", color: "#1E3A5F", fontWeight: "500" }}>
                  Simulasi KPR untuk properti ini
                </Link>
              </div>
            </div>
          </div>

          <Link href="/proyek" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "48px", color: "#1E3A5F", fontWeight: "500" }}>
            <ArrowLeft size={20} />
            Kembali ke Daftar Proyek
          </Link>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 1024px) {
          .detail-grid {
            grid-template-columns: 1fr 380px !important;
          }
        }
      `}</style>
    </div>
  );
}
