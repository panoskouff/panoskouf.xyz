import { defineConfig } from '@pandacss/dev';
import { textStyles } from './styles/text-styles';

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: [
    './atoms/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
  ],
  exclude: [],

  theme: {
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    tokens: {
      fonts: {
        mulish: { value: 'var(--mulish), sans-serif' },
        tinos: { value: 'var(--tinos), serif' },
      },
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
      },
      spacing: {
        // padding
        'input-padding-base': { value: '10px' },
        'section-offset': { value: '84px' },
      },
      radii: {
        sm: { value: '5px' },
        lg: { value: '16px' },
      },
    },
    semanticTokens: {
      sizes: {
        'sp-xs': { value: '10px' },
        'sp-sm': { value: '20px' },
        'sp-md': { value: '32px' },
        'sp-lg': { value: '64px' },
        'sp-xl': { value: { smToLg: '70px', lg: '140px' } },
      },
    },
    extend: { textStyles },
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
