import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'

export default [
  /* =========================
   * Arquivos ignorados
   * ========================= */
  {
    ignores: ['node_modules/**', 'out/**', 'build/**', '.next/**'],
  },

  /* =========================
   * Base ESLint
   * ========================= */
  js.configs.recommended,

  /* =========================
   * TypeScript
   * ========================= */
  ...tseslint.configs.recommended,

  /* =========================
   * React + regras customizadas
   * ========================= */
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: {
      react,
      '@typescript-eslint': tseslint.plugin,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      /* React */
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',

      /* TypeScript */
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],

      /* Geral */
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
]
