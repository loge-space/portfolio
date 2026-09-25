"use client";

import { motion } from "framer-motion";
import { articles, personalData } from "@/lib/data";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { RangoliBloom } from "./Doodles";

export default function Writing() {
  return (
    <section id="writing" className="py-32 px-6 border-t border-border">
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
              <p className="label-overline mb-2">Editorial & Thoughts</p>
              <h2 className="section-heading text-4xl md:text-6xl">
                Medium <span className="italic">Writing</span>
              </h2>
            </div>
            <div className="hidden sm:block opacity-85 text-[hsl(16_75%_36%)]">
              <RangoliBloom size={64} />
            </div>
          </div>
          <p className="body-text max-w-sm">
            Long-form essays exploring digital psychology, attentional sovereignty, and intentional living.
          </p>
        </motion.div>

        {/* Articles List / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="lg:col-span-8 bg-white rounded-2xl border-2 border-[hsl(16_75%_36%/0.25)] hover:border-[#F59E0B] hover:ring-2 hover:ring-[hsl(16_75%_36%)] transition-all duration-300 shadow-xs hover:shadow-xl overflow-hidden flex flex-col md:flex-row group"
            >
              {/* Cover Image */}
              <div className="md:w-5/12 relative h-64 md:h-auto overflow-hidden bg-[hsl(16_55%_95%)] border-b md:border-b-0 md:border-r border-[hsl(16_40%_86%)] flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-7 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[hsl(16_75%_35%)] border border-[hsl(16_75%_36%/0.3)] shadow-xs">
                      <BookOpen size={13} />
                      {article.platform} · {article.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold text-[hsl(16_75%_35%)] leading-snug mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <Link
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[hsl(16_85%_30%)] hover:underline decoration-1 underline-offset-4"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  {article.subtitle && (
                    <p className="text-xs font-semibold text-[hsl(16_75%_35%/0.75)] tracking-wide uppercase mb-4">
                      {article.subtitle}
                    </p>
                  )}

                  <p
                    className="text-sm text-muted-foreground leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {article.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[hsl(16_40%_86%)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white text-[hsl(16_75%_35%)] border border-[hsl(16_75%_36%/0.25)] shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-xs bg-[hsl(16_75%_36%)] text-white hover:bg-[hsl(16_80%_30%)] py-2.5 px-4 rounded-lg shadow-xs hover:shadow-md transition-all self-start sm:self-auto flex-shrink-0"
                  >
                    Read on Medium <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Medium Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 bg-white rounded-2xl p-7 md:p-8 border-2 border-[hsl(16_75%_36%/0.25)] hover:border-[#F59E0B] hover:ring-2 hover:ring-[hsl(16_75%_36%)] transition-all duration-300 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[hsl(16_55%_95%)] border border-[hsl(16_40%_86%)] flex items-center justify-center text-[hsl(16_75%_36%)] mb-6">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </div>

              <h4
                className="text-2xl font-bold text-[hsl(16_75%_35%)] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                More on Medium
              </h4>
              <p className="text-xs font-semibold text-[hsl(16_75%_35%/0.75)] tracking-wide uppercase mb-4">
                @slogeshwari23
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Exploring how literary theory, narrative psychology, and conversational AI intersect to create human-centered technology.
              </p>
            </div>

            <Link
              href={personalData.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs bg-white text-[hsl(16_75%_36%)] border-2 border-[hsl(16_75%_36%)] hover:bg-[hsl(16_75%_36%/0.08)] shadow-xs hover:shadow-md transition-all duration-200"
            >
              Explore Medium Profile <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
