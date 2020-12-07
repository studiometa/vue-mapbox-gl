const fs = require('fs');
const path = require('path');
const vue = require('rollup-plugin-vue');
const alias = require('@rollup/plugin-alias');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('rollup-plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const globEntry = require('webpack-glob-entry');
const css = require('rollup-plugin-css-only');

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs
  .readFileSync('./.browserslistrc')
  .toString()
  .split('\n')
  .filter((entry) => entry && entry.substring(0, 2) !== 'ie');

const baseConfig = {
  input: 'src/index.js',
  external: ['vue', 'mapbox-gl', '@mapbox/mapbox-gl-geocoder'],
  plugins: {
    preVue: [
      nodeResolve({
        extensions: ['.js', '.vue'],
      }),
      alias({
        resolve: ['.js', '.vue'],
        entries: {
          '@': path.resolve(__dirname, 'src'),
        },
      }),
    ],
    postVue: [css({ output: 'components/StoreLocator/styles.css' })],
    vue: {
      css: false,
      template: {
        isProduction: true,
      },
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.vue'],
    },
  },
};

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  vue: 'Vue',
  'mapbox-gl': 'mapboxgl',
  '@mapbox/mapbox-gl-geocoder': 'MapboxGeocoder',
};

const getEsConfig = (input, output = null) => ({
  ...baseConfig,
  input,
  output: {
    ...(output
      ? {
          file: path.join('dist', `${output}.js`),
        }
      : { entryFileNames: '[name].js', dir: 'dist' }),
    format: 'esm',
    exports: 'named',
    sourcemap: true,
    chunkFileNames: '_chunks/[name].[hash].js',
  },
  plugins: [
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    ...baseConfig.plugins.postVue,
    babel({
      ...baseConfig.plugins.babel,
      presets: [
        [
          '@babel/preset-env',
          {
            targets: esbrowserslist,
            modules: false,
          },
        ],
      ],
    }),
    commonjs(),
  ],
});

const getCjsConfig = () => ({
  ...baseConfig,
  output: {
    file: 'dist/VueMapboxGl.cjs.js',
    format: 'cjs',
    name: 'MapboxGl',
    exports: 'named',
    globals,
    sourcemap: true,
  },
  plugins: [
    ...baseConfig.plugins.preVue,
    vue({
      ...baseConfig.plugins.vue,
      template: {
        ...baseConfig.plugins.vue.template,
        optimizeSSR: true,
      },
    }),
    ...baseConfig.plugins.postVue,
    babel(baseConfig.plugins.babel),
    commonjs(),
  ],
});

const getUmdConfig = (compressed = false) => ({
  ...baseConfig,
  output: {
    file: `dist/VueMapboxGl.umd${compressed ? '.min' : ''}.js`,
    format: 'umd',
    name: 'VueMapboxGl',
    exports: 'named',
    globals,
    sourcemap: true,
  },
  plugins: [
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    ...baseConfig.plugins.postVue,
    babel(baseConfig.plugins.babel),
    commonjs(),
    compressed &&
      terser({
        output: {
          ecma: 5,
        },
      }),
  ],
});

module.exports = [
  getEsConfig(
    globEntry(globEntry.basePath('src'), 'src/*/*.js', 'src/*/*.vue', 'src/components/*/index.js')
  ),
  getEsConfig('src/index.js', 'VueMapboxGl.esm'),
  getCjsConfig(),
  getUmdConfig(),
  getUmdConfig(true),
];
