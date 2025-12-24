"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Ruler, Search, Filter, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusColors = {
  "Now Selling": "bg-[#4A7C59] text-white",
  "New Launching": "bg-[#C9A962] text-[#1E3A5F]",
  "Limited Stock": "bg-red-500 text-white",
  "Coming Soon": "bg-[#1E3A5F] text-white",
};

const locations = ["Semua", "Tangerang Selatan", "Bekasi", "Depok", "Bogor"];
const priceRanges = [
  { label: "Semua Harga", min: 0, max: Infinity },
  { label: "< 800 Juta", min: 0, max: 800000000 },
  { label: "800 Jt - 1 M", min: 800000000, max: 1000000000 },
  { label: "1 - 1.5 M", min: 1000000000, max: 1500000000 },
  { label: "> 1.5 M", min: 1500000000, max: Infinity },
];

export default function ProyekPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Semua");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLocation =
      selectedLocation === "Semua" || project.city === selectedLocation;
    const matchesPrice =
      project.priceStart >= priceRanges[selectedPriceRange].min &&
      project.priceStart < priceRanges[selectedPriceRange].max;

    return matchesSearch && matchesLocation && matchesPrice;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-navy-gradient py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              Proyek Kami
            </h1>
            <p className="text-xl text-white/80">
              Temukan hunian impian keluarga Anda dari berbagai pilihan proyek
              berkualitas kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 shadow-sm sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari proyek..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#2D3748] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]"
              />
            </div>

            {/* Location Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={cn(
                    "px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-colors",
                    selectedLocation === location
                      ? "bg-[#1E3A5F] text-white"
                      : "bg-gray-100 text-[#2D3748] hover:bg-gray-200"
                  )}
                >
                  {location}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]"
            >
              {priceRanges.map((range, index) => (
                <option key={index} value={index}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/proyek/${project.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group h-full">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span
                            className={cn(
                              "px-3 py-1 text-xs font-semibold rounded-full",
                              statusColors[project.status]
                            )}
                          >
                            {project.status}
                          </span>
                          {project.badge && (
                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#C9A962] text-[#1E3A5F]">
                              {project.badge}
                            </span>
                          )}
                        </div>

                        {/* Price */}
                        <div className="absolute bottom-4 left-4">
                          <span className="text-white font-bold text-2xl font-heading">
                            {project.priceDisplay}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#1E3A5F] font-heading mb-2 group-hover:text-[#C9A962] transition-colors">
                          {project.name}
                        </h3>

                        <div className="flex items-center gap-2 text-[#2D3748]/70 text-sm mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-[#2D3748]/70 mb-4">
                          <div className="flex items-center gap-1">
                            <span className="font-medium">Tipe:</span>
                            <span>{project.type}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#2D3748]/70 mb-4">
                          <Ruler className="w-4 h-4" />
                          <span>Luas Tanah: {project.landArea}</span>
                        </div>

                        <p className="text-[#2D3748]/60 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-[#1E3A5F] font-semibold text-sm group-hover:text-[#C9A962] transition-colors flex items-center gap-1">
                            Lihat Detail
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <Filter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#2D3748] mb-2">
                Tidak ada proyek ditemukan
              </h3>
              <p className="text-[#2D3748]/60">
                Coba ubah filter pencarian Anda
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
