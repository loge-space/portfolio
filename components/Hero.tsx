"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroSunflowerCharacter from "./HeroSunflower";

const stats = [
  { label: "Built", value: "Therafora AI" },
  { label: "Writing", value: "Medium Columnist" },
  { label: "Founding Designer", value: "3 Language Brands" },
];

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 relative overflow-hidden"
    >
      <div className="container-editorial w-full relative z-10">

        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-foreground inline-block opacity-70" />
          <span className="label-overline">Content Writer · AI-Assisted Content · Conversational AI</span>
        </motion.div>

        {/* Display name + Animated Sunflower Character (First page only) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="display-heading text-[clamp(3.5rem,10vw,9rem)]"
              >
                Logeshwari
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="display-heading text-[clamp(3.5rem,10vw,9rem)] italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Sankar.
              </motion.h1>
            </div>
          </div>

          {/* ── First Page Exclusive: Animated Sunflower Character saying "Hi!" ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center lg:justify-end pr-4 pb-2"
          >
            <HeroSunflowerCharacter />
          </motion.div>
        </div>

        {/* Bottom row: bio + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end border-t border-border pt-10"
        >
          {/* Left: descriptor */}
          <p className="body-text max-w-md text-balance leading-relaxed">
            I craft engaging narratives and thoughtful digital experiences. Combining{" "}
            <span className="underline-editorial text-foreground font-semibold">
              English literature, conversational AI, and research
            </span>
            , I create human-centered content that connects and resonates.
          </p>

          {/* Right: CTAs + stats */}
          <div className="flex flex-col gap-8 md:items-end">
            <div className="flex flex-wrap gap-3">
              <Link
                href="#work"
                className="flex items-center gap-2 bg-[hsl(16_75%_36%)] text-white hover:bg-[hsl(16_80%_30%)] py-3 px-6 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                View Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#about"
                className="flex items-center gap-2 bg-white text-[hsl(16_75%_36%)] hover:bg-[hsl(16_75%_36%/0.08)] border-2 border-[hsl(16_75%_36%)] py-3 px-6 rounded-lg font-bold text-sm shadow-xs transition-all hover:-translate-y-0.5"
              >
                About Me
              </Link>
            </div>

            <div className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="label-overline mb-0.5">{s.label}</p>
                  <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-inter)" }}>
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
