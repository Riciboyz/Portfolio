"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Show success message
    alert("Message sent successfully! I'll get back to you soon.")
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

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
    const titleElement = sectionRef.current?.querySelector("h2")
    if (titleElement) {
      gsap.fromTo(
        titleElement,
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
    }

    // Animate form
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        },
      )
    }

    // Animate contact info
    const infoItems = Array.from(infoRef.current?.querySelectorAll(".info-item") || [])
    if (infoItems.length > 0) {
      gsap.fromTo(
        infoItems,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
          },
        },
      )
    }

    // Cleanup function
    return () => {
      observer.disconnect()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/3 w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-[#ff5e62]/10 to-[#ff9966]/10 blur-[150px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-[#4e54c8]/10 to-[#8f94fb]/10 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#ff5e62] to-[#ff9966]">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Sazinies Ar {" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff5e62] to-[#ff9966] cursor-pointer"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Mani
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-lg h-full">
              <CardContent className="p-8">
                <form ref={formRef} id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white focus:border-[#ff9966] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white focus:border-[#ff9966] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white min-h-[150px] focus:border-[#ff9966] transition-colors"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff5e62] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ff5e62] text-white border-0 rounded-full px-8 py-6 text-lg transition-all duration-300 shadow-lg shadow-[#ff5e62]/20"
                  >
                    Send Message <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <div ref={infoRef} className="space-y-6">
            <div className="info-item flex items-start p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg">
              <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff5e62] to-[#ff9966] text-white shadow-lg shadow-[#ff5e62]/20">
                <Mail className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="mt-2 text-gray-300">Ricardsossvtdt@gmail.com</p>
                <Button
                  variant="link"
                  className="mt-2 p-0 text-[#ff9966] hover:text-[#ff5e62] transition-colors flex items-center gap-1"
                  onClick={() => (window.location.href = "mailto:richards.oss@example.com")}
                >
                  Send Email <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="info-item flex items-start p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg">
              <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] text-white shadow-lg shadow-[#4e54c8]/20">
                <Phone className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="mt-2 text-gray-300">+371 26113514</p>
                <Button
                  variant="link"
                  className="mt-2 p-0 text-[#8f94fb] hover:text-[#4e54c8] transition-colors flex items-center gap-1"
                  onClick={() => (window.location.href = "tel:+37112345678")}
                >
                  Veic Mutisku Sarunu! <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="info-item flex items-start p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg">
              <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#11998e] to-[#38ef7d] text-white shadow-lg shadow-[#11998e]/20">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white">Location</h3>
                <p className="mt-2 text-gray-300">Sigulda | Latvia</p>
                <Button
                  variant="link"
                  className="mt-2 p-0 text-[#38ef7d] hover:text-[#11998e] transition-colors flex items-center gap-1"
                  onClick={() => window.open("https://maps.app.goo.gl/XCv7q46YPm651w1x5", "_blank")}
                >
                  View on Map <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

