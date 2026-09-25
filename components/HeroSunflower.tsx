"use client";

import { motion } from "framer-motion";

const SUNFLOWER_YELLOW = "#FBBF24";       // Real golden sunflower yellow petals
const SUNFLOWER_STROKE = "#D97706";       // Warm amber outline for petals
const SUNFLOWER_CENTER = "#5C2D16";       // Real warm dark chocolate/brown seed head
const SUNFLOWER_CENTER_STROKE = "#3D1A0A"; // Deep seed disk boundary
const LEAF_GREEN = "#22C55E";             // Real vibrant botanical leaf green
const STEM_GREEN = "#16A34A";             // Sturdy plant stem green
const STEM_STROKE = "#15803D";            // Deep forest green stroke

export default function HeroSunflowerCharacter({ className = "" }: { className?: string }) {
  // 16 Sunflower Petals around center (120, 95)
  const petals = Array.from({ length: 16 }, (_, i) => {
    const angleRad = (i * 22.5 * Math.PI) / 180;
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    const perpCos = -sin;
    const perpSin = cos;

    const rInner = 28;
    const rOuter = 65;
    const rMid = 46;
    const halfWidth = 8;

    const xStart = (120 + rInner * cos).toFixed(2);
    const yStart = (95 + rInner * sin).toFixed(2);

    const xEnd = (120 + rOuter * cos).toFixed(2);
    const yEnd = (95 + rOuter * sin).toFixed(2);

    const c1x = (120 + rMid * cos + halfWidth * perpCos).toFixed(2);
    const c1y = (95 + rMid * sin + halfWidth * perpSin).toFixed(2);

    const c2x = (120 + rMid * cos - halfWidth * perpCos).toFixed(2);
    const c2y = (95 + rMid * sin - halfWidth * perpSin).toFixed(2);

    return (
      <path
        key={i}
        d={`M ${xStart} ${yStart} Q ${c1x} ${c1y} ${xEnd} ${yEnd} Q ${c2x} ${c2y} ${xStart} ${yStart}`}
        stroke={SUNFLOWER_STROKE}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={SUNFLOWER_YELLOW}
        opacity="0.98"
      />
    );
  });

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Speech Bubble "Hi!" floating above: White box, rust orange border & font */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 10 }}
        animate={{ scale: [1, 1.06, 1], opacity: 1, y: [0, -4, 0] }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.5 },
        }}
        className="absolute -top-3 right-4 z-20 bg-white text-[hsl(16_75%_35%)] px-3.5 py-1.5 rounded-full font-extrabold text-xs tracking-wider shadow-md border-2 border-[hsl(16_75%_36%)] ring-2 ring-[hsl(16_75%_36%/0.2)] flex items-center gap-1 select-none"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <span>Hi!</span>
        <span className="text-sm">👋</span>
        {/* Speech bubble tail with matching rust border */}
        <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-white border-b-2 border-r-2 border-[hsl(16_75%_36%)] rotate-45" />
      </motion.div>

      {/* Main Animated Sunflower Character SVG */}
      <motion.svg
        width="220"
        height="250"
        viewBox="0 0 240 260"
        fill="none"
        animate={{ rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="overflow-visible select-none"
      >
        {/* ── 1. Ground Standing Line ── */}
        <line
          x1="20"
          y1="240"
          x2="220"
          y2="240"
          stroke={STEM_STROKE}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Ground accent grass tufts */}
        <path d="M 50 240 L 46 230 M 54 240 L 58 232" stroke={LEAF_GREEN} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 190 240 L 186 232 M 194 240 L 198 228" stroke={LEAF_GREEN} strokeWidth="1.5" strokeLinecap="round" />

        {/* ── 2. Stem ── */}
        <path
          d="M 120 240 Q 118 170 120 125"
          stroke={STEM_GREEN}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── 3. Left Leaf ── */}
        <g>
          <path
            d="M 119 180 C 90 175 65 190 60 205 C 78 212 105 200 119 185 Z"
            stroke={STEM_STROKE}
            strokeWidth="1.8"
            fill={LEAF_GREEN}
            strokeLinejoin="round"
          />
          {/* Leaf vein */}
          <path d="M 119 180 C 98 188 75 198 62 204" stroke={STEM_STROKE} strokeWidth="1.2" opacity="0.8" />
        </g>

        {/* ── 4. Right Leaf ── */}
        <g>
          <path
            d="M 121 165 C 150 160 175 175 180 190 C 162 197 135 185 121 170 Z"
            stroke={STEM_STROKE}
            strokeWidth="1.8"
            fill={LEAF_GREEN}
            strokeLinejoin="round"
          />
          {/* Leaf vein */}
          <path d="M 121 165 C 142 173 165 183 178 189" stroke={STEM_STROKE} strokeWidth="1.2" opacity="0.8" />
        </g>

        {/* ── 5. Waving Right Arm / Hand ── */}
        <motion.g
          animate={{ rotate: [0, 18, -5, 18, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "125px 140px" }}
        >
          {/* Arm line extending right-up */}
          <path
            d="M 124 140 Q 150 130 165 110"
            stroke={STEM_GREEN}
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Hand palm */}
          <circle cx="167" cy="107" r="5" fill={LEAF_GREEN} stroke={STEM_STROKE} strokeWidth="1.2" />
          {/* Waving fingers */}
          <path d="M 166 103 L 164 97" stroke={STEM_STROKE} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 169 103 L 171 96" stroke={STEM_STROKE} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 172 106 L 177 101" stroke={STEM_STROKE} strokeWidth="1.8" strokeLinecap="round" />
        </motion.g>

        {/* ── 6. Sunflower Petals ── */}
        <g>{petals}</g>

        {/* ── 7. Sunflower Face Center ── */}
        <circle cx="120" cy="95" r="32" stroke={SUNFLOWER_CENTER_STROKE} strokeWidth="2.2" fill={SUNFLOWER_CENTER} />

        {/* Seed texture ring */}
        <circle cx="120" cy="95" r="26" stroke="#8C4724" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.6" />

        {/* Face details */}
        {/* Eyes (Cute twinkling eyes) */}
        <circle cx="108" cy="90" r="4.2" fill="#FFFFFF" />
        <circle cx="109.5" cy="88.5" r="1.5" fill="#240D05" />

        <circle cx="132" cy="90" r="4.2" fill="#FFFFFF" />
        <circle cx="133.5" cy="88.5" r="1.5" fill="#240D05" />

        {/* Cheeks (Blush) */}
        <circle cx="103" cy="96" r="3.5" fill="#F97316" opacity="0.6" />
        <circle cx="137" cy="96" r="3.5" fill="#F97316" opacity="0.6" />

        {/* Happy Smiling Mouth */}
        <path
          d="M 112 99 Q 120 108 128 99"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cute tongue curve inside mouth */}
        <path
          d="M 117 103 Q 120 106 123 103"
          stroke="#FB7185"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
