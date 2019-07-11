---
sidebar: auto
prev: false
next: ./MapboxMarker.md
---

# MapboxMap

Root component, it is required to have a working map. This component is based on the `Map` class of Mapbox GL, all props are mapped to the `options` passed to the class constructor.

It is recommended to have a look at their [API reference](https://docs.mapbox.com/mapbox-gl-js/api/#map) on the subject.

<h2>Table of contents</h2>

[[toc]]

## Examples

### Basic usage

<client-only>
  <mapbox-map
    style="margin-top: 1em; height: 400px;"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="[0, 0]"
    :zoom="1" />
</client-only>

```vue
<mapbox-map
  style="height: 400px"
  access-token="..."
  map-style="mapbox://styles/mapbox/streets-v11"
  :center="[0, 0]"
  :zoom="1" />
```

### Accessing the Mapbox instance

You will probably need to use the Mapbox instance to use some of its methods such as `flyTo`, `panTo`, etc. The `MapboxMap` component emits an `mb-ready` event right after the Mapbox instantiation, with the Mapbox instance of [`Map`](https://docs.mapbox.com/mapbox-gl-js/api/#map) as a parameter. See the example below:

```vue{5,17}
<template>
  <mapbox-map
    access-token="..."
    map-style="..."
    @mb-ready="(mapInstance) => map = mapInstance" />
</template>

<script>
  import 'mapbox-gl/dist/mapbox-gl.css';
  import { MapboxMap } from '@studiometa/vue-mapbox-map';

  export default {
    components: {
      MapboxMap,
    },
    data() {
      return {
        map: null,
      };
    },
  },
</script>
```

## Props

### `accessToken`

- Type `String`
- Required `true`

Your Mapbox access token or `no-token` if you are not using a map style from Mapbox.

### `mapStyle`

- Type `[ String, Object ]`
- Required `true`

A map style definition, can be a JSON object following the [Mapbox Style specification] of an URL to such a JSON. This props is mapped to the `options.style` configuration on the map instantiation.

### `container`

- Type `[ HTMLElement, String ]`
- Default `undefined`

### `minZoom`

- Type `Number`
- Default `0`

### `maxZoom`

- Type `Number`
- Default `22`


### `hash`

- Type `Boolean`
- Default `false`

### `interactive`

- Type `Boolean`
- Default `true`

### `bearingSnap`

- Type `Number`
- Default `7`

### `pitchWithRotate`

- Type `Boolean`
- Default `true`

### `clickTolerance`

- Type `Number`
- Default `3`

### `attributionControl`

- Type `Boolean`
- Default `true`

### `customAttribution`

- Type `[ String, Array ]`
- Default `null`

### `logoPosition`

- Type `String`
- Default `'bottom-left'`

### `failIfMajorPerformanceCaveat`

- Type `Boolean`
- Default `false`

### `preserveDrawingBuffer`

- Type `Boolean`
- Default `false`

### `antialias`

- Type `Boolean`
- Default `false`

### `refreshExpiredTiles`

- Type `Boolean`
- Default `true`

### `maxBounds`

- Type `[ LngLatBounds, Array ]`
- Default `undefined`

### `scrollZoom`

- Type `[ Boolean, Object ]`
- Default `true`

### `boxZoom`

- Type `Boolean`
- Default `true`

### `dragRotate`

- Type `Boolean`
- Default `true`

### `dragPan`

- Type `Boolean`
- Default `true`

### `keyboard`

- Type `Boolean`
- Default `true`

### `doubleClickZoom`

- Type `Boolean`
- Default `true`

### `touchZoomRotate`

- Type `[ Boolean, Object ]`
- Default `true`

### `trackResize`

- Type `Boolean`
- Default `true`

### `center`

- Type `[ LngLat, Array, Object ]`
- Default `() => [ 0, 0 ]`

### `zoom`

- Type `Number`
- Default `0`

### `bearing`

- Type `Number`
- Default `0`

### `pitch`

- Type `Number`
- Default `0`

### `bounds`

- Type `[ LngLatBounds, Array ]`
- Default `undefined`

### `fitBoundsOptions`

- Type `Object`
- Default `null`

### `renderWorldCopies`

- Type `Boolean`
- Default `true`

### `maxTileCacheSize`

- Type `Number`
- Default `null`

### `localIdeographFontFamily`

- Type `String`
- Default `'sans-serif'`

### `transformRequest`

- Type `Function`
- Default `null`

### `collectResourceTiming`

- Type `Boolean`
- Default `false`

### `fadeDuration`

- Type `Number`
- Default `300`

### `crossSourceCollisions`

- Type `Boolean`
- Default `true`

## Events

All events available on the Mapbox `Map` class are also available on the `MapboxMap` component, prefixed by `mb-`.

- `resize` → `mb-resize`
- `click` → `mb-click`
- ...

See the [API Reference](https://docs.mapbox.com/mapbox-gl-js/api/#map.event:resize) on the subject for more detailed information about each event.
