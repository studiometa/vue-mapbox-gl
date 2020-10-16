import { a as _objectWithoutProperties, b as _objectSpread2 } from '../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import { injectMap } from '../mixins/provide-inject-map.js';
import { bindEvents, unbindEvents } from '../utils/bind-events.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';
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


var props = {
  accessToken: {
    type: String,
    default: 'no-token'
  },
  zoom: {
    type: Number,
    default: function _default() {
      return 16;
    }
  },
  flyTo: {
    type: [Boolean, Object],
    default: function _default() {
      return true;
    }
  },
  placeholder: {
    type: String,
    default: function _default() {
      return 'Search';
    }
  },
  proximity: {
    type: Object,
    default: function _default() {}
  },
  trackProximity: {
    type: Boolean,
    default: function _default() {
      return true;
    }
  },
  collapsed: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  },
  clearAndBlurOnEsc: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  },
  clearOnBlur: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  },
  bbox: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  countries: {
    type: String,
    default: function _default() {
      return '';
    }
  },
  types: {
    type: String,
    default: function _default() {
      return '';
    }
  },
  minLength: {
    type: Number,
    default: function _default() {
      return 2;
    }
  },
  limit: {
    type: Number,
    default: function _default() {
      return 5;
    }
  },
  language: {
    type: String
  },
  filter: {
    type: Function
  },
  localGeocoder: {
    type: Function
  },
  reverseMode: {
    type: String,
    default: function _default() {
      return 'distance';
    }
  },
  reverseGeocode: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  },
  enableEventLogging: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  },
  marker: {
    type: Boolean,
    default: function _default() {
      return true;
    }
  },
  render: {
    type: Function
  },
  getItemValue: {
    type: Function,
    default: function _default(item) {
      return item.place_name;
    }
  },
  mode: {
    type: String,
    default: function _default() {
      return 'mapbox.places';
    }
  },
  localGeocoderOnly: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  }
};
/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#on
 * @type {Array}
 */

var events = ['loading', 'results', 'result', 'error'];
var script = {
  name: 'MapboxGeocoder',
  mixins: [injectMap()],
  props: props,
  mounted: function mounted() {
    var _this$$props = this.$props,
        accessToken = _this$$props.accessToken,
        $props = _objectWithoutProperties(_this$$props, ["accessToken"]); // Delete the `reverseMode` property if we are not reverse geocoding as it is not supported by
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


    if (!$props.reverseGeocode || true) {
      delete $props.reverseMode;
    }

    this.control = new MapboxGeocoder(_objectSpread2({
      accessToken: mapboxgl.accessToken || accessToken,
      mapboxgl: mapboxgl
    }, $props)); // Bind events

    bindEvents(this, this.control, events);
    this.control.addTo(this.map || this.$el);
  },
  destroyed: function destroyed() {
    unbindEvents(this, this.control);

    if (this.map) {
      this.map.removeControl(this.control);
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

  return _c('div');
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
//# sourceMappingURL=MapboxGeocoder.js.map
