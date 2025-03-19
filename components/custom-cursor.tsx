"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MousePosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return (
    <motion.div
      className="fixed w-5 h-5 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
      }}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 0.5,
        ease: "linear",
      }}
    />
  )
}

