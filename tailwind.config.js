/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
     "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          source: ['var(--font-source-sans-3)', 'sans-serif'],
        },
        fontWeight: {
          regular: '400',
          medium: '500',
          semibold: '700',
          bold: '800',
        },
      },
    },
    plugins: [],
  };
  