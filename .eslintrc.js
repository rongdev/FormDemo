module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    tailwindcss: {
      callees: ['classNames'],
      groupByResponsive: false,
    },
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'simple-import-sort',
    'unused-imports',
    'tailwindcss',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    // Import sort
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',

    // Unused Vars
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^__',
        args: 'after-used',
        argsIgnorePattern: '^__',
      },
    ],

    // JSX
    'react/jsx-sort-props': 'warn',

    // Next
    '@next/next/no-img-element': 'off',

    // Tailwindcss
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        whitelist: ['btn(-primary|-secondary)?'],
      },
    ],
  },
};
