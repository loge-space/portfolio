import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Writing />
      <Skills />
      <Contact />
    </main>
  );
}
