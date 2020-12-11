import { c as _asyncToGenerator } from '../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import { injectMap } from '../mixins/provide-inject-map.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';
import { r as regenerator } from '../_chunks/index.20ce9193.js';

var script = {
  name: 'MapboxImage',
  mixins: [injectMap()],
  props: {
    /**
     * The ID of the image
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @type {String}
     */
    id: {
      type: String,
      required: true
    },

    /**
     * The image as String, an HTMLImageElement, ImageData, or object with
     * width, height, and data properties with the same format as ImageData.
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @type {String|HTMLImageElement|ImageData|Object}
     */
    src: {
      type: [String, HTMLImageElement, ImageData, Object],
      required: true
    },

    /**
     * The options object for the image to add
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @type {Object}
     */
    options: {
      type: Object,
      default: function _default() {
        return {
          pixelRatio: 1,
          sdf: false
        };
      }
    }
  },
  data: function data() {
    return {
      isReady: false
    };
  },
  watch: {
    src: {
      handler: function handler(newValue) {
        this.map.updateImage(this.id, newValue);
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      var id, src, options, image;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _this.id, src = _this.src, options = _this.options; // If source is not a string, we don't need to load the image and we can
              // add it to the map directly.

              if (!(typeof src !== 'string')) {
                _context.next = 6;
                break;
              }

              _this.map.addImage(id, src, options);

              _this.$emit('add', {
                id: id,
                src: src,
                options: options
              });

              _this.isReady = true;
              return _context.abrupt("return");

            case 6:
              _context.next = 8;
              return _this.loadImage(src);

            case 8:
              image = _context.sent;

              _this.map.addImage(id, image, options);

              _this.$emit('add', {
                id: id,
                src: image,
                options: options
              });

              _this.isReady = true;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  destroyed: function destroyed() {
    if (this.map.hasImage(this.id)) {
      this.map.removeImage(this.id);
    }
  },
  methods: {
    /**
     * Load the given image with the Mapbox `loadImage` method
     *
     * @param  {String}  src The source URL for the image
     * @return {Promise}     A promise which will resolve on load
     */
    loadImage: function loadImage(src) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  _this2.map.loadImage(src, function (err, data) {
                    if (err) {
                      return reject(err);
                    }

                    return resolve(data);
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
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
  }, [_vm.isReady ? _vm._t("default") : _vm._e()], 2);
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
//# sourceMappingURL=MapboxImage.js.map
