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
      sizes: {
        'section-max-width': { value: '1300px' },
        // spacings need to be here because we use them in width and height properties
        'spacing-xs': { value: '10px' },
        'spacing-sm': { value: '20px' },
        'spacing-md': { value: '32px' },
        'spacing-lg': { value: '64px' },
        'spacing-xl': { value: '128px' },
      },
      spacing: {
        'section-offset': { value: '68px' },
      },
    },
    extend: {},
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
