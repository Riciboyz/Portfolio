"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    title: "FlappyBirds",
    description: "Trešā kursa galadarbs izveidot videospēli!",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    codeUrl: "https://github.com/Riciboyz/Galadarbs-FlappyBirds",
    color: "from-[#4e54c8] to-[#8f94fb]",
  },
  {
    title: "MoodTunes",
    description: "Vienkārša Spotify mūzikas atskaņotāja aplikācija",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "TypeScript", "Tailwind", "Spotify API"],
    codeUrl: "https://github.com/Riciboyz/MoodTunes",
    color: "from-[#11998e] to-[#38ef7d]",
  },
  {
    title: "Troika",
    description: "Vienkārša, bet funkcionāla kāršu spēle",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "TypeScript", "Tailwind", "Prisma"],
    codeUrl: "https://github.com/Riciboyz/PrivataTroika",
    color: "from-[#c471ed] to-[#f64f59]",
  }
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)
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

    // Animate project cards
    gsap.fromTo(
      projectsRef.current?.querySelectorAll(".project-card"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
      },
    )

    // Parallax effect on project images
    const projectImages = projectsRef.current?.querySelectorAll(".project-image")
    projectImages?.forEach((image) => {
      gsap.to(image, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    return () => {
      observer.disconnect()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-[#11998e]/10 to-[#38ef7d]/10 blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-[#c471ed]/10 to-[#f64f59]/10 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#11998e] to-[#38ef7d]">
              My Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#11998e] to-[#38ef7d]">Projects</span>
          </h2>
        </div>

        {/* Project tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${
                activeProject === index ? `bg-gradient-to-r ${project.color} shadow-lg` : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${projects[activeProject].color} opacity-30 mix-blend-overlay z-10`}
              ></div>
              <Image
                src={projects[activeProject].image || "/placeholder.svg"}
                alt={projects[activeProject].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl z-20"></div>
            </div>

            <div className="p-6">
              <h3
                className={`text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${projects[activeProject].color}`}
              >
                {projects[activeProject].title}
              </h3>
              <p className="text-xl text-gray-300 mb-6">{projects[activeProject].description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {projects[activeProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-4 py-2 bg-gradient-to-r ${projects[activeProject].color} bg-opacity-10 rounded-full text-sm font-medium text-white`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  className={`bg-gradient-to-r ${projects[activeProject].color} hover:opacity-90 text-white border-0 rounded-full px-6 py-6 text-lg transition-all duration-300 shadow-lg`}
                  onClick={() => window.open(projects[activeProject].codeUrl, "_blank")}
                >
                  View Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 mix-blend-overlay z-10`}
                ></div>
                <div className="project-image absolute inset-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`flex items-center gap-2 border border-white/20 hover:bg-gradient-to-r ${project.color} hover:border-transparent transition-all duration-300`}
                    onClick={() => window.open(project.codeUrl, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

