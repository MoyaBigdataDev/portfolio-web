"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <main className="min-h-screen transition-colors duration-300" style={{ backgroundColor: isDark ? '#0F172A' : '#FFFFFF' }}>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
