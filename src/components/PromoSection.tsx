"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gift, Check, ArrowRight } from "lucide-react";

const promoItems = [
  "DP 0% untuk Semua Unit",
  "Free BPHTB & AJB",
  "Gratis Biaya KPR",
  "Bonus AC + Water Heater",
];

export default function PromoSection() {
  return (
    <section className="py-20 bg-gold-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E3A5F]/10 rounded-full mb-6"
          >
            <Gift className="w-5 h-5 text-[#1E3A5F]" />
            <span className="text-[#1E3A5F] font-medium">Promo Terbatas</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A5F] font-heading mb-8"
          >
            Promo Spesial Akhir Tahun 2025
          </motion.h2>

          {/* Promo Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto"
          >
            {promoItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-4 rounded-xl"
              >
                <div className="w-8 h-8 rounded-full bg-[#4A7C59] flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#1E3A5F] font-semibold">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/promo"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#1E3A5F] text-white font-bold rounded-xl hover:bg-[#1E3A5F]/90 transition-colors text-lg"
            >
              Klaim Promo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
