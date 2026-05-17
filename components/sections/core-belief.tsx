'use client'

import { motion } from 'framer-motion'
import { RevealSection } from '@/components/animations/reveal-section'
import { AnimatedBackground } from '@/components/animated-background'

export function CoreBelief() {
  const decodingItems = [
    'Demand and intent signals',
    'Market perception and credibility gaps',
    'Competitive positioning',
    'Conversion and decision behavior'
  ]

  const flowSteps = ['Data', 'Intelligence', 'Strategy', 'Execution', 'Outcomes']

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto relative z-10">
        <RevealSection>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 text-balance">
            We Don&apos;t Start With Campaigns.
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-12 text-balance">
            We Start With Intelligence.
          </h2>
        </RevealSection>

        <RevealSection delay={0.1}>
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-base text-foreground leading-relaxed mb-6">
              Before any spend is scaled, we decode:
            </p>
            <ul className="space-y-3 mb-8">
              {decodingItems.map((item, index) => (
                <li key={index} className="flex gap-3 text-foreground">
                  <span className="text-primary font-medium">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-foreground leading-relaxed mb-6">
              This allows us to answer a single, foundational question:
            </p>
            <p className="text-lg font-semibold text-primary">
              Where should you invest, how much, and why?
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6 font-medium">
              OUR FRAMEWORK
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="px-4 py-2 rounded-lg border border-border bg-background/50">
                    <span className="font-medium text-foreground">{step}</span>
                  </div>
                  {index < flowSteps.length - 1 && (
                    <span className="text-muted-foreground hidden sm:inline">→</span>
                  )}
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              This is not a process slide. It is how every engagement is structured.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
