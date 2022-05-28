import path from 'path';
import glob from 'fast-glob';
import esbuild from 'esbuild';
import vue from 'unplugin-vue/esbuild';

const dirname = new URL('.', import.meta.url).pathname;

const entryPoints = glob.sync(
  [
    // 'packages/vue-mapbox-gl/index.js',
    'packages/vue-mapbox-gl/index.js',
    'packages/vue-mapbox-gl/components/index.js',
    'packages/vue-mapbox-gl/composables/*.js',
    'packages/vue-mapbox-gl/utils/*.js',
    'packages/vue-mapbox-gl/components/MapboxMap.vue',
    '!**/node_modules/**'
   ],
  {
    cwd: path.resolve(dirname, '..'),
  }
);

const outdir = path.resolve(dirname, '../dist');

const defaultOptions = {
  entryPoints,
  write: true,
  outdir,
  target: 'es2019',
  plugins: [vue()],
  bundle: true,
  splitting: true,
  external: ['@mapbox/mapbox-gl-geocoder', 'mapbox-gl', 'vue'],
};

/**
 * Build with esbuild.
 *
 * @param   {require('esbuild').BuildOptions} opts
 * @returns {Promise<void>}
 */
async function build(opts) {
  console.log(`Building ${opts.format}...`);
  const { errors, warnings } = await esbuild.build({
    ...defaultOptions,
    ...opts,
    plugins: [
      ...defaultOptions.plugins,
      ...(opts.plugins ?? []),
    ]
  });

  errors.forEach(console.error);
  warnings.forEach(console.warn);
  console.log(`Done building ${opts.format}!`);
}

build({
  format: 'esm',
});

build({
  format: 'cjs',
  splitting: false,
  outExtension: { '.js': '.cjs' },
  // footer: {
  //   // Fix `export default {}` assigned to `module.exports.default`
  //   js: 'if (module.exports.default) module.exports = module.exports.default;',
  // },
  plugins: [
    // @see https://github.com/evanw/esbuild/issues/622#issuecomment-769462611
    {
      name: 'change-extension-to-cjs',
      setup(builder) {
        // eslint-disable-next-line consistent-return
        builder.onResolve({ filter: /.*/ }, (args) => {
          if (args.importer) {
            return {
              path: args.path.replace(/\.js$/, '.cjs'),
              external: true,
            };
          }
        });
      },
    },
  ],
});
