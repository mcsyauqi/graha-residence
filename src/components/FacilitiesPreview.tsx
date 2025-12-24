"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facilities } from "@/lib/data";

export default function FacilitiesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
            Fasilitas Lengkap di Setiap Cluster
          </h2>
          <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
            Nikmati berbagai fasilitas premium untuk kenyamanan keluarga Anda
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden h-64"
            >
              <Image
                src={facility.image}
                alt={facility.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F] via-[#1E3A5F]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white font-heading mb-2">
                  {facility.name}
                </h3>
                <p className="text-white/80 text-sm">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/fasilitas"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A5F] text-white font-semibold rounded-xl hover:bg-[#1E3A5F]/90 transition-colors"
          >
            Lihat Semua Fasilitas
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
