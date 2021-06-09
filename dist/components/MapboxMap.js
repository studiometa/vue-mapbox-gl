import { a as _objectWithoutProperties, b as _objectSpread2 } from '../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import { provideMap } from '../mixins/provide-inject-map.js';
import { bindEvents, unbindEvents } from '../utils/bind-events.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';
import mapboxgl, { LngLatBounds, LngLat } from 'mapbox-gl';
import bindProps from '../utils/bind-props.js';

if (!mapboxgl) {
  throw new Error('mapboxgl is not installed.');
}
/**
 * Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map
 * @type {Object}
 */


var props = {
  accessToken: {
    type: String,
    default: 'no-token'
  },
  container: {
    type: [Object, String],
    default: undefined
  },
  minZoom: {
    type: Number,
    default: 0
  },
  maxZoom: {
    type: Number,
    default: 22
  },
  minPitch: {
    type: Number,
    default: 0
  },
  maxPitch: {
    type: Number,
    default: 60
  },
  mapStyle: {
    type: [Object, String],
    required: true
  },
  hash: {
    type: Boolean,
    default: false
  },
  interactive: {
    type: Boolean,
    default: true
  },
  bearingSnap: {
    type: Number,
    default: 7
  },
  pitchWithRotate: {
    type: Boolean,
    default: true
  },
  clickTolerance: {
    type: Number,
    default: 3
  },
  attributionControl: {
    type: Boolean,
    default: true
  },
  customAttribution: {
    type: [String, Array],
    default: null
  },
  logoPosition: {
    type: String,
    default: 'bottom-left'
  },
  failIfMajorPerformanceCaveat: {
    type: Boolean,
    default: false
  },
  preserveDrawingBuffer: {
    type: Boolean,
    default: false
  },
  antialias: {
    type: Boolean,
    default: false
  },
  refreshExpiredTiles: {
    type: Boolean,
    default: true
  },
  maxBounds: {
    type: [LngLatBounds, Array],
    default: undefined
  },
  scrollZoom: {
    type: [Boolean, Object],
    default: true
  },
  boxZoom: {
    type: Boolean,
    default: true
  },
  dragRotate: {
    type: Boolean,
    default: true
  },
  dragPan: {
    type: [Boolean, Object],
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  doubleClickZoom: {
    type: Boolean,
    default: true
  },
  touchZoomRotate: {
    type: [Boolean, Object],
    default: true
  },
  trackResize: {
    type: Boolean,
    default: true
  },
  center: {
    type: [LngLat, Array, Object],
    default: function _default() {
      return [0, 0];
    }
  },
  zoom: {
    type: Number,
    default: 0
  },
  bearing: {
    type: Number,
    default: 0
  },
  pitch: {
    type: Number,
    default: 0
  },
  bounds: {
    type: [LngLatBounds, Array],
    default: undefined
  },
  fitBoundsOptions: {
    type: Object,
    default: null
  },
  renderWorldCopies: {
    type: Boolean,
    default: true
  },
  maxTileCacheSize: {
    type: Number,
    default: null
  },
  localIdeographFontFamily: {
    type: String,
    default: 'sans-serif'
  },
  transformRequest: {
    type: Function,
    default: null
  },
  collectResourceTiming: {
    type: Boolean,
    default: false
  },
  fadeDuration: {
    type: Number,
    default: 300
  },
  crossSourceCollisions: {
    type: Boolean,
    default: true
  }
};
/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map.event:resize
 * @type {Array}
 */

var events = ['resize', 'remove', 'mousedown', 'mouseup', 'mouseover', 'mousemove', 'click', 'dblclick', 'mouseenter', 'mouseleave', 'mouseout', 'contextmenu', 'wheel', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'movestart', 'move', 'moveend', 'dragstart', 'drag', 'dragend', 'zoomstart', 'zoom', 'zoomend', 'rotatestart', 'rotate', 'rotateend', 'pitchstart', 'pitch', 'pitchend', 'boxzoomstart', 'boxzoomend', 'boxzoomcancel', 'webglcontextlost', 'webglcontextrestored', 'load', 'render', 'idle', 'error', 'data', 'styledata', 'sourcedata', 'dataloading', 'styledataloading', 'sourcedataloading', 'styleimagemissing'];
var script = {
  name: 'MapboxMap',
  mixins: [provideMap()],
  props: props,
  data: function data() {
    return {
      isLoaded: false
    };
  },
  computed: {
    options: function options() {
      var _this$$props = this.$props,
          accessToken = _this$$props.accessToken,
          style = _this$$props.mapStyle,
          options = _objectWithoutProperties(_this$$props, ["accessToken", "mapStyle"]); // Use current component's element if container is not set


      if (!options.container && this.$el) {
        options.container = this.$el;
      }

      return _objectSpread2({
        style: style
      }, options);
    }
  },
  mounted: function mounted() {
    var _this = this;

    mapboxgl.accessToken = this.accessToken;
    this.map = new mapboxgl.Map(this.options);
    this.map.on('load', function () {
      _this.isLoaded = true;
    }); // Bind props and events

    bindProps(this, this.map, props);
    bindEvents(this, this.map, events);
    this.$emit('mb-created', this.map); // Mapbox has some resize issues
    // Create an observer on this object
    // Call resize on the map when we change szie

    var observer = new ResizeObserver(this.resizeHandler);
    observer.observe(this.options.container);
    this.resizeObserver = observer;
  },
  destroyed: function destroyed() {
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
    resizeHandler: function resizeHandler() {
      if (this.map) {
        this.map.resize();
      }
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm.isLoaded ? _c('div', [_vm._t("default")], 2) : _c('div', [_vm._t("loader")], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

export default __vue_component__;
//# sourceMappingURL=MapboxMap.js.map
