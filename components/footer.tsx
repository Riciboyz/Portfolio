"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Animate footer elements
   

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <footer ref={footerRef} className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#16213e] to-[#0f0f1a]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="animate-item mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Ričards Ošs
            </h3>
            <p className="text-gray-400 mt-2">Web Developer & Designer</p>
          </div>

          <div className="animate-item flex space-x-4 mb-8 md:mb-0">
            <Link
              href="https://github.com/Riciboyz"
              target="_blank"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-gradient-to-r from-[#ff5e62] to-[#ff9966] hover:border-transparent hover:text-white transition-all duration-300 shadow-lg"
            >
              <Github className="h-5 w-5" />
            </Link>
            
             
            <Link
              href="https://www.instagram.com/riciboyy/"
              target="_blank"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-gradient-to-r from-[#c471ed] to-[#f64f59] hover:border-transparent hover:text-white transition-all duration-300 shadow-lg"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>

          <div className="animate-item">
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3 bg-gradient-to-r from-[#ff5e62] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ff5e62] text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-[#ff5e62]/20 flex items-center gap-2"
            >
             
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          

          

         

          
        </div>

        <div className="animate-item border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ričards Ošs. All rights reserved.</p>
          <p className="mt-2">Designed and developed with passion</p>
        </div>
      </div>
    </footer>
  )
}

