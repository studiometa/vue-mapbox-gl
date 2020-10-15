import '../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import '../mixins/provide-inject-map.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';
import __vue_component__$1 from './MapboxImage.js';

//
var script = {
  name: 'MapboxImages',
  components: {
    MapboxImage: __vue_component__$1
  },
  props: {
    /**
     * A list of sources to add to the map
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @see  ./MapboxImage.vue
     * @type {Object}
     */
    sources: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      isReady: false,
      addedImages: new Map()
    };
  },
  methods: {
    addHandler: function addHandler(image, index, total) {
      if (!this.addedImages.has(image.id)) {
        this.addedImages.set(image.id, image);
        this.$emit('add', image, index, total);
      }

      if (this.addedImages.size === this.sources.length) {
        this.isReady = true;
        this.$emit('ready', this.addedImages.values());
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

  return _c('div', [_vm._l(_vm.sources, function (source, index) {
    return _c('mapbox-image', _vm._b({
      key: "mapbox-images-" + source.id,
      on: {
        "add": function add($event) {
          return _vm.addHandler($event, index + 1, _vm.sources.length);
        }
      }
    }, 'mapbox-image', source, false));
  }), _vm._v(" "), _vm.isReady ? _vm._t("default") : _vm._e()], 2);
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
//# sourceMappingURL=MapboxImages.js.map
