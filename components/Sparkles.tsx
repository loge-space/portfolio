"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SparkleProps {
    id: string;
    size: number;
    style: React.CSSProperties;
}

const generateSparkle = (): SparkleProps => {
    return {
        id: String(Math.random()),
        size: Math.random() * 20 + 10,
        style: {
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDuration: Math.random() * 2 + 1 + "s",
            opacity: Math.random() * 0.5 + 0.3,
        },
    };
};

export default function SparklesCore({ background }: { background?: string }) {
    const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSparkles((current) => {
                const next = [...current.slice(-15), generateSparkle()];
                return next;
            });
        }, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none" style={{ background }}>
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute z-0"
                    style={{
                        ...sparkle.style,
                        width: sparkle.size,
                        height: sparkle.size,
                    }}
                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                    animate={{ scale: 1, opacity: sparkle.style.opacity, rotate: 180 }}
                    exit={{ scale: 0, opacity: 0, rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                >
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 68 68"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M34 0L39.52 23.9616L68 34L39.52 44.0384L34 68L28.48 44.0384L0 34L28.48 23.9616L34 0Z"
                            fill="url(#sparkle-gradient)"
                        />
                        <defs>
                            <linearGradient
                                id="sparkle-gradient"
                                x1="34"
                                y1="0"
                                x2="34"
                                y2="68"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#ea580c" />
                                <stop offset="1" stopColor="#c2410c" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
