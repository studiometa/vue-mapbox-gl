module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.js', '.json'],
    },
    externals: {
      'mapbox-gl': {
        commonjs: 'mapbox-gl',
        commonjs2: 'mapbox-gl',
        amd: 'mapboxgl',
        root: 'mapboxgl',
      },
      '@mapbox/mapbox-gl-geocoder': {
        commonjs: '@mapbox/mapbox-gl-geocoder',
        commonjs2: '@mapbox/mapbox-gl-geocoder',
        amd: 'MapboxGeocoder',
        root: 'MapboxGeocoder',
      },
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        am: 'Vue',
        root: 'Vue',
      },
    },
  },
};
