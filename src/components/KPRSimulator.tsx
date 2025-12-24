"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatCurrency, calculateKPR } from "@/lib/utils";

export default function KPRSimulator() {
  const [hargaProperti, setHargaProperti] = useState(1000000000);
  const [uangMuka, setUangMuka] = useState(20);
  const [tenor, setTenor] = useState(15);
  const [sukuBunga, setSukuBunga] = useState(7);

  const result = useMemo(() => {
    return calculateKPR(hargaProperti, uangMuka, tenor, sukuBunga);
  }, [hargaProperti, uangMuka, tenor, sukuBunga]);

  const formatSliderValue = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(1)} M`;
    }
    return `${(value / 1000000).toFixed(0)} Jt`;
  };

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E3A5F]/10 rounded-full mb-4">
              <Calculator className="w-5 h-5 text-[#1E3A5F]" />
              <span className="text-[#1E3A5F] font-medium">Simulasi KPR</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
              Simulasi Kredit Pemilikan Rumah
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Hitung estimasi cicilan bulanan Anda dengan kalkulator KPR kami
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Input Section */}
              <div className="p-8 lg:p-10">
                <h3 className="text-xl font-bold text-[#1E3A5F] font-heading mb-6">
                  Masukkan Detail KPR
                </h3>

                {/* Harga Properti */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-[#2D3748]">
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
                    <span>500 Jt</span>
                    <span>3 M</span>
                  </div>
                </div>

                {/* Uang Muka */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-[#2D3748]">
                      Uang Muka (DP)
                    </label>
                    <span className="text-sm font-semibold text-[#1E3A5F]">
                      {uangMuka}%
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[10, 20, 30].map((value) => (
                      <button
                        key={value}
                        onClick={() => setUangMuka(value)}
                        className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
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
                    <label className="text-sm font-medium text-[#2D3748]">
                      Jangka Waktu (Tenor)
                    </label>
                    <span className="text-sm font-semibold text-[#1E3A5F]">
                      {tenor} Tahun
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[5, 10, 15, 20].map((value) => (
                      <button
                        key={value}
                        onClick={() => setTenor(value)}
                        className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                          tenor === value
                            ? "bg-[#1E3A5F] text-white"
                            : "bg-gray-100 text-[#2D3748] hover:bg-gray-200"
                        }`}
                      >
                        {value} Th
                      </button>
                    ))}
                  </div>
                </div>

                {/* Suku Bunga */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-[#2D3748]">
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
                <h3 className="text-xl font-bold font-heading mb-8">
                  Estimasi Cicilan Anda
                </h3>

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
                    <span className="text-white/70">Total Uang Muka</span>
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
                  <div className="flex justify-between py-3">
                    <span className="text-white/70">Total Pembayaran</span>
                    <span className="font-semibold">
                      {formatCurrency(result.totalBayar)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-white/50 mb-6">
                  *Simulasi ini bersifat estimasi. Cicilan aktual dapat berbeda
                  tergantung kebijakan bank dan profil kredit Anda.
                </p>

                <a
                  href="https://wa.me/628111GRAHA?text=Halo, saya tertarik dengan simulasi KPR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#C9A962] text-[#1E3A5F] font-bold rounded-xl hover:bg-[#C9A962]/90 transition-colors flex items-center justify-center gap-2"
                >
                  Konsultasi dengan Marketing Kami
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Link to full calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-8"
          >
            <Link
              href="/simulasi-kpr"
              className="text-[#1E3A5F] hover:text-[#C9A962] font-medium inline-flex items-center gap-2 transition-colors"
            >
              Lihat Simulasi KPR Lengkap
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
