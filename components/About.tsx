"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data";
import { RangoliBloom } from "./Doodles";

const specializations = [
  "Content Writing",
  "AI-Assisted Research",
  "Conversational AI",
  "Brand & Visual Design",
  "Storytelling & Tone",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="container-editorial">

        {/* Section header with Rangoli Emblem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="label-overline mb-4">About</p>
            <h2 className="section-heading text-4xl md:text-6xl mb-0">
              Design <span className="italic">Philosophy</span>
            </h2>
          </div>
          <div className="hidden sm:block opacity-85 pr-4 text-[hsl(16_75%_36%)]">
            <RangoliBloom size={72} />
          </div>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio & Specialization Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="body-text text-lg md:text-xl leading-relaxed">
              {personalData.bio}
            </p>

            {/* Specialization Tags in Theme */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              {specializations.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-white text-[hsl(16_75%_35%)] border-2 border-[hsl(16_75%_36%/0.3)] shadow-xs hover:border-[#F59E0B] hover:ring-1 hover:ring-[hsl(16_75%_36%)] transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {[
              { value: "4+", label: "Brands & Concepts" },
              { value: "100%", label: "Human-Centered" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center border-2 border-[hsl(16_75%_36%/0.25)] shadow-xs hover:border-[#F59E0B] hover:ring-2 hover:ring-[hsl(16_75%_36%)] transition-all"
              >
                <span
                  className="block text-3xl md:text-4xl font-black text-[hsl(16_75%_35%)] mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </span>
                <span className="label-overline text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
