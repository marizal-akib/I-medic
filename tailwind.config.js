/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-gradient-to-br',
    'from-brand-purple-500',
    'to-brand-blue-500',
    'from-brand-orange-500',
    'to-red-500',
    'from-brand-blue-500',
    'to-cyan-500',
    'from-brand-green-500',
    'to-teal-500',
    'from-brand-purple-500',
    'via-pink-500',
    'to-brand-orange-400',
    'text-brand-purple-400',
    'text-brand-orange-400',
    'text-brand-blue-400',
    'text-brand-green-400',
    // Tab background colors
    'bg-brand-purple-500',
    'bg-brand-blue-600',
    'bg-brand-green-600',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Purple - Primary brand color from logo
          purple: {
            DEFAULT: '#8B3FD8',
            50: '#F5EFFF',
            100: '#EBE0FF',
            200: '#D6C0FF',
            300: '#C2A1FF',
            400: '#AD81FF',
            500: '#8B3FD8',
            600: '#7532B8',
            700: '#5E2698',
            800: '#481B78',
            900: '#321058',
          },
          // Orange - Action/urgency from logo "I"
          orange: {
            DEFAULT: '#E74C3C',
            50: '#FFF5F3',
            100: '#FFEBE8',
            200: '#FFD7D1',
            300: '#FFC3BA',
            400: '#FFAFA3',
            500: '#E74C3C',
            600: '#D63E2E',
            700: '#B83426',
            800: '#9A2A1E',
            900: '#7C2016',
          },
          // Green - Health from logo dash
          green: {
            DEFAULT: '#27AE60',
            50: '#F0FCF5',
            100: '#E1F9EB',
            200: '#C3F3D7',
            300: '#A5EDC3',
            400: '#87E7AF',
            500: '#27AE60',
            600: '#229954',
            700: '#1E8449',
            800: '#196F3D',
            900: '#145A32',
          },
          // Blue - Medical from caduceus
          blue: {
            DEFAULT: '#4A90E2',
            50: '#F0F7FF',
            100: '#E1EFFF',
            200: '#C3DFFF',
            300: '#A5CFFF',
            400: '#87BFFF',
            500: '#4A90E2',
            600: '#3D7AC5',
            700: '#3164A8',
            800: '#244E8B',
            900: '#18386E',
          },
          
          // Legacy compatibility
          DEFAULT: '#8B3FD8',
          ink: "#0F172A",
          ink80: "#1E293B",
          line: "#E5E7EB",
          soft: "#FAFBFF"
        }
      },
      fontFamily: {
        display: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Segoe UI", "Inter", "system-ui", "sans-serif"],
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Text", "Segoe UI", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        'apple': "0 4px 16px rgba(0,0,0,0.12)",
        'apple-lg': "0 8px 32px rgba(0,0,0,0.16)",
        'purple': '0 4px 20px rgba(139, 63, 216, 0.25)',
        'purple-lg': '0 8px 30px rgba(139, 63, 216, 0.35)',
        'orange': '0 4px 20px rgba(231, 76, 60, 0.25)',
        'orange-lg': '0 8px 30px rgba(231, 76, 60, 0.35)',
        'blue': '0 4px 20px rgba(74, 144, 226, 0.25)',
        'blue-lg': '0 8px 30px rgba(74, 144, 226, 0.35)',
        'green': '0 4px 20px rgba(39, 174, 96, 0.25)',
        'green-lg': '0 8px 30px rgba(39, 174, 96, 0.35)',
      },
      borderRadius: {
        'xl2': "1.25rem"
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #8B3FD8 0%, #4A90E2 100%)',
        'gradient-brand-reverse': 'linear-gradient(135deg, #4A90E2 0%, #8B3FD8 100%)',
        'gradient-health': 'linear-gradient(135deg, #27AE60 0%, #1ABC9C 100%)',
        'gradient-urgent': 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #481B78 100%)',
        'gradient-dark-purple': 'linear-gradient(135deg, #1e1b4b 0%, #581c87 100%)',
        'gradient-purple-pink': 'linear-gradient(135deg, #8B3FD8 0%, #E91E63 100%)',
        'gradient-blue-cyan': 'linear-gradient(135deg, #4A90E2 0%, #00BCD4 100%)',
        'gradient-green-teal': 'linear-gradient(135deg, #27AE60 0%, #16A085 100%)',
        'gradient-orange-red': 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'breathing': 'breathing 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
