"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-2 border-white/30 border-t-white animate-spin">
        <div className="w-full h-full rounded-full animate-pulse bg-white/10"></div>
      </div>
    </div>
  )
} 