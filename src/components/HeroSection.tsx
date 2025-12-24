"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, MapPin, Banknote, Trophy, Home, Building, Users } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const stats = [
    { icon: Home, value: "20.000+", label: "Unit Terjual" },
    { icon: Building, value: "15+", label: "Proyek Sukses" },
    { icon: Users, value: "19", label: "Tahun Pengalaman" },
  ];

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Next Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Modern luxury home"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/85 to-[#1E3A5F]/70" />
      </div>

      <div className="container-custom relative z-10 py-32">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A962]/20 border border-[#C9A962]/40 rounded-full backdrop-blur-sm">
              <Trophy className="w-5 h-5 text-[#C9A962]" />
              <span className="text-[#C9A962] text-sm font-semibold tracking-wide">
                Developer Terpercaya Sejak 2005
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading mb-8 leading-[1.1] text-center lg:text-left"
          >
            Wujudkan Rumah Impian{" "}
            <span className="text-[#C9A962] block sm:inline">Keluarga Anda</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/85 mb-10 leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            Hunian berkualitas dengan lokasi strategis, fasilitas lengkap, dan
            skema pembayaran yang fleksibel untuk kenyamanan Anda.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-5 md:p-7 rounded-2xl shadow-2xl mb-10 max-w-4xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari properti..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[#2D3748] placeholder:text-gray-400 text-base"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[#2D3748] appearance-none cursor-pointer text-base"
                >
                  <option value="">Pilih Lokasi</option>
                  <option value="serpong">Serpong</option>
                  <option value="bekasi">Bekasi</option>
                  <option value="depok">Depok</option>
                  <option value="bogor">Bogor</option>
                </select>
              </div>
              <div className="relative">
                <Banknote className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[#2D3748] appearance-none cursor-pointer text-base"
                >
                  <option value="">Rentang Harga</option>
                  <option value="500-750">500 - 750 Juta</option>
                  <option value="750-1000">750 Juta - 1 Miliar</option>
                  <option value="1000-1500">1 - 1.5 Miliar</option>
                  <option value="1500+">Di atas 1.5 Miliar</option>
                </select>
              </div>
              <Link
                href="/proyek"
                className="w-full py-4 bg-[#1E3A5F] text-white font-bold rounded-xl hover:bg-[#152a45] transition-all duration-300 flex items-center justify-center gap-2 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Search className="w-5 h-5" />
                Cari Properti
              </Link>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
          >
            <Link
              href="/proyek"
              className="px-10 py-5 bg-[#C9A962] text-[#1E3A5F] font-bold rounded-xl hover:bg-[#b8963f] transition-all duration-300 text-center text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Jelajahi Proyek
            </Link>
            <a
              href="https://wa.me/628111GRAHA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#1E3A5F] transition-all duration-300 text-center text-lg"
            >
              Hubungi Marketing
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto lg:mx-0"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-white justify-center lg:justify-start bg-white/5 backdrop-blur-sm rounded-2xl p-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-7 h-7 text-[#C9A962]" />
                </div>
                <div>
                  <div className="text-3xl font-bold font-heading leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
