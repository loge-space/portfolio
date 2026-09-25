import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Education & Academic Background | Logeshwari Sankar",
  description: "Academic background, degrees from Pondicherry University, St. Joseph College, and Skillshare UI/UX specialization.",
};

export default function EducationPage() {
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
      <Education />
      <Contact />
    </main>
  );
}
