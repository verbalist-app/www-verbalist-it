'use client'

import { cn } from '@/lib/utils'
import { useMotionValue, animate, motion } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'

interface InfiniteSliderProps {
    children: React.ReactNode
    gap?: number
    speed?: number
    speedOnHover?: number
    direction?: 'horizontal' | 'vertical'
    reverse?: boolean
    className?: string
}

export function InfiniteSlider({
    children,
    gap = 16,
    speed = 100,
    speedOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
}: InfiniteSliderProps) {
    const [currentSpeed, setCurrentSpeed] = useState(speed)
    const containerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)
    const [innerWidth, setInnerWidth] = useState(0)
    const [innerHeight, setInnerHeight] = useState(0)
    const translation = useMotionValue(0)
    const animationRef = useRef<ReturnType<typeof animate> | null>(null)

    const isHorizontal = direction === 'horizontal'

    useEffect(() => {
        if (innerRef.current) {
            const rect = innerRef.current.getBoundingClientRect()
            setInnerWidth(rect.width)
            setInnerHeight(rect.height)
        }
    }, [children])

    const startAnimation = useCallback(() => {
        if (animationRef.current) {
            animationRef.current.stop()
        }

        const size = isHorizontal ? innerWidth : innerHeight
        if (size === 0) return

        const currentTranslation = translation.get()
        const remainingDistance = reverse
            ? size + currentTranslation
            : size - Math.abs(currentTranslation)

        const duration = remainingDistance / currentSpeed

        animationRef.current = animate(translation, reverse ? 0 : -size, {
            duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
            onRepeat: () => {
                translation.set(reverse ? -size : 0)
            },
        })
    }, [currentSpeed, innerWidth, innerHeight, isHorizontal, reverse, translation])

    useEffect(() => {
        startAnimation()
        return () => {
            if (animationRef.current) {
                animationRef.current.stop()
            }
        }
    }, [startAnimation])

    const handleMouseEnter = () => {
        if (speedOnHover !== undefined) {
            setCurrentSpeed(speedOnHover)
        }
    }

    const handleMouseLeave = () => {
        setCurrentSpeed(speed)
    }

    return (
        <div
            ref={containerRef}
            className={cn('overflow-hidden', className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="flex w-max"
                style={{
                    gap,
                    flexDirection: isHorizontal ? 'row' : 'column',
                    x: isHorizontal ? translation : 0,
                    y: isHorizontal ? 0 : translation,
                }}
            >
                <div
                    ref={innerRef}
                    className="flex shrink-0"
                    style={{ gap, flexDirection: isHorizontal ? 'row' : 'column' }}
                >
                    {children}
                </div>
                <div
                    className="flex shrink-0"
                    style={{ gap, flexDirection: isHorizontal ? 'row' : 'column' }}
                >
                    {children}
                </div>
            </motion.div>
        </div>
    )
}
