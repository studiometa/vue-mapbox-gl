<template>
  <div>
    <div v-if="isLoaded">
      <slot />
    </div>
    <div v-else>
      <slot name="loader" />
    </div>
  </div>
</template>

<script>
  import mapboxgl, { LngLatBounds, LngLat } from 'mapbox-gl';
  import bindProps from '../utils/bind-props';
  import { bindEvents, unbindEvents } from '../utils/bind-events';
  import { provideMap } from '../mixins/provide-inject-map';

  if (!mapboxgl) {
    throw new Error('mapboxgl is not installed.');
  }

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map
   * @type {Object}
   */
  const props = {
    accessToken: {
      type: String,
      default: 'no-token',
    },
    container: {
      type: [ Object, String ],
      default: undefined,
    },
    minZoom: {
      type: Number,
      default: 0,
    },
    maxZoom: {
      type: Number,
      default: 22,
    },
    minPitch: {
      type: Number,
      default: 0,
    },
    maxPitch: {
      type: Number,
      default: 60,
    },
    mapStyle: {
      type: [ Object, String ],
      required: true,
    },
    hash: {
      type: Boolean,
      default: false,
    },
    interactive: {
      type: Boolean,
      default: true,
    },
    bearingSnap: {
      type: Number,
      default: 7,
    },
    pitchWithRotate: {
      type: Boolean,
      default: true,
    },
    clickTolerance: {
      type: Number,
      default: 3,
    },
    attributionControl: {
      type: Boolean,
      default: true,
    },
    customAttribution: {
      type: [ String, Array ],
      default: null,
    },
    logoPosition: {
      type: String,
      default: 'bottom-left',
    },
    failIfMajorPerformanceCaveat: {
      type: Boolean,
      default: false,
    },
    preserveDrawingBuffer: {
      type: Boolean,
      default: false,
    },
    antialias: {
      type: Boolean,
      default: false,
    },
    refreshExpiredTiles: {
      type: Boolean,
      default: true,
    },
    maxBounds: {
      type: [ LngLatBounds, Array ],
      default: undefined,
    },
    scrollZoom: {
      type: [ Boolean, Object ],
      default: true,
    },
    boxZoom: {
      type: Boolean,
      default: true,
    },
    dragRotate: {
      type: Boolean,
      default: true,
    },
    dragPan: {
      type: [ Boolean, Object ],
      default: true,
    },
    keyboard: {
      type: Boolean,
      default: true,
    },
    doubleClickZoom: {
      type: Boolean,
      default: true,
    },
    touchZoomRotate: {
      type: [ Boolean, Object ],
      default: true,
    },
    trackResize: {
      type: Boolean,
      default: true,
    },
    center: {
      type: [ LngLat, Array, Object ],
      default: () => [ 0, 0 ],
    },
    zoom: {
      type: Number,
      default: 0,
    },
    bearing: {
      type: Number,
      default: 0,
    },
    pitch: {
      type: Number,
      default: 0,
    },
    bounds: {
      type: [ LngLatBounds, Array ],
      default: undefined,
    },
    fitBoundsOptions: {
      type: Object,
      default: null,
    },
    renderWorldCopies: {
      type: Boolean,
      default: true,
    },
    maxTileCacheSize: {
      type: Number,
      default: null,
    },
    localIdeographFontFamily: {
      type: String,
      default: 'sans-serif',
    },
    transformRequest: {
      type: Function,
      default: null,
    },
    collectResourceTiming: {
      type: Boolean,
      default: false,
    },
    fadeDuration: {
      type: Number,
      default: 300,
    },
    crossSourceCollisions: {
      type: Boolean,
      default: true,
    },
  };

  /**
   * All Map events which will be mapped/bounded to the component
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map.event:resize
   * @type {Array}
   */
  const events = [
    'resize',
    'remove',
    'mousedown',
    'mouseup',
    'mouseover',
    'mousemove',
    'click',
    'dblclick',
    'mouseenter',
    'mouseleave',
    'mouseout',
    'contextmenu',
    'wheel',
    'touchstart',
    'touchend',
    'touchmove',
    'touchcancel',
    'movestart',
    'move',
    'moveend',
    'dragstart',
    'drag',
    'dragend',
    'zoomstart',
    'zoom',
    'zoomend',
    'rotatestart',
    'rotate',
    'rotateend',
    'pitchstart',
    'pitch',
    'pitchend',
    'boxzoomstart',
    'boxzoomend',
    'boxzoomcancel',
    'webglcontextlost',
    'webglcontextrestored',
    'load',
    'render',
    'idle',
    'error',
    'data',
    'styledata',
    'sourcedata',
    'dataloading',
    'styledataloading',
    'sourcedataloading',
    'styleimagemissing',
  ];

  export default {
    name: 'MapboxMap',
    mixins: [ provideMap() ],
    props,
    data() {
      return {
        isLoaded: false,
      };
    },
    computed: {
      options() {
        const { accessToken, mapStyle: style, ...options } = this.$props;

        // Use current component's element if container is not set
        if (!options.container && this.$el) {
          options.container = this.$el;
        }

        return { style, ...options };
      },
    },
    mounted() {
      mapboxgl.accessToken = this.accessToken;
      this.map = new mapboxgl.Map(this.options);
      this.map.on('load', () => {
        this.isLoaded = true;
      });

      // Bind props and events
      bindProps(this, this.map, props);
      bindEvents(this, this.map, events);
      this.$emit('mb-created', this.map);

      // Mapbox has some resize issues
      // Create an observer on this object
      // Call resize on the map when we change szie
      const observer = new ResizeObserver(this.resizeHandler);
      observer.observe(this.options.container);
      this.resizeObserver = observer;
    },
    destroyed() {
      unbindEvents(this, this.map);
      this.resizeObserver.disconnect();
      this.map.remove();
    },
    methods: {
      /**
       * Handler for any change of the map's size
       *
       * @return {void}
       */
      resizeHandler() {
        if (this.map) {
          this.map.resize();
        }
      },
    },
  };
</script>
