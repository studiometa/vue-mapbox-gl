<template>
  <div>
    <div ref="contentRef">
      <slot />
    </div>
    <MapboxPopup v-if="hasPopup" ref="popupRef" v-bind="popupOptions">
      <slot name="popup" />
    </MapboxPopup>
  </div>
</template>

<script lang="ts">
  import mapboxgl from 'mapbox-gl';

  const { Marker, Point } = mapboxgl;

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker
   * @type {object}
   */
  const propsConfig = {
    lngLat: {
      type: Array,
      required: true,
    },
    popup: {
      type: [Object, Boolean],
      default: false,
      bind: false,
    },
    element: {
      type: typeof HTMLElement !== 'undefined' ? HTMLElement : Object,
      default: null,
    },
    offset: {
      type: [Point, Array],
      default: null,
    },
    anchor: {
      type: String,
      default: 'center',
    },
    color: {
      type: String,
      default: null,
    },
    scale: {
      type: Number,
      default: 1,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    rotation: {
      type: Number,
      default: 0,
    },
    pitchAlignment: {
      type: String,
      default: 'auto',
    },
    rotationAlignment: {
      type: String,
      default: 'auto',
    },
    /**
     * Do not render the popup on the map.
     * @type {object}
     */
    renderless: {
      type: Boolean,
      default: false,
      bind: false,
    },
  };

  /**
   * All Map events which will be mapped/bounded to the component
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:dragstart
   * @type {Array}
   */
  const events = ['dragstart', 'drag', 'dragend'];
</script>

<script lang="ts" setup>
  import { computed, ref, shallowRef, onMounted, onUnmounted, useSlots } from 'vue';
  import { useMap, useEventsBinding, usePropsBinding } from '../composables/index.js';
  import MapboxPopup from './MapboxPopup.vue';

  const props = defineProps(propsConfig);
  const emit = defineEmits(events.map((event) => `mb-${event}`));
  const slots = useSlots();

  const marker = shallowRef();
  const contentRef = ref();
  const popupRef = ref();
  const hasPopup = computed(() => typeof slots.popup !== 'undefined');

  const popupInstance = computed(() => (hasPopup.value ? popupRef.value.popup : null));

  const popupOptions = computed(() => ({
    lngLat: props.lngLat,
    ...(props.popup ? props.popup : {}),
    renderless: true,
  }));

  const options = computed(() => {
    // eslint-disable-next-line no-unused-vars
    const { lngLat, popup, ...options } = props;

    // Use current component's element if container is not set
    if (slots.default) {
      options.element = contentRef.value;
    }

    return options;
  });

  usePropsBinding(props, marker, propsConfig);
  useEventsBinding(emit, marker, events);

  onMounted(() => {
    const { map } = useMap();
    marker.value = new Marker(options.value).setLngLat(props.lngLat);

    if (!props.renderless) {
      marker.value.addTo(map.value);
    }

    if (hasPopup.value) {
      marker.value.setPopup(popupInstance.value);
    }
  });

  onUnmounted(() => {
    if (marker.value) {
      marker.value.remove();
    }
  });

  defineExpose({ marker, popup: popupInstance });
</script>
