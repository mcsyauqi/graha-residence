"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Waves,
  Baby,
  Footprints,
  Moon,
  Shield,
  TreePine,
  Car,
  Zap,
  Droplets,
  ArrowRight,
} from "lucide-react";
import { facilities } from "@/lib/data";

const iconMap = {
  Building2: Building2,
  Waves: Waves,
  Baby: Baby,
  Footprints: Footprints,
  Moon: Moon,
  Shield: Shield,
};

const additionalFeatures = [
  {
    icon: TreePine,
    title: "Taman Hijau",
    description:
      "Area hijau yang luas dengan berbagai tanaman untuk udara segar dan pemandangan asri.",
  },
  {
    icon: Car,
    title: "Carport Luas",
    description:
      "Setiap unit dilengkapi dengan carport yang dapat menampung 2 mobil.",
  },
  {
    icon: Zap,
    title: "Listrik Underground",
    description:
      "Sistem kelistrikan bawah tanah untuk keamanan dan estetika lingkungan.",
  },
  {
    icon: Droplets,
    title: "Air Bersih PDAM",
    description:
      "Sumber air bersih dari PDAM dengan tekanan yang stabil 24 jam.",
  },
];

export default function FasilitasPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[#C9A962]/20 text-[#C9A962] rounded-full text-sm font-medium mb-6">
              Fasilitas Premium
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Fasilitas Lengkap untuk Kenyamanan Keluarga
            </h1>
            <p className="text-xl text-white/80">
              Nikmati berbagai fasilitas premium yang tersedia di setiap cluster
              Graha Residence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
              Fasilitas Utama
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Fasilitas yang tersedia di setiap cluster untuk mendukung gaya
              hidup sehat dan aktif keluarga Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent =
                iconMap[facility.icon as keyof typeof iconMap] || Building2;
              return (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F] via-[#1E3A5F]/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#C9A962] flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-[#1E3A5F]" />
                        </div>
                        <h3 className="text-xl font-bold text-white font-heading">
                          {facility.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#2D3748]/70 leading-relaxed">
                    {facility.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
              Fitur Tambahan
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Berbagai fitur pendukung untuk kenyamanan hidup sehari-hari
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-[#1E3A5F]" />
                </div>
                <h3 className="text-lg font-bold text-[#1E3A5F] font-heading mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#2D3748]/60 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
              Galeri Fasilitas
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Lihat lebih dekat fasilitas yang tersedia di cluster kami
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=600&q=80",
              "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80",
              "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=600&q=80",
              "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=600&q=80",
              "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&q=80",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative rounded-xl overflow-hidden ${
                  index === 0 || index === 7
                    ? "col-span-2 row-span-2 h-80"
                    : "h-40"
                }`}
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
              Tertarik dengan Fasilitas Kami?
            </h2>
            <p className="text-xl text-[#1E3A5F]/80 mb-8 max-w-2xl mx-auto">
              Jadwalkan kunjungan ke show unit untuk melihat langsung fasilitas
              yang tersedia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/proyek"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E3A5F] text-white font-bold rounded-xl hover:bg-[#1E3A5F]/90 transition-colors"
              >
                Lihat Proyek Kami
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/628111GRAHA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1E3A5F] font-bold rounded-xl hover:bg-white/90 transition-colors"
              >
                Jadwalkan Kunjungan
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
