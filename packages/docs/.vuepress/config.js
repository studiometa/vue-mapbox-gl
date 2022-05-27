require('dotenv').config();
const { resolve } = require('path');
const webpack = require('webpack');

// DOM API polyfills for SSR
global.HTMLElement = () => ({});
global.HTMLImageElement = () => ({});
global.ImageData = () => ({});

module.exports = {
  title: '🗺 Vue Mapbox GL',
  description: 'A small library of Vue components for mapbox-gl',
  chainWebpack: (config) => {
    // Update babel-loader config to use the same configuration
    // as the project (especially the plugins).
    config.module.rule('js').test(/\.js$/).use('babel-loader').loader('babel-loader').options({
      configFile: true,
    });

    config.plugin('env').use(webpack.EnvironmentPlugin, ['MAPBOX_API_KEY']);

    config.resolve.alias.set('@studiometa/vue-mapbox-gl', resolve(__dirname, '../../src'));
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Components',
        link: '/components/',
        items: [
          { text: 'MapboxMap', link: '/components/MapboxMap' },
          { text: 'MapboxMarker', link: '/components/MapboxMarker' },
          { text: 'MapboxCluster', link: '/components/MapboxCluster' },
          { text: 'MapboxGeocoder', link: '/components/MapboxGeocoder' },
          { text: 'MapboxGeolocateControl', link: '/components/MapboxGeolocateControl' },
          { text: 'MapboxImage', link: '/components/MapboxImage' },
          { text: 'MapboxImages', link: '/components/MapboxImages' },
          { text: 'MapboxLayer', link: '/components/MapboxLayer' },
          { text: 'MapboxNavigationControl', link: '/components/MapboxNavigationControl' },
          { text: 'MapboxPopup', link: '/components/MapboxPopup' },
          { text: 'MapboxSource', link: '/components/MapboxSource' },
          { text: 'StoreLocator', link: '/components/StoreLocator' },
        ],
      },
      { text: 'Github', link: 'https://github.com/studiometa/vue-mapbox-gl' },
    ],
  },
  markdown: {
    toc: { includeLevel: [2] },
  },
  plugins: [
    ['@silvanite/vuepress-plugin-tailwind', { purgecss: { enabled: false } }],
    [
      '@vuepress/register-components',
      {
        componentsDir: resolve(__dirname, '../../src/components'),
        components: [
          {
            name: 'StoreLocator',
            path: resolve(__dirname, '../../src/components/StoreLocator/StoreLocator.vue'),
          },
        ],
      },
    ],
  ],
};
