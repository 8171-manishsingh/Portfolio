// tailwind.config.js for Vite + Tailwind CSS 3
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 10px 30px rgba(34, 211, 238, 0.18)',
      },
    },
  },
  plugins: [],
};
