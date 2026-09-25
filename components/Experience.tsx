"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";
import { RangoliFlower } from "./Doodles";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 border-t border-border">
      <div className="container-editorial">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Education */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 flex items-center justify-between"
            >
              <div>
                <p className="label-overline mb-4">Education</p>
                <h2 className="section-heading text-3xl md:text-4xl">
                  Academic <span className="italic">Background</span>
                </h2>
              </div>
              <div className="text-[hsl(16_75%_36%)] opacity-85 pr-2">
                <RangoliFlower size={56} />
              </div>
            </motion.div>

            <div className="space-y-0 divide-y divide-border border border-border rounded-lg overflow-hidden">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card p-6"
                >
                  <span className="label-overline text-muted-foreground block mb-2">
                    {item.period}
                  </span>
                  <h3
                    className="text-base font-semibold text-foreground mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.institution}
                  </h3>
                  <p className="text-sm text-foreground font-medium mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.degree}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 flex items-center justify-between"
            >
              <div>
                <p className="label-overline mb-4">Experience</p>
                <h2 className="section-heading text-3xl md:text-4xl">
                  Work <span className="italic">History</span>
                </h2>
              </div>
              <div className="text-[hsl(16_75%_36%)] opacity-85 pr-2">
                <RangoliFlower size={56} />
              </div>
            </motion.div>

            <div className="space-y-0 divide-y divide-border border border-border rounded-lg overflow-hidden">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card p-6"
                >
                  <span className="label-overline text-muted-foreground block mb-2">
                    {item.period}
                  </span>
                  <h3
                    className="text-base font-semibold text-foreground mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.role}
                  </h3>
                  <p className="text-sm text-foreground font-medium mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
