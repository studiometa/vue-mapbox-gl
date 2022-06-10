import path from 'path';
import { build } from 'esbuild';
import vue from 'unplugin-vue/esbuild';

const dirname = new URL('.', import.meta.url).pathname;

console.log(`Building...`);
await build({
  entryPoints: [path.resolve(dirname, '../packages/vue-mapbox-gl/index.js')],
  outdir: path.resolve(dirname, '../dist'),
  write: true,
  bundle: true,
  format: 'esm',
  target: 'es2019',
  sourcemap: false,
  plugins: [
    vue({
      sourceMap: false,
    }),
  ],
  external: ['@mapbox/mapbox-gl-geocoder', 'mapbox-gl', 'vue'],
});
console.log('Done!');
