"use client"

import { useEffect, useRef } from "react"
import lottie from "lottie-web"

interface LottieAnimationProps {
  animationData: any
  loop?: boolean
  autoplay?: boolean
  className?: string
}

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  className = "",
}: LottieAnimationProps) {
  const animationContainer = useRef<HTMLDivElement>(null)
  const anim = useRef<any>(null)

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      })
    }

    return () => {
      if (anim.current) {
        anim.current.destroy()
      }
    }
  }, [animationData, loop, autoplay])

  return <div ref={animationContainer} className={className} />
}

