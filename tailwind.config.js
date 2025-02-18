/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.8s ease-in-out',
        'fade-out': 'fade-out 0.8s ease-in-out',
        'slide-in': 'slide-in 0.8s linear',
        'slide-out': 'slide-out 0.8s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 0 },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0%)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0, display: 'none' },
        },
      }
    }
  },
  plugins: [],
}
