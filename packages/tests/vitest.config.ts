import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    root: '..',
    alias: {
      '^#private/(.*)': '../vue-mapbox-gl/$1',
    },
    coverage: {
      provider: 'v8',
      include: ['vue-mapbox-gl/**'],
    },
    browser: {
      provider: 'playwright', // or 'webdriverio'
      enabled: true,
      instances: [{ browser: 'chromium' }, { browser: 'firefox' }],
    },
  },
});
