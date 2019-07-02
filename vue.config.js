module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [ '.vue', '.js', '.json' ],
    },
    externals: {
      'mapbox-gl': {
        amd: 'mapbox-gl',
        commonjs2: 'mapbox-gl',
        commonjs: 'mapbox-gl',
        global: 'mapbox-gl',
        root: 'mapbox-gl',
        umd: 'mapbox-gl',
      },
      '@mapbox/mapbox-gl-geocoder': {
        amd: '@mapbox/mapbox-gl-geocoder',
        commonjs2: '@mapbox/mapbox-gl-geocoder',
        commonjs: '@mapbox/mapbox-gl-geocoder',
        global: '@mapbox/mapbox-gl-geocoder',
        root: '@mapbox/mapbox-gl-geocoder',
        umd: '@mapbox/mapbox-gl-geocoder',
      },
      vue: {
        amd: 'vue',
        commonjs2: 'vue',
        commonjs: 'vue',
        global: 'Vue',
        root: 'Vue',
        umd: 'Vue',
      },
    },
  },
};
