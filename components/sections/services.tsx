'use client'

import { motion } from 'framer-motion'
import { RevealSection } from '@/components/animations/reveal-section'
import { AnimatedBackground } from '@/components/animated-background'

export function Services() {
  const services = [
    {
      category: 'Intelligence & Strategy',
      items: [
        'Market and demand intelligence reports',
        'Competitive and perception benchmarking',
        'Funnel and lifecycle diagnostics'
      ]
    },
    {
      category: 'Branding & Reputation',
      items: [
        'Brand positioning and messaging systems',
        'Leadership and institutional visibility',
        'Content and social ecosystems'
      ]
    },
    {
      category: 'Growth & Demand Generation',
      items: [
        'Paid media strategy and execution',
        'Landing pages and microsites',
        'Lead nurturing and automation journeys'
      ]
    },
    {
      category: 'Conversion & Sales Enablement',
      items: [
        'CRM integration (Zoho, HubSpot, Salesforce)',
        'Funnel reporting and optimization',
        'Sales and counselor dashboards'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        <RevealSection>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 text-balance">
            What We Actually Do
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            What We Do (And Where It Fits)
          </p>
        </RevealSection>

        <motion.div
          className="grid sm:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {service.category}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary flex-shrink-0 mt-1">•</span>
                    <span className="text-sm text-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <RevealSection delay={0.4}>
          <div className="border border-border rounded-lg p-8 bg-background/50">
            <p className="text-lg text-foreground font-medium text-center">
              We don&apos;t replace tools.{' '}
              <span className="text-primary">We make them intelligent.</span>
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
