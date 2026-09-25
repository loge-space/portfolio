"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RangoliFlower } from "./Doodles";
import { PenTool, Sparkles, Palette, Compass, ArrowRight } from "lucide-react";

interface CategoryGroup {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  icon: typeof PenTool;
  skills: string[];
}

const skillCategories: CategoryGroup[] = [
  {
    id: "writing",
    tabLabel: "Writing & Content",
    title: "Writing & Editorial",
    subtitle: "Narrative storytelling, long-form essays, conversational UX & clear technical copy.",
    icon: PenTool,
    skills: [
      "Content Writing & Editing",
      "Long-form & Short-form Writing",
      "Conversational Content",
      "Technical & Product Writing",
      "Storytelling & Ideation",
      "Social Media Content",
    ],
  },
  {
    id: "ai",
    tabLabel: "AI & Tools",
    title: "AI & Prompting",
    subtitle: "Human-in-the-loop workflows, prompt design, conversational flows & rapid prototyping.",
    icon: Sparkles,
    skills: [
      "AI-assisted Research & Writing",
      "Prompt Engineering",
      "Google AI Studio",
      "Rapid Prototyping",
      "OpenAI tools & APIs",
      "Lovable & Codex",
      "Antigravity & Claude",
    ],
  },
  {
    id: "design",
    tabLabel: "Design & Visuals",
    title: "Design & Visual Identity",
    subtitle: "Brand identity systems, UI wireframes, culturally resonant visuals & logo design.",
    icon: Palette,
    skills: [
      "UI/UX Design (Skillshare)",
      "Figma & Canva",
      "Brand Identity & Logos",
      "UI Layouts & Prototyping",
      "Visual Communication",
    ],
  },
  {
    id: "research",
    tabLabel: "Research & Strategy",
    title: "Research & Strategy",
    subtitle: "Synthesizing complex information into empathetic, user-focused digital communication.",
    icon: Compass,
    skills: [
      "Information Synthesis",
      "User-Focused Communication",
      "Tone & Emotional Nuance",
      "Persona & Empathy Mapping",
    ],
  },
];

const filterTabs = [
  { id: "all", label: "All Skills" },
  { id: "writing", label: "Writing & Content" },
  { id: "ai", label: "AI & Tools" },
  { id: "design", label: "Design & Visuals" },
  { id: "research", label: "Research & Strategy" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const visibleCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-32 px-6 border-t border-border">
      <div className="container-editorial">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-center text-center gap-3"
        >
          <RangoliFlower size={48} className="text-[hsl(16_75%_36%)] opacity-85" />
          <div>
            <span className="label-overline block mb-2">Expertise</span>
            <h2 className="section-heading text-4xl md:text-5xl mb-3">
              My <span className="italic">Toolkit</span>
            </h2>
            <p className="body-text max-w-lg mx-auto text-sm md:text-base">
              A structured breakdown of competencies across storytelling, generative AI, visual identity, and empathetic research.
            </p>
          </div>
        </motion.div>

        {/* Filter Tabs in Theme */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14 max-w-3xl mx-auto">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "bg-white text-[hsl(16_75%_35%)] border-2 border-[#F59E0B] ring-2 ring-[hsl(16_75%_36%)] shadow-md scale-105"
                    : "bg-white text-[hsl(16_75%_35%)] border-2 border-[hsl(16_75%_36%/0.25)] hover:border-[#F59E0B] hover:ring-2 hover:ring-[hsl(16_75%_36%)] hover:bg-[hsl(16_75%_36%/0.04)] shadow-xs"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Structured Category Cards Grid */}
        <div
          className={`grid gap-6 ${
            activeTab === "all" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-2xl mx-auto"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((cat, i) => {
              const IconComponent = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-7 md:p-8 border-2 border-[hsl(16_75%_36%/0.25)] hover:border-[#F59E0B] hover:ring-2 hover:ring-[hsl(16_75%_36%)] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col group text-left"
                >
                  {/* Card Header with Icon, Title, and Count */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(16_55%_95%)] border border-[hsl(16_40%_86%)] flex items-center justify-center text-[hsl(16_75%_36%)] group-hover:scale-110 transition-transform">
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-bold text-[hsl(16_75%_35%)] leading-snug"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {cat.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-[hsl(16_75%_35%/0.7)] tracking-wider uppercase">
                          {cat.skills.length} Core Areas
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Subtitle / Descriptive Scope */}
                  <p className="text-xs md:text-sm text-[hsl(18_35%_30%)] leading-relaxed mb-6">
                    {cat.subtitle}
                  </p>

                  {/* Skill Badges organized cleanly inside this category */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-[hsl(16_40%_86%)]">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[hsl(16_75%_35%)] border-2 border-[hsl(16_75%_36%/0.3)] hover:border-[#F59E0B] hover:ring-1 hover:ring-[hsl(16_75%_36%)] hover:bg-[hsl(16_75%_36%/0.04)] transition-all duration-150 shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
