import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Work History & Experience | Logeshwari Sankar",
  description: "Work experience including Therafora AI, GoTamil, GoMalayalam, GoJapanese, and AI prototyping lab.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="container-editorial pt-6 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[hsl(16_75%_35%)] hover:text-[hsl(16_85%_25%)] transition-colors px-3.5 py-1.5 rounded-full border-2 border-[hsl(16_75%_36%/0.3)] bg-white shadow-xs hover:border-[#F59E0B]"
        >
          <ArrowLeft size={14} /> Back to Overview
        </Link>
      </div>
      <Experience />
      <Contact />
    </main>
  );
}
