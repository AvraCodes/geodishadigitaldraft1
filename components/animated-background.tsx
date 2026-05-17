'use client'

import { NeuralNetwork } from '@/components/animations/neural-network'
import { DataFlow } from '@/components/animations/data-flow'

export function AnimatedBackground() {
  return (
    <>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      
      {/* Neural network background */}
      <div className="absolute inset-0 pointer-events-none">
        <NeuralNetwork className="w-full h-full opacity-40" particleCount={1200} />
      </div>

      {/* Data flow lines */}
      <div className="absolute inset-0 pointer-events-none">
        <DataFlow className="w-full h-full opacity-30" pathCount={6} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
    </>
  )
}
