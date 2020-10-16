import { injectMap } from '../mixins/provide-inject-map.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';

//
var script = {
  name: 'MapboxSource',
  mixins: [injectMap()],
  props: {
    options: {
      type: Object,
      default: function _default() {}
    },
    id: {
      type: String,
      required: true
    }
  },
  watch: {
    'options.data': function watchOptionsData(newData) {
      this.map.getSource(this.id).setData(newData);
    }
  },
  mounted: function mounted() {
    this.map.addSource(this.id, this.options);
  },
  destroyed: function destroyed() {
    var _this = this;

    // Remove all layers tied to the source
    var layers = this.map.style._layers;
    Object.values(layers).forEach(function (value) {
      if (value.source === _this.id) {
        _this.map.removeLayer(value.id);
      }
    }); // And remove the source

    this.map.removeSource(this.id);
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
//# sourceMappingURL=MapboxSource.js.map
