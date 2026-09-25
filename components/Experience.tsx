"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";
import { RangoliFlower } from "./Doodles";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 border-t border-border">
      <div className="container-editorial">

        {/* ── 1. EDUCATION (Academic Background) ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-end justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[hsl(16_55%_95%)] border border-[hsl(16_40%_86%)] flex items-center justify-center text-[hsl(16_75%_36%)]">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="label-overline mb-1">Education</p>
                <h2 className="section-heading text-3xl md:text-5xl">
                  Academic <span className="italic">Background</span>
                </h2>
              </div>
            </div>
            <div className="text-[hsl(16_75%_36%)] opacity-85 pr-2 hidden sm:block">
              <RangoliFlower size={56} />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border-2 border-[hsl(16_75%_36%/0.2)] hover:border-[#F59E0B] hover:ring-2 hover:ring-[hsl(16_75%_36%)] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white text-[hsl(16_75%_35%)] border border-[hsl(16_75%_36%/0.3)]">
                      {item.period}
                    </span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-[hsl(16_75%_35%)] mb-1.5 leading-snug"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.institution}
                  </h3>
                  <p className="text-sm font-semibold text-[hsl(18_35%_30%)] mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.degree}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-3 border-t border-[hsl(16_40%_86%)]" style={{ fontFamily: "var(--font-inter)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 2. EXPERIENCE (Work History) ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-end justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[hsl(16_55%_95%)] border border-[hsl(16_40%_86%)] flex items-center justify-center text-[hsl(16_75%_36%)]">
                <Briefcase size={22} />
              </div>
              <div>
                <p className="label-overline mb-1">Experience</p>
                <h2 className="section-heading text-3xl md:text-5xl">
                  Work <span className="italic">History</span>
                </h2>
              </div>
            </div>
            <div className="text-[hsl(16_75%_36%)] opacity-85 pr-2 hidden sm:block">
              <RangoliFlower size={56} />
            </div>
          </motion.div>

          <div className="space-y-5">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 md:p-8 border-2 border-[hsl(16_75%_36%/0.2)] hover:border-[#F59E0B] hover:ring-2 hover:ring-[hsl(16_75%_36%)] transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3
                    className="text-xl md:text-2xl font-bold text-[hsl(16_75%_35%)] leading-snug"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.role}
                  </h3>
                  <span className="inline-flex items-center self-start sm:self-auto px-3.5 py-1 rounded-full text-xs font-bold bg-white text-[hsl(16_75%_35%)] border border-[hsl(16_75%_36%/0.3)]">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm md:text-base font-semibold text-[hsl(18_35%_30%)] mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                  {item.company}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-4 border-t border-[hsl(16_40%_86%)]" style={{ fontFamily: "var(--font-inter)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
