"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Gift, Calendar, Check, ArrowRight, Clock, Tag } from "lucide-react";
import { promos } from "@/lib/data";

export default function PromoPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gold-gradient overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E3A5F]/10 text-[#1E3A5F] rounded-full text-sm font-medium mb-6">
              <Gift className="w-5 h-5" />
              Promo Spesial
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] font-heading mb-6">
              Promo Spesial Akhir Tahun 2025
            </h1>
            <p className="text-xl text-[#1E3A5F]/80">
              Dapatkan berbagai penawaran menarik untuk mewujudkan rumah impian
              keluarga Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promo List */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid gap-8">
            {promos.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={promo.image}
                      alt={promo.title}
                      fill
                      className="object-cover"
                    />
                    {promo.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-[#C9A962] text-[#1E3A5F] text-sm font-semibold rounded-full">
                          {promo.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-[#C9A962] mb-3">
                      <Tag className="w-5 h-5" />
                      <span className="text-sm font-medium">Promo Aktif</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] font-heading mb-4">
                      {promo.title}
                    </h2>

                    <p className="text-[#2D3748]/70 text-lg mb-6">
                      {promo.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#2D3748]/60 mb-6">
                      <Calendar className="w-5 h-5" />
                      <span>Berlaku hingga: <strong className="text-[#1E3A5F]">{promo.validUntil}</strong></span>
                    </div>

                    {/* Terms */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <p className="text-sm font-medium text-[#2D3748] mb-3">
                        Syarat & Ketentuan:
                      </p>
                      <ul className="space-y-2">
                        {promo.terms.map((term, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#2D3748]/70">
                            <Check className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                            {term}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://wa.me/628111GRAHA?text=Halo, saya tertarik dengan promo ${promo.title}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-xl hover:bg-[#1E3A5F]/90 transition-colors"
                      >
                        Klaim Promo Ini
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <Link
                        href="/proyek"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-[#1E3A5F] font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                      >
                        Lihat Proyek
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
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
              Cara Klaim Promo
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Ikuti langkah mudah berikut untuk mendapatkan promo spesial kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Hubungi Marketing", desc: "Chat via WhatsApp atau telepon" },
              { step: "2", title: "Pilih Unit", desc: "Tentukan proyek dan tipe rumah" },
              { step: "3", title: "Booking Fee", desc: "Bayar booking fee untuk reservasi" },
              { step: "4", title: "Promo Aktif", desc: "Nikmati promo yang berlaku" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center text-2xl font-bold font-heading">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#1E3A5F] font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-[#2D3748]/60 text-sm">{item.desc}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/20 text-[#C9A962] rounded-full text-sm font-medium mb-6">
              <Clock className="w-5 h-5" />
              Penawaran Terbatas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
              Jangan Lewatkan Kesempatan Ini!
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Promo ini berlaku untuk waktu terbatas. Hubungi marketing kami
              sekarang untuk informasi lebih lanjut
            </p>
            <a
              href="https://wa.me/628111GRAHA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#1E3A5F] font-bold rounded-xl hover:bg-[#C9A962]/90 transition-colors"
            >
              Hubungi Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
