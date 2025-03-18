"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Braces, FileCode, Globe, Layers, Cpu } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const skills = [
  {
    name: "PHP",
    value: 80,
    icon: <Code className="h-6 w-6" />,
    color: "from-[#ff5e62] to-[#ff9966]",
    shadowColor: "shadow-[#ff5e62]/20",
  },
  {
    name: "Tailwind/CSS",
    value: 100,
    icon: <Palette className="h-6 w-6" />,
    color: "from-[#4e54c8] to-[#8f94fb]",
    shadowColor: "shadow-[#4e54c8]/20",
  },
  {
    name: "TypeScript",
    value: 60,
    icon: <Braces className="h-6 w-6" />,
    color: "from-[#11998e] to-[#38ef7d]",
    shadowColor: "shadow-[#11998e]/20",
  },
  {
    name: "JavaScript",
    value: 55,
    icon: <FileCode className="h-6 w-6" />,
    color: "from-[#c471ed] to-[#f64f59]",
    shadowColor: "shadow-[#c471ed]/20",
  },
]

const technologies = [
  { name: "React", icon: <Layers className="h-5 w-5" />, color: "from-[#61dafb] to-[#61dafb]" },
  { name: "Vue", icon: <Layers className="h-5 w-5" />, color: "from-[#42b883] to-[#42b883]" },
  { name: "Node.js", icon: <Globe className="h-5 w-5" />, color: "from-[#ffffff] to-[#ffffff]" },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  const progressRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Animate section title
    gsap.fromTo(
      sectionRef.current?.querySelector("h2"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    )

    // Animate skill cards
    gsap.fromTo(
      skillsRef.current?.querySelectorAll(".skill-card"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      },
    )

    // Animate progress bars
    progressRefs.current.forEach((ref, index) => {
      if (ref) {
        const value = skills[index].value

        gsap.fromTo(
          ref,
          { width: "0%" },
          {
            width: `${value}%`,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 90%",
            },
          },
        )
      }
    })

    // Animate tech stack
    gsap.fromTo(
      techRef.current?.querySelectorAll(".tech-item"),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 85%",
        },
      },
    )

    return () => {
      observer.disconnect()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-[#ff5e62]/10 to-[#ff9966]/10 blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-[#4e54c8]/10 to-[#8f94fb]/10 blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Programmēšanas{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]">Skills</span>
          </h2>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="skill-card bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`mr-4 h-12 w-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center ${skill.shadowColor}`}
                  >
                    <div className="text-white">{skill.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <p className="text-gray-400 text-sm">Advanced</p>
                  </div>
                  <div className="ml-auto">
                    <span
                      className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${skill.color}`}
                    >
                      {skill.value}%
                    </span>
                  </div>
                </div>

                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div
                    ref={(el) => (progressRefs.current[index] = el)}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-10 text-center text-white">Tehneloģijas ar ko strādāju</h3>
          <div ref={techRef} className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className={`tech-item px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-all duration-300 shadow-lg cursor-pointer`}
                onClick={() => {
                  const urls = {
                    "Vue": "https://vuejs.org",
                    "Node.js": "https://nodejs.org",
                    "React": "https://react.dev"
                  };
                  const url = urls[tech.name as keyof typeof urls];
                  if (url) window.open(url, "_blank");
                }}
              >
                <div
                  className={`h-8 w-8 rounded-full bg-gradient-to-r ${tech.color} bg-opacity-20 flex items-center justify-center`}
                >
                  {tech.icon}
                </div>
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "3+", label: "Mēnešu Pieredze", color: "from-[#ff5e62] to-[#ff9966]" },
            { value: "5+", label: "Projekti ", color: "from-[#4e54c8] to-[#8f94fb]" },
            { value: "100%", label: "Klijentu Apmierinātība", color: "from-[#11998e] to-[#38ef7d]" },
            { value: "24/7", label: "Atbalsts | Saziņa", color: "from-[#c471ed] to-[#f64f59]" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
            >
              <h4
                className={`text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}
              >
                {stat.value}
              </h4>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

