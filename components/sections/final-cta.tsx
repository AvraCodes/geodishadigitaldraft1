'use client'

import { motion } from 'framer-motion'
import { RevealSection } from '@/components/animations/reveal-section'
import { AnimatedBackground } from '@/components/animated-background'

export function FinalCTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <AnimatedBackground />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <RevealSection>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">
            Build a Growth System That Thinks Before It Acts
          </h2>
        </RevealSection>

        <RevealSection delay={0.1}>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Let's explore how intelligence can transform your growth trajectory.
          </p>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Request an Intelligence Preview
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
            >
              Schedule a Conversation
            </motion.button>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
