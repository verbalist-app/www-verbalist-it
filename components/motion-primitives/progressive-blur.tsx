'use client'

import { cn } from '@/lib/utils'

interface ProgressiveBlurProps {
    className?: string
    direction?: 'left' | 'right' | 'top' | 'bottom'
    blurIntensity?: number
}

export function ProgressiveBlur({
    className,
    direction = 'left',
    blurIntensity = 1,
}: ProgressiveBlurProps) {
    const gradientDirection = {
        left: 'to right',
        right: 'to left',
        top: 'to bottom',
        bottom: 'to top',
    }[direction]

    return (
        <div
            className={cn('pointer-events-none', className)}
            style={{
                maskImage: `linear-gradient(${gradientDirection}, black, transparent)`,
                WebkitMaskImage: `linear-gradient(${gradientDirection}, black, transparent)`,
                backdropFilter: `blur(${blurIntensity}px)`,
                WebkitBackdropFilter: `blur(${blurIntensity}px)`,
            }}
        />
    )
}
