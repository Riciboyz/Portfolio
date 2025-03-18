"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Palette, ArrowRight } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Skills data
const skills = [
  { name: "PHP", color: "from-[#ff5e62] to-[#ff9966]", icon: <Code className="h-5 w-5" /> },
  { name: "JavaScript", color: "from-[#4e54c8] to-[#8f94fb]", icon: <Code className="h-5 w-5" /> },
  { name: "TypeScript", color: "from-[#11998e] to-[#38ef7d]", icon: <Code className="h-5 w-5" /> },
  { name: "React", color: "from-[#61dafb] to-[#61dafb]", icon: <Code className="h-5 w-5" /> },
  { name: "Vue", color: "from-[#42b883] to-[#42b883]", icon: <Code className="h-5 w-5" /> },
  { name: "Tailwind CSS", color: "from-[#38bdf8] to-[#38bdf8]", icon: <Palette className="h-5 w-5" /> },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Track mouse position for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Hero animations
    const tl = gsap.timeline()

    // Animate name with letter splitting
    const nameElement = nameRef.current
    if (nameElement) {
      const text = nameElement.innerText
      nameElement.innerHTML = ""

      // Create spans for each letter
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span")
        span.textContent = text[i]
        span.style.opacity = "0"
        span.style.display = "inline-block"
        span.style.transform = "translateY(50px)"
        nameElement.appendChild(span)
      }

      // Animate each letter
      gsap.to(nameElement.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      })
    }

    // Animate title
    tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")

    // Animate content
    tl.fromTo(
      contentRef.current?.querySelectorAll(".animate-item"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" },
      "-=0.6",
    )

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Parallax effect for background elements
  const getParallaxStyle = (factor: number) => {
    return {
      transform: `translate(${mousePosition.x * factor}px, ${mousePosition.y * factor}px)`,
      transition: "transform 0.1s ease-out",
    }
  }

  return (
    <section ref={heroRef} className="relative min-h-screen py-20 flex flex-col justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] z-0"></div>

      {/* Animated gradient circles */}
      <div
        className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-[#ff5e62] to-[#ff9966] opacity-20 blur-[120px] animate-pulse"
        style={getParallaxStyle(-15)}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] opacity-20 blur-[100px] animate-pulse"
        style={{ ...getParallaxStyle(-10), animationDelay: "1s" }}
      ></div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] border-2 border-white/10 rounded-full z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-[200px] h-[200px] border-2 border-white/10 rounded-full z-0"></div>
      <div className="absolute top-1/2 right-1/3 w-[150px] h-[150px] border-2 border-white/5 rounded-full z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm font-medium text-gray-300">Available for work</span>
            </div>

            <h1 ref={nameRef} className="text-5xl md:text-7xl font-bold mb-4 text-white leading-tight">
              Ričards Ošs
            </h1>

            <div ref={titleRef} className="flex items-center justify-center mb-6">
              <div className="h-[2px] w-[40px] bg-gradient-to-r from-[#ff5e62] to-[#ff9966] mr-4"></div>
              <h2 className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#ff5e62] to-[#ff9966]">
                Web Developer & Designer
              </h2>
              <div className="h-[2px] w-[40px] bg-gradient-to-r from-[#ff9966] to-[#ff5e62] ml-4"></div>
            </div>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-item">
              Es veidoju apbrīnojamas digitālās pieredzes, izmantojot mūsdienīgas tīmekļa tehnoloģijas un radošu dizainu. Specializējos PHP, JavaScript un frontend ietvarstruktūrās,
              lai izstrādātu skaistas,
              funkcionālas tīmekļa vietnes un lietotnes, kas nodrošina izcilu lietotāja pieredzi.
            </p>

            <div ref={contentRef} className="flex flex-col sm:flex-row justify-center gap-6 mb-12 animate-item">
              <Button
                className="bg-gradient-to-r from-[#ff5e62] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ff5e62] text-white border-0 rounded-full px-8 py-6 text-lg transition-all duration-300 shadow-lg shadow-[#ff5e62]/20"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Skills badges */}
          <div className="animate-item mb-12">
            <h3 className="text-white font-medium mb-6 flex items-center justify-center">
              <div className="h-[1px] w-[20px] bg-white/30 mr-3"></div>
              Manas Prasmes
              <div className="h-[1px] w-[20px] bg-white/30 ml-3"></div>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-all duration-300`}
                >
                  <div
                    className={`h-5 w-5 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}
                  >
                    {skill.icon}
                  </div>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-item">
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-white opacity-70" />
          </div>
        </div>
      </div>
    </section>
  )
}

