/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/inspo/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/providers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#030004',
        medGray: '#BFBFBF',
        lightGray: '#E2E2E2',
        white: '#FFFFFF',
        lightLime: '#FCFFB3',
        lightLime2: '#4Ac873',
        lime: '#DFF314',
        pine: '#6AB873',
      },
    },
  },
  plugins: [],
};
