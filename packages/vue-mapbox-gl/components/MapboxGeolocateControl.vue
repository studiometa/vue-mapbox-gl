<template>
  <div />
</template>

<script lang="ts">
  import mapboxgl from 'mapbox-gl';

  if (!mapboxgl) {
    throw new Error('mapboxgl is not installed.');
  }

  const { GeolocateControl } = mapboxgl;

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol
   * @type {object}
   */
  const propsConfig = {
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
    showUserHeading: {
      type: Boolean,
      default: true,
    },
    showUserLocation: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: 'top-right',
      bind: false,
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
</script>

<script lang="ts" setup>
  import { useControl } from '../composables/index.js';

  const props = defineProps(propsConfig);
  const emit = defineEmits();

  const { control } = useControl(GeolocateControl, { propsConfig, events, props, emit });

  defineExpose({ control });
</script>
