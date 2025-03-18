"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Text3D, OrbitControls } from "@react-three/drei"

// 3D Text component
const AnimatedText = ({ text, position, rotation, color = "#ffffff" }) => {
  const textRef = useRef()

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1 + position[1]
    }
  })

  return (
    <Text3D ref={textRef} font="/fonts/Geist_Bold.json" size={0.5} height={0.1} position={position} rotation={rotation}>
      {text}
      <meshStandardMaterial color={color} />
    </Text3D>
  )
}

// Floating cube component
const AnimatedCube = ({ position, color = "#ffffff", size = 0.5 }) => {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <div className="h-[50vh] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        <AnimatedText text="Ričards Ošs" position={[0, 0, 0]} rotation={[0, 0, 0]} color="#ffffff" />

        <AnimatedCube position={[-2, -1, 0]} color="#ff5555" size={0.4} />
        <AnimatedCube position={[2, -1, 0]} color="#55ff55" size={0.4} />

        <Environment preset="night" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

