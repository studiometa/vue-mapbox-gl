import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Vue 3 Mapbox GL',
  description: 'A small library of Vue components for mapbox-gl',
  lastUpdated: true,
  markdown: {
    toc: { level: [2] },
  },
  themeConfig: {
    logo: '/logo.png',
    footer: {
      message: 'Released under the GPL 3.0 License.',
      copyright: 'Copyright © 2019-present Studio Meta',
    },
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/studiometa/vue-mapbox-gl/edit/master/packages/docs/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/studiometa/vue-mapbox-gl' }],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction/' },
      {
        text: 'Components',
        items: [
          { text: 'MapboxMap', link: '/components/MapboxMap/' },
          { text: 'MapboxMarker', link: '/components/MapboxMarker/' },
          { text: 'MapboxCluster', link: '/components/MapboxCluster/' },
          { text: 'MapboxFullscreenControl', link: '/components/MapboxFullscreenControl/' },
          { text: 'MapboxGeocoder', link: '/components/MapboxGeocoder/' },
          { text: 'MapboxGeolocateControl', link: '/components/MapboxGeolocateControl/' },
          { text: 'MapboxImage', link: '/components/MapboxImage/' },
          { text: 'MapboxImages', link: '/components/MapboxImages/' },
          { text: 'MapboxLayer', link: '/components/MapboxLayer/' },
          { text: 'MapboxNavigationControl', link: '/components/MapboxNavigationControl/' },
          { text: 'MapboxPopup', link: '/components/MapboxPopup/' },
          { text: 'MapboxSource', link: '/components/MapboxSource/' },
          { text: 'StoreLocator', link: '/components/StoreLocator/' },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/guide/introduction/' },
          { text: 'Installation', link: '/guide/installation/' },
          { text: 'Usage', link: '/guide/usage/' },
        ],
      },
      {
        text: 'Components',
        collapsible: true,
        items: [
          { text: 'MapboxMap', link: '/components/MapboxMap/' },
          { text: 'MapboxMarker', link: '/components/MapboxMarker/' },
          { text: 'MapboxCluster', link: '/components/MapboxCluster/' },
          { text: 'MapboxGeocoder', link: '/components/MapboxGeocoder/' },
          { text: 'MapboxGeolocateControl', link: '/components/MapboxGeolocateControl/' },
          { text: 'MapboxImage', link: '/components/MapboxImage/' },
          { text: 'MapboxImages', link: '/components/MapboxImages/' },
          { text: 'MapboxLayer', link: '/components/MapboxLayer/' },
          { text: 'MapboxNavigationControl', link: '/components/MapboxNavigationControl/' },
          { text: 'MapboxPopup', link: '/components/MapboxPopup/' },
          { text: 'MapboxSource', link: '/components/MapboxSource/' },
          { text: 'StoreLocator', link: '/components/StoreLocator/' },
        ],
      },
    ],
  },
});
