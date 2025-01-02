<script lang="ts">
  import type { GeoJSONSource } from 'mapbox-gl';

  const propsConfig = {
    /**
     * The source of the data for the clustered points,
     * must be a String or an Object of GeoJSON format.
     * @type {string | GeoJSON}
     */
    data: {
      type: [String, Object],
      required: true,
    },
    /**
     * The max zoom to cluster points on
     * @type {number}
     */
    clusterMaxZoom: {
      type: Number,
      default: 14,
    },
    /**
     * Radius of each cluster when clustering point
     * @type {number}
     */
    clusterRadius: {
      type: Number,
      default: 50,
    },
    /**
     * Minimum number of points necessary to form a cluster.
     * @type {number}
     */
    clusterMinPoints: {
      type: Number,
      default: 2,
    },
    /**
     * An object defining custom properties on the generated clusters.
     * @see  https://docs.mapbox.com/style-spec/reference/sources/#geojson-clusterProperties
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster-html/
     * @type {object}
     */
    clusterProperties: {
      type: Object,
      default: () => ({}),
    },
    /**
     * The layout configuration for the clusters circles
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {object}
     */
    clustersLayout: {
      type: Object,
      default: () => ({}),
    },
    /**
     * The paint configuration for the clusters circles
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {object}
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
     * @type {object}
     */
    clusterCountLayout: {
      type: Object,
      default: () => ({
        'text-field': ['get', 'point_count_abbreviated'],
      }),
    },
    /**
     * The paint configuration for the clusters count
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {object}
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
     * @type {string}
     */
    unclusteredPointLayerType: {
      type: String,
      default: 'circle',
    },
    /**
     * The layout configuration for the unclustered points
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {object}
     */
    unclusteredPointLayout: {
      type: Object,
      default: () => ({}),
    },
    /**
     * The paint configuration for the unclustered points
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {object}
     */
    unclusteredPointPaint: {
      type: Object,
      default: () => ({
        'circle-color': '#000',
        'circle-radius': 4,
      }),
    },
  };

  let index = 0;
</script>

<script lang="ts" setup>
  import { ref, unref, computed } from 'vue';
  import { useMap } from '../composables/index.js';
  import MapboxLayer from './MapboxLayer.vue';
  import MapboxSource from './MapboxSource.vue';

  const props = defineProps(propsConfig);
  const emit = defineEmits([
    'mb-cluster-click',
    'mb-feature-click',
    'mb-feature-mouseenter',
    'mb-feature-mouseleave',
  ]);

  const { map } = useMap();
  const id = ref(`mb-cluster-${index}`);
  index += 1;

  const getId = (suffix: string) => `${unref(id)}-${suffix}`;

  const sourceId = computed(() => getId('source'));
  const source = computed(() => {
    const { data, clusterMaxZoom, clusterRadius, clusterMinPoints, clusterProperties } = props;
    return {
      type: 'geojson',
      cluster: true,
      data,
      clusterMaxZoom,
      clusterRadius,
      clusterMinPoints,
      clusterProperties,
    };
  });

  const clustersLayer = computed(() => ({
    id: getId('clusters'),
    type: 'circle',
    source: unref(sourceId),
    filter: ['has', 'point_count'],
    layout: props.clustersLayout,
    paint: props.clustersPaint,
  }));

  const clusterCountLayer = computed(() => ({
    id: getId('cluster-count'),
    type: 'symbol',
    source: unref(sourceId),
    filter: ['has', 'point_count'],
    layout: props.clusterCountLayout,
    paint: props.clusterCountPaint,
  }));

  /**
   * The unclustered points layer
   * @type {object}
   */
  const unclusteredPointLayer = computed(() => ({
    id: getId('unclustered-point'),
    type: props.unclusteredPointLayerType,
    source: unref(sourceId),
    filter: ['!', ['has', 'point_count']],
    layout: props.unclusteredPointLayout,
    paint: props.unclusteredPointPaint,
  }));

  /**
   * Click handler for the clusters layer to zoom on the clicked cluster
   * @param  {object} event The Mapbox click event's object
   * @returns {void}
   */
  function clustersClickHandler(event) {
    const feature = unref(map).queryRenderedFeatures(event.point, {
      layers: [unref(clustersLayer).id],
    })[0];
    const { cluster_id: clusterId } = feature.properties;

    // Emit a cluster click event
    emit('mb-cluster-click', clusterId, event);

    // Return before move map if event is defaultPrevented
    if (event.defaultPrevented) {
      return;
    }

    unref(map)
      .getSource<GeoJSONSource>(unref(sourceId))
      .getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) {
          return;
        }

        unref(map).easeTo({
          center: feature.geometry.coordinates,
          zoom,
        });
      });
  }
  /**
   * Mouseenter handler for the clusters layer to set a pointer cursor
   * @returns {void}
   */
  function clustersMouseenterHandler() {
    unref(map).getCanvas().style.cursor = 'pointer';
  }
  /**
   * Mouseleave handler for the clusters layer to unset the pointer cursor
   * @returns {void}
   */
  function clustersMouseleaveHandler() {
    unref(map).getCanvas().style.cursor = '';
  }

  /**
   * Handler for the click event on a single feature, emits an event with
   * the feature object and the original event object
   * @param  {object} event The Mapbox click event's object
   * @returns {void}
   */
  function unclusteredPointClickHandler(event) {
    const [feature] = event.features;
    emit('mb-feature-click', feature, event);
  }

  /**
   * Handler for the mouseenter event on a single feature.
   * Emits an event with the feature object and the original event as
   * parameters, and sets the cursor style to pointer.
   * @param  {object} event The Mapbox mouseenter event's object
   * @returns {void}
   */
  function unclusteredPointMouseenterHandler(event) {
    const [feature] = event.features;
    emit('mb-feature-mouseenter', feature, event);
    unref(map).getCanvas().style.cursor = 'pointer';
  }

  /**
   * Handler for the mouseleave event on a single feature.
   * Emits an event with the original event object as parameter, and resets
   * the cursor style to its default value.
   * @param  {object} event The Mapbox mouselvea event‘s object
   * @returns {void}
   */
  function unclusteredPointMouseleaveHandler(event) {
    emit('mb-feature-mouseleave', event);
    unref(map).getCanvas().style.cursor = '';
  }
</script>

<template>
  <div :id="id">
    <MapboxSource :id="sourceId" :options="source" />
    <MapboxLayer
      :id="clustersLayer.id"
      :options="clustersLayer"
      @mb-click="clustersClickHandler"
      @mb-mouseenter="clustersMouseenterHandler"
      @mb-mouseleave="clustersMouseleaveHandler" />
    <MapboxLayer :id="clusterCountLayer.id" :options="clusterCountLayer" />
    <MapboxLayer
      :id="unclusteredPointLayer.id"
      :options="unclusteredPointLayer"
      @mb-click="unclusteredPointClickHandler"
      @mb-mouseenter="unclusteredPointMouseenterHandler"
      @mb-mouseleave="unclusteredPointMouseleaveHandler" />
  </div>
</template>
