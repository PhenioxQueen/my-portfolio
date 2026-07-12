import Header from "@/components/Header";
import About from "@/components/About";
import ForgeSection from "@/components/ForgeSection";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <About />
      <ForgeSection />
      <Education />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
