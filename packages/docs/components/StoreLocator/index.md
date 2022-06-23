<script setup>
  import { StoreLocatorDemo, StoreLocatorArchitecture } from '../../.vitepress/components/index.js';
</script>

# StoreLocator

The `StoreLocator` component will help you display a clustered list of points of interest (POIs) on a map and in a adjacent filtered list.

<h2>Table of contents</h2>

[[toc]]

## Usage

You will need to import the `StoreLocator` component along with the required CSS files:

```vue
<script setup>
  // Import the component and its CSS
  import { StoreLocator } from '@studiometa/vue-mapbox-gl';
  import '@studiometa/vue-mapbox-gl/index.css';

  // Import Mapbox required CSS stylesheets
  import 'mapbox-gl/dist/mapbox-gl.css';
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
</script>

<template>
  <StoreLocator>
    ...
  </StoreLocator>
</template>
```

## Example

Displaying the [`earthquake.json`](/earthquakes.json) data on a map with a synchronized list.

<div style="height: 80vh; margin: 1em 0;">
  <ClientOnly>
    <StoreLocatorDemo />
  </ClientOnly>
</div>

```vue
<script setup>
  // Import the component and its CSS
  import { StoreLocator } from '@studiometa/vue-mapbox-gl';
  import '@studiometa/vue-mapbox-gl/index.css';

  // Import Mapbox required CSS stylesheets
  import 'mapbox-gl/dist/mapbox-gl.css';
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
</script>

<template>
  <StoreLocator
    :items="items"
    :access-token="MAPBOX_API_KEY"
    :mapbox-map="{ mapStyle: 'mapbox://styles/mapbox/streets-v11' }">

    <!-- Loader slot -->
    <template #loader>
      <div class="z-50 absolute inset-0 bg-white flex items-center justify-center">
        <div class="absolute inset-0 bg-gray-300 rounded animate-pulse" />
        <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    </template>

    <!-- Before list slot -->
    <template #before-list="{ filteredItems }">
      <p class="m-0">Total: {{ filteredItems.length }}</p>
    </template>

    <!-- After list slot -->
    <template #after-list="{ filteredItems }">
      <p v-if="filteredItems.length <= 0">
        No result.
      </p>
    </template>

    <!-- Panel slot -->
    <template #panel="{ close, item }">
      <button @click="close">Close</button>
      <p>{{ item }}</p>
    </template>
  </StoreLocator>
</template>
```

## Props

### `items`

- Type `Array<{ lat: number, lng: number, id: string, [prop: string]: unknown }>`
- Required `true`

A list of items to display. Each item **must** have at least the following properties: `lat` and `lng` and a uniq `id`.

### `itemZoomLevel`

- Type `Number`
- Default `14`

The zoom level to use when zooming in on an item.

### `accessToken`

- Type `String`
- Default `no-token`

Your Mapbox access token or no-token if you are not using a map style from Mapbox.

### `mapboxMap`

- Type `MapboxMapProps`
- Default `{}`

Props for the [MapboxMap component](/components/MapboxMap/#props).

### `mapboxCluster`

- Type `MapboxClusterProps`
- Default `{}`

Props for the [MapboxCluster component](/components/MapboxCluster/#props).

### `mappboxGeocoder`

- Type `MapboxGeocoder`
- Default `{}`

Props for the [MapboxGeocoder component](/components/MapboxGeocoder/#props).

### `transitions`

- Type
```ts
interface StoreLocatorTransitionsProp {
  loader?: {
    default?: TransitionProps,
    map?: TransitionProps,
    search?: TransitionProps,
    list?: TransitionProps
  },
  panel?: TransitionProps
}
```
- Default `{}` for each `TransitionProps`

Props for each transition component:

- `loader.default`: used for the default loader transition
- `loader.map`: used for the custom map loader transition
- `loader.search`: used for the custom search loader transition
- `loader.list`: used for the custom list loader transition
- `panel`: used for the panel transition

See the [Transition component documentation](https://vuejs.org/v2/api/#transition) for more details.

### `classes`

- Type
```ts
type VueClassAttribute = string | Array<string> | { [key:string]: string } | Array<{ [key:string]: string }>;

interface StoreLocatorClassesProp {
  root?: VueClassAttribute,
  region?: {
    map?: VueClassAttribute,
    search?: VueClassAttribute,
    list?: VueClassAttribute,
    panel?: VueClassAttribute,
  },
  map?: VueClassAttribute,
  search?: VueClassAttribute,
  list?: VueClassAttribute,
  listItem?: VueClassAttribute,
  panel?: VueClassAttribute,
}
```
- Default to a BEM structure:
```js
{
  root  : 'store-locator',
  region: {
    map: [
      'store-locator__region',
      'store-locator__region--map'
    ],
    search: [
      'store-locator__region',
      'store-locator__region--search'
    ],
    list: [
      'store-locator__region',
      'store-locator__region--list'
    ],
    panel: [
      'store-locator__region',
      'store-locator__region--panel',
    ],
  },
  map          : 'store-locator__map',
  search       : 'store-locator__search',
  list         : 'store-locator__list',
  listItem     : 'store-locator__list-item',
  panel        : 'store-locator__panel',
}
```

## Events

### `map-created`

Emitted when the MapboxMap component is created.

**Params**
- `map` (`Map`): the Mapbox map instance

### `map-load`

Emitted when the MapboxMap component is loaded.

**Params**
- `map` (`Map`): the Mapbox map instance

### `geocoder-created`

Emitted when the Geocoder component is ready.

**Params**
- `geocoder` (`Geocoder`): the Geocoder instance

### `cluster-cluster-click`

Emitted when the user clicks on a cluster. See the [MapboxCluster component API](/components/MapboxCluster/#mb-cluster-click) for more information.

### `cluster-feature-click`

Emitted when the user clicks on a unclustered point (a feature). See the [MapboxCluster component API](/components/MapboxCluster/#mb-feature-click) for more information.

### `cluster-feature-mouseenter`

Emitted when the user's mouse enters an unclustered point. See the [MapboxCluster component API](/components/MapboxCluster/#mb-feature-mouseenter) for more information.

### `cluster-feature-mouseleave`

Emitted when the user's mouse leaves an unclustered point. See the [MapboxCluster component API](/components/MapboxCluster/#mb-feature-mouseleave) for more information.

### `select-item`

Emitted when an item is selected from the map or from the list.

**Params**
- `item` (`Object`): the selected item

## Slots

### `loader`

Use this slot to define a generic custom loader used for every region. Loaders are hidden when the `load` event is emitted.

### Map region

#### `map-loader`

Use this slot to override the loader of the map region.

#### `before-map`

Use this slot to display information before the map.

#### `map`

Use this slot to inject additionnal Mapbox components in the map.

**Props**
- `map` (`Object`): the map instance.
- `geojson` (`GeoJSON`): the GeoJSON used for the cluster.
- `filteredGeoJson` (`GeoJSON`): the filtered GeoJSON.
- `items` (`Array`): the list of items.
- `filteredItems` (`Array`): the filtered list of items.
- `selectedItem` (`Object`): the selected item.

#### `after-map`

Use this slot to display information after the map.

### Search region

#### `search-loader`

Use this slot to override the loader of the search region.

#### `before-search`

Use this slot to display information before the search.

**Props**
- `items` (`Array`): the full list of items.
- `filteredItems` (`Array`): the filtered list of items, based on the map bounding box.
- `selectedItem` (`null | Object`): the selected item if defined, `null` otherwise.

#### `after-search`

Use this slot to display information after the search.

**Props**
- `items` (`Array`): the full list of items.
- `filteredItems` (`Array`): the filtered list of items, based on the map bounding box.
- `selectedItem` (`null | Object`): the selected item if defined, `null` otherwise.

### List region

#### `list-loader`

Use this slot to override the loader of the list region.

#### `before-list`

Use this slot to display information before the list.

**Props**
- `items` (`Array`): the full list of items.
- `filteredItems` (`Array`): the filtered list of items, based on the map bounding box.
- `selectedItem` (`null | Object`): the selected item if defined, `null` otherwise.

#### `list-item`

Use this slot to customize the display of the list items.

**Props**
- `item` (`Object`): the current item in the loop.
- `index` (`Number`): the index of the current item in the filtered list.
- `selectedItem` (`null | Object`): the selected item if defined, `null` otherwise.

#### `after-list`

Use this slot to display information after the list.

**Props**
- `items` (`Array`): the full list of items.
- `filteredItems` (`Array`): the filtered list of items, based on the map bounding box.
- `selectedItem` (`null | Object`): the selected item if defined, `null` otherwise.

### Panel region

#### `panel`

Use this slot to display content inside the panel.

**Props**
- `item` (`Object`): the selected item.
- `close` (`Function`): a function to trigger to clear the selected item and close the panel.

## Architecture

The following schema describing the `StoreLocator` component architecture should help you understand how the slots, the `classes` and `transitions` props can be used to customize the components appearance.

<StoreLocatorArchitecture />
