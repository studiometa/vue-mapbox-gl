<template>
  <div :id="id" />
</template>

<script>
  import { bindEvents, unbindEvents } from '../utils/bind-events';
  import { injectMap } from '../mixins/provide-inject-map';

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

  export default {
    name: 'MapboxLayer',
    mixins: [ injectMap() ],
    props: {
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
    },
    mounted() {
      // Make sure to remove any existing layer and/or source to avoid conflicts
      if (this.layerExists()) {
        this.map.removeLayer(this.id);
      }

      if (this.sourceExists()) {
        this.map.removeSource(this.id);
      }

      // Bind events
      bindEvents(this, this.map, events, this.id);
      this.map.addLayer({ ...this.options, id: this.id }, this.beforeId);
    },
    destroyed() {
      if (this.layerExists()) {
        unbindEvents(this, this.map, this.id);
        this.map.removeLayer(this.id);
      }

      if (this.sourceExists()) {
        this.map.removeSource(this.id);
      }
    },
    methods: {
      /**
       * Test if the component's layer exists
       * @return {Boolean}
       */
      layerExists() {
        return typeof this.map.getLayer(this.id) !== 'undefined';
      },
      /**
       * Test if a source with the layer's ID exists
       * @return {Boolean}
       */
      sourceExists() {
        return typeof this.map.getSource(this.id) !== 'undefined';
      },
    },
  };
</script>
