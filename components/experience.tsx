"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Briefcase, Award } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
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

    // Animate timeline items
    gsap.fromTo(
      timelineRef.current?.querySelectorAll(".timeline-item"),
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      observer.disconnect()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-[#c471ed]/10 to-[#f64f59]/10 blur-[150px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-[#ff5e62]/10 to-[#ff9966]/10 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#c471ed] to-[#f64f59]">
              My Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Darba{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c471ed] to-[#f64f59]">
              Pieredze
            </span>
          </h2>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-[#c471ed] to-[#f64f59] transform md:-translate-x-1/2"></div>

          {/* Timeline item 1 */}
          <div className="timeline-item relative mb-16 md:ml-0">
            <div className="md:flex items-center">
              <div className="hidden md:block w-1/2 pr-12 text-right">
                <h3 className="text-2xl font-bold text-white">Web Developer</h3>
                <div className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#c471ed] to-[#f64f59] font-medium">
                  purinsbiezais.lv
                </div>
                <div className="flex items-center justify-end mt-3 text-gray-300 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2024. Septembris - 2025. Janvāris</span>
                </div>
                <div className="flex items-center justify-end mt-2 text-gray-300 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Latvia</span>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 top-0 -ml-3 md:-ml-4 h-8 w-8 rounded-full bg-gradient-to-r from-[#c471ed] to-[#f64f59] transform md:-translate-x-1/2 flex items-center justify-center shadow-lg shadow-[#c471ed]/20 z-20">
                <Briefcase className="h-4 w-4 text-white" />
              </div>

              <Card className="md:w-1/2 md:ml-12 bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-lg">
                <CardContent className="p-8">
                  <div className="md:hidden mb-6">
                    <h3 className="text-2xl font-bold text-white">Web Developer</h3>
                    <div className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#c471ed] to-[#f64f59] font-medium">
                      purinsbiezais.lv
                    </div>
                    <div className="flex items-center mt-3 text-gray-300 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2023 - Present</span>
                    </div>
                    <div className="flex items-center mt-2 text-gray-300 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Latvia</span>
                    </div>
                  </div>

                  <div className="relative h-20 w-40 mb-6 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#c471ed] to-[#f64f59] opacity-30 mix-blend-overlay z-10"></div>
                    <Image
                      src="https://sjc.microlink.io/rTy2VIqWvwRQhdvDvgEnjG3OuIVrhVEqxDq3WzT8xokmrHlM-DzM81R0E-lCRVem38UU-K1Ik3Yorup2yrhbzg.jpeg"
                      alt="Purins Biezais"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 border border-white/10 rounded-lg z-20"></div>
                  </div>

                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#c471ed]/20 to-[#f64f59]/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#c471ed] to-[#f64f59]"></div>
                      </div>
                      <span>Izstrādāju un uzturēju Vue bāzētu tīmekļa lietotni.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#c471ed]/20 to-[#f64f59]/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#c471ed] to-[#f64f59]"></div>
                      </div>
                      <span>Īstenoju pielāgojamu dizainu, izmantojot Tailwind CSS.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#c471ed]/20 to-[#f64f59]/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#c471ed] to-[#f64f59]"></div>
                      </div>
                      <span>Izveidoju interaktīvus UI komponentus, izmantojot Vue.js.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#c471ed]/20 to-[#f64f59]/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#c471ed] to-[#f64f59]"></div>
                      </div>
                      <span>Optimizēju vietnes veiktspēju un lietotāja pieredzi.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline item 2 */}
          <div className="timeline-item relative mb-16 md:ml-0">
            <div className="md:flex items-center">
              <div className="md:w-1/2 pr-12 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-white">Brīvprātīgs tīmekļa izstrādātājs</h3>
                <div className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] font-medium">
                  Self-employed
                </div>
                <div className="flex items-center justify-end mt-3 text-gray-300 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2025. Janvāris</span>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 top-0 -ml-3 md:-ml-4 h-8 w-8 rounded-full bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] transform md:-translate-x-1/2 flex items-center justify-center shadow-lg shadow-[#4e54c8]/20 z-20">
                <Award className="h-4 w-4 text-white" />
              </div>

              <Card className="md:w-1/2 md:ml-12 bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-lg">
                <CardContent className="p-8">
                  <div className="md:hidden mb-6">
                    <h3 className="text-2xl font-bold text-white">Izstrādāju projektus savai nākotnei | Klijentu piesaistei.</h3>
                    <div className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] font-medium">
                      Self-employed
                    </div>
                    <div className="flex items-center mt-3 text-gray-300 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2022 - 2023</span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#4e54c8]/20 to-[#8f94fb]/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
                      </div>
                      <span>Izstrādāju projektus savai nākotnei | Klijentu piesaistei.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#4e54c8]/20 to-[#8f94fb]/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
                      </div>
                      <span>Izstrādāju un īstenoju UI/UX</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#4e54c8]/20 to-[#8f94fb]/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
                      </div>
                      <span>Izveidoju animācijas un interaktīvus elementus, izmantojot komponentes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#4e54c8]/20 to-[#8f94fb]/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
                      </div>
                      <span>Izstrādāju pielāgojamus izkārtojumus, izmantojot mūsdienīgos  CSS parametrus</span>
                    </li>
                  </ul>

                  
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mt-20"
          >
           
          </motion.div>
        </div>
      </div>
    </section>
  )
}

