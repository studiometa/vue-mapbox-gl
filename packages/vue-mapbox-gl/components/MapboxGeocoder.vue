<template>
  <div ref="root" />
</template>

<script>
  import mapboxgl from 'mapbox-gl';
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

  if (!mapboxgl) {
    throw new Error('mapboxgl is not installed.');
  }

  if (!MapboxGeocoder) {
    throw new Error('MapboxGeocoder is not installed.');
  }

  /**
   ** Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#parameters
   * @type {object}
   */
  const propsConfig = {
    accessToken: {
      type: String,
      default: 'no-token',
    },
    zoom: {
      type: Number,
      default: () => 16,
    },
    flyTo: {
      type: [Boolean, Object],
      default: () => true,
    },
    placeholder: {
      type: String,
      default: () => 'Search',
    },
    proximity: {
      type: Object,
      default: () => {},
    },
    trackProximity: {
      type: Boolean,
      default: () => true,
    },
    collapsed: {
      type: Boolean,
      default: () => false,
    },
    clearAndBlurOnEsc: {
      type: Boolean,
      default: () => false,
    },
    clearOnBlur: {
      type: Boolean,
      default: () => false,
    },
    bbox: {
      type: Array,
      default: () => [],
    },
    countries: {
      type: String,
      default: () => '',
    },
    types: {
      type: String,
      default: () => 'place',
    },
    minLength: {
      type: Number,
      default: () => 2,
    },
    limit: {
      type: Number,
      default: () => 5,
    },
    language: {
      type: String,
    },
    filter: {
      type: Function,
    },
    localGeocoder: {
      type: Function,
    },
    reverseMode: {
      type: String,
      default: () => 'distance',
    },
    reverseGeocode: {
      type: Boolean,
      default: () => false,
    },
    enableEventLogging: {
      type: Boolean,
      default: () => false,
    },
    marker: {
      type: Boolean,
      default: () => true,
    },
    render: {
      type: Function,
    },
    getItemValue: {
      type: Function,
      default: (item) => item.place_name,
    },
    mode: {
      type: String,
      default: () => 'mapbox.places',
    },
    localGeocoderOnly: {
      type: Boolean,
      default: () => false,
    },
  };

  /**
   * All Map events which will be mapped/bounded to the component
   * @see  https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#on
   * @type {Array}
   */
  const events = ['loading', 'results', 'result', 'error'];
</script>

<script setup>
  import { onMounted, onUnmounted, ref, unref, computed, useAttrs } from 'vue';
  import { useMap, useEventsBinding, usePropsBinding } from '../composables/index.js';

  const props = defineProps(propsConfig);
  const emit = defineEmits();

  const { map } = useMap();
  const root = ref();
  const control = ref();

  useEventsBinding(emit, control, events);
  usePropsBinding(props, control, propsConfig);

  const options = computed(() => {
    const opts = {
      mapboxgl,
      ...props,
      accessToken: mapboxgl.accessToken ?? props.accessToken,
    };

    // Delete the `reverseMode` property if we are not reverse geocoding as it is not supported by
    // the Mapbox SDK.
    //
    // The `reverseMode` option can not be supported yet as it is conditionned by the search
    // query format following a specific regex:
    //
    // ```js
    //  /(-?\d+\.?\d*)[, ]+(-?\d+\.?\d*)[ ]*$/.test(searchInput)
    // ```
    //
    // @todo use the same regex as the mapbox-gl-geocoder lib or open an issue
    //
    // @see https://github.com/mapbox/mapbox-sdk-js/blob/main/services/geocoding.js (92-104)
    // @see https://github.com/mapbox/mapbox-sdk-js/blob/main/services/geocoding.js (161-172)
    // @see https://github.com/mapbox/mapbox-gl-geocoder/blob/master/lib/index.js (437-458)
    // eslint-disable-next-line no-constant-condition
    if (!opts.reverseGeocode || true) {
      delete opts.reverseMode;
    }

    return opts;
  });

  onMounted(() => {
    control.value = new MapboxGeocoder(unref(options));
    emit('mb-created', control);
    control.value.addTo(unref(map) || unref(root));
  });

  onUnmounted(() => {
    if (unref(map)) {
      unref(map).removeControl(unref(control));
    }
  });
</script>
