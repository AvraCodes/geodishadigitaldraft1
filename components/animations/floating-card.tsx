'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
  intensity?: 'subtle' | 'medium' | 'strong'
  glowing?: boolean
}

export function FloatingCard({
  children,
  className = '',
  delay = 0,
  intensity = 'subtle',
  glowing = false,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={cn(
        'glass rounded-xl relative overflow-hidden',
        glowing && 'glow-orange-sm',
        className
      )}
    >
      {children}
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, oklch(0.7 0.2 45 / 0.08) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass rounded-xl overflow-hidden relative',
        hover && 'transition-all duration-500',
        className
      )}
      whileHover={
        hover
          ? {
              scale: 1.02,
              boxShadow: '0 0 30px oklch(0.7 0.2 45 / 0.2)',
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
