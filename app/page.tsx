import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] text-white overflow-hidden">
      <CustomCursor />
      <ParticlesBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

