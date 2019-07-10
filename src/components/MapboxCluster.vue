<template>
  <div :id="id">
    <mapbox-source
      :id="sourceId"
      :options="source" />
    <mapbox-layer
      :id="clustersLayer.id"
      :options="clustersLayer"
      @click="clustersClickHandler"
      @mouseenter="clustersMouseenterHandler"
      @mouseleave="clustersMouseleaveHandler" />
    <mapbox-layer
      :id="clusterCountLayer.id"
      :options="clusterCountLayer" />
    <mapbox-layer
      :id="unclusteredPointLayer.id"
      :options="unclusteredPointLayer"
      @click="unclusteredPointClickHandler"
      @mouseenter="unclusteredPointMouseenterHandler"
      @mouseleave="unclusteredPointMouseleaveHandler" />
  </div>
</template>

<script>
  import uniqId from '../utils/uniq-id';
  import { injectMap } from '../mixins/provide-inject-map';
  import MapboxLayer from './MapboxLayer';
  import MapboxSource from './MapboxSource';

  export default {
    name: 'MapboxCluster',
    components: {
      MapboxLayer,
      MapboxSource,
    },
    mixins: [ injectMap() ],
    props: {
      /**
       * The source of the data for the clustered points,
       * must be a String or an Object of GeoJSON format.
       * @type {String|GeoJSON}
       */
      data: {
        type: [ String, Object ],
        required: true,
      },
      /**
       * The max zoom to cluster points on
       * @type {Number}
       */
      clusterMaxZoom: {
        type: Number,
        default: 14,
      },
      /**
       * Radius of each cluster when clustering point
       * @type {Number}
       */
      clusterRadius: {
        type: Number,
        default: 50,
      },
      /**
       * The layout configuration for the clusters circles
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      clustersLayout: {
        type: Object,
        default: () => ({}),
      },
      /**
       * The paint configuration for the clusters circles
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      clustersPaint: {
        type: Object,
        default: () => ({
          'circle-color': '#000',
          'circle-radius': 40,
        }),
      },
      /**
       * The layout configuration for the clusters count
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      clusterCountLayout: {
        type: Object,
        default: () => ({
          'text-field': [ 'get', 'point_count_abbreviated' ],
        }),
      },
      /**
       * The paint configuration for the clusters count
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      clusterCountPaint: {
        type: Object,
        default: () => ({
          'text-color': 'white',
        }),
      },
      /**
       * The type of the unclustered points layer
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {String}
       */
      unclusteredPointLayerType: {
        type: String,
        default: 'circle',
      },
      /**
       * The layout configuration for the unclustered points
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      unclusteredPointLayout: {
        type: Object,
        default: () => ({}),
      },
      /**
       * The paint configuration for the unclustered points
       * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
       * @type {Object}
       */
      unclusteredPointPaint: {
        type: Object,
        default: () => ({
          'circle-color': '#000',
          'circle-radius': 4,
        }),
      },
    },
    data() {
      return {
        id: uniqId('mb-cluster-'),
      };
    },
    computed: {
      /**
       * The source ID
       * @type {String}
       */
      sourceId() {
        return this.getId('source');
      },
      /**
       * The source configuration
       * @type {Object}
       */
      source() {
        const { data, clusterMaxZoom, clusterRadius } = this.$props;
        return {
          type: 'geojson',
          cluster: true,
          data,
          clusterMaxZoom,
          clusterRadius,
        };
      },
      /**
       * The clusters layer configuration
       * @type {Object}
       */
      clustersLayer() {
        return {
          id: this.getId('clusters'),
          type: 'circle',
          source: this.sourceId,
          filter: [ 'has', 'point_count' ],
          layout: this.clustersLayout,
          paint: this.clustersPaint,
        };
      },
      /**
       * The cluster count layer configuration
       * @type {Object}
       */
      clusterCountLayer() {
        return {
          id: this.getId('cluster-count'),
          type: 'symbol',
          source: this.sourceId,
          filter: [ 'has', 'point_count' ],
          layout: this.clusterCountLayout,
          paint: this.clusterCountPaint,
        };
      },
      /**
       * The unclustered points layer
       * @type {Object}
       */
      unclusteredPointLayer() {
        return {
          id: this.getId('unclustered-point'),
          type: this.unclusteredPointLayerType,
          source: this.sourceId,
          filter: [ '!', [ 'has', 'point_count' ]],
          layout: this.unclusteredPointLayout,
          paint: this.unclusteredPointPaint,
        };
      },
    },
    methods: {
      /**
       * Get a suffixed ID based on the instance ID
       *
       * @param  {String} suffix The suffix of the ID
       * @return {String}        The formatted ID
       */
      getId(suffix) {
        return `${this.id}-${suffix}`;
      },
      /**
       * Click handler for the clusters layer to zoom on the clicked cluster
       *
       * @param  {Object} event The Mapbox click event's object
       * @return {void}
       */
      clustersClickHandler(event) {
        const feature = this.map.queryRenderedFeatures(event.point, {
          layers: [ this.clustersLayer.id ],
        })[0];
        const { cluster_id: clusterId } = feature.properties;

        // Emit a cluster click event
        this.$emit('mb-cluster-click', clusterId, event);
        this.map
          .getSource(this.sourceId)
          .getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) {
              return;
            }

            this.map.easeTo({
              center: feature.geometry.coordinates,
              zoom,
            });
          });
      },
      /**
       * Mouseenter handler for the clusters layer to set a pointer cursor
       *
       * @return {void}
       */
      clustersMouseenterHandler() {
        this.map.getCanvas().style.cursor = 'pointer';
      },
      /**
       * Mouseleave handler for the clusters layer to unset the pointer cursor
       *
       * @return {void}
       */
      clustersMouseleaveHandler() {
        this.map.getCanvas().style.cursor = '';
      },

      /**
       * Handler for the click event on a single feature, emits an event with
       * the feature object and the original event object
       *
       * @param  {Object} event The Mapbox click event's object
       * @return {void}
       */
      unclusteredPointClickHandler(event) {
        const [ feature ] = event.features;
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
      unclusteredPointMouseenterHandler(event) {
        const [ feature ] = event.features;
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
      unclusteredPointMouseleaveHandler(event) {
        this.$emit('mb-feature-mouseleave', event);
        this.map.getCanvas().style.cursor = '';
      },
    },
  };
</script>
