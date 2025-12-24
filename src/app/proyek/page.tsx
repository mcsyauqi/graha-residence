"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProyekPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1E3A5F 0%, #2D5A8F 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "white", marginBottom: "16px", fontFamily: "Montserrat" }}>
            Proyek Kami
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
            Temukan hunian impian keluarga Anda dari berbagai pilihan proyek berkualitas kami
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-3" style={{ gap: "32px" }}>
            {projects.map((project) => (
              <Link key={project.id} href={`/proyek/${project.slug}`}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ position: "relative", height: "220px" }}>
                    <Image src={project.image} alt={project.name} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />

                    <div style={{ position: "absolute", top: "16px", left: "16px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{
                        padding: "6px 14px", fontSize: "12px", fontWeight: "600", borderRadius: "20px",
                        backgroundColor: project.status === "Now Selling" ? "#4A7C59" : project.status === "New Launching" ? "#C9A962" : project.status === "Limited Stock" ? "#ef4444" : "#1E3A5F",
                        color: project.status === "New Launching" ? "#1E3A5F" : "white",
                      }}>
                        {project.status}
                      </span>
                      {project.badge && <span style={{ padding: "6px 14px", fontSize: "12px", fontWeight: "600", borderRadius: "20px", backgroundColor: "#C9A962", color: "#1E3A5F" }}>{project.badge}</span>}
                    </div>

                    <div style={{ position: "absolute", bottom: "16px", left: "16px" }}>
                      <span style={{ color: "white", fontWeight: "700", fontSize: "22px", fontFamily: "Montserrat" }}>{project.priceDisplay}</span>
                    </div>
                  </div>

                  <div style={{ padding: "24px" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#1E3A5F", fontFamily: "Montserrat" }}>{project.name}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b", fontSize: "14px", marginBottom: "12px" }}>
                      <MapPin size={16} color="#C9A962" />
                      {project.location}
                    </div>
                    <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>{project.type}</p>
                    <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "20px" }}>Luas Tanah: {project.landArea}</p>
                    <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "20px" }}>{project.description}</p>
                    <div style={{ display: "flex", alignItems: "center", color: "#1E3A5F", fontSize: "15px", fontWeight: "600" }}>
                      Lihat Detail <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
