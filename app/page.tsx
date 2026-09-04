import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectGrid from "@/components/ProjectGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-ink">
      <Navbar />
      <Hero />
      <About />
      <ExperienceTimeline />
      <ProjectGrid />
      <Contact />
      <Footer />
    </main>
  );
}
