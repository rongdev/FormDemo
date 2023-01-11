/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
    },
    borderWidth: {
      0: '0',
      DEFAULT: '1px',
      2: '2px',
    },
    // spacing: {
    //   1: "4px",
    //   2: "8px",
    // },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
      wide: '-0.025em',
    },
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/forms")({
    //   strategy: 'class',
    // }),
    // <input className="form-input" ... />
    require('@tailwindcss/forms'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
};
