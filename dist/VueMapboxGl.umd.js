(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('mapbox-gl'), require('@mapbox/mapbox-gl-geocoder')) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapbox-gl', '@mapbox/mapbox-gl-geocoder'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueMapboxGl = {}, global.mapboxgl, global.MapboxGeocoder));
}(this, (function (exports, mapboxgl, MapboxGeocoder) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var mapboxgl__default = /*#__PURE__*/_interopDefaultLegacy(mapboxgl);
  var MapboxGeocoder__default = /*#__PURE__*/_interopDefaultLegacy(MapboxGeocoder);

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * Get a prefixed or not uniq id
   * @param  {String} prefix The prefix to add to the generated id
   * @return {String}        A (prefixed) uniq id
   */
  function uniqId() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var uniq = new Date().getTime() + Math.floor(Math.random() * 10000 + 1);
    return prefix ? prefix + uniq.toString(16) : uniq.toString(16);
  }

  /**
   * Provide to children components a $map function to retrieve a map object
   *
   * @return {Object}
   */
  var provideMap = function provideMap() {
    return {
      data: function data() {
        return {
          map: null
        };
      },
      provide: function provide() {
        var _this = this;

        return {
          $map: function $map() {
            return _this.map;
          }
        };
      }
    };
  };
  /**
   * Inject from parent component a $map function to retrieve a map object
   *
   * @return {Object}
   */

  var injectMap = function injectMap() {
    return {
      inject: {
        $map: {
          default: null
        }
      },
      computed: {
        map: function map() {
          return typeof this.$map === 'function' ? this.$map() : null;
        }
      }
    };
  };

  /**
   * Map a mapbox element's events to the given vue element
   *
   * @param  {Vue}    vueElement    The Vue component in question
   * @param  {Mixed}  mapboxElement The Mapbox element bound to the component
   * @param  {Array}  events        The events to map
   * @param  {String} layerId       The layer on which the events are delegated
   * @return {Array}                The list of event/handler pair bounded
   */
  function bindEvents(vueElement, mapboxElement) {
    var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var layerId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var vueEvents = vueElement.$listeners; // eslint-disable-next-line no-param-reassign

    vueElement.$$events = Object.keys(vueEvents).reduce(function ($$events, vueEvent) {
      var originalEvent = vueEvent.replace(/^mb-/, '');

      if (!events.includes(originalEvent)) {
        return $$events;
      }

      var handler = function handler() {
        for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
          payload[_key] = arguments[_key];
        }

        vueElement.$emit.apply(vueElement, [vueEvent].concat(payload));
      }; // If layerId is not null, all events must be
      // delegated from the map to the given layerId


      if (layerId) {
        mapboxElement.on(originalEvent, layerId, handler);
      } else {
        mapboxElement.on(originalEvent, handler);
      }

      $$events.push([originalEvent, handler]);
      return $$events;
    }, []);
  }
  /**
   * Unbind events from the map element
   *
   * @param  {Mixed} mapboxElement The Mapbox element which needs unbinding
   * @param  {Array}  handlers     The list of event/handler pair to unbind
   * @param  {String} layerId      The layer on which the events where delegated
   * @return {void}
   */

  function unbindEvents(vueElement, mapboxElement) {
    var layerId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    vueElement.$$events.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          event = _ref2[0],
          handler = _ref2[1];

      // If layerId is not null, all events must be
      // delegated from the map to the given layerId
      if (layerId) {
        mapboxElement.off(event, layerId, handler);
      } else {
        mapboxElement.off(event, handler);
      }
    });
  }

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

      if (this.options.paint === null || this.options.paint === undefined) {
        delete this.options.paint;
      }

      if (this.options.layout === null || this.options.layout === undefined) {
        delete this.options.layout;
      }

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

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

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

  //
  var script$1 = {
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
  var __vue_script__$1 = script$1;
  /* template */

  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      attrs: {
        "id": _vm.id
      }
    });
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

  var script$2 = {
    name: 'MapboxCluster',
    components: {
      MapboxLayer: __vue_component__,
      MapboxSource: __vue_component__$1
    },
    mixins: [injectMap()],
    props: {
      /**
       * The source of the data for the clustered points,
       * must be a String or an Object of GeoJSON format.
       * @type {String|GeoJSON}
       */
      data: {
        type: [String, Object],
        required: true
      },

      /**
       * The max zoom to cluster points on
       * @type {Number}
       */
      clusterMaxZoom: {
        type: Number,
        default: 14
      },

      /**
       * Radius of each cluster when clustering point
       * @type {Number}
       */
      clusterRadius: {
        type: Number,
        default: 50
      },

      /**
       * The layout configuration for the clusters circles
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      clustersLayout: {
        type: Object,
        default: function _default() {
          return {};
        }
      },

      /**
       * The paint configuration for the clusters circles
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      clustersPaint: {
        type: Object,
        default: function _default() {
          return {
            'circle-color': '#000',
            'circle-radius': 40
          };
        }
      },

      /**
       * The layout configuration for the clusters count
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      clusterCountLayout: {
        type: Object,
        default: function _default() {
          return {
            'text-field': ['get', 'point_count_abbreviated']
          };
        }
      },

      /**
       * The paint configuration for the clusters count
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      clusterCountPaint: {
        type: Object,
        default: function _default() {
          return {
            'text-color': 'white'
          };
        }
      },

      /**
       * The type of the unclustered points layer
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {String}
       */
      unclusteredPointLayerType: {
        type: String,
        default: 'circle'
      },

      /**
       * The layout configuration for the unclustered points
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      unclusteredPointLayout: {
        type: Object,
        default: function _default() {
          return {};
        }
      },

      /**
       * The paint configuration for the unclustered points
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      unclusteredPointPaint: {
        type: Object,
        default: function _default() {
          return {
            'circle-color': '#000',
            'circle-radius': 4
          };
        }
      }
    },
    data: function data() {
      return {
        id: uniqId('mb-cluster-')
      };
    },
    computed: {
      /**
       * The source ID
       * @type {String}
       */
      sourceId: function sourceId() {
        return this.getId('source');
      },

      /**
       * The source configuration
       * @type {Object}
       */
      source: function source() {
        var _this$$props = this.$props,
            data = _this$$props.data,
            clusterMaxZoom = _this$$props.clusterMaxZoom,
            clusterRadius = _this$$props.clusterRadius;
        return {
          type: 'geojson',
          cluster: true,
          data: data,
          clusterMaxZoom: clusterMaxZoom,
          clusterRadius: clusterRadius
        };
      },

      /**
       * The clusters layer configuration
       * @type {Object}
       */
      clustersLayer: function clustersLayer() {
        return {
          id: this.getId('clusters'),
          type: 'circle',
          source: this.sourceId,
          filter: ['has', 'point_count'],
          layout: this.clustersLayout,
          paint: this.clustersPaint
        };
      },

      /**
       * The cluster count layer configuration
       * @type {Object}
       */
      clusterCountLayer: function clusterCountLayer() {
        return {
          id: this.getId('cluster-count'),
          type: 'symbol',
          source: this.sourceId,
          filter: ['has', 'point_count'],
          layout: this.clusterCountLayout,
          paint: this.clusterCountPaint
        };
      },

      /**
       * The unclustered points layer
       * @type {Object}
       */
      unclusteredPointLayer: function unclusteredPointLayer() {
        return {
          id: this.getId('unclustered-point'),
          type: this.unclusteredPointLayerType,
          source: this.sourceId,
          filter: ['!', ['has', 'point_count']],
          layout: this.unclusteredPointLayout,
          paint: this.unclusteredPointPaint
        };
      }
    },
    methods: {
      /**
       * Get a suffixed ID based on the instance ID
       *
       * @param  {String} suffix The suffix of the ID
       * @return {String}        The formatted ID
       */
      getId: function getId(suffix) {
        return "".concat(this.id, "-").concat(suffix);
      },

      /**
       * Click handler for the clusters layer to zoom on the clicked cluster
       *
       * @param  {Object} event The Mapbox click event's object
       * @return {void}
       */
      clustersClickHandler: function clustersClickHandler(event) {
        var _this = this;

        var feature = this.map.queryRenderedFeatures(event.point, {
          layers: [this.clustersLayer.id]
        })[0];
        var clusterId = feature.properties.cluster_id; // Emit a cluster click event

        this.$emit('mb-cluster-click', clusterId, event);
        this.map.getSource(this.sourceId).getClusterExpansionZoom(clusterId, function (err, zoom) {
          if (err) {
            return;
          }

          _this.map.easeTo({
            center: feature.geometry.coordinates,
            zoom: zoom
          });
        });
      },

      /**
       * Mouseenter handler for the clusters layer to set a pointer cursor
       *
       * @return {void}
       */
      clustersMouseenterHandler: function clustersMouseenterHandler() {
        this.map.getCanvas().style.cursor = 'pointer';
      },

      /**
       * Mouseleave handler for the clusters layer to unset the pointer cursor
       *
       * @return {void}
       */
      clustersMouseleaveHandler: function clustersMouseleaveHandler() {
        this.map.getCanvas().style.cursor = '';
      },

      /**
       * Handler for the click event on a single feature, emits an event with
       * the feature object and the original event object
       *
       * @param  {Object} event The Mapbox click event's object
       * @return {void}
       */
      unclusteredPointClickHandler: function unclusteredPointClickHandler(event) {
        var _event$features = _slicedToArray(event.features, 1),
            feature = _event$features[0];

        this.$emit('mb-feature-click', feature, event);
      },

      /**
       * Handler for the mouseenter event on a single feature.
       * Emits an event with the feature object and the original event as
       * parameters, and sets the cursor style to pointer.
       *
       * @param  {Object} event The Mapbox mouseenter event's object
       * @return {void}
       */
      unclusteredPointMouseenterHandler: function unclusteredPointMouseenterHandler(event) {
        var _event$features2 = _slicedToArray(event.features, 1),
            feature = _event$features2[0];

        this.$emit('mb-feature-mouseenter', feature, event);
        this.map.getCanvas().style.cursor = 'pointer';
      },

      /**
       * Handler for the mouseleave event on a single feature.
       * Emits an event with the original event object as parameter, and resets
       * the cursor style to its default value.
       *
       * @param  {Object} event The Mapbox mouselvea event‘s object
       * @return {void}
       */
      unclusteredPointMouseleaveHandler: function unclusteredPointMouseleaveHandler(event) {
        this.$emit('mb-feature-mouseleave', event);
        this.map.getCanvas().style.cursor = '';
      }
    }
  };

  /* script */
  var __vue_script__$2 = script$2;
  /* template */

  var __vue_render__$2 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      attrs: {
        "id": _vm.id
      }
    }, [_c('mapbox-source', {
      attrs: {
        "id": _vm.sourceId,
        "options": _vm.source
      }
    }), _vm._v(" "), _c('mapbox-layer', {
      attrs: {
        "id": _vm.clustersLayer.id,
        "options": _vm.clustersLayer
      },
      on: {
        "click": _vm.clustersClickHandler,
        "mouseenter": _vm.clustersMouseenterHandler,
        "mouseleave": _vm.clustersMouseleaveHandler
      }
    }), _vm._v(" "), _c('mapbox-layer', {
      attrs: {
        "id": _vm.clusterCountLayer.id,
        "options": _vm.clusterCountLayer
      }
    }), _vm._v(" "), _c('mapbox-layer', {
      attrs: {
        "id": _vm.unclusteredPointLayer.id,
        "options": _vm.unclusteredPointLayer
      },
      on: {
        "click": _vm.unclusteredPointClickHandler,
        "mouseenter": _vm.unclusteredPointMouseenterHandler,
        "mouseleave": _vm.unclusteredPointMouseleaveHandler
      }
    })], 1);
  };

  var __vue_staticRenderFns__$2 = [];
  /* style */

  var __vue_inject_styles__$2 = undefined;
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
  }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

  if (!mapboxgl__default['default']) {
    throw new Error('mapboxgl is not installed.');
  }

  if (!MapboxGeocoder__default['default']) {
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

  var events$1 = ['loading', 'results', 'result', 'error'];
  var script$3 = {
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

      this.control = new MapboxGeocoder__default['default'](_objectSpread2({
        accessToken: mapboxgl__default['default'].accessToken || accessToken,
        mapboxgl: mapboxgl__default['default']
      }, $props)); // Bind events

      bindEvents(this, this.control, events$1);
      this.$emit('mb-created', this.control);
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
  var __vue_script__$3 = script$3;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div');
  };

  var __vue_staticRenderFns__$3 = [];
  /* style */

  var __vue_inject_styles__$3 = undefined;
  /* scoped */

  var __vue_scope_id__$3 = undefined;
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var regenerator = runtime_1;

  var script$4 = {
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
  var __vue_script__$4 = script$4;
  /* template */

  var __vue_render__$4 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      attrs: {
        "id": _vm.id
      }
    }, [_vm.isReady ? _vm._t("default") : _vm._e()], 2);
  };

  var __vue_staticRenderFns__$4 = [];
  /* style */

  var __vue_inject_styles__$4 = undefined;
  /* scoped */

  var __vue_scope_id__$4 = undefined;
  /* module identifier */

  var __vue_module_identifier__$4 = undefined;
  /* functional template */

  var __vue_is_functional_template__$4 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$4,
    staticRenderFns: __vue_staticRenderFns__$4
  }, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

  //
  var script$5 = {
    name: 'MapboxImages',
    components: {
      MapboxImage: __vue_component__$4
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
  var __vue_script__$5 = script$5;
  /* template */

  var __vue_render__$5 = function __vue_render__() {
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

  var __vue_staticRenderFns__$5 = [];
  /* style */

  var __vue_inject_styles__$5 = undefined;
  /* scoped */

  var __vue_scope_id__$5 = undefined;
  /* module identifier */

  var __vue_module_identifier__$5 = undefined;
  /* functional template */

  var __vue_is_functional_template__$5 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$5,
    staticRenderFns: __vue_staticRenderFns__$5
  }, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

  /**
   * Capitalize the first letter of a string
   *
   * @param  {String} string The string to capitalize
   * @return {String}        The capitalized string
   */
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  /**
   * Automatically set a mapbox element's props when the vue element props changes
   *
   * @param  {Vue}    vueElement    The Vue component in question
   * @param  {Mixed}  mapboxElement The Mapbox element bound to the component
   * @param  {Object} props         The component's props definition object
   * @return {void}
   */


  function bindProps(vueElement, mapboxElement, props) {
    Object.keys(vueElement.$props).filter(function (prop) {
      return prop !== undefined;
    }).forEach(function (prop) {
      var setMethodName = prop === 'mapStyle' ? 'setStyle' : "set".concat(capitalizeFirstLetter(prop));
      var methodExists = typeof mapboxElement[setMethodName] === 'function';
      var propNeedsBinding = 'bind' in props[prop] ? props[prop].bind : true; // Do nothin if `setMethodName` is not a function of `mapBoxElement`
      // or if the props is not to be bounded

      if (!methodExists || !propNeedsBinding) {
        return;
      } // Set deep option to true if prop type is or can be Object


      var type = props[prop].type;
      var options = {
        deep: type === Object || Array.isArray(type) && type.includes(Object)
      };
      vueElement.$watch(prop, function (newValue) {
        mapboxElement[setMethodName](newValue);
      }, options);
    });
  }

  if (!mapboxgl__default['default']) {
    throw new Error('mapboxgl is not installed.');
  }
  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map
   * @type {Object}
   */


  var props$1 = {
    accessToken: {
      type: String,
      default: 'no-token'
    },
    container: {
      type: [Object, String],
      default: undefined
    },
    minZoom: {
      type: Number,
      default: 0
    },
    maxZoom: {
      type: Number,
      default: 22
    },
    minPitch: {
      type: Number,
      default: 0
    },
    maxPitch: {
      type: Number,
      default: 60
    },
    mapStyle: {
      type: [Object, String],
      required: true
    },
    hash: {
      type: Boolean,
      default: false
    },
    interactive: {
      type: Boolean,
      default: true
    },
    bearingSnap: {
      type: Number,
      default: 7
    },
    pitchWithRotate: {
      type: Boolean,
      default: true
    },
    clickTolerance: {
      type: Number,
      default: 3
    },
    attributionControl: {
      type: Boolean,
      default: true
    },
    customAttribution: {
      type: [String, Array],
      default: null
    },
    logoPosition: {
      type: String,
      default: 'bottom-left'
    },
    failIfMajorPerformanceCaveat: {
      type: Boolean,
      default: false
    },
    preserveDrawingBuffer: {
      type: Boolean,
      default: false
    },
    antialias: {
      type: Boolean,
      default: false
    },
    refreshExpiredTiles: {
      type: Boolean,
      default: true
    },
    maxBounds: {
      type: [mapboxgl.LngLatBounds, Array],
      default: undefined
    },
    scrollZoom: {
      type: [Boolean, Object],
      default: true
    },
    boxZoom: {
      type: Boolean,
      default: true
    },
    dragRotate: {
      type: Boolean,
      default: true
    },
    dragPan: {
      type: [Boolean, Object],
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    doubleClickZoom: {
      type: Boolean,
      default: true
    },
    touchZoomRotate: {
      type: [Boolean, Object],
      default: true
    },
    trackResize: {
      type: Boolean,
      default: true
    },
    center: {
      type: [mapboxgl.LngLat, Array, Object],
      default: function _default() {
        return [0, 0];
      }
    },
    zoom: {
      type: Number,
      default: 0
    },
    bearing: {
      type: Number,
      default: 0
    },
    pitch: {
      type: Number,
      default: 0
    },
    bounds: {
      type: [mapboxgl.LngLatBounds, Array],
      default: undefined
    },
    fitBoundsOptions: {
      type: Object,
      default: null
    },
    renderWorldCopies: {
      type: Boolean,
      default: true
    },
    maxTileCacheSize: {
      type: Number,
      default: null
    },
    localIdeographFontFamily: {
      type: String,
      default: 'sans-serif'
    },
    transformRequest: {
      type: Function,
      default: null
    },
    collectResourceTiming: {
      type: Boolean,
      default: false
    },
    fadeDuration: {
      type: Number,
      default: 300
    },
    crossSourceCollisions: {
      type: Boolean,
      default: true
    }
  };
  /**
   * All Map events which will be mapped/bounded to the component
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map.event:resize
   * @type {Array}
   */

  var events$2 = ['resize', 'remove', 'mousedown', 'mouseup', 'mouseover', 'mousemove', 'click', 'dblclick', 'mouseenter', 'mouseleave', 'mouseout', 'contextmenu', 'wheel', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'movestart', 'move', 'moveend', 'dragstart', 'drag', 'dragend', 'zoomstart', 'zoom', 'zoomend', 'rotatestart', 'rotate', 'rotateend', 'pitchstart', 'pitch', 'pitchend', 'boxzoomstart', 'boxzoomend', 'boxzoomcancel', 'webglcontextlost', 'webglcontextrestored', 'load', 'render', 'idle', 'error', 'data', 'styledata', 'sourcedata', 'dataloading', 'styledataloading', 'sourcedataloading', 'styleimagemissing'];
  var script$6 = {
    name: 'MapboxMap',
    mixins: [provideMap()],
    props: props$1,
    data: function data() {
      return {
        isLoaded: false
      };
    },
    computed: {
      options: function options() {
        var _this$$props = this.$props,
            accessToken = _this$$props.accessToken,
            style = _this$$props.mapStyle,
            options = _objectWithoutProperties(_this$$props, ["accessToken", "mapStyle"]); // Use current component's element if container is not set


        if (!options.container && this.$el) {
          options.container = this.$el;
        }

        return _objectSpread2({
          style: style
        }, options);
      }
    },
    mounted: function mounted() {
      var _this = this;

      mapboxgl__default['default'].accessToken = this.accessToken;
      this.map = new mapboxgl__default['default'].Map(this.options);
      this.map.on('load', function () {
        _this.isLoaded = true;
      }); // Bind props and events

      bindProps(this, this.map, props$1);
      bindEvents(this, this.map, events$2);
      this.$emit('mb-created', this.map); // Mapbox has some resize issues
      // Create an observer on this object
      // Call resize on the map when we change szie

      var observer = new ResizeObserver(this.resizeHandler);
      observer.observe(this.options.container);
      this.resizeObserver = observer;
    },
    destroyed: function destroyed() {
      unbindEvents(this, this.map);
      this.resizeObserver.disconnect();
      this.map.remove();
    },
    methods: {
      /**
       * Handler for any change of the map's size
       *
       * @return {void}
       */
      resizeHandler: function resizeHandler() {
        if (this.map) {
          this.map.resize();
        }
      }
    }
  };

  /* script */
  var __vue_script__$6 = script$6;
  /* template */

  var __vue_render__$6 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_vm.isLoaded ? _c('div', [_vm._t("default")], 2) : _c('div', [_vm._t("loader")], 2)]);
  };

  var __vue_staticRenderFns__$6 = [];
  /* style */

  var __vue_inject_styles__$6 = undefined;
  /* scoped */

  var __vue_scope_id__$6 = undefined;
  /* module identifier */

  var __vue_module_identifier__$6 = undefined;
  /* functional template */

  var __vue_is_functional_template__$6 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$6,
    staticRenderFns: __vue_staticRenderFns__$6
  }, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#popup
   * @type {Object}
   */

  var props$2 = {
    lngLat: {
      type: [mapboxgl.LngLat, Array, Object],
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
      type: [Number, mapboxgl.Point, Array, Object],
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

  var events$3 = ['open', 'close'];
  var script$7 = {
    name: 'MapboxPopup',
    mixins: [injectMap()],
    props: props$2,
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
      this.popup = new mapboxgl.Popup(this.options).setLngLat(this.lngLat).setDOMContent(this.$el);

      if (!this.renderless) {
        this.popup.addTo(this.map);
      }

      bindProps(this, this.popup, props$2);
      bindEvents(this, this.popup, events$3);
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
  var __vue_script__$7 = script$7;
  /* template */

  var __vue_render__$7 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$7 = [];
  /* style */

  var __vue_inject_styles__$7 = undefined;
  /* scoped */

  var __vue_scope_id__$7 = undefined;
  /* module identifier */

  var __vue_module_identifier__$7 = undefined;
  /* functional template */

  var __vue_is_functional_template__$7 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$7,
    staticRenderFns: __vue_staticRenderFns__$7
  }, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker
   * @type {Object}
   */

  var props$3 = {
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
      type: Object,
      default: null
    },
    offset: {
      type: [mapboxgl.Point, Array],
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

  var events$4 = ['dragstart', 'drag', 'dragend'];
  var script$8 = {
    name: 'MapboxMarker',
    components: {
      MapboxPopup: __vue_component__$7
    },
    mixins: [injectMap()],
    props: props$3,
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
      this.marker = new mapboxgl.Marker(this.options).setLngLat(this.lngLat).addTo(this.map); // Bind props and events

      bindProps(this, this.marker, props$3);
      bindEvents(this, this.marker, events$4);

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
  var __vue_script__$8 = script$8;
  /* template */

  var __vue_render__$8 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_c('div', {
      ref: "content"
    }, [_vm._t("default")], 2), _vm._v(" "), _vm.popup ? _c('mapbox-popup', _vm._b({
      ref: "popup"
    }, 'mapbox-popup', _vm.popupOptions, false), [_vm._t("popup")], 2) : _vm._e()], 1);
  };

  var __vue_staticRenderFns__$8 = [];
  /* style */

  var __vue_inject_styles__$8 = undefined;
  /* scoped */

  var __vue_scope_id__$8 = undefined;
  /* module identifier */

  var __vue_module_identifier__$8 = undefined;
  /* functional template */

  var __vue_is_functional_template__$8 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$8,
    staticRenderFns: __vue_staticRenderFns__$8
  }, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

  //
  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @type {Object}
   */

  var props$4 = {
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
  var script$9 = {
    name: 'MapboxNavigationControl',
    mixins: [injectMap()],
    props: props$4,
    mounted: function mounted() {
      this.control = new mapboxgl.NavigationControl(this.$props);
      bindProps(this, this.control, props$4);
      this.map.addControl(this.control, this.position);
    },
    destroyed: function destroyed() {
      this.map.removeControl(this.control);
    }
  };

  /* script */
  var __vue_script__$9 = script$9;
  /* template */

  var __vue_render__$9 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div');
  };

  var __vue_staticRenderFns__$9 = [];
  /* style */

  var __vue_inject_styles__$9 = undefined;
  /* scoped */

  var __vue_scope_id__$9 = undefined;
  /* module identifier */

  var __vue_module_identifier__$9 = undefined;
  /* functional template */

  var __vue_is_functional_template__$9 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$9,
    staticRenderFns: __vue_staticRenderFns__$9
  }, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

  //

  if (!mapboxgl__default['default']) {
    throw new Error('mapboxgl is not installed.');
  }
  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol
   * @type {Object}
   */


  var props$5 = {
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

  var events$5 = ['trackuserlocationend', 'error', 'geolocate', 'outofmaxbounds', 'trackuserlocationstart'];
  var script$a = {
    name: 'MapboxGeolocateControl',
    mixins: [injectMap()],
    props: props$5,
    mounted: function mounted() {
      this.control = new mapboxgl__default['default'].GeolocateControl(this.$props); // Bind props and events

      bindProps(this, this.control, props$5);
      bindEvents(this, this.control, events$5); // Add GeolocationControl to the map

      this.map.addControl(this.control, this.position);
    },
    destroyed: function destroyed() {
      if (this.control) {
        unbindEvents(this, this.control, events$5);
        this.map.removeControl(this.control);
      }
    }
  };

  /* script */
  var __vue_script__$a = script$a;
  /* template */

  var __vue_render__$a = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div');
  };

  var __vue_staticRenderFns__$a = [];
  /* style */

  var __vue_inject_styles__$a = undefined;
  /* scoped */

  var __vue_scope_id__$a = undefined;
  /* module identifier */

  var __vue_module_identifier__$a = undefined;
  /* functional template */

  var __vue_is_functional_template__$a = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$a = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$a,
    staticRenderFns: __vue_staticRenderFns__$a
  }, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MapboxCluster: __vue_component__$2,
    MapboxGeocoder: __vue_component__$3,
    MapboxImage: __vue_component__$4,
    MapboxImages: __vue_component__$5,
    MapboxLayer: __vue_component__,
    MapboxMap: __vue_component__$6,
    MapboxMarker: __vue_component__$8,
    MapboxNavigationControl: __vue_component__$9,
    MapboxPopup: __vue_component__$7,
    MapboxSource: __vue_component__$1,
    MapboxGeolocateControl: __vue_component__$a
  });

  /**
   * Install all components
   *
   * @param  {Vue}  Vue The Vue object
   * @return {void}
   */

  function install(Vue) {
    Object.keys(components).forEach(function (name) {
      Vue.component(name, components[name]);
    });
  } // Export each components separately

  exports.MapboxCluster = __vue_component__$2;
  exports.MapboxGeocoder = __vue_component__$3;
  exports.MapboxGeolocateControl = __vue_component__$a;
  exports.MapboxImage = __vue_component__$4;
  exports.MapboxImages = __vue_component__$5;
  exports.MapboxLayer = __vue_component__;
  exports.MapboxMap = __vue_component__$6;
  exports.MapboxMarker = __vue_component__$8;
  exports.MapboxNavigationControl = __vue_component__$9;
  exports.MapboxPopup = __vue_component__$7;
  exports.MapboxSource = __vue_component__$1;
  exports.default = install;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=VueMapboxGl.umd.js.map
