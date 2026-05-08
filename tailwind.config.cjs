module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          void: '#020617',
          deep: '#0F172A',
          glass: 'rgba(15, 23, 42, 0.6)',
        },
        indigo: {
          primary: '#6366F1',
        },
        cyan: {
          accent: '#22D3EE',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      backdropBlur: {
        '3xl': '40px',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
    }
  },
  plugins: []
};
