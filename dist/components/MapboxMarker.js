import { b as _objectSpread2, a as _objectWithoutProperties } from '../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import { injectMap } from '../mixins/provide-inject-map.js';
import { bindEvents, unbindEvents } from '../utils/bind-events.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';
import { Marker, Point } from 'mapbox-gl';
import bindProps from '../utils/bind-props.js';
import __vue_component__$1 from './MapboxPopup.js';

/**
 * Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker
 * @type {Object}
 */

var props = {
  lngLat: {
    type: Array,
    required: true
  },
  popup: {
    type: [Object, Boolean],
    default: false,
    bind: false
  },
  element: {
    type: HTMLElement,
    default: null
  },
  offset: {
    type: [Point, Array],
    default: null
  },
  anchor: {
    type: String,
    default: 'center'
  },
  color: {
    type: String,
    default: null
  },
  scale: {
    type: Number,
    default: 1
  },
  draggable: {
    type: Boolean,
    default: false
  },
  rotation: {
    type: Number,
    default: 0
  },
  pitchAlignment: {
    type: String,
    default: 'auto'
  },
  rotationAlignment: {
    type: String,
    default: 'auto'
  }
};
/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:dragstart
 * @type {Array}
 */

var events = ['dragstart', 'drag', 'dragend'];
var script = {
  name: 'MapboxMarker',
  components: {
    MapboxPopup: __vue_component__$1
  },
  mixins: [injectMap()],
  props: props,
  computed: {
    hasPopup: function hasPopup() {
      return this.popup !== false && this.$refs.popup !== undefined;
    },
    popupInstance: function popupInstance() {
      return this.hasPopup ? this.$refs.popup.popup : null;
    },
    popupOptions: function popupOptions() {
      return _objectSpread2(_objectSpread2({
        lngLat: this.lngLat
      }, this.popup), {}, {
        renderless: true
      });
    },
    options: function options() {
      var _this$$props = this.$props,
          lngLat = _this$$props.lngLat,
          popup = _this$$props.popup,
          options = _objectWithoutProperties(_this$$props, ["lngLat", "popup"]); // Use current component's element if container is not set


      if (this.$slots.default) {
        options.element = this.$refs.content;
      }

      return options;
    }
  },
  mounted: function mounted() {
    this.marker = new Marker(this.options).setLngLat(this.lngLat).addTo(this.map); // Bind props and events

    bindProps(this, this.marker, props);
    bindEvents(this, this.marker, events);

    if (this.hasPopup) {
      this.marker.setPopup(this.popupInstance);
    }
  },
  destroyed: function destroyed() {
    if (this.marker) {
      unbindEvents(this, this.marker);
      this.marker.remove();
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

  return _c('div', [_c('div', {
    ref: "content"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm.popup ? _c('mapbox-popup', _vm._b({
    ref: "popup"
  }, 'mapbox-popup', _vm.popupOptions, false), [_vm._t("popup")], 2) : _vm._e()], 1);
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
//# sourceMappingURL=MapboxMarker.js.map
