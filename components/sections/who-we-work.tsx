'use client'

import { motion } from 'framer-motion'
import { RevealSection } from '@/components/animations/reveal-section'
import { AnimatedBackground } from '@/components/animated-background'

export function WhoWeWork() {
  const bestFor = [
    'Universities, institutions, and complex organizations',
    'Healthcare, professional services, and trust-led businesses',
    'Teams focused on long-term brand and conversion quality'
  ]

  const notFor = [
    'Organizations chasing cheap leads or short-term spikes'
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto relative z-10">
        <RevealSection>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 text-balance">
            Who We Work Best With
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Clarity on our ideal partnership
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <RevealSection delay={0.1}>
            <div className="border border-primary/30 rounded-lg p-8 bg-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Built For
              </h3>
              <div className="space-y-4">
                {bestFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-background" />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="border border-destructive/30 rounded-lg p-8 bg-destructive/5">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Not For
              </h3>
              <div className="space-y-4">
                {notFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-background" />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                This clarity protects outcomes—for both sides.
              </p>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
