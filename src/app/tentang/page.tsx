"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Users,
  Building,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Shield,
} from "lucide-react";
import { companyInfo } from "@/lib/data";

const stats = [
  {
    icon: Building,
    value: "15+",
    label: "Proyek Selesai",
  },
  {
    icon: Users,
    value: "20.000+",
    label: "Unit Terjual",
  },
  {
    icon: Award,
    value: "19",
    label: "Tahun Pengalaman",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Kepuasan Pelanggan",
  },
];

const timeline = [
  {
    year: "2005",
    title: "Awal Pendirian",
    description:
      "PT Graha Residence Indonesia didirikan dengan visi membangun hunian berkualitas untuk keluarga Indonesia.",
  },
  {
    year: "2010",
    title: "Ekspansi Pertama",
    description:
      "Meluncurkan proyek pertama di kawasan Serpong dengan 500 unit rumah yang terjual habis.",
  },
  {
    year: "2015",
    title: "Pertumbuhan Pesat",
    description:
      "Memperluas jangkauan ke Bekasi dan Depok dengan total 5.000+ unit terjual.",
  },
  {
    year: "2020",
    title: "Inovasi Digital",
    description:
      "Mengadopsi teknologi digital untuk kemudahan konsumen dalam proses pembelian rumah.",
  },
  {
    year: "2025",
    title: "Menuju Masa Depan",
    description:
      "Meluncurkan proyek baru di Bogor dan terus berkomitmen memberikan hunian terbaik.",
  },
];

const valueIcons = {
  Integritas: Shield,
  Kualitas: Award,
  Inovasi: Lightbulb,
  Kepedulian: Heart,
};

export default function TentangPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 bg-[#C9A962]/20 text-[#C9A962] rounded-full text-sm font-medium mb-6">
                Tentang Kami
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
                {companyInfo.name}
              </h1>
              <p className="text-xl text-white/80 mb-8">
                {companyInfo.tagline}
              </p>
              <p className="text-white/70 leading-relaxed">
                {companyInfo.description} Kami telah dipercaya oleh lebih dari
                20.000 keluarga Indonesia untuk mewujudkan rumah impian mereka.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Graha Residence Building"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-12 relative z-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-[#1E3A5F]" />
                </div>
                <div className="text-3xl font-bold text-[#1E3A5F] font-heading mb-1">
                  {stat.value}
                </div>
                <div className="text-[#2D3748]/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-[#C9A962]/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-[#C9A962]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] font-heading mb-4">
                Visi Kami
              </h2>
              <p className="text-[#2D3748]/70 leading-relaxed">
                {companyInfo.vision}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-[#1E3A5F]/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-[#1E3A5F]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] font-heading mb-4">
                Misi Kami
              </h2>
              <ul className="space-y-3">
                {companyInfo.mission.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#2D3748]/70"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#4A7C59] text-white flex items-center justify-center shrink-0 text-sm font-medium mt-0.5">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Prinsip yang kami pegang teguh dalam setiap langkah perjalanan
              bisnis kami
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.values.map((value, index) => {
              const IconComponent =
                valueIcons[value.title as keyof typeof valueIcons] || Shield;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A5F] font-heading mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#2D3748]/60 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Perjalanan Kami
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Milestone penting dalam perjalanan Graha Residence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center font-bold font-heading shrink-0">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-[#1E3A5F]/20 mt-4" />
                  )}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex-1">
                  <h3 className="text-xl font-bold text-[#1E3A5F] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#2D3748]/70">{item.description}</p>
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
              Siap Mewujudkan Rumah Impian?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu Anda menemukan hunian yang tepat untuk
              keluarga Anda
            </p>
            <a
              href="https://wa.me/628111GRAHA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#1E3A5F] font-bold rounded-xl hover:bg-[#C9A962]/90 transition-colors"
            >
              Hubungi Kami Sekarang
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
