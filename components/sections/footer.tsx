'use client'

import Image from 'next/image'
import Link from 'next/link'
import { RevealSection } from '@/components/animations/reveal-section'
import { ArrowUpRight, Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  solutions: [
    { label: 'Data Analytics', href: '#' },
    { label: 'Machine Learning', href: '#' },
    { label: 'AI Infrastructure', href: '#' },
    { label: 'Predictive Models', href: '#' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Support', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer id="about" className="relative pt-32 pb-12 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* CTA Section */}
        <RevealSection>
          <div className="glass rounded-2xl p-12 md:p-16 text-center mb-20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance text-foreground">
                Ready to Transform Your <span className="text-primary text-glow">Data Strategy</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Join leading enterprises using Geo Dish to unlock the full 
                potential of their data infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#demo"
                  className="px-8 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 glow-orange hover:glow-orange-lg inline-flex items-center gap-2"
                >
                  Schedule Demo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 text-sm font-medium glass text-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 border border-border/50"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="GeoDisha"
                width={160}
                height={50}
                className="h-8 w-auto"
                style={{ width: 'auto', height: 'auto', maxWidth: '180px' }}
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              Enterprise-grade data science, AI, and analytics solutions 
              for organizations that demand excellence.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-orange-sm transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Geo Dish. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
