"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
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
              <p className="label-overline mb-4">Portfolio</p>
              <h2 className="section-heading text-4xl md:text-6xl">
                Selected <span className="italic">Works</span>
              </h2>
            </div>
            <div className="hidden sm:block opacity-40">
              <RangoliBloom size={64} />
            </div>
          </div>
          <p className="body-text max-w-xs">
            Digital products, brands, and interfaces built with intention and care.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-editorial group flex flex-col overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-lg font-bold text-foreground leading-snug"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <Link
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      className="hover:underline hover:opacity-90"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <Link
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    aria-label={`Open ${project.title}`}
                    className="flex-shrink-0 ml-3 p-2 rounded-md border border-border text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200"
                  >
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

                <p
                  className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
