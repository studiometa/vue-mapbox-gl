import { b as _objectSpread2 } from '../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import { injectMap } from '../mixins/provide-inject-map.js';
import { bindEvents, unbindEvents } from '../utils/bind-events.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';

/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#on
 * @type {Array}
 */

var events = ['mousedown', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout', 'contextmenu', 'touchstart', 'touchend', 'touchcancel'];
var script = {
  name: 'MapboxLayer',
  mixins: [injectMap()],
  props: {
    /**
     * Id of the layer
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
     * @type {String}
     */
    id: {
      type: String,
      required: true
    },

    /**
     * Options for the layer
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
     * @see  https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers
     * @type {Object}
     */
    options: {
      type: Object,
      default: function _default() {}
    },

    /**
     * The ID of an existing layer to insert the new layer before.
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
     * @type {String}
     */
    beforeId: {
      type: String,
      default: undefined
    }
  },
  mounted: function mounted() {
    // Make sure to remove any existing layer and/or source to avoid conflicts
    if (this.layerExists()) {
      this.map.removeLayer(this.id);
    }

    if (this.sourceExists()) {
      this.map.removeSource(this.id);
    } // Bind events


    bindEvents(this, this.map, events, this.id);
    this.map.addLayer(_objectSpread2(_objectSpread2({}, this.options), {}, {
      id: this.id
    }), this.beforeId);
  },
  destroyed: function destroyed() {
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
    layerExists: function layerExists() {
      return typeof this.map.getLayer(this.id) !== 'undefined';
    },

    /**
     * Test if a source with the layer's ID exists
     * @return {Boolean}
     */
    sourceExists: function sourceExists() {
      return typeof this.map.getSource(this.id) !== 'undefined';
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

  return _c('div', {
    attrs: {
      "id": _vm.id
    }
  });
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
//# sourceMappingURL=MapboxLayer.js.map
