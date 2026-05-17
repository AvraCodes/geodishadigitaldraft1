'use client'

import { motion } from 'framer-motion'
import { RevealSection } from '@/components/animations/reveal-section'
import { AnimatedBackground } from '@/components/animated-background'

export function Credibility() {
  const reasons = [
    'Analytics-first, not campaign-first',
    'Deep understanding of complex buying journeys',
    'Experience across branding, demand, and conversion',
    'Outcome thinking—not vanity metrics'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto relative z-10">
        <RevealSection>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-balance">
            Why Clients Choose GeoDisha
          </h2>
        </RevealSection>

        <motion.div
          className="space-y-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-4 p-6 border border-border rounded-lg bg-background/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-background font-semibold text-sm">{index + 1}</span>
              </div>
              <p className="text-base text-foreground leading-relaxed">
                {reason}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <RevealSection delay={0.4}>
          <div className="border border-border rounded-lg p-8 bg-background/50">
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              SOCIAL PROOF
            </p>
            <p className="text-foreground">
              Logos, case studies, or anonymized metrics can live here.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
