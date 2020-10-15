import '../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import { injectMap } from '../mixins/provide-inject-map.js';
import { bindEvents, unbindEvents } from '../utils/bind-events.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';
import mapboxgl from 'mapbox-gl';
import bindProps from '../utils/bind-props.js';

//

if (!mapboxgl) {
  throw new Error('mapboxgl is not installed.');
}
/**
 * Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @see https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol
 * @type {Object}
 */


var props = {
  positionOptions: {
    type: Object,
    default: function _default() {
      return {
        enableHighAccuracy: false,
        timeout: 6000
      };
    }
  },
  fitBoundsOptions: {
    type: Object,
    default: function _default() {
      return {
        maxZoom: 15
      };
    }
  },
  trackUserLocation: {
    type: Boolean,
    default: false
  },
  showAccuracyCircle: {
    type: Boolean,
    default: true
  },
  showUserLocation: {
    type: Boolean,
    default: true
  },
  position: {
    type: String,
    default: 'top-right',
    bind: false
  }
};
/**
 * All geolocationControl events which will be mapped/bounded to the component
 * @see https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol.event:trackuserlocationend
 * @type {Array}
 */

var events = ['trackuserlocationend', 'error', 'geolocate', 'outofmaxbounds', 'trackuserlocationstart'];
var script = {
  name: 'MapboxGeolocateControl',
  mixins: [injectMap()],
  props: props,
  mounted: function mounted() {
    this.control = new mapboxgl.GeolocateControl(this.$props); // Bind props and events

    bindProps(this, this.control, props);
    bindEvents(this, this.control, events); // Add GeolocationControl to the map

    this.map.addControl(this.control, this.position);
  },
  destroyed: function destroyed() {
    if (this.control) {
      unbindEvents(this, this.control, events);
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
//# sourceMappingURL=MapboxGeolocateControl.js.map
