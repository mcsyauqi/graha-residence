"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Filter, Grid, List, Search, Home, Building, Award, Clock, FileCheck, Key, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProyekPage() {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.status === filter);

  const faqs = [
    { q: "Bagaimana cara booking unit?", a: "Anda dapat melakukan booking dengan membayar booking fee sebesar Rp 5 juta - Rp 10 juta (tergantung proyek). Booking fee akan hangus jika pembeli membatalkan, namun dapat dikembalikan jika unit tidak tersedia." },
    { q: "Apakah bisa KPR?", a: "Ya, kami bekerja sama dengan 15+ bank rekanan untuk memudahkan proses KPR Anda. Tim kami akan membantu proses pengajuan dari awal hingga akad kredit." },
    { q: "Berapa lama proses pembangunan?", a: "Untuk unit ready stock, Anda bisa langsung serah terima. Untuk unit indent, proses pembangunan sekitar 12-18 bulan tergantung tipe unit." },
    { q: "Apakah ada cicilan DP?", a: "Ya, kami menyediakan program cicilan DP hingga 12x tanpa bunga untuk memudahkan Anda memiliki rumah impian." },
    { q: "Dokumen apa saja yang diperlukan untuk KPR?", a: "Dokumen yang diperlukan: KTP, KK, NPWP, slip gaji 3 bulan terakhir (karyawan) atau laporan keuangan (wiraswasta), rekening koran 3 bulan, dan surat keterangan kerja." },
  ];

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ display: "inline-block", padding: "8px 16px", backgroundColor: "rgba(201,169,98,0.2)", color: "#C9A962", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "20px" }}>
            Koleksi Properti
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "white", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
            Temukan Hunian Impian Anda
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
            Jelajahi berbagai pilihan proyek berkualitas dari Graha Residence di lokasi strategis Jabodetabek
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "48px 0", backgroundColor: "white", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="grid-4">
            {[
              { icon: Home, value: "4", label: "Proyek Aktif" },
              { icon: Building, value: "50+", label: "Tipe Unit" },
              { icon: Award, value: "680 Jt", label: "Harga Mulai" },
              { icon: MapPin, value: "4", label: "Lokasi Strategis" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center" }}>
                <div style={{ width: "56px", height: "56px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <s.icon size={28} color="#1E3A5F" />
                </div>
                <div>
                  <div style={{ fontSize: "28px", fontWeight: "800", color: "#1E3A5F", fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
                  <div style={{ fontSize: "14px", color: "#64748b" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ padding: "24px 0", backgroundColor: "#f8fafc", position: "sticky", top: "80px", zIndex: 100, borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <Filter size={20} color="#64748b" />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginRight: "8px" }}>Filter:</span>
              {[
                { value: "all", label: "Semua" },
                { value: "Now Selling", label: "Now Selling" },
                { value: "New Launching", label: "New Launching" },
                { value: "Limited Stock", label: "Limited Stock" },
                { value: "Coming Soon", label: "Coming Soon" },
              ].map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: "none",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: "pointer",
                    backgroundColor: filter === f.value ? "#1E3A5F" : "white",
                    color: filter === f.value ? "white" : "#64748b",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={() => setViewMode("grid")} style={{ padding: "8px", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: viewMode === "grid" ? "#1E3A5F" : "white" }}>
                <Grid size={20} color={viewMode === "grid" ? "white" : "#64748b"} />
              </button>
              <button onClick={() => setViewMode("list")} style={{ padding: "8px", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: viewMode === "list" ? "#1E3A5F" : "white" }}>
                <List size={20} color={viewMode === "list" ? "white" : "#64748b"} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section bg-white">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <Search size={48} color="#e2e8f0" style={{ marginBottom: "16px" }} />
              <p style={{ fontSize: "18px", color: "#64748b" }}>Tidak ada proyek dengan filter ini</p>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid-3" : ""} style={{ gap: "32px", display: viewMode === "list" ? "flex" : undefined, flexDirection: viewMode === "list" ? "column" : undefined }}>
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/proyek/${project.slug}`}>
                  <div className="card" style={{ height: "100%", display: viewMode === "list" ? "flex" : "block", flexDirection: viewMode === "list" ? "row" : undefined }}>
                    <div style={{ position: "relative", height: viewMode === "list" ? "200px" : "220px", width: viewMode === "list" ? "300px" : "100%", flexShrink: 0 }}>
                      <Image src={project.image} alt={project.name} fill style={{ objectFit: "cover" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                      <div style={{ position: "absolute", top: "16px", left: "16px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{
                          padding: "6px 14px", fontSize: "12px", fontWeight: "600", borderRadius: "20px",
                          backgroundColor: project.status === "Now Selling" ? "#4A7C59" : project.status === "New Launching" ? "#C9A962" : project.status === "Limited Stock" ? "#ef4444" : "#1E3A5F",
                          color: project.status === "New Launching" ? "#1E3A5F" : "white",
                        }}>
                          {project.status}
                        </span>
                        {project.badge && <span style={{ padding: "6px 14px", fontSize: "12px", fontWeight: "600", borderRadius: "20px", backgroundColor: "#C9A962", color: "#1E3A5F" }}>{project.badge}</span>}
                      </div>
                      <div style={{ position: "absolute", bottom: "16px", left: "16px" }}>
                        <span style={{ color: "white", fontWeight: "700", fontSize: "22px", fontFamily: "'Playfair Display', serif" }}>{project.priceDisplay}</span>
                      </div>
                    </div>
                    <div style={{ padding: "24px", flex: 1 }}>
                      <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#1E3A5F", fontFamily: "'Playfair Display', serif" }}>{project.name}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b", fontSize: "14px", marginBottom: "12px" }}>
                        <MapPin size={16} color="#C9A962" />
                        {project.location}
                      </div>
                      <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>{project.type}</p>
                      <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "16px" }}>Luas Tanah: {project.landArea}</p>
                      <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "16px" }}>{project.description}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                        {project.facilities.slice(0, 4).map((f, i) => (
                          <span key={i} style={{ padding: "4px 12px", backgroundColor: "#f1f5f9", color: "#64748b", borderRadius: "12px", fontSize: "12px" }}>{f}</span>
                        ))}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", color: "#1E3A5F", fontSize: "15px", fontWeight: "600" }}>
                        Lihat Detail <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Proses Pembelian</span>
            <h2 className="section-title">Langkah Mudah Memiliki Rumah</h2>
            <p className="section-subtitle">Proses transparan dan didampingi tim profesional kami</p>
          </div>
          <div className="grid-4">
            {[
              { icon: Search, step: "1", title: "Pilih Unit", desc: "Kunjungi show unit atau konsultasi dengan marketing untuk memilih tipe yang sesuai" },
              { icon: FileCheck, step: "2", title: "Booking & DP", desc: "Bayar booking fee dan cicilan DP sesuai skema yang dipilih" },
              { icon: Clock, step: "3", title: "Proses KPR", desc: "Tim kami membantu proses pengajuan KPR hingga akad kredit" },
              { icon: Key, step: "4", title: "Serah Terima", desc: "Terima kunci rumah impian Anda dan mulai tinggal!" },
            ].map((s, i) => (
              <div key={i} className="card" style={{ padding: "28px", textAlign: "center", position: "relative" }}>
                <div style={{ position: "absolute", top: "16px", right: "16px", width: "32px", height: "32px", backgroundColor: "#C9A962", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E3A5F", fontWeight: "700", fontSize: "14px" }}>
                  {s.step}
                </div>
                <div style={{ width: "64px", height: "64px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <s.icon size={32} color="#1E3A5F" />
                </div>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "12px", fontFamily: "'Playfair Display', serif" }}>{s.title}</h4>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Pertanyaan Umum</h2>
            <p className="section-subtitle">Jawaban untuk pertanyaan yang sering ditanyakan</p>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e2e8f0", marginBottom: "8px" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 0",
                    background: "none",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#1E3A5F" }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} color="#64748b" /> : <ChevronDown size={20} color="#64748b" />}
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: "20px" }}>
                    <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #C9A962 0%, #E5D4A1 50%, #C9A962 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: "800", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
            Butuh Bantuan Memilih Proyek?
          </h2>
          <p style={{ fontSize: "16px", color: "#1E3A5F", opacity: 0.8, marginBottom: "28px" }}>
            Tim marketing kami siap membantu Anda menemukan hunian yang sesuai kebutuhan
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <a href="https://wa.me/628111GRAHA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={20} />
              Konsultasi Gratis
            </a>
            <Link href="/simulasi-kpr" className="btn" style={{ backgroundColor: "white", color: "#1E3A5F" }}>
              Simulasi KPR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
