import { injectMap } from '../mixins/provide-inject-map.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';
import { NavigationControl } from 'mapbox-gl';
import bindProps from '../utils/bind-props.js';

//
/**
 * Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @type {Object}
 */

var props = {
  showCompass: {
    type: Boolean,
    default: true
  },
  showZoom: {
    type: Boolean,
    default: true
  },
  visualizePitch: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'top-right',
    bind: false
  }
};
var script = {
  name: 'MapboxNavigationControl',
  mixins: [injectMap()],
  props: props,
  mounted: function mounted() {
    this.control = new NavigationControl(this.$props);
    bindProps(this, this.control, props);
    this.map.addControl(this.control, this.position);
  },
  destroyed: function destroyed() {
    this.map.removeControl(this.control);
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
//# sourceMappingURL=MapboxNavigationControl.js.map
