/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      exclude: [],
    }),
    eslint({
      /**
       * @see {@link https://github.com/storybookjs/builder-vite/issues/535}
       */
      exclude: ['/virtual:/**'],
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    root: 'src',
    setupFiles: ['./vitest.setup.ts'],
  },
});
