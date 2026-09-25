"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RangoliBloom } from "./Doodles";

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 border-t border-border">
      <div className="container-editorial">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
        >
          <div className="flex items-center gap-6">
            <div>
              <p className="label-overline mb-2">Featured Creations</p>
              <h2 className="section-heading text-4xl md:text-6xl">
                Products & <span className="italic">Projects</span>
              </h2>
            </div>
            <div className="hidden sm:block opacity-85 text-[hsl(16_75%_36%)]">
              <RangoliBloom size={64} />
            </div>
          </div>
          <p className="body-text max-w-sm">
            AI products, linguistic platforms, and digital interfaces designed with empathy and precision.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {products.map((project, i) => {
            const hasLiveLink = project.link && project.link.startsWith("http");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border-2 border-[hsl(16_75%_36%/0.22)] hover:border-[#F59E0B] hover:ring-2 hover:ring-[hsl(16_75%_36%)] transition-all duration-300 shadow-xs hover:shadow-xl group flex flex-col overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative h-56 overflow-hidden bg-[hsl(16_55%_95%)] border-b border-[hsl(16_40%_86%)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {hasLiveLink && (
                    <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/95 text-[hsl(16_75%_35%)] border border-[hsl(16_75%_36%/0.4)] shadow-xs">
                      Live Product
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      className="text-xl md:text-2xl font-bold text-[hsl(16_75%_35%)] leading-snug"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {hasLiveLink ? (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[hsl(16_85%_30%)] hover:underline decoration-1 underline-offset-4"
                        >
                          {project.title}
                        </Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h3>
                    {hasLiveLink && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="flex-shrink-0 p-2.5 rounded-xl border-2 border-[hsl(16_75%_36%/0.3)] bg-white text-[hsl(16_75%_35%)] hover:bg-[hsl(16_75%_36%)] hover:text-white transition-all duration-200 shadow-xs hover:scale-110"
                      >
                        <ArrowUpRight size={16} />
                      </Link>
                    )}
                  </div>

                  {project.tagline && (
                    <p className="text-xs font-semibold text-[hsl(16_75%_35%/0.75)] tracking-wide uppercase mb-3">
                      {project.tagline}
                    </p>
                  )}

                  <p
                    className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[hsl(16_40%_86%)]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white text-[hsl(16_75%_35%)] border border-[hsl(16_75%_36%/0.25)] shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
