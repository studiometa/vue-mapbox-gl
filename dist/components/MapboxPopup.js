import { a as _objectWithoutProperties } from '../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import { injectMap } from '../mixins/provide-inject-map.js';
import { bindEvents, unbindEvents } from '../utils/bind-events.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';
import { Popup, LngLat, Point } from 'mapbox-gl';
import bindProps from '../utils/bind-props.js';

/**
 * Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#popup
 * @type {Object}
 */

var props = {
  lngLat: {
    type: [LngLat, Array, Object],
    required: true
  },
  closeButton: {
    type: Boolean,
    default: true
  },
  closeOnClick: {
    type: Boolean,
    default: true
  },
  closeOnMove: {
    type: Boolean,
    default: false
  },
  anchor: {
    type: String,
    default: null
  },
  offset: {
    type: [Number, Point, Array, Object],
    default: null
  },
  className: {
    type: String,
    default: null
  },
  maxWidth: {
    type: String,
    default: '240px'
  },

  /**
   * Do not render the popup on the map.
   * @type {Object}
   */
  renderless: {
    type: Boolean,
    default: false,
    bind: false
  }
};
/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#popup.event:open
 * @type {Array}
 */

var events = ['open', 'close'];
var script = {
  name: 'MapboxPopup',
  mixins: [injectMap()],
  props: props,
  data: function data() {
    return {
      popup: null
    };
  },
  computed: {
    options: function options() {
      var _this$$props = this.$props,
          lngLat = _this$$props.lngLat,
          options = _objectWithoutProperties(_this$$props, ["lngLat"]);

      return options;
    }
  },
  mounted: function mounted() {
    this.popup = new Popup(this.options).setLngLat(this.lngLat).setDOMContent(this.$el);

    if (!this.renderless) {
      this.popup.addTo(this.map);
    }

    bindProps(this, this.popup, props);
    bindEvents(this, this.popup, events);
    this.$emit('mb-open', this.popup);
  },
  destroyed: function destroyed() {
    if (this.popup) {
      unbindEvents(this, this.popup);
      this.popup.remove();
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

  return _c('div', [_vm._t("default")], 2);
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
//# sourceMappingURL=MapboxPopup.js.map
