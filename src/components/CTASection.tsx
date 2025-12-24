"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-navy-gradient">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4"
          >
            Tertarik dengan Proyek Kami?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/80 mb-12"
          >
            Tim marketing kami siap membantu Anda menemukan hunian impian
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/628111GRAHA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#25D366]/90 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Chat Sekarang
            </a>

            <a
              href="tel:02155512345"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1E3A5F] font-bold rounded-xl hover:bg-white/90 transition-colors"
            >
              <Phone className="w-6 h-6" />
              Hubungi Kami
            </a>

            <a
              href="/hubungi"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A962] text-[#1E3A5F] font-bold rounded-xl hover:bg-[#C9A962]/90 transition-colors"
            >
              <MapPin className="w-6 h-6" />
              Kunjungi Show Unit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
