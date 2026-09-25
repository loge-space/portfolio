"use client";

import Link from "next/link";
import { personalData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container-editorial flex flex-col md:flex-row justify-between items-center gap-4">
        <p
          className="text-sm text-muted-foreground"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © {new Date().getFullYear()}{" "}
          <span
            className="font-semibold text-foreground"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Logeshwari Sankar
          </span>
          . All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <Link
            href={personalData.socials.linkedin}
            target="_blank"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href={personalData.socials.medium}
            target="_blank"
            className="hover:text-foreground transition-colors"
          >
            Medium
          </Link>
          <span className="italic opacity-60" style={{ fontFamily: "var(--font-playfair)" }}>
            Designed with intention.
          </span>
        </div>
      </div>
    </footer>
  );
}
