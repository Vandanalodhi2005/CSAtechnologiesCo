/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B84F3',
          'blue-hover': '#0070F3',
          'blue-light': '#EBF5FF',
          'blue-glow': 'rgba(11, 132, 243, 0.25)',
          navy: '#061426',
          'navy-card': '#0B1E38',
          'navy-surface': '#0D2342',
          'deep-blue': '#0A2540',
          'deep-dark': '#040C18',
          'light-bg': '#F7FAFC',
          'light-card': '#FFFFFF',
          'text-dark': '#0B1220',
          'text-muted': '#64748B',
          'text-light-muted': '#94A3B8',
          border: '#E2E8F0',
          'border-dark': 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      boxShadow: {
        'card-light': '0 4px 20px -2px rgba(11, 18, 32, 0.05), 0 2px 6px -1px rgba(11, 18, 32, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(11, 132, 243, 0.12), 0 4px 12px -2px rgba(11, 18, 32, 0.04)',
        'card-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
        'glow-blue': '0 0 40px -10px rgba(11, 132, 243, 0.5)',
        'button-glow': '0 4px 14px 0 rgba(11, 132, 243, 0.39)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
