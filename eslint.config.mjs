import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default defineConfig([
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Disable rules conflicting with Prettier
  prettier,

  {
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.node,
      },
    },

    rules: {
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prefer-const': 'off',
    },

    /*
      Override previous configs here for specific files if needed.
      Avoid disable comments.

      {
        files: [],

        languageOptions: {
          globals: {
            ...globals.node,
          },
        },

        rules: {},
      },
    */
  },
]);
