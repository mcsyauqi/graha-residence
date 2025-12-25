"use client";

import { useState } from "react";
import { Calculator, MessageCircle, Check } from "lucide-react";
import { formatCurrency, calculateKPR } from "@/lib/utils";
import { bankPartners } from "@/lib/data";

export default function SimulasiKPRPage() {
  const [harga, setHarga] = useState(1000000000);
  const [dp, setDp] = useState(20);
  const [tenor, setTenor] = useState(15);
  const [bunga, setBunga] = useState(7);

  const result = calculateKPR(harga, dp, tenor, bunga);

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", backgroundColor: "rgba(201,169,98,0.2)", borderRadius: "20px", marginBottom: "20px" }}>
            <Calculator size={18} color="#C9A962" />
            <span style={{ color: "#C9A962", fontSize: "14px", fontWeight: "600" }}>Kalkulator KPR</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "white", marginBottom: "16px", fontFamily: "'Cormorant Garamond', serif" }}>
            Simulasi Kredit Pemilikan Rumah
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
            Hitung estimasi cicilan bulanan Anda dengan kalkulator KPR interaktif
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto", backgroundColor: "white", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="kpr-grid">
              {/* Form */}
              <div style={{ padding: "32px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1E3A5F", marginBottom: "28px", fontFamily: "'Cormorant Garamond', serif" }}>Detail Simulasi KPR</h3>

                <div style={{ marginBottom: "28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>Harga Properti</label>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>{formatCurrency(harga)}</span>
                  </div>
                  <input type="range" min={500000000} max={3000000000} step={50000000} value={harga} onChange={(e) => setHarga(Number(e.target.value))} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#94a3b8", marginTop: "6px" }}>
                    <span>500 Juta</span>
                    <span>3 Miliar</span>
                  </div>
                </div>

                <div style={{ marginBottom: "28px" }}>
                  <label style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F", display: "block", marginBottom: "10px" }}>Uang Muka (DP): {dp}%</label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {[5, 10, 15, 20, 30].map((v) => (
                      <button key={v} onClick={() => setDp(v)} style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "none", fontWeight: "600", cursor: "pointer", backgroundColor: dp === v ? "#1E3A5F" : "#f1f5f9", color: dp === v ? "white" : "#1E3A5F" }}>
                        {v}%
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "28px" }}>
                  <label style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F", display: "block", marginBottom: "10px" }}>Tenor: {tenor} Tahun</label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {[5, 10, 15, 20].map((v) => (
                      <button key={v} onClick={() => setTenor(v)} style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "none", fontWeight: "600", cursor: "pointer", backgroundColor: tenor === v ? "#1E3A5F" : "#f1f5f9", color: tenor === v ? "white" : "#1E3A5F" }}>
                        {v} Th
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>Suku Bunga</label>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>{bunga}% / tahun</span>
                  </div>
                  <input type="range" min={5} max={12} step={0.5} value={bunga} onChange={(e) => setBunga(Number(e.target.value))} />
                </div>
              </div>

              {/* Result */}
              <div style={{ padding: "32px", backgroundColor: "#1E3A5F", color: "white" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "28px", fontFamily: "'Cormorant Garamond', serif", color: "white" }}>Estimasi Cicilan Anda</h3>

                <div style={{ marginBottom: "28px" }}>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>Cicilan Per Bulan</p>
                  <p style={{ fontSize: "40px", fontWeight: "800", color: "#C9A962", fontFamily: "'Cormorant Garamond', serif" }}>{formatCurrency(result.cicilanPerBulan)}</p>
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "20px", marginBottom: "28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Total Uang Muka</span>
                    <span style={{ fontWeight: "600", fontSize: "14px" }}>{formatCurrency(result.totalUangMuka)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Total Pinjaman</span>
                    <span style={{ fontWeight: "600", fontSize: "14px" }}>{formatCurrency(result.totalPinjaman)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Tenor</span>
                    <span style={{ fontWeight: "600", fontSize: "14px" }}>{tenor} Tahun ({tenor * 12} bulan)</span>
                  </div>
                </div>

                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "20px" }}>
                  *Simulasi bersifat estimasi. Cicilan aktual dapat berbeda tergantung kebijakan bank.
                </p>

                <a href="https://wa.me/628111GRAHA?text=Halo, saya tertarik simulasi KPR" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: "100%" }}>
                  <MessageCircle size={20} />
                  Konsultasi Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Partners */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Partner</span>
            <h2 className="section-title">Bank Rekanan Kami</h2>
            <p className="section-subtitle">Kami bekerja sama dengan 10+ bank terkemuka untuk kemudahan KPR Anda</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px" }}>
            {bankPartners.map((bank, i) => (
              <div key={i} style={{ padding: "16px", backgroundColor: "#f8fafc", borderRadius: "12px", textAlign: "center", fontSize: "14px", fontWeight: "500", color: "#1E3A5F" }}>
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Keuntungan</span>
            <h2 className="section-title">Keuntungan KPR di Graha Residence</h2>
          </div>
          <div className="grid-3">
            {[
              { title: "Proses Cepat", desc: "Proses pengajuan KPR yang cepat dengan tim berpengalaman" },
              { title: "Bunga Kompetitif", desc: "Dapatkan bunga KPR yang kompetitif dari bank rekanan" },
              { title: "DP Ringan", desc: "Uang muka mulai dari 5% dengan cicilan terjangkau" },
              { title: "Tenor Fleksibel", desc: "Pilihan tenor mulai dari 5 hingga 20 tahun" },
              { title: "Gratis Biaya Admin", desc: "Program khusus bebas biaya administrasi" },
              { title: "Konsultasi Gratis", desc: "Tim marketing siap membantu tanpa biaya" },
            ].map((b, i) => (
              <div key={i} className="card" style={{ padding: "24px", display: "flex", gap: "16px" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "#4A7C59", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={20} color="white" />
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1E3A5F", marginBottom: "6px", fontFamily: "'Cormorant Garamond', serif" }}>{b.title}</h4>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 768px) {
          .kpr-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
