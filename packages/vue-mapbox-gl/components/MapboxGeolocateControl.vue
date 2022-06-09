<template>
  <div />
</template>

<script>
  import mapboxgl from 'mapbox-gl';

  if (!mapboxgl) {
    throw new Error('mapboxgl is not installed.');
  }

  const { GeolocateControl } = mapboxgl;

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol
   * @type {Object}
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

<script setup>
  import { onMounted, onUnmounted, ref, unref } from 'vue';
  import { useMap, useEventsBinding, usePropsBinding } from '../composables/index.js';

  const props = defineProps(propsConfig);
  const emit = defineEmits();

  const { map } = useMap();
  const control = ref();

  useEventsBinding(emit, control, events);
  usePropsBinding(props, control, propsConfig);

  onMounted(() => {
    control.value = new GeolocateControl(props);
    unref(map).addControl(unref(control), props.position);
  });

  onUnmounted(() => {
    if (unref(control)) {
      unref(map).removeControl(unref(control));
    }
  });
</script>
