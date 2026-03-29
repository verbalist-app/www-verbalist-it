'use client'

import { motion, Variants, useReducedMotion } from 'motion/react'
import React from 'react'

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  variants?: {
    container?: Variants
    item?: Variants
  }
}

const defaultContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const defaultItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: [0, 0, 0.35, 1],
      duration: 0.35,
    },
  },
}

const reducedMotionContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
    },
  },
}

const reducedMotionItemVariants: Variants = {
  hidden: {},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0,
    },
  },
}

export function AnimatedGroup({
  children,
  className,
  variants,
}: AnimatedGroupProps) {
  const shouldReduceMotion = useReducedMotion()
  const containerVariants = shouldReduceMotion
    ? reducedMotionContainerVariants
    : (variants?.container || defaultContainerVariants)
  const itemVariants = shouldReduceMotion
    ? reducedMotionItemVariants
    : (variants?.item || defaultItemVariants)

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  )
}
