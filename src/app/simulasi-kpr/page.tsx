"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calculator,
  Building,
  Percent,
  Clock,
  TrendingUp,
  MessageCircle,
  Check,
  Info,
} from "lucide-react";
import { formatCurrency, calculateKPR } from "@/lib/utils";
import { bankPartners, projects } from "@/lib/data";

export default function SimulasiKPRPage() {
  const [hargaProperti, setHargaProperti] = useState(1000000000);
  const [uangMuka, setUangMuka] = useState(20);
  const [tenor, setTenor] = useState(15);
  const [sukuBunga, setSukuBunga] = useState(7);
  const [selectedProject, setSelectedProject] = useState("");

  const result = useMemo(() => {
    return calculateKPR(hargaProperti, uangMuka, tenor, sukuBunga);
  }, [hargaProperti, uangMuka, tenor, sukuBunga]);

  const handleProjectChange = (slug: string) => {
    setSelectedProject(slug);
    const project = projects.find((p) => p.slug === slug);
    if (project) {
      setHargaProperti(project.priceStart);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-navy-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/20 text-[#C9A962] rounded-full text-sm font-medium mb-6">
              <Calculator className="w-5 h-5" />
              Kalkulator KPR
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              Simulasi Kredit Pemilikan Rumah
            </h1>
            <p className="text-xl text-white/80">
              Hitung estimasi cicilan bulanan Anda dengan kalkulator KPR
              interaktif kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Input Section */}
                <div className="p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-[#1E3A5F] font-heading mb-8">
                    Detail Simulasi KPR
                  </h2>

                  {/* Project Selection */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-[#2D3748] mb-2">
                      Pilih Proyek (Opsional)
                    </label>
                    <select
                      value={selectedProject}
                      onChange={(e) => handleProjectChange(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]"
                    >
                      <option value="">Pilih proyek...</option>
                      {projects.map((project) => (
                        <option key={project.slug} value={project.slug}>
                          {project.name} - {project.priceDisplay}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Harga Properti */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-[#2D3748] flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#C9A962]" />
                        Harga Properti
                      </label>
                      <span className="text-sm font-semibold text-[#1E3A5F]">
                        {formatCurrency(hargaProperti)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={500000000}
                      max={3000000000}
                      step={50000000}
                      value={hargaProperti}
                      onChange={(e) => setHargaProperti(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1E3A5F]"
                    />
                    <div className="flex justify-between mt-1 text-xs text-[#2D3748]/50">
                      <span>500 Juta</span>
                      <span>3 Miliar</span>
                    </div>
                  </div>

                  {/* Uang Muka */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-[#2D3748] flex items-center gap-2">
                        <Percent className="w-4 h-4 text-[#C9A962]" />
                        Uang Muka (DP)
                      </label>
                      <span className="text-sm font-semibold text-[#1E3A5F]">
                        {uangMuka}% = {formatCurrency(result.totalUangMuka)}
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {[5, 10, 15, 20, 30].map((value) => (
                        <button
                          key={value}
                          onClick={() => setUangMuka(value)}
                          className={`py-3 rounded-xl font-semibold transition-colors ${
                            uangMuka === value
                              ? "bg-[#1E3A5F] text-white"
                              : "bg-gray-100 text-[#2D3748] hover:bg-gray-200"
                          }`}
                        >
                          {value}%
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tenor */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-[#2D3748] flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#C9A962]" />
                        Jangka Waktu (Tenor)
                      </label>
                      <span className="text-sm font-semibold text-[#1E3A5F]">
                        {tenor} Tahun ({tenor * 12} bulan)
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[5, 10, 15, 20].map((value) => (
                        <button
                          key={value}
                          onClick={() => setTenor(value)}
                          className={`py-3 rounded-xl font-semibold transition-colors ${
                            tenor === value
                              ? "bg-[#1E3A5F] text-white"
                              : "bg-gray-100 text-[#2D3748] hover:bg-gray-200"
                          }`}
                        >
                          {value} Tahun
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Suku Bunga */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-[#2D3748] flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#C9A962]" />
                        Suku Bunga per Tahun
                      </label>
                      <span className="text-sm font-semibold text-[#1E3A5F]">
                        {sukuBunga}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={12}
                      step={0.5}
                      value={sukuBunga}
                      onChange={(e) => setSukuBunga(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1E3A5F]"
                    />
                    <div className="flex justify-between mt-1 text-xs text-[#2D3748]/50">
                      <span>5%</span>
                      <span>12%</span>
                    </div>
                  </div>
                </div>

                {/* Result Section */}
                <div className="bg-[#1E3A5F] p-8 lg:p-10 text-white">
                  <h2 className="text-2xl font-bold font-heading mb-8">
                    Estimasi Cicilan Anda
                  </h2>

                  <div className="mb-8">
                    <p className="text-white/70 text-sm mb-2">
                      Cicilan Per Bulan
                    </p>
                    <p className="text-4xl md:text-5xl font-bold font-heading text-[#C9A962]">
                      {formatCurrency(result.cicilanPerBulan)}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-3 border-b border-white/20">
                      <span className="text-white/70">Harga Properti</span>
                      <span className="font-semibold">
                        {formatCurrency(hargaProperti)}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/20">
                      <span className="text-white/70">
                        Total Uang Muka ({uangMuka}%)
                      </span>
                      <span className="font-semibold">
                        {formatCurrency(result.totalUangMuka)}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/20">
                      <span className="text-white/70">Total Pinjaman</span>
                      <span className="font-semibold">
                        {formatCurrency(result.totalPinjaman)}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/20">
                      <span className="text-white/70">Tenor</span>
                      <span className="font-semibold">
                        {tenor} Tahun ({tenor * 12} bulan)
                      </span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-white/70">Total Pembayaran</span>
                      <span className="font-semibold text-[#C9A962]">
                        {formatCurrency(result.totalBayar)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#C9A962] shrink-0 mt-0.5" />
                    <p className="text-xs text-white/70">
                      Simulasi ini bersifat estimasi menggunakan metode anuitas.
                      Cicilan aktual dapat berbeda tergantung kebijakan bank dan
                      profil kredit Anda. Belum termasuk biaya asuransi dan
                      administrasi.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/628111GRAHA?text=Halo, saya tertarik dengan simulasi KPR untuk properti seharga Rp tersebut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#C9A962] text-[#1E3A5F] font-bold rounded-xl hover:bg-[#C9A962]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Konsultasi dengan Marketing Kami
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bank Partners */}
      <section id="bank-rekanan" className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
              Bank Rekanan Kami
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Kami bekerja sama dengan 15+ bank terkemuka untuk memberikan
              kemudahan KPR bagi Anda
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
          >
            {bankPartners.map((bank, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-[#2D3748]">
                  {bank}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KPR Benefits */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
              Keuntungan KPR di Graha Residence
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Kami memudahkan proses KPR Anda dengan berbagai keuntungan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Proses Cepat",
                description:
                  "Proses pengajuan KPR yang cepat dengan bantuan tim kami yang berpengalaman.",
              },
              {
                title: "Bunga Kompetitif",
                description:
                  "Dapatkan bunga KPR yang kompetitif dari bank rekanan kami.",
              },
              {
                title: "DP Ringan",
                description:
                  "Uang muka mulai dari 5% dengan cicilan yang terjangkau.",
              },
              {
                title: "Tenor Fleksibel",
                description:
                  "Pilihan tenor mulai dari 5 hingga 20 tahun sesuai kemampuan Anda.",
              },
              {
                title: "Gratis Biaya Admin",
                description:
                  "Program khusus bebas biaya administrasi untuk periode tertentu.",
              },
              {
                title: "Konsultasi Gratis",
                description:
                  "Tim marketing kami siap membantu konsultasi KPR tanpa biaya.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#4A7C59] flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E3A5F] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#2D3748]/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
              Siap Mengajukan KPR?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu proses pengajuan KPR Anda dari awal hingga
              akhir
            </p>
            <a
              href="https://wa.me/628111GRAHA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#1E3A5F] font-bold rounded-xl hover:bg-[#C9A962]/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Sekarang
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
