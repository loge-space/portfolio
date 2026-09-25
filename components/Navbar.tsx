"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Products", href: "/#work" },
  { name: "Writing", href: "/#writing" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex justify-between items-center py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span
            className="text-base font-black tracking-[-0.05em] text-foreground"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            LS
          </span>
          <span className="text-muted-foreground text-xs font-light tracking-widest uppercase ml-2" style={{ fontFamily: "var(--font-inter)" }}>
            Portfolio
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-[hsl(16_75%_36%)] text-white hover:bg-[hsl(16_80%_30%)] py-2 px-4 rounded-md font-bold text-[13px] shadow-xs hover:shadow-md transition-all"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container-editorial py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground hover:text-muted-foreground transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/#contact" className="btn-primary self-start mt-2">
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
