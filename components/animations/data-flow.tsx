'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface DataFlowProps {
  className?: string
  pathCount?: number
  color?: string
}

// Deterministic path configurations to avoid hydration mismatches
const pathConfigs = [
  { amplitude: 35, offset: 0 },
  { amplitude: 42, offset: 50 },
  { amplitude: 28, offset: 100 },
  { amplitude: 38, offset: 150 },
  { amplitude: 45, offset: 80 },
  { amplitude: 32, offset: 120 },
  { amplitude: 40, offset: 30 },
  { amplitude: 36, offset: 90 },
]

export function DataFlow({ className = '', pathCount = 5, color = 'oklch(0.7 0.2 45)' }: DataFlowProps) {
  const paths = useMemo(() => pathConfigs.slice(0, pathCount), [pathCount])

  return (
    <svg
      className={className}
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {paths.map((config, i) => (
        <FlowPath key={i} index={i} config={config} />
      ))}
    </svg>
  )
}

function FlowPath({ index, config }: { index: number; config: { amplitude: number; offset: number } }) {
  const yBase = 50 + index * 70
  const { amplitude, offset } = config

  const d = `M 0 ${yBase} Q 200 ${yBase - amplitude} 400 ${yBase} T 800 ${yBase}`

  return (
    <motion.path
      d={d}
      stroke="url(#flowGradient)"
      strokeWidth="2"
      fill="none"
      filter="url(#glow)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
      transition={{
        pathLength: { duration: 3, ease: 'easeInOut', repeat: Infinity, delay: offset / 100 },
        opacity: { duration: 3, times: [0, 0.1, 0.9, 1], repeat: Infinity, delay: offset / 100 },
      }}
    />
  )
}

export function DataNode({
  x,
  y,
  size = 8,
  delay = 0,
  className = '',
}: {
  x: number
  y: number
  size?: number
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={`absolute rounded-full bg-primary ${className}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-primary"
        animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0.2, 0] }}
        transition={{
          duration: 2,
          delay,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </motion.div>
  )
}

export function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
}: {
  x1: number
  y1: number
  x2: number
  y2: number
  delay?: number
}) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="oklch(0.7 0.2 45 / 0.3)"
        strokeWidth="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay, ease: 'easeOut' }}
      />
    </motion.svg>
  )
}
