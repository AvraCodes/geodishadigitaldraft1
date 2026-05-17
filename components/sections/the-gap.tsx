'use client'

import { motion } from 'framer-motion'
import { RevealSection } from '@/components/animations/reveal-section'
import { AnimatedBackground } from '@/components/animated-background'

export function TheGap() {
  const problems = [
    'High marketing spend, low confidence in results',
    'Strong offerings, weak or inconsistent public narrative',
    'Plenty of enquiries, very few high-quality conversions',
    'Tools everywhere—CRM, ads, automation—but no decision intelligence inside them'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto relative z-10">
        <RevealSection>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            What Most Organizations Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Across industries, the pattern is consistent:
          </p>
        </RevealSection>

        <motion.div
          className="space-y-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-base text-foreground leading-relaxed">
                {problem}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <RevealSection delay={0.4}>
          <div className="border-t border-border pt-12">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              The Bridge
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Campaigns exist. Platforms exist. Dashboards exist. What's missing is{' '}
              <span className="text-foreground font-medium">designed intelligence</span>
              —the logic that connects data, decisions, and outcomes.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
