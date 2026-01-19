'use client'

import { motion, Variants, HTMLMotionProps } from 'framer-motion'
import React from 'react'

type PresetType = 'fade-in-blur' | 'fade-in' | 'slide-up' | 'slide-down'

interface TextEffectProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: string
  per?: 'word' | 'char' | 'line'
  as?: keyof JSX.IntrinsicElements
  preset?: PresetType
  delay?: number
  speedSegment?: number
  className?: string
}

const presets: Record<PresetType, { hidden: Variants['hidden']; visible: Variants['visible'] }> = {
  'fade-in-blur': {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-up': {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-down': {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
}

export function TextEffect({
  children,
  per = 'word',
  as: Component = 'p',
  preset = 'fade-in-blur',
  delay = 0,
  speedSegment = 0.3,
  className,
  ...props
}: TextEffectProps) {
  const MotionComponent = motion.create(Component as keyof JSX.IntrinsicElements)
  const selectedPreset = presets[preset]

  const segments = React.useMemo(() => {
    if (per === 'line') {
      return children.split('\n')
    }
    if (per === 'word') {
      return children.split(' ')
    }
    return children.split('')
  }, [children, per])

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: speedSegment / segments.length,
        delayChildren: delay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: selectedPreset.hidden,
    visible: {
      ...selectedPreset.visible,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  }

  return (
    <MotionComponent
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ whiteSpace: per === 'word' ? 'pre' : undefined }}
        >
          {segment}
          {per === 'word' && index < segments.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </MotionComponent>
  )
}
