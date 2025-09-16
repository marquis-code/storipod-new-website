// const plugin = require('tailwindcss/plugin');
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./components/**/*.{js,vue,ts}",
//     "./layouts/**/*.vue",
//     "./pages/**/*.vue",
//     "./plugins/**/*.{js,ts}",
//     "./nuxt.config.{js,ts}",
//     "./app.vue",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         emerald: {
//           900: '#064E3B',
//         },
//         yellow: {
//           500: '#FACC15',
//         },
//         gray: {
//           25:  "#fafafa",
//           50:  "#f2f2f2",
//           100: "#e6e6e6",
//           200: "#cccccc",
//           300: "#b3b3b3",
//           400: "#999999",
//           500: "#808080",
//           600: "#666666",
//           700: "#4d4d4d",
//           800: "#333333",
//           900: "#1a1a1a",
//           925: "#0d0d0d",
//         },
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [
//     plugin(function({ addUtilities }) {
//       addUtilities({
//         '.bg-green-striped': {
//           'background-image': `linear-gradient(45deg, #0a2000 10%, transparent 10%,
//             transparent 20%, #0a2000 20%, #0a2000 30%, transparent 30%, transparent 40%,
//             #0a2000 40%, #0a2000 50%, transparent 50%, transparent 60%, #0a2000 60%,
//             #0a2000 70%, transparent 70%, transparent 80%, #0a2000 80%, #0a2000 90%,
//             transparent 90%, transparent)`,
//         },
//       })
//     })
//   ],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}