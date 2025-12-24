"use client";

import { motion } from "framer-motion";
import { Shield, Banknote, Building2, TreePine } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Legalitas Terjamin",
    description:
      "Semua proyek kami memiliki sertifikat SHM/SHGB, IMB lengkap, dan bebas sengketa. Keamanan investasi Anda adalah prioritas kami.",
  },
  {
    icon: Banknote,
    title: "Skema Pembayaran Fleksibel",
    description:
      "KPR dengan 15+ bank rekanan, DP mulai 5%, cicilan ringan, dan promo menarik sepanjang tahun.",
  },
  {
    icon: Building2,
    title: "Kualitas Konstruksi Premium",
    description:
      "Material berkualitas tinggi dengan standar konstruksi terbaik. Garansi struktur 10 tahun.",
  },
  {
    icon: TreePine,
    title: "Lingkungan Asri & Aman",
    description:
      "Cluster dengan keamanan 24 jam, taman hijau, dan fasilitas lengkap untuk kenyamanan keluarga.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-[#C9A962] font-semibold text-sm tracking-wider uppercase mb-4">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A5F] font-heading mb-6">
            Mengapa Memilih Graha Residence?
          </h2>
          <p className="text-lg md:text-xl text-[#2D3748]/70 leading-relaxed">
            Kami berkomitmen memberikan yang terbaik untuk hunian keluarga Anda dengan standar kualitas tinggi
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 text-center group card-hover"
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#1E3A5F]/5 to-[#1E3A5F]/10 flex items-center justify-center group-hover:bg-[#1E3A5F] group-hover:scale-110 transition-all duration-500">
                <feature.icon className="w-10 h-10 text-[#1E3A5F] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] font-heading mb-4">
                {feature.title}
              </h3>
              <p className="text-[#2D3748]/70 leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
