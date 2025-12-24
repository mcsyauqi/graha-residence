"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";
import { companyInfo } from "@/lib/data";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ nama: "", email: "", telepon: "", proyek: "", pesan: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", backgroundColor: "rgba(201,169,98,0.2)", borderRadius: "20px", marginBottom: "20px" }}>
            <MessageCircle size={18} color="#C9A962" />
            <span style={{ color: "#C9A962", fontSize: "14px", fontWeight: "600" }}>Hubungi Kami</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "white", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>
            Siap Membantu Anda
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
            Tim marketing kami siap menjawab pertanyaan dan membantu Anda menemukan hunian impian
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section bg-gray">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }} className="contact-grid">
            {/* Contact Info */}
            <div>
              <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1E3A5F", marginBottom: "24px", fontFamily: "'Playfair Display', serif" }}>
                Informasi Kontak
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "32px" }}>
                <div className="card" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={24} color="#1E3A5F" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1E3A5F", marginBottom: "4px" }}>Alamat Kantor</h4>
                    <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{companyInfo.address}</p>
                  </div>
                </div>

                <div className="card" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={24} color="#1E3A5F" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1E3A5F", marginBottom: "4px" }}>Telepon</h4>
                    <a href="tel:02155512345" style={{ fontSize: "14px", color: "#64748b" }}>{companyInfo.phone}</a>
                  </div>
                </div>

                <div className="card" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(74,124,89,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MessageCircle size={24} color="#4A7C59" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1E3A5F", marginBottom: "4px" }}>WhatsApp</h4>
                    <a href="https://wa.me/628111GRAHA" style={{ fontSize: "14px", color: "#4A7C59", fontWeight: "500" }}>{companyInfo.whatsapp}</a>
                  </div>
                </div>

                <div className="card" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={24} color="#1E3A5F" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1E3A5F", marginBottom: "4px" }}>Email</h4>
                    <a href={`mailto:${companyInfo.email}`} style={{ fontSize: "14px", color: "#64748b" }}>{companyInfo.email}</a>
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

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/628111GRAHA?text=Halo, saya tertarik dengan proyek Graha Residence"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  width: "100%",
                  padding: "16px",
                  backgroundColor: "#25D366",
                  color: "white",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                <MessageCircle size={24} />
                Chat via WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1E3A5F", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>
                Kirim Pesan
              </h3>
              <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "28px" }}>
                Isi formulir di bawah dan tim kami akan menghubungi Anda
              </p>

              {isSubmitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: "80px", height: "80px", backgroundColor: "rgba(74,124,89,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <CheckCircle size={40} color="#4A7C59" />
                  </div>
                  <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#1E3A5F", marginBottom: "12px", fontFamily: "'Playfair Display', serif" }}>
                    Pesan Terkirim!
                  </h4>
                  <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "24px" }}>
                    Terima kasih telah menghubungi kami. Tim marketing akan segera membalas pesan Anda.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    style={{ padding: "12px 24px", backgroundColor: "#1E3A5F", color: "white", border: "none", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}
                  >
                    Kirim Pesan Lagi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginBottom: "8px" }}>
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      required
                      placeholder="Masukkan nama lengkap"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: "1px solid #e2e8f0",
                        borderRadius: "10px",
                        fontSize: "15px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }} className="form-grid">
                    <div>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginBottom: "8px" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@contoh.com"
                        style={{
                          width: "100%",
                          padding: "14px 16px",
                          border: "1px solid #e2e8f0",
                          borderRadius: "10px",
                          fontSize: "15px",
                          outline: "none",
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginBottom: "8px" }}>
                        No. Telepon *
                      </label>
                      <input
                        type="tel"
                        name="telepon"
                        value={formData.telepon}
                        onChange={handleChange}
                        required
                        placeholder="08xxxxxxxxxx"
                        style={{
                          width: "100%",
                          padding: "14px 16px",
                          border: "1px solid #e2e8f0",
                          borderRadius: "10px",
                          fontSize: "15px",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginBottom: "8px" }}>
                      Proyek yang Diminati
                    </label>
                    <select
                      name="proyek"
                      value={formData.proyek}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: "1px solid #e2e8f0",
                        borderRadius: "10px",
                        fontSize: "15px",
                        outline: "none",
                        backgroundColor: "white",
                      }}
                    >
                      <option value="">Pilih proyek...</option>
                      <option value="serpong">Graha Residence Serpong</option>
                      <option value="bekasi">Graha Residence Bekasi</option>
                      <option value="depok">Graha Residence Depok</option>
                      <option value="bogor">Graha Residence Bogor</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#1E3A5F", marginBottom: "8px" }}>
                      Pesan *
                    </label>
                    <textarea
                      name="pesan"
                      value={formData.pesan}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tulis pesan atau pertanyaan Anda..."
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: "1px solid #e2e8f0",
                        borderRadius: "10px",
                        fontSize: "15px",
                        outline: "none",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: "100%", opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        <Send size={20} />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Lokasi</span>
            <h2 className="section-title">Kantor Pusat Kami</h2>
          </div>
          <div style={{ borderRadius: "16px", overflow: "hidden", height: "400px", backgroundColor: "#e2e8f0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2894!2d106.8023!3d-6.2256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMzIuMiJTIDEwNsKwNDgnMDguMyJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr !important;
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
