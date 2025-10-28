import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Brand color utilities
export const colors = {
  teal: {
    primary: '#00A19A',
    hover: '#008B85',
    light: '#E6F7F6',
  },
  violet: {
    accent: '#4A47A3',
    hover: '#3D3A8C',
    light: '#EEEEFF',
  },
  green: {
    bangladesh: '#006A4E',
    hover: '#005A42',
    light: '#E6F2EF',
  },
  red: {
    energy: '#D32F2F',
    hover: '#B71C1C',
    light: '#FFEBEE',
  },
  neutral: {
    light: '#F4F6F7',
    white: '#FFFFFF',
    dark: '#1F2937',
    medium: '#6B7280',
    lightGray: '#9CA3AF',
  }
}

// Animation utilities
export const animations = {
  fadeIn: "animate-in fade-in duration-500",
  slideUp: "animate-in slide-in-from-bottom-4 duration-500",
  slideDown: "animate-in slide-in-from-top-4 duration-500",
  scaleIn: "animate-in zoom-in-95 duration-300",
}

// Common button styles
export const buttonVariants = {
  primary: "bg-[--color-teal-primary] hover:bg-[#008B85] text-white font-medium px-6 py-3 rounded-[--radius-button] transition-colors duration-200 shadow-soft hover:shadow-medium",
  secondary: "border-2 border-[--color-teal-primary] text-[--color-teal-primary] hover:bg-[--color-teal-primary] hover:text-white font-medium px-6 py-3 rounded-[--radius-button] transition-all duration-200",
  accent: "bg-[--color-violet-accent] hover:bg-[#3D3A8C] text-white font-medium px-6 py-3 rounded-[--radius-button] transition-colors duration-200 shadow-soft hover:shadow-medium",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-3 rounded-[--radius-button] transition-colors duration-200",
}

// Card styles
export const cardStyles = {
  base: "bg-white rounded-[--radius-card] shadow-soft hover:shadow-medium transition-shadow duration-200",
  interactive: "bg-white rounded-[--radius-card] shadow-soft hover:shadow-medium transition-all duration-200 hover:scale-105 cursor-pointer",
}

// Typography utilities
export const typography = {
  h1: "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-text-dark]",
  h2: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[--color-text-dark]",
  h3: "font-display text-2xl md:text-3xl font-semibold text-[--color-text-dark]",
  h4: "font-display text-xl md:text-2xl font-semibold text-[--color-text-dark]",
  body: "text-base text-[--color-text-medium] leading-relaxed",
  bodyLarge: "text-lg text-[--color-text-medium] leading-relaxed",
  caption: "text-sm text-[--color-text-light]",
}

// Responsive container
export const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Section spacing
export const section = "py-16 md:py-24"
