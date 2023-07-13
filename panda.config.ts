import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: [
    './atoms/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        'bg-color-primary': { value: '#fff' },
        'bg-color-secondary': { value: '#f9f3e7' },
        'text-color-logo': { value: '#333' },
        'text-color-primary': { value: '#000' },
        'text-color-secondary': { value: '#222' },
        'text-color-tertiary': { value: '#b7b4b9' },
      },
    },
    extend: {},
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
