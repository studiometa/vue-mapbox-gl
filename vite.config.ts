import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true,
      exclude: ['src/test/**', 'src/**/story/**', 'src/**/*.story.vue'],
    }),
  ],
  resolve: {
    dedupe: ['@mapbox/mapbox-gl-geocoder', 'mapbox-gl', 'vue'],
  },
  build: {
    minify: false,
    cssMinify: false,
    sourcemap: true,
    lib: {
      name: '@studiometa/vue-mapbox-gl',
      formats: ['es', 'cjs'],
      cssFileName: 'index',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      entry: {
        index: resolve(__dirname, 'packages/vue-mapbox-gl/index.ts'),
      },
    },
    rollupOptions: {
      external: ['@mapbox/mapbox-gl-geocoder', 'mapbox-gl', 'vue'],
    },
  },
});
