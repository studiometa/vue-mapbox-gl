import { c as _asyncToGenerator, a as _objectWithoutProperties } from '../../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import '../../utils/uniq-id.js';
import '../../mixins/provide-inject-map.js';
import '../../utils/bind-events.js';
import '../MapboxLayer.js';
import { n as normalizeComponent } from '../../_chunks/normalize-component.d57baabe.js';
import '../MapboxSource.js';
import __vue_component__$2 from '../MapboxCluster.js';
import 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder';
import __vue_component__$3 from '../MapboxGeocoder.js';
import { r as regenerator } from '../../_chunks/index.20ce9193.js';
import '../../utils/bind-props.js';
import __vue_component__$4 from '../MapboxMap.js';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  data: function data() {
    return {
      scrollTop: 0,
      scrollMax: Infinity
    };
  },
  updated: function updated() {
    this.setVars();
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      var timer;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.$refs.scroller.addEventListener('scroll', _this.setVars, {
                passive: true
              });

              _this.debouncedSetVars = function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                  return _this.setVars();
                }, 300);
                return timer;
              };

              window.addEventListener('resize', _this.debouncedSetVars);
              _context.next = 5;
              return _this.$nextTick();

            case 5:
              _this.setVars();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    this.$refs.scroller.removeEventListener('scroll', this.setVars);
    window.removeEventListener('resize', this.debouncedSetVars);
  },
  methods: {
    setVars: function setVars() {
      var scroller = this.$refs.scroller;
      this.scrollTop = scroller.scrollTop;
      this.scrollMax = scroller.scrollHeight - scroller.clientHeight;

      if (this.scrollTop === 0) {
        this.$emit('scroll-top');
      }

      if (this.scrollTop === this.scrollMax) {
        this.$emit('scoll-bottom');
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

  return _c('div', {
    staticClass: "scroller",
    class: {
      'scroller--is-top': _vm.scrollTop === 0,
      'scroller--is-bottom': _vm.scrollTop === _vm.scrollMax,
      'scroller--has-no-scroll': _vm.scrollTop === 0 && _vm.scrollMax === 0
    }
  }, [_c('div', {
    ref: "scroller",
    staticClass: "scroller__inner"
  }, [_c('div', {
    staticClass: "scroller__content"
  }, [_vm._t("default")], 2)])]);
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

var script$1 = {
  components: {
    MapboxCluster: __vue_component__$2,
    MapboxGeocoder: __vue_component__$3,
    MapboxMap: __vue_component__$4,
    VueScroller: __vue_component__
  },
  props: {
    /**
     * A list of items to display.
     * The only required properties are `lat` and `lng` and `id`.
     *
     * @type {Array<{ lat: Number, lng: number, id: string, [prop: string]: unknown }>}
     */
    items: {
      type: Array,
      required: true
    },

    /**
     * The zoom level to use when zooming in on an item.
     *
     * @type {Number}
     */
    itemZoomLevel: {
      type: Number,
      default: 14
    },

    /**
     * A Mapbox access token.
     * @type {Object}
     */
    accessToken: {
      type: String,
      default: 'no-token'
    },

    /**
     * Props for the MapboxMap component.
     *
     * @see  https://vue-mapbox-gl.meta.fr/components/MapboxMap.html#props
     * @type {Object}
     */
    mapboxMap: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * Props fof the MapboxCluster component.
     *
     * @see  https://vue-mapbox-gl.meta.fr/components/MapboxCluster.html#props
     * @type {Object}
     */
    mapboxCluster: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * Props for the MapboxGeocoder component.
     *
     * @see  https://vue-mapbox-gl.meta.fr/components/MapboxGeocoder.html#props
     * @type {Object}
     */
    mapboxGeocoder: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * Configuration for each transition component.
     * @type {Object}
     */
    transitions: {
      type: Object,
      default: function _default() {
        return {
          loader: {
            map: {},
            search: {},
            list: {},
            default: {}
          },
          panel: {}
        };
      }
    },

    /**
     * Define custom classes for each element of the component.
     * @type {Object}
     */
    classes: {
      type: Object,
      default: function _default() {
        var root = 'store-locator';

        var bem = function bem(name) {
          var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          return "".concat(root, "__").concat(name).concat(modifier ? "--".concat(modifier) : '');
        };

        return {
          root: root,
          region: {
            map: [bem('region'), bem('region', 'map')],
            search: [bem('region'), bem('region', 'search')],
            list: [bem('region'), bem('region', 'list')],
            panel: [bem('region'), bem('region', 'panel')]
          },
          map: bem('map'),
          search: bem('search'),
          list: bem('list'),
          listItem: bem('list-item'),
          panel: bem('panel')
        };
      }
    }
  },
  data: function data() {
    return {
      isLoading: true,
      map: null,
      mapIsMoving: false,
      selectedItem: null,
      filteredItems: this.items.map(function (item) {
        return item;
      }),
      listIsLoading: false
    };
  },
  computed: {
    geoJson: function geoJson() {
      return {
        type: 'FeatureCollection',
        features: this.items.map(function (_ref) {
          var lat = _ref.lat,
              lng = _ref.lng,
              properties = _objectWithoutProperties(_ref, ["lat", "lng"]);

          return {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [lng, lat]
            },
            properties: properties
          };
        })
      };
    }
  },
  methods: {
    /**
     * Handler for the geocoder result event.
     *
     * @param {Object} result The place selected in the geocoder component.
     */
    onGeocoderResult: function onGeocoderResult(_ref2) {
      var result = _ref2.result;

      if (result.bbox) {
        this.map.fitBounds(result.bbox);
      } else if (result.center) {
        this.map.flyTo({
          center: result.center
        });
      }
    },

    /**
     * Handler for the map created event.
     *
     * @param  {MapboxMap} instance The Mapbox instance.
     */
    onMapCreated: function onMapCreated(instance) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.map = instance;

                _this.filterFeaturesInView();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * Handler for the map load event.
     */
    onMapLoad: function onMapLoad() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$nextTick();

              case 2:
                _this2.isLoading = false;

                _this2.$emit('load', _this2.map);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * Handler for the map's movestart event.
     */
    onMapMovestart: function onMapMovestart() {
      var _this3 = this;

      this.mapIsMoving = true;
      this.$nextTick(function () {
        _this3.listIsLoading = true;
      });
    },

    /**
     * Handler for the map's moveend event.
     */
    onMapMoveend: function onMapMoveend() {
      this.mapIsMoving = false;
      this.filterFeaturesInView();
    },

    /**
     * Filter the features in view.
     */
    filterFeaturesInView: function filterFeaturesInView() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
        var mapBounds;
        return regenerator.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                mapBounds = _this4.map.getBounds();
                _this4.filteredItems = _this4.items.filter(function (_ref3) {
                  var lng = _ref3.lng,
                      lat = _ref3.lat;
                  return mapBounds.contains([lng, lat]);
                });
                _context3.next = 4;
                return _this4.$nextTick();

              case 4:
                _this4.listIsLoading = false;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },

    /**
     * Handler for the click event on a list item.
     * @param {Feature} store A GeoJSON feature.;
     */
    onListItemClick: function onListItemClick(item) {
      this.selectedItem = item;
      this.$emit('select-item', item);

      var _this$map$getCenter = this.map.getCenter(),
          lat = _this$map$getCenter.lat,
          lng = _this$map$getCenter.lng; // Do not trigger flyTo if the map is almost already centered


      if (Math.abs(lng - item.lng) > 0.0001 && Math.abs(lat - item.lat) > 0.0001) {
        this.map.flyTo({
          center: [item.lng, item.lat],
          zoom: this.itemZoomLevel
        });
      }
    },

    /**
     * Handler for the click event on a GeoJSON feature.
     *
     * @param  {Feature} feature The GeoJSON feature being clicked.
     */
    onClusterFeatureClick: function onClusterFeatureClick(feature) {
      var item = this.items.find(function (_ref4) {
        var id = _ref4.id;
        return id === feature.properties.id;
      });

      if (item) {
        this.$emit('select-item', item);
        this.selectedItem = item;
        this.map.flyTo({
          center: feature.geometry.coordinates,
          zoom: this.itemZoomLevel
        });
      }
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.classes.root || {}
  }, [_c('div', {
    class: (_vm.classes.region || {}).map || {}
  }, [_vm.isLoading ? [_c('transition', _vm._b({}, 'transition', (_vm.transitions.loader || {}).map || {}, false), [_vm._t("map-loader", [_c('transition', _vm._b({}, 'transition', (_vm.transitions.loader || {}).default || {}, false), [_vm._t("loader", [_vm._v("\n              Loading...\n            ")])], 2)])], 2)] : _vm._e(), _vm._v(" "), _vm._t("before-map"), _vm._v(" "), _c('mapbox-map', _vm._b({
    class: _vm.classes.map || {},
    on: {
      "mb-created": _vm.onMapCreated,
      "mb-movestart": _vm.onMapMovestart,
      "mb-moveend": _vm.onMapMoveend,
      "mb-load": _vm.onMapLoad
    }
  }, 'mapbox-map', Object.assign({}, _vm.mapboxMap, {
    accessToken: _vm.accessToken
  }), false), [_c('mapbox-cluster', _vm._b({
    on: {
      "mb-feature-click": _vm.onClusterFeatureClick
    }
  }, 'mapbox-cluster', Object.assign({}, _vm.mapboxCluster, {
    data: _vm.geoJson
  }), false)), _vm._v(" "), _vm._t("map", null, {
    "map": _vm.map
  })], 2), _vm._v(" "), _vm._t("after-map")], 2), _vm._v(" "), _c('div', {
    class: (_vm.classes.region || {}).search || {}
  }, [_vm.isLoading ? [_c('transition', _vm._b({}, 'transition', (_vm.transitions.loader || {}).search || {}, false), [_vm._t("search-loader", [_c('transition', _vm._b({}, 'transition', (_vm.transitions.loader || {}).default || {}, false), [_vm._t("loader", [_vm._v("\n              Loading...\n            ")])], 2)])], 2)] : _vm._e(), _vm._v(" "), _vm._t("before-search"), _vm._v(" "), _c('mapbox-geocoder', _vm._b({
    class: _vm.classes.search || {},
    on: {
      "mb-result": _vm.onGeocoderResult
    }
  }, 'mapbox-geocoder', Object.assign({}, _vm.mapboxGeocoder, {
    accessToken: _vm.accessToken
  }), false)), _vm._v(" "), _vm._t("after-search")], 2), _vm._v(" "), _c('div', {
    class: (_vm.classes.region || {}).list || {}
  }, [_vm.isLoading || _vm.listIsLoading ? [_c('transition', _vm._b({}, 'transition', (_vm.transitions.loader || {}).list || {}, false), [_vm._t("list-loader", [_c('transition', _vm._b({}, 'transition', (_vm.transitions.loader || {}).default || {}, false), [_vm._t("loader", [_vm._v("\n              Loading...\n            ")])], 2)])], 2)] : [_vm._t("before-list", [_c('p', [_vm._v("Result(s): " + _vm._s(_vm.filteredItems.length.toFixed(0)))])], {
    "items": _vm.items,
    "filteredItems": _vm.filteredItems
  }), _vm._v(" "), _vm.filteredItems.length > 0 ? _c('vue-scroller', [_c('ul', {
    class: _vm.classes.list || {}
  }, _vm._l(_vm.filteredItems, function (item, index) {
    return _c('li', {
      key: item.id,
      class: _vm.classes.listItem || {},
      on: {
        "click": function click($event) {
          return _vm.onListItemClick(item);
        }
      }
    }, [_vm._t("list-item", [_vm._v("\n              Lat: " + _vm._s(item.lat) + " "), _c('br'), _vm._v("\n              Lng: " + _vm._s(item.lng) + "\n            ")], {
      "item": item,
      "index": index,
      "selectedItem": _vm.selectedItem
    })], 2);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm._t("after-list", null, {
    "items": _vm.items,
    "filteredItems": _vm.filteredItems
  })]], 2), _vm._v(" "), _c('div', {
    class: (_vm.classes.region || {}).panel || {}
  }, [_c('transition', _vm._b({}, 'transition', _vm.transitions.panel || {}, false), [_vm.selectedItem ? _c('div', {
    key: _vm.selectedItem.id,
    class: _vm.classes.panel || {}
  }, [_vm._t("panel", [_c('div', [_vm._v(_vm._s(_vm.selectedItem))])], {
    "item": _vm.selectedItem,
    "close": function close() {
      return _vm.selectedItem = null;
    }
  })], 2) : _vm._e()])], 1)]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

export default __vue_component__$1;
//# sourceMappingURL=index.js.map
