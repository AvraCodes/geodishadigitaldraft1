'use client'

import { motion } from 'framer-motion'
import { RevealSection } from '@/components/animations/reveal-section'
import { AnimatedBackground } from '@/components/animated-background'

export function Engagement() {
  const steps = [
    {
      title: 'Intelligence & Diagnostics Phase',
      description: 'Understanding your current state, market, and opportunities'
    },
    {
      title: 'Strategy & Roadmap Presentation',
      description: 'Clear recommendations grounded in data and insights'
    },
    {
      title: 'Phased Execution',
      description: 'Systematic implementation with checkpoints and optimization'
    },
    {
      title: 'Continuous Optimization & Reporting',
      description: 'Monthly insights, learning, and evolution of strategy'
    }
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto relative z-10">
        <RevealSection>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 text-balance">
            How Engagement Typically Begins
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            A structured approach, every time
          </p>
        </RevealSection>

        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                  <span className="text-background font-bold text-lg">{index + 1}</span>
                </div>
              </div>
              <div className="flex-grow pt-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <RevealSection delay={0.4}>
          <div className="border border-border rounded-lg p-8 text-center" style={{ backgroundColor: '#f8f8f8' }}>
            <p className="text-lg font-semibold text-foreground">
              No blind spends. No random execution.
            </p>
            <p className="text-muted-foreground mt-2">
              Everything is grounded in data and measured against clear outcomes.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
