<template>
  <div />
</template>

<script>
  import mapboxgl from 'mapbox-gl';
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
  import { injectMap } from '../mixins/provide-inject-map';

  export default {
    name: 'MapboxGeocoder',
    mixins: [ injectMap() ],
    props: {
      options: {
        type: Object,
        default: () => {},
      },
    },
    mounted() {
      this.control = new MapboxGeocoder({
        ...this.options,
        accessToken: mapboxgl.accessToken,
        mapboxgl,
      });
      this.map.addControl(this.control);
    },
    destroyed() {
      this.map.removeControl(this.control);
    },
  };
</script>
