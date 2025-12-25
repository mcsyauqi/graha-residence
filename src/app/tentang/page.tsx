"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, Users, Building, Heart, Target, Eye, Shield, Lightbulb, CheckCircle, MapPin, Calendar, Handshake, Trophy, Star, MessageCircle, ArrowRight } from "lucide-react";

export default function TentangPage() {
  const timeline = [
    { year: "2005", title: "Berdiri", desc: "PT Graha Residence Indonesia didirikan dengan visi membangun hunian berkualitas" },
    { year: "2008", title: "Proyek Pertama", desc: "Meluncurkan proyek pertama Graha Residence Depok dengan 200 unit" },
    { year: "2012", title: "Ekspansi", desc: "Memperluas area pengembangan ke Bekasi dan Serpong" },
    { year: "2015", title: "10.000 Unit", desc: "Mencapai milestone 10.000 unit terjual" },
    { year: "2020", title: "Award", desc: "Meraih penghargaan Best Developer dari Property Awards" },
    { year: "2024", title: "20.000 Unit", desc: "Sukses menjual lebih dari 20.000 unit hunian" },
  ];

  const team = [
    { name: "Ir. Bambang Sutrisno", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
    { name: "Rina Wijaya, MBA", role: "Chief Marketing Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
    { name: "Drs. Agus Pratama", role: "Chief Operations Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
    { name: "Ir. Dewi Kartika", role: "Chief Technical Officer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  ];

  const awards = [
    { year: "2024", title: "Best Property Developer", org: "Indonesia Property Awards" },
    { year: "2023", title: "Most Trusted Developer", org: "Rumah.com" },
    { year: "2022", title: "Green Building Award", org: "Green Building Council" },
    { year: "2021", title: "Customer Excellence Award", org: "Property & Bank" },
    { year: "2020", title: "Best Housing Development", org: "Asia Pacific Property Awards" },
  ];

  const partners = [
    "Bank Mandiri", "Bank BCA", "Bank BNI", "Bank BRI", "Bank BTN",
    "Semen Indonesia", "Toto Indonesia", "Dulux", "Teka", "Panasonic"
  ];

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="about-grid">
            <div style={{ textAlign: "center" }} className="about-text">
              <span style={{ display: "inline-block", padding: "8px 16px", backgroundColor: "rgba(201,169,98,0.2)", color: "#C9A962", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "20px" }}>
                Tentang Kami
              </span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "white", marginBottom: "20px", fontFamily: "'Playfair Display', serif" }}>
                Membangun Hunian Impian Sejak 2005
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", lineHeight: "1.8", marginBottom: "32px" }}>
                PT Graha Residence Indonesia adalah developer properti terpercaya dengan pengalaman 19 tahun membangun hunian berkualitas. Kami telah dipercaya oleh lebih dari 20.000 keluarga Indonesia untuk mewujudkan rumah impian mereka.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }} className="about-cta">
                <Link href="/proyek" className="btn btn-secondary">
                  Lihat Proyek Kami
                </Link>
                <a href="https://wa.me/628111GRAHA" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div style={{ position: "relative", height: "400px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Building" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", backgroundColor: "white", borderRadius: "12px", padding: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "#C9A962", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Trophy size={24} color="white" />
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>Penghargaan</p>
                  <p style={{ fontSize: "16px", fontWeight: "700", color: "#1E3A5F" }}>Best Developer 2024</p>
                </div>
              </div>
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

      {/* Story */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="story-grid">
            <div>
              <span className="section-label">Cerita Kami</span>
              <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#1E3A5F", marginBottom: "24px", fontFamily: "'Playfair Display', serif" }}>
                Perjalanan Membangun Indonesia
              </h2>
              <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.8", marginBottom: "20px" }}>
                Bermula dari sebuah impian sederhana untuk membantu keluarga Indonesia memiliki rumah yang berkualitas dengan harga terjangkau, Graha Residence didirikan pada tahun 2005 oleh Ir. Bambang Sutrisno.
              </p>
              <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.8", marginBottom: "20px" }}>
                Dengan pengalaman lebih dari 19 tahun di industri properti, kami telah berhasil membangun lebih dari 15 proyek perumahan di area Jabodetabek dan menjual lebih dari 20.000 unit rumah kepada keluarga Indonesia.
              </p>
              <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.8", marginBottom: "28px" }}>
                Komitmen kami adalah memberikan hunian terbaik dengan kualitas konstruksi premium, legalitas terjamin, dan layanan purna jual yang memuaskan.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
                {[
                  { icon: CheckCircle, text: "Legalitas Lengkap & Terjamin" },
                  { icon: CheckCircle, text: "Garansi Struktur 10 Tahun" },
                  { icon: CheckCircle, text: "Layanan Purna Jual" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <item.icon size={20} color="#4A7C59" />
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#1E3A5F" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", height: "400px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Our Story" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Perjalanan</span>
            <h2 className="section-title">Milestone Kami</h2>
            <p className="section-subtitle">Jejak perjalanan Graha Residence dalam membangun hunian berkualitas</p>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", backgroundColor: "#e2e8f0", transform: "translateX(-50%)" }} className="timeline-line" />
            {timeline.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: "32px", flexDirection: i % 2 === 0 ? "row" : "row-reverse" }} className="timeline-item">
                <div style={{ flex: 1, padding: "0 32px", textAlign: i % 2 === 0 ? "right" : "left" }} className="timeline-content">
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#C9A962" }}>{item.year}</span>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>{item.title}</h4>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>{item.desc}</p>
                </div>
                <div style={{ width: "16px", height: "16px", backgroundColor: "#1E3A5F", borderRadius: "50%", border: "4px solid white", boxShadow: "0 0 0 4px #e2e8f0", zIndex: 1, flexShrink: 0 }} />
                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Visi & Misi</span>
            <h2 className="section-title">Komitmen Kami</h2>
          </div>
          <div className="grid-2" style={{ gap: "32px" }}>
            <div className="card" style={{ padding: "32px" }}>
              <div style={{ width: "64px", height: "64px", backgroundColor: "rgba(201,169,98,0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <Eye size={32} color="#C9A962" />
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>Visi Kami</h3>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7" }}>
                Menjadi developer properti terdepan di Indonesia yang menghadirkan hunian berkualitas tinggi, terjangkau, dan berkelanjutan untuk setiap keluarga Indonesia. Kami berkomitmen untuk terus berinovasi dan memberikan nilai terbaik bagi pelanggan.
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
            <p className="section-subtitle">Prinsip yang menjadi landasan dalam setiap langkah kami</p>
          </div>
          <div className="grid-4">
            {[
              { icon: Shield, title: "Integritas", desc: "Menjalankan bisnis dengan jujur, transparan, dan bertanggung jawab kepada seluruh stakeholder" },
              { icon: Award, title: "Kualitas", desc: "Mengutamakan standar tertinggi dalam setiap proyek, dari material hingga pengerjaan" },
              { icon: Lightbulb, title: "Inovasi", desc: "Terus berinovasi untuk memenuhi kebutuhan dan ekspektasi pelanggan yang berkembang" },
              { icon: Heart, title: "Kepedulian", desc: "Peduli terhadap pelanggan, karyawan, masyarakat, dan kelestarian lingkungan" },
            ].map((v, i) => (
              <div key={i} className="card" style={{ padding: "28px", textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", backgroundColor: "#1E3A5F", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <v.icon size={28} color="white" />
                </div>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>{v.title}</h4>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Tim Kami</span>
            <h2 className="section-title">Dipimpin oleh Profesional</h2>
            <p className="section-subtitle">Tim manajemen berpengalaman yang berkomitmen pada kualitas</p>
          </div>
          <div className="grid-4">
            {team.map((member, i) => (
              <div key={i} className="card" style={{ overflow: "hidden", textAlign: "center" }}>
                <div style={{ position: "relative", height: "250px" }}>
                  <Image src={member.image} alt={member.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "4px", fontFamily: "'Playfair Display', serif" }}>{member.name}</h4>
                  <p style={{ fontSize: "14px", color: "#C9A962", fontWeight: "500" }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Penghargaan</span>
            <h2 className="section-title">Prestasi Kami</h2>
            <p className="section-subtitle">Pengakuan atas dedikasi kami dalam membangun hunian berkualitas</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {awards.map((award, i) => (
              <div key={i} className="card" style={{ padding: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "56px", height: "56px", backgroundColor: "rgba(201,169,98,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Trophy size={28} color="#C9A962" />
                </div>
                <div>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#C9A962" }}>{award.year}</span>
                  <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1E3A5F", marginBottom: "4px" }}>{award.title}</h4>
                  <p style={{ fontSize: "13px", color: "#64748b" }}>{award.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Partner</span>
            <h2 className="section-title">Mitra Kerja Kami</h2>
            <p className="section-subtitle">Bekerja sama dengan brand terpercaya untuk kualitas terbaik</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
            {partners.map((partner, i) => (
              <div key={i} style={{ padding: "24px 16px", backgroundColor: "white", borderRadius: "12px", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#1E3A5F" }}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "800", color: "white", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
            Tertarik Bekerja Sama dengan Kami?
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
            Hubungi kami untuk informasi lebih lanjut tentang proyek atau kerjasama
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <Link href="/hubungi" className="btn btn-secondary">
              Hubungi Kami <ArrowRight size={20} />
            </Link>
            <Link href="/proyek" className="btn btn-outline">
              Lihat Proyek
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 1024px) {
          .about-grid, .story-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-text {
            text-align: left !important;
          }
          .about-cta {
            justify-content: flex-start !important;
          }
        }
        @media (max-width: 768px) {
          .timeline-line {
            left: 8px !important;
          }
          .timeline-item {
            flex-direction: row !important;
          }
          .timeline-content {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
}
