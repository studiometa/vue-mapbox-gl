import { writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { build as esbuild } from 'esbuild';
import vue from 'unplugin-vue/esbuild';

const dirname = new URL('.', import.meta.url).pathname;

/**
 * Build the package.
 * @param   {'cjs'|'esm'} format
 * @returns {Promise<void>}
 */
async function build(format = 'esm') {
  console.log(`Building ${format}...`);
  const outdir = path.resolve(dirname, '../dist');
  const result = await esbuild({
    entryPoints: [path.resolve(dirname, '../packages/vue-mapbox-gl/index.js')],
    outdir,
    write: true,
    bundle: true,
    format,
    metafile: true,
    target: 'es2019',
    outExtension: { '.js': format === 'cjs' ? '.cjs' : '.js' },
    sourcemap: true,
    plugins: [
      vue({
        sourceMap: true,
      }),
    ],
    external: ['@mapbox/mapbox-gl-geocoder', 'mapbox-gl', 'vue'],
  });
  writeFileSync(path.resolve(outdir, `meta.${format}.json`), JSON.stringify(result.metafile));
  console.log('Done!');
}

build('esm');
build('cjs');
