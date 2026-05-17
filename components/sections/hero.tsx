'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NeuralNetwork } from '@/components/animations/neural-network'
import { DataFlow } from '@/components/animations/data-flow'
import { RevealSection } from '@/components/animations/reveal-section'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Neural network background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <NeuralNetwork className="w-full h-full opacity-40" particleCount={1200} />
      </motion.div>

      {/* Data flow lines */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <DataFlow className="w-full h-full opacity-30" pathCount={6} />
      </motion.div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20"
      >
        {/* Left side - text content */}
        <div className="flex flex-col justify-center">
          <RevealSection delay={0.2}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-8 w-fit">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Enterprise AI Platform
            </span>
          </RevealSection>

          <RevealSection delay={0.3}>
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.2] mb-6 text-foreground">
              Turn Your Data Into <span className="text-primary">Actionable Intelligence</span>
            </h1>
          </RevealSection>

          <RevealSection delay={0.4}>
            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
              Enterprise-grade data science and AI infrastructure that transforms raw data into strategic insights. Empower your organization with cutting-edge analytics.
            </p>
          </RevealSection>

          <RevealSection delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#platform"
                className="px-8 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 w-fit"
              >
                Start Transformation
              </a>
              <a
                href="#capabilities"
                className="px-8 py-3.5 text-sm font-medium glass text-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 border border-border/50 w-fit"
              >
                Learn More
              </a>
            </div>
          </RevealSection>
        </div>

        {/* Right side - trusted by section */}
        <RevealSection delay={0.6}>
          <div className="flex flex-col items-start lg:items-center justify-center h-full">
            <p className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase mb-8">
              Trusted by Industry Leaders
            </p>
            <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
              {[
                { name: 'Fortune 500', icon: '★' },
                { name: 'Tech Giants', icon: '⚡' },
                { name: 'Healthcare', icon: '🏥' },
                { name: 'Finance', icon: '💰' },
              ].map((sector, i) => (
                <motion.div
                  key={sector.name}
                  className="p-4 glass rounded-lg border border-border/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <div className="text-2xl mb-2">{sector.icon}</div>
                  <p className="text-sm text-muted-foreground/70 font-medium">{sector.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>
      </motion.div>
    </section>
  )
}
