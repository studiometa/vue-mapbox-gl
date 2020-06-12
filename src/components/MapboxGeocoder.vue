<template>
  <div />
</template>

<script>
  import mapboxgl from 'mapbox-gl';
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
  import { injectMap } from '../mixins/provide-inject-map';
  import { bindEvents, unbindEvents } from '../utils/bind-events';

  if (!mapboxgl) {
    throw new Error('mapboxgl is not installed.');
  }

  if (!MapboxGeocoder) {
    throw new Error('MapboxGeocoder is not installed.');
  }

  /**
   * All Map events which will be mapped/bounded to the component
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:dragstart
   * @type {Array}
   */
  const events = [ 'loading', 'results', 'result', 'error' ];

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

      bindEvents(this, this.control, events);
      this.map.addControl(this.control);
    },
    destroyed() {
      unbindEvents(this, this.control);
      this.map.removeControl(this.control);
    },
  };
</script>
