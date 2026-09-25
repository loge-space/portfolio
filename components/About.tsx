"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalData, literatureToUx } from "@/lib/data";
import { RangoliBloom } from "./Doodles";

const specializations = [
  "Content Writing",
  "AI-Assisted Research",
  "Conversational AI",
  "Brand & Visual Design",
  "Storytelling & Tone",
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="container-editorial">

        {/* Section header with Rangoli Emblem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-end justify-between"
        >
          <div>
            <p className="label-overline mb-4">About</p>
            <h2 className="section-heading text-4xl md:text-6xl mb-0">
              Design <span className="italic">Philosophy</span>
            </h2>
          </div>
          <div className="hidden sm:block opacity-40 pr-4">
            <RangoliBloom size={72} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Bio */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="body-text mb-6">{personalData.bio}</p>

              {/* Divider */}
              <div className="divider" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {specializations.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-px border border-border rounded-lg overflow-hidden"
            >
              {[
                { value: "4+", label: "Brands & Concepts" },
                { value: "100%", label: "Human-Centered" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card p-6 text-center border-r border-border last:border-r-0"
                >
                  <span
                    className="block text-3xl font-black text-foreground mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="label-overline">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-8"
            >
              <p className="label-overline mb-3">Narrative Framework</p>
              <h3 className="section-heading text-2xl md:text-3xl">
                Literature <span className="italic">meets</span> UX
              </h3>
            </motion.div>

            <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
              {literatureToUx.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex justify-between items-center bg-card hover:bg-muted transition-colors duration-200"
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  >
                    <div>
                      <span className="label-overline text-muted-foreground block mb-1">
                        Phase {i + 1} — {item.phase}
                      </span>
                      <span
                        className="text-sm font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item.literaryConcept} → {item.uxConcept}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-lg font-light ml-4 flex-shrink-0">
                      {activeIndex === i ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 py-4 body-text text-sm bg-muted border-t border-border">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
