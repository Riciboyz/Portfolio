"use client"

import { useEffect } from "react"
import { gsap } from "gsap"

export default function CursorEffect() {
  useEffect(() => {
    // Atliekam GSAP inicializāciju līdz lapas ielādei
    const initCursor = () => {
      const cursor = document.createElement("div")
      cursor.className = "fixed w-4 h-4 rounded-full bg-white/50 pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
      document.body.appendChild(cursor)

      const cursorOutline = document.createElement("div")
      cursorOutline.className = "fixed w-8 h-8 rounded-full border border-white/50 pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out"
      document.body.appendChild(cursorOutline)

      const moveCursor = (e: MouseEvent) => {
        requestAnimationFrame(() => {
          gsap.to(cursor, {
            x: e.clientX - 8,
            y: e.clientY - 8,
            duration: 0.1
          })
          gsap.to(cursorOutline, {
            x: e.clientX - 16,
            y: e.clientY - 16,
            duration: 0.15
          })
        })
      }

      const growCursor = () => {
        gsap.to(cursor, {
          scale: 2,
          duration: 0.2
        })
        gsap.to(cursorOutline, {
          scale: 1.5,
          duration: 0.2
        })
      }

      const shrinkCursor = () => {
        gsap.to([cursor, cursorOutline], {
          scale: 1,
          duration: 0.2
        })
      }

      document.addEventListener("mousemove", moveCursor)

      const links = document.querySelectorAll("a, button")
      links.forEach(link => {
        link.addEventListener("mouseenter", growCursor)
        link.addEventListener("mouseleave", shrinkCursor)
      })

      return () => {
        document.removeEventListener("mousemove", moveCursor)
        links.forEach(link => {
          link.removeEventListener("mouseenter", growCursor)
          link.removeEventListener("mouseleave", shrinkCursor)
        })
        cursor.remove()
        cursorOutline.remove()
      }
    }

    // Atliekam inicializāciju līdz lapas ielādei
    if (document.readyState === 'complete') {
      initCursor()
    } else {
      window.addEventListener('load', initCursor)
      return () => window.removeEventListener('load', initCursor)
    }
  }, [])

  return null
} 