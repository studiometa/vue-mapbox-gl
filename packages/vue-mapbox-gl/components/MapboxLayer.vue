<template>
  <div :id="id" />
</template>

<script setup>
  import { onMounted, onUnmounted } from 'vue';
  import { useEventsBinding, useMap } from '../composables/index.js';

  /**
   * All Map events which will be mapped/bounded to the component
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#on
   * @type {Array}
   */
  const events = [
    'mousedown',
    'mouseup',
    'click',
    'dblclick',
    'mousemove',
    'mouseenter',
    'mouseleave',
    'mouseover',
    'mouseout',
    'contextmenu',
    'touchstart',
    'touchend',
    'touchcancel',
  ];

  const props = defineProps({
    /**
     * Id of the layer
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
     * @type {String}
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * Options for the layer
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
     * @see  https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers
     * @type {Object}
     */
    options: {
      type: Object,
      default: () => {},
    },
    /**
     * The ID of an existing layer to insert the new layer before.
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
     * @type {String}
     */
    beforeId: {
      type: String,
      default: undefined,
    },
  });
  const emit = defineEmits();
  useEventsBinding(emit, getMap, events, props.id);

  /**
   * Test if the component's layer exists
   * @return {Boolean}
   */
  function layerExists(map) {
    return map.getLayer(props.id) !== 'undefined';
  }

  /**
   * Test if a source with the layer's ID exists
   * @return {Boolean}
   */
  function sourceExists(map) {
    return typeof map.getSource(props.id) !== 'undefined';
  }

  onMounted(() => {
    const map = getMap();
    // Make sure to remove any existing layer and/or source to avoid conflicts
    if (layerExists(map)) {
      map.removeLayer(props.id);
    }

    if (sourceExists(map)) {
      map.removeSource(props.id);
    }

    if (props.options.paint === null || props.options.paint === undefined) {
      delete props.options.paint;
    }

    if (props.options.layout === null || props.options.layout === undefined) {
      delete props.options.layout;
    }

    map.addLayer({ ...props.options, id: props.id }, props.beforeId);

    onUnmounted(() => {
      if (layerExists(map)) {
        map.removeLayer(props.id);
      }

      if (sourceExists(map)) {
        map.removeSource(props.id);
      }
    });
  });
</script>
