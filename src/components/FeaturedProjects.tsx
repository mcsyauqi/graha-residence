"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Ruler, ChevronLeft, ChevronRight, ArrowRight, Bed, Bath } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusColors = {
  "Now Selling": "bg-[#4A7C59] text-white",
  "New Launching": "bg-[#C9A962] text-[#1E3A5F]",
  "Limited Stock": "bg-red-500 text-white",
  "Coming Soon": "bg-[#1E3A5F] text-white",
};

export default function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div className="text-center md:text-left">
            <span className="inline-block text-[#C9A962] font-semibold text-sm tracking-wider uppercase mb-3">
              Koleksi Premium
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A5F] font-heading mb-4">
              Proyek Unggulan Kami
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-xl">
              Pilihan hunian terbaik dengan kualitas premium untuk keluarga Indonesia
            </p>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center md:justify-end gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-[#1E3A5F]/10 hover:bg-[#1E3A5F] text-[#1E3A5F] hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-[#1E3A5F]/10 hover:bg-[#1E3A5F] text-[#1E3A5F] hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Projects Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-6 -mx-5 px-5 snap-x snap-mandatory"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[380px] snap-start"
            >
              <Link href={`/proyek/${project.slug}`} className="block group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 card-hover">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                      <span
                        className={cn(
                          "px-4 py-1.5 text-xs font-bold rounded-full shadow-lg",
                          statusColors[project.status]
                        )}
                      >
                        {project.status}
                      </span>
                      {project.badge && (
                        <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-[#C9A962] text-[#1E3A5F] shadow-lg">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-white font-bold text-2xl font-heading drop-shadow-lg">
                        {project.priceDisplay}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E3A5F] font-heading mb-3 group-hover:text-[#C9A962] transition-colors line-clamp-1">
                      {project.name}
                    </h3>

                    <div className="flex items-center gap-2 text-[#2D3748]/70 text-sm mb-4">
                      <MapPin className="w-4 h-4 text-[#C9A962] flex-shrink-0" />
                      <span className="line-clamp-1">{project.location}</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-[#2D3748]/70 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-[#1E3A5F]" />
                        <span>{project.type.split(",")[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Ruler className="w-4 h-4 text-[#1E3A5F]" />
                        <span>{project.landArea}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <span className="text-[#1E3A5F] font-bold text-sm group-hover:text-[#C9A962] transition-colors flex items-center gap-2">
                        Lihat Detail
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link
            href="/proyek"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#1E3A5F] text-white font-bold rounded-xl hover:bg-[#152a45] transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Lihat Semua Proyek
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
