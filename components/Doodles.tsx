"use client";

// ─────────────────────────────────────────────────────────────
//  ELEGANT SUNFLOWER RANGOLI MOTIFS — Detailed Sunflower Line Art
// ─────────────────────────────────────────────────────────────

const RUST = "hsl(16, 75%, 38%)";
const CREAM = RUST;

/**
 * Sunflower Motif (Grand Sunflower Emblem)
 * Double-layered sunflower petals with textured seed center.
 */
export function RangoliFlower({ className = "", size = 160 }: { className?: string; size?: number }) {
  // Layer 1: 16 Outer Sunflower Petals
  const outerPetals = Array.from({ length: 16 }, (_, i) => {
    const angleRad = (i * 22.5 * Math.PI) / 180;
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    const perpCos = -sin;
    const perpSin = cos;

    const rInner = 28;
    const rOuter = 88;
    const rMid = 58;
    const halfWidth = 8.5;

    const xStart = (100 + rInner * cos).toFixed(2);
    const yStart = (100 + rInner * sin).toFixed(2);

    const xEnd = (100 + rOuter * cos).toFixed(2);
    const yEnd = (100 + rOuter * sin).toFixed(2);

    const c1x = (100 + rMid * cos + halfWidth * perpCos).toFixed(2);
    const c1y = (100 + rMid * sin + halfWidth * perpSin).toFixed(2);

    const c2x = (100 + rMid * cos - halfWidth * perpCos).toFixed(2);
    const c2y = (100 + rMid * sin - halfWidth * perpSin).toFixed(2);

    return (
      <path
        key={`outer-${i}`}
        d={`M ${xStart} ${yStart} Q ${c1x} ${c1y} ${xEnd} ${yEnd} Q ${c2x} ${c2y} ${xStart} ${yStart}`}
        stroke={CREAM}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
    );
  });

  // Layer 2: 16 Inner Overlapping Sunflower Petals (staggered by 11.25 deg)
  const innerPetals = Array.from({ length: 16 }, (_, i) => {
    const angleRad = ((i * 22.5 + 11.25) * Math.PI) / 180;
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    const perpCos = -sin;
    const perpSin = cos;

    const rInner = 28;
    const rOuter = 72;
    const rMid = 50;
    const halfWidth = 7;

    const xStart = (100 + rInner * cos).toFixed(2);
    const yStart = (100 + rInner * sin).toFixed(2);

    const xEnd = (100 + rOuter * cos).toFixed(2);
    const yEnd = (100 + rOuter * sin).toFixed(2);

    const c1x = (100 + rMid * cos + halfWidth * perpCos).toFixed(2);
    const c1y = (100 + rMid * sin + halfWidth * perpSin).toFixed(2);

    const c2x = (100 + rMid * cos - halfWidth * perpCos).toFixed(2);
    const c2y = (100 + rMid * sin - halfWidth * perpSin).toFixed(2);

    return (
      <path
        key={`inner-${i}`}
        d={`M ${xStart} ${yStart} Q ${c1x} ${c1y} ${xEnd} ${yEnd} Q ${c2x} ${c2y} ${xStart} ${yStart}`}
        stroke={CREAM}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.65"
      />
    );
  });

  // Seed center: Ring 1 of seeds (8 dots)
  const seedRing1 = Array.from({ length: 8 }, (_, i) => {
    const angleRad = (i * 45 * Math.PI) / 180;
    const cx = (100 + 14 * Math.cos(angleRad)).toFixed(2);
    const cy = (100 + 14 * Math.sin(angleRad)).toFixed(2);
    return <circle key={`s1-${i}`} cx={cx} cy={cy} r="1.8" fill={CREAM} opacity="0.8" />;
  });

  // Seed center: Ring 2 of seeds (12 dots)
  const seedRing2 = Array.from({ length: 12 }, (_, i) => {
    const angleRad = ((i * 30 + 15) * Math.PI) / 180;
    const cx = (100 + 22 * Math.cos(angleRad)).toFixed(2);
    const cy = (100 + 22 * Math.sin(angleRad)).toFixed(2);
    return <circle key={`s2-${i}`} cx={cx} cy={cy} r="1.6" fill={CREAM} opacity="0.85" />;
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
    >
      {/* Outer Sunflower Petals */}
      {outerPetals}

      {/* Inner Layer Sunflower Petals */}
      {innerPetals}

      {/* Sunflower Seed Center Head */}
      <circle cx="100" cy="100" r="28" stroke={CREAM} strokeWidth="1.8" fill="none" opacity="0.9" />
      <circle cx="100" cy="100" r="20" stroke={CREAM} strokeWidth="1.2" fill="none" opacity="0.6" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="8" stroke={CREAM} strokeWidth="1.2" fill="none" opacity="0.7" />

      {/* Seed Dots */}
      {seedRing1}
      {seedRing2}

      {/* Center Core */}
      <circle cx="100" cy="100" r="3.5" fill={CREAM} opacity="0.95" />
    </svg>
  );
}

/**
 * Sunflower Bloom (Medium Sunflower Accent)
 * 12 sharp sunflower petals with seed center.
 */
export function RangoliBloom({ className = "", size = 120 }: { className?: string; size?: number }) {
  const petals = Array.from({ length: 12 }, (_, i) => {
    const angleRad = (i * 30 * Math.PI) / 180;
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    const perpCos = -sin;
    const perpSin = cos;

    const rInner = 20;
    const rOuter = 84;
    const rMid = 52;
    const halfWidth = 10;

    const xStart = (100 + rInner * cos).toFixed(2);
    const yStart = (100 + rInner * sin).toFixed(2);

    const xEnd = (100 + rOuter * cos).toFixed(2);
    const yEnd = (100 + rOuter * sin).toFixed(2);

    const c1x = (100 + rMid * cos + halfWidth * perpCos).toFixed(2);
    const c1y = (100 + rMid * sin + halfWidth * perpSin).toFixed(2);

    const c2x = (100 + rMid * cos - halfWidth * perpCos).toFixed(2);
    const c2y = (100 + rMid * sin - halfWidth * perpSin).toFixed(2);

    return (
      <path
        key={i}
        d={`M ${xStart} ${yStart} Q ${c1x} ${c1y} ${xEnd} ${yEnd} Q ${c2x} ${c2y} ${xStart} ${yStart}`}
        stroke={CREAM}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />
    );
  });

  const seeds = Array.from({ length: 10 }, (_, i) => {
    const angleRad = (i * 36 * Math.PI) / 180;
    const cx = (100 + 13 * Math.cos(angleRad)).toFixed(2);
    const cy = (100 + 13 * Math.sin(angleRad)).toFixed(2);
    return <circle key={i} cx={cx} cy={cy} r="1.6" fill={CREAM} opacity="0.8" />;
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
    >
      {/* Sunflower Petals */}
      {petals}

      {/* Sunflower Center Core */}
      <circle cx="100" cy="100" r="20" stroke={CREAM} strokeWidth="1.8" fill="none" opacity="0.9" />
      {seeds}
      <circle cx="100" cy="100" r="5" fill={CREAM} opacity="0.9" />
    </svg>
  );
}

/**
 * Horizontal Sunflower Divider Line
 */
export function RangoliDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px bg-foreground/25 flex-1 max-w-[140px]" />
      <RangoliBloom size={36} />
      <div className="h-px bg-foreground/25 flex-1 max-w-[140px]" />
    </div>
  );
}
