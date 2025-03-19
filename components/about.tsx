"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Code, Palette, Cpu, Globe } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Atlasām visus teksta elementus
    const textElements = Array.from(sectionRef.current?.querySelectorAll('p, h2, h3') || [])
    
    if (textElements.length > 0) {
      gsap.fromTo(
        textElements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }

    // Animate image
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-[#4e54c8]/20 to-[#8f94fb]/20 blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-[#11998e]/20 to-[#38ef7d]/20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div ref={imageRef} className="md:w-1/2 relative order-2 md:order-1">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] opacity-30 mix-blend-overlay z-10"></div>
              <Image src="/placeholder.svg?height=1000&width=800" alt="Ričards Ošs" fill className="object-cover" />

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#ff5e62] to-[#ff9966] rounded-full blur-3xl opacity-40"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-full blur-3xl opacity-40"></div>

              {/* Image border */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl z-20">
                <img 
                  src="https://pbs.twimg.com/profile_images/1456698254159237125/BKwmul9c_400x400.jpg"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#11998e] to-[#38ef7d] px-6 py-3 rounded-full text-white font-semibold shadow-lg shadow-[#38ef7d]/20 z-30">
              18 Years Old
            </div>
          </div>

          <div ref={textRef} className="md:w-1/2 order-1 md:order-2">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#ff5e62] to-[#ff9966]">
                About Me
              </span>
            </div>

            <h2 className="animate-item text-4xl md:text-5xl font-bold mb-8 text-white">
            Kaislīgs{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff5e62] to-[#ff9966]">
                Web Developer
              </span>{" "}
              & Kreatīvs{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]">
                Designer
              </span>
            </h2>

            <p className="animate-item text-lg text-gray-300 mb-6 leading-relaxed">
            Es esmu Ričards Ošs, 18 gadus vecs tīmekļa izstrādātājs ar aizrautību veidot skaistas un funkcionālas vietnes un lietotnes.
             Ar pieredzi purinsbiezais.lv esmu pilnveidojis savas prasmes PHP, JavaScript, TypeScript un mūsdienīgos frontend ietvaros.
            </p>

            <p className="animate-item text-lg text-gray-300 mb-8 leading-relaxed">
            Es specializējos interaktīvu tīmekļa pieredžu veidošanā, izmantojot jaunākās tehnoloģijas, tostarp React, Vue un Node.js. 
            Mans mērķis ir radīt digitālus produktus, kas ne tikai izskatās lieliski, bet arī nodrošina izcilu lietotāja pieredzi.








            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="animate-item flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#ff5e62]/20 to-[#ff9966]/20 flex items-center justify-center mr-3">
                  <Code className="h-5 w-5 text-[#ff9966]" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Web Development</h3>
                </div>
              </div>

              <div className="animate-item flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#4e54c8]/20 to-[#8f94fb]/20 flex items-center justify-center mr-3">
                  <Palette className="h-5 w-5 text-[#8f94fb]" />
                </div>
                <div>
                  <h3 className="font-medium text-white">UI/UX Design</h3>
                </div>
              </div>

              <div className="animate-item flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#11998e]/20 to-[#38ef7d]/20 flex items-center justify-center mr-3">
                  <Cpu className="h-5 w-5 text-[#38ef7d]" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Backend Development</h3>
                </div>
              </div>

              <div className="animate-item flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#c471ed]/20 to-[#f64f59]/20 flex items-center justify-center mr-3">
                  <Globe className="h-5 w-5 text-[#f64f59]" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Web Animation</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

