"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Helper to generate multiple box-shadow stars
const generateStars = (count: number, color: string) => {
    let value = `${Math.random() * 100}vw ${Math.random() * 100}vh ${color}`;
    for (let i = 1; i < count; i++) {
        value += `, ${Math.random() * 100}vw ${Math.random() * 100}vh ${color}`;
    }
    return value;
};

export default function UniverseBackground() {
    const [starsSmall, setStarsSmall] = useState("");
    const [starsMedium, setStarsMedium] = useState("");
    const [starsLarge, setStarsLarge] = useState("");

    useEffect(() => {
        setStarsSmall(generateStars(220, "rgba(184, 58, 27, 0.08)"));
        setStarsMedium(generateStars(70, "rgba(184, 58, 27, 0.15)"));
        setStarsLarge(generateStars(20, "rgba(184, 58, 27, 0.25)"));
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
            {/* Soft Warm Rust glowing nebulae clouds on white */}
            <div className="absolute top-[-30%] left-[-20%] w-[110vw] h-[110vw] rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.05)_0%,rgba(255,247,242,0.6)_50%,rgba(255,255,255,0)_72%)] blur-[100px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-[-30%] right-[-20%] w-[120vw] h-[120vw] rounded-full bg-[radial-gradient(circle,rgba(184,58,27,0.04)_0%,rgba(255,245,238,0.5)_60%,rgba(255,255,255,0)_75%)] blur-[130px] pointer-events-none animate-pulse-slower" />
            <div className="absolute top-[15%] left-[25%] w-[85vw] h-[85vw] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.03)_0%,rgba(255,250,245,0.7)_50%,rgba(255,255,255,0)_68%)] blur-[95px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-[20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(160,110,80,0.05)_0%,rgba(0,0,0,0)_60%)] blur-[110px] pointer-events-none animate-pulse-slower" />

            {/* CSS Starfield Layers (Chocolate tone stars) */}
            {starsSmall && (
                <div
                    className="absolute rounded-full w-[1px] h-[1px] opacity-70 universe-stars-layer-1"
                    style={{ boxShadow: starsSmall }}
                />
            )}
            {starsMedium && (
                <div
                    className="absolute rounded-full w-[2px] h-[2px] opacity-80 universe-stars-layer-2"
                    style={{ boxShadow: starsMedium }}
                />
            )}
            {starsLarge && (
                <div
                    className="absolute rounded-full w-[3px] h-[3px] opacity-100 universe-stars-layer-3"
                    style={{ boxShadow: starsLarge }}
                />
            )}

            {/* Subtle dynamic sparkles (monochromatic cocoa & bronze) */}
            <SubtleSparkles />
        </div>
    );
}

function SubtleSparkles() {
    const [sparkles, setSparkles] = useState<{ id: number; left: string; top: string; delay: number; duration: number }[]>([]);

    useEffect(() => {
        // Generate only 6 very small golden-chocolate sparkles scattered around
        const initialSparkles = Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: Math.random() * 4 + 3,
        }));
        setSparkles(initialSparkles);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none">
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute w-3.5 h-3.5"
                    style={{ left: sparkle.left, top: sparkle.top }}
                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                    animate={{ scale: [0, 1, 0], opacity: [0, 0.6, 0], rotate: [0, 90, 180] }}
                    transition={{
                        duration: sparkle.duration,
                        delay: sparkle.delay,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                >
                    <svg width="100%" height="100%" viewBox="0 0 68 68" fill="none">
                        <path
                            d="M34 0L39.52 23.9616L68 34L39.52 44.0384L34 68L28.48 44.0384L0 34L28.48 23.9616L34 0Z"
                            fill="url(#sparkle-gradient-chocolate)"
                        />
                        <defs>
                            <linearGradient id="sparkle-gradient-chocolate" x1="34" y1="0" x2="34" y2="68" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#ea580c" /> {/* warm rust orange */}
                                <stop offset="1" stopColor="#9a3412" /> {/* deep burnt rust */}
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
