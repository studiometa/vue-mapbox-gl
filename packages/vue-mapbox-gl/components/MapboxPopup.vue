<template>
  <div ref="root">
    <slot />
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl';

  const { Popup, Point, LngLat } = mapboxgl;

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#popup
   * @type {Object}
   */
  const propsConfig = {
    lngLat: {
      type: [LngLat, Array, Object],
      required: true,
    },
    closeButton: {
      type: Boolean,
      default: true,
    },
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    closeOnMove: {
      type: Boolean,
      default: false,
    },
    anchor: {
      type: String,
      default: null,
    },
    offset: {
      type: [Number, Point, Array, Object],
      default: 0,
    },
    className: {
      type: String,
      default: null,
    },
    maxWidth: {
      type: String,
      default: '240px',
    },
    /**
     * Do not render the popup on the map.
     * @type {Object}
     */
    renderless: {
      type: Boolean,
      default: false,
      bind: false,
    },
  };

  /**
   * All Map events which will be mapped/bounded to the component
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#popup.event:open
   * @type {Array}
   */
  const events = ['open', 'close'];
</script>

<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { useMap, usePropsBinding, useEventsBinding } from '../composables/index.js';

  const props = defineProps(propsConfig);
  const emit = defineEmits();

  const popup = ref();
  const root = ref();
  const options = computed(() => {
    const { lngLat, ...options } = props;
    return options;
  });

  usePropsBinding(props, popup, propsConfig);
  useEventsBinding(emit, popup, events);

  onMounted(() => {
    const { map } = useMap();

    popup.value = new Popup(options.value).setLngLat(props.lngLat).setDOMContent(root.value);

    if (!props.renderless) {
      popup.value.addTo(map.value);
    }

    emit('mb-open', popup.value);
  });

  onUnmounted(() => {
    if (popup.value) {
      popup.value.remove();
    }
  });

  defineExpose({ popup });
</script>
