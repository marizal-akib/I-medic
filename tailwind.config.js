/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1F87FF",
          dark: "#0E5CC7",
          sky: "#E9F3FF",
          mint: "#88E1D7",
          coral: "#FF6B6B",
          butter: "#FFE39F",
          ink: "#0F172A",
          ink80: "#1E293B",
          line: "#E5E7EB",
          soft: "#FAFBFF"
        }
      },
      fontFamily: {
        display: ["Pretendard", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        'k-soft': "0 6px 24px rgba(31,135,255,0.08)",
        'k-card': "0 10px 30px rgba(15,23,42,0.10)"
      },
      borderRadius: {
        'xl2': "1.25rem"
      },
    },
  },
  plugins: [],
}
