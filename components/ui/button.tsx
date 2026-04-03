import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva('cursor-pointer active:scale-99 duration-150 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-normal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'bg-accent text-foreground hover:text-primary',
            neutral: 'bg-foreground text-background hover:brightness-95',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'text-foreground border border-border bg-transparent hover:text-primary',
            secondary: 'bg-secondary text-secondary-foreground hover:text-primary',
            ghost: 'hover:bg-accent text-muted-foreground hover:text-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
            default: 'h-9 px-3.5 py-2.5',
            sm: 'h-7 px-2 text-sm',
            lg: 'h-10 px-4 text-base',
            icon: 'size-9',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
