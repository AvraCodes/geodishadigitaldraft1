'use client'

import { motion } from 'framer-motion'
import { RevealSection } from '@/components/animations/reveal-section'
import { AnimatedBackground } from '@/components/animated-background'

export function IntelligenceModel() {
  const layers = [
    {
      number: '1',
      title: 'Demand & Intent Intelligence',
      analyze: [
        'Search and demand signals',
        'Geographic and segment-level interest',
        'Offering-level pull (programs, services, content)',
        'Competitive and reputation benchmarks'
      ],
      outcome: 'A clear understanding of current perception, real demand, and where change is required.'
    },
    {
      number: '2',
      title: 'Narrative & Credibility Engineering',
      analyze: [
        'Clear positioning aligned to actual demand',
        'Leadership and institutional visibility',
        'Proof-driven storytelling (outcomes, process, credibility)',
        'Media, content, and search alignment'
      ],
      outcome: 'A coherent, credible narrative—consistent across digital, media, and discovery channels.'
    },
    {
      number: '3',
      title: 'Conversion & Growth Engine',
      analyze: [
        'Performance marketing (search, social, program- or service-led)',
        'Funnel design and lead quality logic',
        'Automation across email, WhatsApp, webinars, and content',
        'Conversion optimization across enquiry, application, or sales stages'
      ],
      outcome: 'Movement from interest → intent → conversion, with visibility at every step.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
      <div className="max-w-5xl mx-auto relative z-10">
        <RevealSection>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 text-balance">
            The GeoDisha Intelligence Model
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            An Analytics-Backed Growth Framework
          </p>
          <p className="text-base text-foreground leading-relaxed mb-12">
            Our model is industry-agnostic by design, because buyer behavior follows patterns—regardless of sector.
          </p>
        </RevealSection>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {layers.map((layer, index) => (
            <motion.div
              key={layer.number}
              variants={itemVariants}
              className="border border-border rounded-lg p-8 bg-background/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-background font-bold text-lg">{layer.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{layer.title}</h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                    What we analyze
                  </h4>
                  <ul className="space-y-2">
                    {layer.analyze.map((item, i) => (
                      <li key={i} className="text-sm text-foreground flex gap-2">
                        <span className="text-primary">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                    Outcome
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {layer.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
