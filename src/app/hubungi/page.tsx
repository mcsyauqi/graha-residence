"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle, Building, Users, Award, ArrowRight, ChevronDown, ChevronUp, Star, Instagram, Facebook } from "lucide-react";
import { companyInfo, testimonials } from "@/lib/data";

export default function HubungiPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    proyek: "",
    pesan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ nama: "", email: "", telepon: "", proyek: "", pesan: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    { q: "Bagaimana cara booking unit?", a: "Anda dapat melakukan booking dengan menghubungi tim marketing kami melalui WhatsApp atau mengunjungi langsung kantor pemasaran. Booking fee dimulai dari Rp 5 juta." },
    { q: "Apakah bisa KPR?", a: "Ya, kami bekerja sama dengan 15+ bank rekanan untuk memudahkan proses KPR Anda. Tim kami akan membantu proses pengajuan dari awal hingga akad kredit." },
    { q: "Berapa lama proses serah terima?", a: "Untuk unit ready stock, serah terima bisa dilakukan 2-4 minggu setelah pelunasan. Untuk unit indent, proses pembangunan sekitar 12-18 bulan." },
    { q: "Apakah ada show unit?", a: "Ya, kami memiliki show unit di setiap lokasi proyek. Hubungi marketing untuk menjadwalkan kunjungan." },
  ];

  const showUnits = [
    { name: "Graha Residence Serpong", address: "Jl. Raya Serpong Km 7, Tangerang Selatan", hours: "08:00 - 17:00" },
    { name: "Graha Residence Bekasi", address: "Jl. Raya Bekasi Km 21, Bekasi", hours: "08:00 - 17:00" },
    { name: "Graha Residence Depok", address: "Jl. Margonda Raya No. 100, Depok", hours: "08:00 - 17:00" },
    { name: "Graha Residence Bogor", address: "Jl. Raya Bogor Km 30, Bogor", hours: "09:00 - 16:00" },
  ];

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="hero-grid">
            <div style={{ textAlign: "center" }} className="hero-text">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", backgroundColor: "rgba(201,169,98,0.2)", borderRadius: "20px", marginBottom: "20px" }}>
                <MessageCircle size={18} color="#C9A962" />
                <span style={{ color: "#C9A962", fontSize: "14px", fontWeight: "600" }}>Hubungi Kami</span>
              </div>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "white", marginBottom: "20px", fontFamily: "'Cormorant Garamond', serif" }}>
                Kami Siap Membantu Anda
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto 32px", lineHeight: "1.8" }}>
                Tim marketing profesional kami siap menjawab semua pertanyaan dan membantu Anda menemukan hunian impian keluarga
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
                {[
                  { icon: Building, value: "4", label: "Show Unit" },
                  { icon: Users, value: "20+", label: "Marketing" },
                  { icon: Award, value: "24/7", label: "Layanan" },
                ].map((stat, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px", fontWeight: "800", color: "#C9A962", fontFamily: "'Cormorant Garamond', serif" }}>{stat.value}</div>
                    <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", height: "400px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" alt="Contact" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section style={{ padding: "0", marginTop: "-48px", position: "relative", zIndex: 10 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
            <a href="https://wa.me/628111GRAHA" target="_blank" rel="noopener noreferrer" className="card" style={{ padding: "24px", display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#25D366", color: "white" }}>
              <MessageCircle size={32} />
              <div>
                <p style={{ fontSize: "14px", opacity: 0.9 }}>Chat Langsung</p>
                <p style={{ fontSize: "18px", fontWeight: "700" }}>WhatsApp</p>
              </div>
            </a>
            <a href="tel:02155512345" className="card" style={{ padding: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Phone size={24} color="#1E3A5F" />
              </div>
              <div>
                <p style={{ fontSize: "14px", color: "#64748b" }}>Telepon</p>
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F" }}>{companyInfo.phone}</p>
              </div>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="card" style={{ padding: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Mail size={24} color="#1E3A5F" />
              </div>
              <div>
                <p style={{ fontSize: "14px", color: "#64748b" }}>Email</p>
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F" }}>{companyInfo.email}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }} className="contact-grid">
            {/* Form */}
            <div className="card" style={{ padding: "40px" }}>
              <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#1E3A5F", marginBottom: "12px", fontFamily: "'Cormorant Garamond', serif" }}>
                Kirim Pesan
              </h3>
              <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "32px" }}>
                Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 1x24 jam
              </p>

              {isSubmitted ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{ width: "80px", height: "80px", backgroundColor: "rgba(74,124,89,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <CheckCircle size={40} color="#4A7C59" />
                  </div>
                  <h4 style={{ fontSize: "24px", fontWeight: "700", color: "#1E3A5F", marginBottom: "12px", fontFamily: "'Cormorant Garamond', serif" }}>
                    Pesan Terkirim!
                  </h4>
                  <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "24px", maxWidth: "400px", margin: "0 auto 24px" }}>
                    Terima kasih telah menghubungi kami. Tim marketing akan segera membalas pesan Anda.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} style={{ padding: "14px 28px", backgroundColor: "#1E3A5F", color: "white", border: "none", borderRadius: "10px", fontWeight: "600", cursor: "pointer" }}>
                    Kirim Pesan Lagi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "24px" }}>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginBottom: "8px" }}>Nama Lengkap *</label>
                    <input type="text" name="nama" value={formData.nama} onChange={handleChange} required placeholder="Masukkan nama lengkap" style={{ width: "100%", padding: "14px 16px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "15px", outline: "none" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }} className="form-grid">
                    <div>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginBottom: "8px" }}>Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@contoh.com" style={{ width: "100%", padding: "14px 16px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "15px", outline: "none" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginBottom: "8px" }}>No. Telepon *</label>
                      <input type="tel" name="telepon" value={formData.telepon} onChange={handleChange} required placeholder="08xxxxxxxxxx" style={{ width: "100%", padding: "14px 16px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "15px", outline: "none" }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: "24px" }}>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginBottom: "8px" }}>Proyek yang Diminati</label>
                    <select name="proyek" value={formData.proyek} onChange={handleChange} style={{ width: "100%", padding: "14px 16px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "15px", outline: "none", backgroundColor: "white" }}>
                      <option value="">Pilih proyek...</option>
                      <option value="serpong">Graha Residence Serpong</option>
                      <option value="bekasi">Graha Residence Bekasi</option>
                      <option value="depok">Graha Residence Depok</option>
                      <option value="bogor">Graha Residence Bogor</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: "28px" }}>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginBottom: "8px" }}>Pesan *</label>
                    <textarea name="pesan" value={formData.pesan} onChange={handleChange} required rows={5} placeholder="Tulis pesan atau pertanyaan Anda..." style={{ width: "100%", padding: "14px 16px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "15px", outline: "none", resize: "vertical" }} />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: "100%", opacity: isSubmitting ? 0.7 : 1 }}>
                    {isSubmitting ? "Mengirim..." : (<><Send size={20} /> Kirim Pesan</>)}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1E3A5F", marginBottom: "24px", fontFamily: "'Cormorant Garamond', serif" }}>
                Informasi Kontak
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                <div className="card" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={24} color="#1E3A5F" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1E3A5F", marginBottom: "4px" }}>Kantor Pusat</h4>
                    <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{companyInfo.address}</p>
                  </div>
                </div>
                <div className="card" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(201,169,98,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Clock size={24} color="#C9A962" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1E3A5F", marginBottom: "4px" }}>Jam Operasional</h4>
                    <p style={{ fontSize: "14px", color: "#64748b" }}>Senin - Jumat: 08:00 - 17:00</p>
                    <p style={{ fontSize: "14px", color: "#64748b" }}>Sabtu - Minggu: 09:00 - 15:00</p>
                  </div>
                </div>
              </div>

              <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#1E3A5F", marginBottom: "16px" }}>Ikuti Kami</h4>
              <div style={{ display: "flex", gap: "12px" }}>
                <a href="#" style={{ width: "48px", height: "48px", backgroundColor: "#1E3A5F", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Instagram size={24} color="white" />
                </a>
                <a href="#" style={{ width: "48px", height: "48px", backgroundColor: "#1E3A5F", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Facebook size={24} color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show Units */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Kunjungi Kami</span>
            <h2 className="section-title">Lokasi Show Unit</h2>
            <p className="section-subtitle">Kunjungi show unit terdekat untuk melihat langsung hunian impian Anda</p>
          </div>
          <div className="grid-2" style={{ gap: "24px" }}>
            {showUnits.map((unit, i) => (
              <div key={i} className="card" style={{ padding: "24px", display: "flex", gap: "16px" }}>
                <div style={{ width: "56px", height: "56px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Building size={28} color="#1E3A5F" />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1E3A5F", marginBottom: "8px", fontFamily: "'Cormorant Garamond', serif" }}>{unit.name}</h4>
                  <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>{unit.address}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#C9A962" }}>
                    <Clock size={14} />
                    <span>{unit.hours}</span>
                  </div>
                </div>
                <a href={`https://wa.me/628111GRAHA?text=Halo, saya ingin jadwalkan kunjungan ke ${unit.name}`} target="_blank" rel="noopener noreferrer" style={{ alignSelf: "center" }}>
                  <ArrowRight size={20} color="#1E3A5F" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Lokasi</span>
            <h2 className="section-title">Kantor Pusat Kami</h2>
          </div>
          <div style={{ borderRadius: "16px", overflow: "hidden", height: "400px", backgroundColor: "#e2e8f0" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2894!2d106.8023!3d-6.2256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMzIuMiJTIDEwNsKwNDgnMDguMyJF!5e0!3m2!1sen!2sid!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Pertanyaan Umum</h2>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ backgroundColor: "#f8fafc", borderRadius: "12px", marginBottom: "12px", overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", padding: "20px 24px", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left" }}>
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

      {/* Testimonials */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Testimoni</span>
            <h2 className="section-title">Apa Kata Mereka</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[1, 2, 3, 4, 5].map((s) => (<Star key={s} size={16} fill="#C9A962" color="#C9A962" />))}
                </div>
                <p style={{ fontSize: "15px", color: "#2D3748", lineHeight: "1.7", marginBottom: "20px" }}>"{t.message}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "44px", height: "44px", backgroundColor: "#1E3A5F", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "700" }}>{t.name.charAt(0)}</div>
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

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #C9A962 0%, #E5D4A1 50%, #C9A962 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "800", color: "#1E3A5F", marginBottom: "16px", fontFamily: "'Cormorant Garamond', serif" }}>
            Siap Wujudkan Rumah Impian?
          </h2>
          <p style={{ fontSize: "16px", color: "#1E3A5F", opacity: 0.8, marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
            Jangan tunda lagi! Hubungi tim marketing kami sekarang
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <a href="https://wa.me/628111GRAHA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={20} />
              Chat WhatsApp
            </a>
            <Link href="/proyek" className="btn" style={{ backgroundColor: "white", color: "#1E3A5F" }}>
              Lihat Proyek <ArrowRight size={20} />
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
          .contact-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
