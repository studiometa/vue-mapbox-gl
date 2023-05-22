<script setup>
  import { ref, unref, computed, nextTick } from 'vue';
  import MapboxCluster from '../MapboxCluster.vue';
  import MapboxGeocoder from '../MapboxGeocoder.vue';
  import MapboxMap from '../MapboxMap.vue';
  import VueScroller from './VueScroller.vue';

  const props = defineProps({
    /**
     * A list of items to display.
     * The only required properties are `lat` and `lng` and `id`.
     * @type {Array<{ lat: number, lng: number, id: string } & Record<string, unknown>>}
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * The zoom level to use when zooming in on an item.
     * @type {number}
     */
    itemZoomLevel: {
      type: Number,
      default: 14,
    },
    /**
     * A Mapbox access token.
     * @type {object}
     */
    accessToken: {
      type: String,
      default: 'no-token',
    },
    /**
     * Props for the MapboxMap component.
     * @see  https://vue-mapbox-gl.meta.fr/components/MapboxMap.html#props
     * @type {object}
     */
    mapboxMap: {
      type: Object,
      default: () => ({}),
    },
    /**
     * Props fof the MapboxCluster component.
     * @see  https://vue-mapbox-gl.meta.fr/components/MapboxCluster.html#props
     * @type {object}
     */
    mapboxCluster: {
      type: Object,
      default: () => ({}),
    },
    /**
     * Props for the MapboxGeocoder component.
     * @see  https://vue-mapbox-gl.meta.fr/components/MapboxGeocoder.html#props
     * @type {object}
     */
    mapboxGeocoder: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Configuration for each transition component.
     * @type {object}
     */
    transitions: {
      type: Object,
      default: () => ({
        loader: {
          map: {},
          search: {},
          list: {},
          default: {},
        },
        panel: {},
      }),
    },

    /**
     * Define custom classes for each element of the component.
     * @type {object}
     */
    classes: {
      type: Object,
      default: () => {
        const root = 'store-locator';
        const bem = (name, modifier = '') => `${root}__${name}${modifier ? `--${modifier}` : ''}`;
        return {
          root,
          region: {
            map: [bem('region'), bem('region', 'map')],
            search: [bem('region'), bem('region', 'search')],
            list: [bem('region'), bem('region', 'list')],
            panel: [bem('region'), bem('region', 'panel')],
          },
          map: bem('map'),
          search: bem('search'),
          list: bem('list'),
          listItem: bem('list-item'),
          panel: bem('panel'),
        };
      },
    },
  });
  const emit = defineEmits();

  const map = ref();
  const isLoading = ref(true);
  const mapIsMoving = ref(false);
  const selectedItem = ref(null);
  const filteredItems = ref(props.items.map((item) => item));
  const listIsLoading = ref(false);

  /**
   * Transform an item into a valid GeoJSON feature.
   * @param  {object} item
   * @param  {number} item.lat
   * @param  {number} item.lng
   * @returns {Feature}
   */
  function itemToGeoJsonFeature({ lat, lng, ...properties }) {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [lng, lat],
      },
      properties,
    };
  }

  const geoJson = computed(() => ({
    type: 'FeatureCollection',
    features: props.items.map(itemToGeoJsonFeature),
  }));
  const filteredGeoJson = computed(() => ({
    type: 'FeatureCollection',
    features: unref(filteredItems).map(itemToGeoJsonFeature),
  }));

  /**
   * Filter the features in view.
   */
  async function filterFeaturesInView() {
    listIsLoading.value = true;
    const mapBounds = unref(map).getBounds();
    const center = unref(map).getCenter();

    filteredItems.value = props.items
      .filter(({ lng, lat }) => mapBounds.contains([lng, lat]))
      .sort((a, b) => {
        const distanceFromA = center.distanceTo(a);
        const distanceFromB = center.distanceTo(b);

        if (distanceFromA < distanceFromB) {
          return -1;
        }

        if (distanceFromA > distanceFromB) {
          return 1;
        }

        return 0;
      });

    await nextTick();
    listIsLoading.value = false;
  }

  /**
   * Handler for the geocoder result event.
   * @param {object} options
   * @param {object} options.result The place selected in the geocoder component.
   */
  function onGeocoderResult({ result }) {
    if (result.bbox) {
      unref(map).fitBounds(result.bbox);
    } else if (result.center) {
      unref(map).flyTo({ center: result.center });
    }
  }

  /**
   * Propagate the `mb-created` event from the MapboxGeocoder component.
   * @param  {Geocoder} geocoder The geocoder instance.
   * @returns {void}
   */
  function onGeocoderCreated(geocoder) {
    emit('geocoder-created', geocoder);
  }

  /**
   * Handler for the map created event.
   * @param  {MapboxMap} instance The Mapbox instance.
   */
  async function onMapCreated(instance) {
    map.value = instance;
    emit('map-created', instance);
    await nextTick();
    filterFeaturesInView();
  }

  /**
   * Handler for the map load event.
   */
  async function onMapLoad() {
    await nextTick();
    isLoading.value = false;

    emit('map-load', map);
  }

  /**
   * Handler for the map's movestart event.
   */
  async function onMapMovestart() {
    mapIsMoving.value = true;
    await nextTick();
    listIsLoading.value = true;
  }

  /**
   * Handler for the map's moveend event.
   */
  function onMapMoveend() {
    mapIsMoving.value = false;
    filterFeaturesInView();
  }

  /**
   * Handler for the click event on a list item.
   * @param {object} item A GeoJSON feature.;
   */
  function onListItemClick(item) {
    selectedItem.value = item;
    emit('select-item', item);

    const { lat, lng } = unref(map).getCenter();

    // Do not trigger flyTo if the map is almost already centered
    if (Math.abs(lng - item.lng) > 0.0001 && Math.abs(lat - item.lat) > 0.0001) {
      unref(map).flyTo({ center: [item.lng, item.lat], zoom: props.itemZoomLevel });
    }
  }

  /**
   * Handler for the click event on a GeoJSON feature.
   * @param {object} feature The GeoJSON feature being clicked.
   * @param {any}    event   The event object emitted.
   */
  function onClusterFeatureClick(feature, event) {
    const item = props.items.find(({ id }) => id === feature.properties.id);
    emit('cluster-feature-click', feature, event);

    if (item) {
      emit('select-item', item);
      selectedItem.value = item;
      unref(map).flyTo({ center: feature.geometry.coordinates, zoom: props.itemZoomLevel });
    }
  }
</script>

<template>
  <div :class="classes.root || {}">
    <div :class="(classes.region || {}).map || {}">
      <template v-if="isLoading">
        <Transition v-bind="(transitions.loader || {}).map || {}">
          <!-- @slot Use this slot to define a custom loader for the map region. -->
          <slot name="map-loader">
            <Transition v-bind="(transitions.loader || {}).default || {}">
              <!-- @slot Use this slot to define a custom loader. -->
              <slot name="loader">Loading...</slot>
            </Transition>
          </slot>
        </Transition>
      </template>

      <!-- @slot Use this slot to display information before the map. -->
      <slot name="before-map" />

      <MapboxMap
        :class="classes.map || {}"
        v-bind="{ ...mapboxMap, accessToken }"
        @mb-created="onMapCreated"
        @mb-movestart="onMapMovestart"
        @mb-moveend="onMapMoveend"
        @mb-load="onMapLoad">
        <MapboxCluster
          v-bind="{ ...mapboxCluster, data: filteredGeoJson }"
          @mb-feature-click="onClusterFeatureClick"
          @mb-feature-mouseenter="(...args) => $emit('cluster-feature-mouseenter', ...args)"
          @mb-feature-mouseleave="(...args) => $emit('cluster-feature-mouseleave', ...args)"
          @mb-cluster-click="(...args) => $emit('cluster-cluster-click', ...args)" />
        <!--
          @slot Use this slot to add components from @studiometa/vue-mapbox-gl to the map.
          @binding {Object}  map             The map instance.
          @binding {GeoJSON} geojson         The GeoJSON used for the cluster.
          @binding {GeoJSON} filteredGeoJson The filtered GeoJSON.
          @binding {Array}   items           The list of items.
          @binding {Array}   filteredItems   The filtered list of items.
          @binding {Object}  selectedItem    The selected item.
        -->
        <slot
          name="map"
          :map="map"
          :geojson="geoJson"
          :filtered-geojson="filteredGeoJson"
          :items="items"
          :filtered-items="filteredItems"
          :selected-item="selectedItem" />
      </MapboxMap>

      <!-- @slot Use this slot to display information after the map. -->
      <slot name="after-map" />
    </div>
    <div :class="(classes.region || {}).search || {}">
      <template v-if="isLoading">
        <Transition v-bind="(transitions.loader || {}).search || {}">
          <!-- @slot Use this slot to define a custom loader for the search region. -->
          <slot name="search-loader">
            <Transition v-bind="(transitions.loader || {}).default || {}">
              <!-- @slot Use this slot to define a custom loader. -->
              <slot name="loader">Loading...</slot>
            </Transition>
          </slot>
        </Transition>
      </template>

      <!-- @slot Use this slot to display information before the search. -->
      <slot
        name="before-search"
        :items="items"
        :filtered-items="filteredItems"
        :selected-item="selectedItem" />

      <MapboxGeocoder
        :class="classes.search || {}"
        v-bind="{ ...mapboxGeocoder, accessToken }"
        @mb-result="onGeocoderResult"
        @mb-created="onGeocoderCreated" />

      <!-- @slot Use this slot to display information after the search. -->
      <slot
        name="after-search"
        :items="items"
        :filtered-items="filteredItems"
        :selected-item="selectedItem" />
    </div>
    <div :class="(classes.region || {}).list || {}">
      <template v-if="isLoading || listIsLoading">
        <Transition v-bind="(transitions.loader || {}).list || {}">
          <!-- @slot Use this slot to define a custom loader for the list region. -->
          <slot name="list-loader">
            <Transition v-bind="(transitions.loader || {}).default || {}">
              <!-- @slot Use this slot to define a custom loader. -->
              <slot name="loader">Loading...</slot>
            </Transition>
          </slot>
        </Transition>
      </template>
      <template v-else>
        <!--
          @slot Use this slot to display information before the list.
          @binding {Array} items         The full list of items.
          @binding {Array} filteredItems The filtered list of items.
        -->
        <slot
          name="before-list"
          :items="items"
          :filtered-items="filteredItems"
          :selected-item="selectedItem">
          <p>Result(s): {{ filteredItems.length.toFixed(0) }}</p>
        </slot>

        <VueScroller v-if="filteredItems.length > 0">
          <ul :class="classes.list || {}">
            <li
              v-for="(item, index) in filteredItems"
              :key="item.id"
              :class="classes.listItem || {}"
              @click="onListItemClick(item)">
              <!--
                @slot Use this slot to customize the display of the list items.
                @binding {Object} item          An item.
                @binding {Object} selected-item The currently selected item.
              -->
              <slot name="list-item" :item="item" :index="index" :selected-item="selectedItem">
                Lat: {{ item.lat }}
                <br />
                Lng: {{ item.lng }}
              </slot>
            </li>
          </ul>
        </VueScroller>

        <!--
          @slot Use this slot to display information after the list.
          @binding {Array} items         The full list of items.
          @binding {Array} filteredItems The filtered list of items.
        -->
        <slot
          name="after-list"
          :items="items"
          :filtered-items="filteredItems"
          :selected-item="selectedItem"
          :filter-features-in-view="filterFeaturesInView" />
      </template>
    </div>
    <div :class="(classes.region || {}).panel || {}">
      <Transition v-bind="transitions.panel || {}">
        <div v-if="selectedItem" :key="selectedItem.id" :class="classes.panel || {}">
          <!--
            @slot Use this slot to display content inside the panel.
            @binding {Object}   item  The selected item.
            @binging {Function} close A function to close the panel
          -->
          <slot name="panel" :item="selectedItem" :close="() => (selectedItem = null)">
            <div>{{ selectedItem }}</div>
          </slot>
        </div>
      </Transition>
    </div>
  </div>
</template>
