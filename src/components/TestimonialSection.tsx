"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialSection() {
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
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
            Testimoni dari keluarga yang telah mempercayakan hunian mereka
            kepada Graha Residence
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F8F9FA] p-8 rounded-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-[#1E3A5F]/10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#C9A962] text-[#C9A962]"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-[#2D3748] text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.message}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E3A5F] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#1E3A5F]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#2D3748]/60">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
