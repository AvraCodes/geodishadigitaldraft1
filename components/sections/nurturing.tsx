'use client'

import { motion } from 'framer-motion'
import { RevealSection } from '@/components/animations/reveal-section'
import { AnimatedBackground } from '@/components/animated-background'

export function Nurturing() {
  const stages = [
    'Anonymous Visitor',
    'Known Lead',
    'Engaged Lead',
    'Sales-Ready Opportunity',
    'Customer / Lost'
  ]

  const channels = [
    { name: 'Website', role: 'Primary intent and qualification layer' },
    { name: 'Content', role: 'Answers sales questions in advance' },
    { name: 'SEO', role: 'Long-cycle education and informed demand' },
    { name: 'Paid Media', role: 'Accelerates proven intent' },
    { name: 'Automation', role: 'Signal collection—not noise' }
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto relative z-10">
        <RevealSection>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            How We Think About Leads & Nurturing
          </h2>
          <h3 className="text-2xl font-semibold text-primary mb-8">
            Nurturing Is Not Communication. It&apos;s Qualification.
          </h3>
        </RevealSection>

        <RevealSection delay={0.1}>
          <div className="mb-12 p-8 border border-border rounded-lg bg-background">
            <p className="text-base text-foreground leading-relaxed mb-6">
              GeoDisha treats marketing as a pre-sales intelligence system. We observe:
            </p>
            <ul className="space-y-3 mb-8">
              {['What prospects explore', 'How deeply they engage', 'Whether intent builds over time', 'Which actions signal readiness'].map((item, i) => (
                <li key={i} className="flex gap-3 text-foreground">
                  <span className="text-primary">•</span> {item}
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-primary border-t border-border pt-6">
              Sales is activated only when behavior proves intent—not when a form is filled.
            </p>
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <RevealSection delay={0.15}>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                A Single, Controlled Lifecycle
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Every prospect moves through one system:
              </p>
              <div className="space-y-3">
                {stages.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-background font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{stage}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                Each stage has:
              </p>
              <ul className="space-y-2 mt-3">
                {['Defined entry conditions', 'Expected behavior', 'Measurement logic'].map((item, i) => (
                  <li key={i} className="text-sm text-foreground flex gap-2">
                    <span className="text-primary">•</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                No forced jumps. No assumption-based scoring.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Channel Strategy (Purpose-Driven)
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Each channel has a clear role:
              </p>
              <div className="space-y-4">
                {channels.map((channel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="p-4 border border-border rounded-lg bg-background"
                  >
                    <h4 className="font-medium text-foreground mb-1">{channel.name}</h4>
                    <p className="text-sm text-muted-foreground">{channel.role}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
                No channel is scaled without evidence.
              </p>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
