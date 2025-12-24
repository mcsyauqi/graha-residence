"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { companyInfo, projects } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  email: z.string().email("Email tidak valid"),
  project: z.string().optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactForm = z.infer<typeof contactSchema>;

const faqs = [
  {
    q: "Bagaimana cara melakukan booking unit?",
    a: "Anda dapat melakukan booking dengan membayar booking fee mulai dari Rp 5 juta. Hubungi marketing kami untuk informasi lebih detail.",
  },
  {
    q: "Apakah bisa KPR dengan DP 0%?",
    a: "Ya, kami memiliki program DP 0% dengan bank rekanan tertentu. Syarat dan ketentuan berlaku.",
  },
  {
    q: "Berapa lama proses KPR?",
    a: "Proses KPR biasanya memakan waktu 2-4 minggu tergantung kelengkapan dokumen dan kebijakan bank.",
  },
  {
    q: "Apakah ada biaya tambahan selain harga rumah?",
    a: "Biaya tambahan meliputi BPHTB, AJB, biaya KPR (jika menggunakan KPR). Beberapa biaya ini bisa gratis dengan promo yang sedang berlaku.",
  },
  {
    q: "Kapan serah terima unit?",
    a: "Waktu serah terima tergantung status proyek. Untuk unit ready stock, serah terima bisa dilakukan setelah proses administrasi selesai.",
  },
  {
    q: "Apakah bisa survei lokasi terlebih dahulu?",
    a: "Tentu! Kami sangat menyarankan Anda untuk survei lokasi dan melihat show unit. Hubungi marketing untuk jadwalkan kunjungan.",
  },
];

export default function HubungiPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-white/80">
              Tim marketing kami siap membantu Anda menemukan hunian impian.
              Jangan ragu untuk menghubungi kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-[#1E3A5F] font-heading mb-8">
                Informasi Kontak
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-1">
                      Kantor Pusat
                    </h3>
                    <p className="text-[#2D3748]/70">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-1">
                      Telepon
                    </h3>
                    <a
                      href={`tel:${companyInfo.phone.replace(/[^\d]/g, "")}`}
                      className="text-[#2D3748]/70 hover:text-[#C9A962]"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/628111GRAHA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2D3748]/70 hover:text-[#25D366]"
                    >
                      {companyInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-1">Email</h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-[#2D3748]/70 hover:text-[#C9A962]"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-1">
                      Jam Operasional
                    </h3>
                    <p className="text-[#2D3748]/70">
                      Senin - Jumat: 09:00 - 17:00
                      <br />
                      Sabtu - Minggu: 09:00 - 15:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-3">
                <a
                  href="https://wa.me/628111GRAHA"
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
                  Telepon Sekarang
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-[#F8F9FA] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] font-heading mb-2">
                  Kirim Pesan
                </h2>
                <p className="text-[#2D3748]/70 mb-8">
                  Isi form berikut dan tim kami akan menghubungi Anda segera
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#4A7C59]/10 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-[#4A7C59]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-[#2D3748]/70">
                      Terima kasih telah menghubungi kami. Tim marketing kami
                      akan segera menghubungi Anda.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#2D3748] mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="Masukkan nama Anda"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#2D3748] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2D3748] mb-2">
                          Nomor Telepon *
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="08xxxxxxxxxx"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#2D3748] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D3748] mb-2">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#2D3748] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D3748] mb-2">
                        Proyek yang Diminati
                      </label>
                      <select
                        {...register("project")}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]"
                      >
                        <option value="">Pilih proyek...</option>
                        {projects.map((project) => (
                          <option key={project.slug} value={project.slug}>
                            {project.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D3748] mb-2">
                        Pesan *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Tuliskan pesan atau pertanyaan Anda..."
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#2D3748] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F] resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#1E3A5F] text-white font-semibold rounded-xl hover:bg-[#1E3A5F]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Mengirim..."
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Kirim Pesan
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Lokasi Kantor
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Kunjungi kantor pusat kami untuk konsultasi langsung dengan tim
              marketing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904548899573!2d106.82104081537428!3d-6.224771962704675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e23c82c745%3A0xf6e57f8813e6e47d!2sJl.%20Jend.%20Sudirman%20No.Kav%2052-53%2C%20RT.5%2FRW.3%2C%20Senayan%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012190!5e0!3m2!1sid!2sid!4v1703123456789!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] font-heading mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum seputar pembelian rumah di
              Graha Residence
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-[#1E3A5F] pr-4">
                    {faq.q}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#C9A962] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#C9A962] shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pb-6"
                  >
                    <p className="text-[#2D3748]/70">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
