"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, [data-cursor]");
      if (interactiveEl) {
        setIsHovering(true);
        const text = (interactiveEl as HTMLElement).getAttribute("data-cursor");
        setCursorText(text || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-foreground"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-foreground/30 flex items-center justify-center overflow-hidden"
        animate={{
          x: mousePosition.x - (cursorText ? 40 : 20),
          y: mousePosition.y - (cursorText ? 40 : 20),
          width: cursorText ? 80 : 40,
          height: cursorText ? 80 : 40,
          scale: isHovering ? 1.1 : 1,
          backgroundColor: cursorText
            ? "hsla(16, 75%, 36%, 0.1)"
            : "transparent",
          borderColor: cursorText
            ? "hsla(16, 75%, 36%, 0.8)"
            : "hsla(16, 75%, 36%, 0.35)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="text-[10px] font-bold tracking-widest text-foreground uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
