import { defineConfig } from 'eslint-define-config';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

import js from '@eslint/js';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      js,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginPrettier.configs.recommended.rules,
      // Optional: throw error on Prettier formatting issues
      'prettier/prettier': 'error',
    },
  },
  // TypeScript ESLint config
  ...tseslint.configs.recommended,
  // React config
  pluginReact.configs.flat.recommended,
  // Optional: Disables conflicting ESLint rules with Prettier
  prettierConfig,
]);
