import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Color definitions for inline styles
const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    background: 'linear-gradient(135deg, #8B3FD8 0%, #4A90E2 100%)',
  },
  purple: {
    background: 'linear-gradient(135deg, #8B3FD8 0%, #7532B8 100%)',
  },
  orange: {
    background: 'linear-gradient(135deg, #E74C3C 0%, #D63E2E 100%)',
  },
  blue: {
    background: 'linear-gradient(135deg, #4A90E2 0%, #3D7AC5 100%)',
  },
  green: {
    background: 'linear-gradient(135deg, #27AE60 0%, #229954 100%)',
  },
  'outline-purple': {
    borderColor: '#8B3FD8',
    color: '#7532B8',
  },
  'outline-orange': {
    borderColor: '#E74C3C',
    color: '#D63E2E',
  },
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "text-white hover:opacity-90 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] shadow-lg focus-visible:ring-purple-300",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-slate-300",
        purple: "text-white hover:opacity-90 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] shadow-lg focus-visible:ring-purple-300",
        orange: "text-white hover:opacity-90 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] shadow-lg focus-visible:ring-orange-300",
        blue: "text-white hover:opacity-90 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] shadow-lg focus-visible:ring-blue-300",
        green: "text-white hover:opacity-90 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] shadow-lg focus-visible:ring-green-300",
        outline: "border-2 border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100 hover:border-slate-400 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-slate-300",
        "outline-purple": "border-2 bg-transparent hover:text-white hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-purple-300",
        "outline-orange": "border-2 bg-transparent hover:text-white hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-orange-300",
        ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-700 focus-visible:ring-slate-300",
        link: "text-purple-600 underline-offset-4 hover:underline focus-visible:ring-purple-300",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-lg font-bold",
        xl: "h-16 px-10 text-xl rounded-2xl font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Get inline styles for gradient variants
    const inlineStyles = variant && variantStyles[variant] 
      ? { ...variantStyles[variant], ...style }
      : style
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={inlineStyles}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
