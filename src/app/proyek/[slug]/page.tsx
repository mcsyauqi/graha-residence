"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Ruler,
  Bed,
  Bath,
  Layers,
  Check,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { projects } from "@/lib/data";
import { cn, formatCurrency } from "@/lib/utils";

const statusColors = {
  "Now Selling": "bg-[#4A7C59] text-white",
  "New Launching": "bg-[#C9A962] text-[#1E3A5F]",
  "Limited Stock": "bg-red-500 text-white",
  "Coming Soon": "bg-[#1E3A5F] text-white",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState(0);

  if (!project) {
    notFound();
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-20 pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#2D3748]/60 hover:text-[#1E3A5F]">
              Beranda
            </Link>
            <span className="text-[#2D3748]/60">/</span>
            <Link
              href="/proyek"
              className="text-[#2D3748]/60 hover:text-[#1E3A5F]"
            >
              Proyek
            </Link>
            <span className="text-[#2D3748]/60">/</span>
            <span className="text-[#1E3A5F] font-medium">{project.name}</span>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-8">
        <div className="container-custom">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src={project.gallery[currentImageIndex]}
                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-[#1E3A5F]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-[#1E3A5F]" />
              </button>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className={cn(
                    "px-4 py-2 text-sm font-semibold rounded-full",
                    statusColors[project.status]
                  )}
                >
                  {project.status}
                </span>
                {project.badge && (
                  <span className="px-4 py-2 text-sm font-semibold rounded-full bg-[#C9A962] text-[#1E3A5F]">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/50 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {project.gallery.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-colors",
                    currentImageIndex === index
                      ? "border-[#1E3A5F]"
                      : "border-transparent hover:border-gray-300"
                  )}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
                  {project.name}
                </h1>

                <div className="flex items-center gap-2 text-[#2D3748]/70 mb-6">
                  <MapPin className="w-5 h-5 text-[#C9A962]" />
                  <span className="text-lg">{project.location}</span>
                </div>

                <p className="text-[#2D3748] text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Features */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h2 className="text-xl font-bold text-[#1E3A5F] font-heading mb-4">
                    Keunggulan Lokasi
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#4A7C59] flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#2D3748]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-[#1E3A5F] font-heading mb-4">
                    Fasilitas Cluster
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#1E3A5F]/10 text-[#1E3A5F] rounded-full text-sm font-medium"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Unit Types */}
                <div>
                  <h2 className="text-xl font-bold text-[#1E3A5F] font-heading mb-6">
                    Pilihan Tipe Unit
                  </h2>

                  {/* Unit Tabs */}
                  <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
                    {project.unitTypes.map((unit, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedUnit(index)}
                        className={cn(
                          "px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-colors",
                          selectedUnit === index
                            ? "bg-[#1E3A5F] text-white"
                            : "bg-gray-100 text-[#2D3748] hover:bg-gray-200"
                        )}
                      >
                        {unit.name}
                      </button>
                    ))}
                  </div>

                  {/* Selected Unit Details */}
                  <motion.div
                    key={selectedUnit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={project.unitTypes[selectedUnit].image}
                          alt={project.unitTypes[selectedUnit].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-[#1E3A5F] font-heading mb-4">
                          {project.unitTypes[selectedUnit].name}
                        </h3>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Bed className="w-5 h-5 text-[#C9A962]" />
                            <span className="text-[#2D3748]">
                              {project.unitTypes[selectedUnit].bedrooms} Kamar
                              Tidur
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bath className="w-5 h-5 text-[#C9A962]" />
                            <span className="text-[#2D3748]">
                              {project.unitTypes[selectedUnit].bathrooms} Kamar
                              Mandi
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Ruler className="w-5 h-5 text-[#C9A962]" />
                            <span className="text-[#2D3748]">
                              LT: {project.unitTypes[selectedUnit].landArea}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Layers className="w-5 h-5 text-[#C9A962]" />
                            <span className="text-[#2D3748]">
                              LB: {project.unitTypes[selectedUnit].buildingArea}
                            </span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <span className="text-sm text-[#2D3748]/60">
                            Harga mulai
                          </span>
                          <p className="text-3xl font-bold text-[#C9A962] font-heading">
                            {project.unitTypes[selectedUnit].priceDisplay}
                          </p>
                        </div>

                        <a
                          href={`https://wa.me/628111GRAHA?text=Halo, saya tertarik dengan ${project.unitTypes[selectedUnit].name} di ${project.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Tanya Unit Ini
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24"
              >
                <div className="mb-6">
                  <span className="text-sm text-[#2D3748]/60">
                    Harga mulai dari
                  </span>
                  <p className="text-3xl font-bold text-[#1E3A5F] font-heading">
                    {project.priceDisplay}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[#2D3748]/70">Tipe</span>
                    <span className="font-medium text-[#2D3748]">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[#2D3748]/70">Luas Tanah</span>
                    <span className="font-medium text-[#2D3748]">
                      {project.landArea}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-[#2D3748]/70">Status</span>
                    <span
                      className={cn(
                        "px-3 py-1 text-xs font-semibold rounded-full",
                        statusColors[project.status]
                      )}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/628111GRAHA?text=Halo, saya tertarik dengan ${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat via WhatsApp
                  </a>
                  <a
                    href="tel:02155512345"
                    className="w-full py-4 bg-[#1E3A5F] text-white font-semibold rounded-xl hover:bg-[#1E3A5F]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Hubungi Marketing
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="/simulasi-kpr"
                    className="text-[#1E3A5F] hover:text-[#C9A962] font-medium text-sm flex items-center justify-center gap-1"
                  >
                    Simulasi KPR untuk properti ini
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-8">
        <div className="container-custom">
          <Link
            href="/proyek"
            className="inline-flex items-center gap-2 text-[#1E3A5F] hover:text-[#C9A962] font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Daftar Proyek
          </Link>
        </div>
      </section>
    </div>
  );
}
