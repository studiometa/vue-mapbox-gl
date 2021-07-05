<template>
  <div />
</template>

<script>
  import mapboxgl from 'mapbox-gl';
  import { injectMap } from '../mixins/provide-inject-map';
  import bindProps from '../utils/bind-props';
  import { bindEvents, unbindEvents } from '../utils/bind-events';

  if (!mapboxgl) {
    throw new Error('mapboxgl is not installed.');
  }

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol
   * @type {Object}
   */
  const props = {
    positionOptions: {
      type: Object,
      default: () => ({ enableHighAccuracy: false, timeout: 6000 }),
    },
    fitBoundsOptions: {
      type: Object,
      default: () => ({ maxZoom: 15 }),
    },
    trackUserLocation: {
      type: Boolean,
      default: false,
    },
    showAccuracyCircle: {
      type: Boolean,
      default: true,
    },
    showUserLocation: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: 'top-right'
    },
  };

  /**
   * All geolocationControl events which will be mapped/bounded to the component
   * @see https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol.event:trackuserlocationend
   * @type {Array}
   */
  const events = [
    'trackuserlocationend',
    'error',
    'geolocate',
    'outofmaxbounds',
    'trackuserlocationstart',
  ];

  export default {
    name: 'MapboxGeolocateControl',
    mixins: [ injectMap() ],
    props,
    mounted() {
      this.control = new mapboxgl.GeolocateControl(this.$props);

      // Bind props and events
      bindProps(this, this.control, props);
      bindEvents(this, this.control, events);

      // Add GeolocationControl to the map
      this.map.addControl(this.control, this.position);
    },
    destroyed() {
      if (this.control) {
        unbindEvents(this, this.control, events);
        this.map.removeControl(this.control);
      }
    },
  };
</script>
