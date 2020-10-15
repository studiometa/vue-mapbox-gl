import { _ as _slicedToArray } from '../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import uniqId from '../utils/uniq-id.js';
import { injectMap } from '../mixins/provide-inject-map.js';
import '../utils/bind-events.js';
import __vue_component__$1 from './MapboxLayer.js';
import { n as normalizeComponent } from '../_chunks/normalize-component.d57baabe.js';
import __vue_component__$2 from './MapboxSource.js';

var script = {
  name: 'MapboxCluster',
  components: {
    MapboxLayer: __vue_component__$1,
    MapboxSource: __vue_component__$2
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
//# sourceMappingURL=MapboxCluster.js.map
