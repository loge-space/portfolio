"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { RangoliFlower } from "./Doodles";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="container-editorial">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 flex items-start gap-6"
          >
            <div>
              <p className="label-overline mb-4">Contact</p>
              <h2 className="section-heading text-4xl md:text-6xl mb-6">
                Let's create <span className="italic">together.</span>
              </h2>
              <p className="body-text max-w-md">
                Open to new opportunities and collaborations. Whether you have a project in mind or simply want to connect — I'll always write back.
              </p>
            </div>
            <div className="hidden sm:block opacity-85 pt-4 text-[hsl(16_75%_36%)]">
              <RangoliFlower size={80} />
            </div>
          </motion.div>

          {/* Right: CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            <Link
              href={`mailto:${personalData.email}`}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-sm bg-[hsl(16_75%_36%)] text-white hover:bg-[hsl(16_80%_30%)] border border-[hsl(16_75%_36%)] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail size={18} />
              Send an Email
            </Link>
            <Link
              href={personalData.socials.linkedin}
              target="_blank"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-sm bg-white text-[hsl(16_75%_36%)] hover:bg-[hsl(16_75%_36%/0.08)] border-2 border-[hsl(16_75%_36%)] shadow-xs hover:-translate-y-0.5 transition-all duration-200"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </Link>
            <Link
              href={personalData.socials.medium}
              target="_blank"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-sm bg-white text-[hsl(16_75%_36%)] hover:bg-[hsl(16_75%_36%/0.08)] border-2 border-[hsl(16_75%_36%)] shadow-xs hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              Read on Medium
            </Link>

            {/* Divider note */}
            <div className="text-center pt-2 space-y-1">
              <p className="label-overline">
                Based in Puducherry, India · Available globally
              </p>
              <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-inter)" }}>
                {personalData.email} · {personalData.phone}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
