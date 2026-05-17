'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface NeuralNetworkProps {
  className?: string
  particleCount?: number
  color?: string
}

export function NeuralNetwork({ 
  className = '', 
  particleCount = 2000,
  color = '#ff7f00'
}: NeuralNetworkProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render Canvas during SSR to avoid hydration issues
  if (!mounted) {
    return (
      <div className={className}>
        <div className="w-full h-full bg-transparent" />
      </div>
    )
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField count={particleCount} color={color} />
      </Canvas>
    </div>
  )
}

function ParticleField({ count, color }: { count: number; color: string }) {
  const ref = useRef<THREE.Points>(null)
  const [data] = useState(() => {
    // Generate positions and velocities only on client-side
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Spherical distribution
      const radius = 2 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
      
      velocities[i3] = (Math.random() - 0.5) * 0.002
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.002
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.002
    }
    
    return { positions, velocities }
  })

  useFrame((state) => {
    if (!ref.current) return
    
    const time = state.clock.elapsedTime * 0.2
    ref.current.rotation.x = Math.sin(time * 0.5) * 0.1
    ref.current.rotation.y = time * 0.1
    
    const positionAttribute = ref.current.geometry.attributes.position
    const positions = positionAttribute.array as Float32Array
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] += data.velocities[i3]
      positions[i3 + 1] += data.velocities[i3 + 1]
      positions[i3 + 2] += data.velocities[i3 + 2]
      
      // Soft boundary
      const dist = Math.sqrt(
        positions[i3] ** 2 + 
        positions[i3 + 1] ** 2 + 
        positions[i3 + 2] ** 2
      )
      
      if (dist > 4 || dist < 1.5) {
        data.velocities[i3] *= -1
        data.velocities[i3 + 1] *= -1
        data.velocities[i3 + 2] *= -1
      }
    }
    
    positionAttribute.needsUpdate = true
  })

  return (
    <Points ref={ref} positions={data.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export function GlowingSphere({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={className} />
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff7f00" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff5500" />
        <CoreSphere />
      </Canvas>
    </div>
  )
}

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.2, 4]} />
      <meshStandardMaterial
        color="#ff7f00"
        emissive="#ff5500"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}
