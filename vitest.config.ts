import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts';

export default mergeConfig(viteConfig, defineConfig({
  test: {
    environment: 'jsdom',
    globals: true, // Enables `describe`, `it`, etc. globally
    setupFiles: './src/setupTests.ts',
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/setupTests.ts'],
    },
  },
}))