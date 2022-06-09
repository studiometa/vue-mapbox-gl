<script setup>
  import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
  import { MapboxMarkerCustomHTMLDemo, MapboxMarkerPopupDemo } from '../../.vitepress/components/index.js';
</script>

# MapboxMarker

Display a marker on the map.

- [`Marker` API reference](https://docs.mapbox.com/mapbox-gl-js/api/#marker)

<h2>Table of contents</h2>

[[toc]]

## Examples

### Basic usage

<ClientOnly>
  <MapboxMap
    style="margin-top: 1em; height: 400px;"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11">
    <MapboxMarker :lng-lat="[0, 0]" />
  </MapboxMap>
</ClientOnly>

```vue {10}
<script setup>
  import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
</script>

<template>
  <MapboxMap
    style="height: 400px"
    access-token="..."
    map-style="mapbox://styles/mapbox/streets-v11">
    <MapboxMarker :lng-lat="[0, 0]" />
  </MapboxMap>
</template>
```

### Custom HTML

<ClientOnly>
<MapboxMarkerCustomHTMLDemo style="margin-top: 1em;" />
</ClientOnly>

<<< @/.vitepress/components/MapboxMarkerCustomHtmlDemo.vue{12-14,19-23}

### Linked popup

<ClientOnly>
<MapboxMarkerPopupDemo style="margin-top: 1em;" />
</ClientOnly>

<<< @/.vitepress/components/MapboxMarkerPopupDemo.vue{12-16}

## Props

### `lngLat`

- Type `Array`
- Required: `true`

### `popup`

- Type `[ Object, Boolean ]`
- Default: `false`

### `element`

- Type `HTMLElement`
- Default: `null`

### `offset`

- Type `[ Point, Array ]`
- Default: `null`

### `anchor`

- Type `String`
- Default: `center'`

### `color`

- Type `String`
- Default: `null`

### `scale`

- Type `Number`
- Default: `1`

### `draggable`

- Type `Boolean`
- Default: `false`

### `rotation`

- Type: `Number`
- Default: `0`

### `pitchAlignment`

- Type: `String`
- Default: `'auto'`

### `rotationAlignment`

- Type: `String`
- Default: `'auto'`


## Events

All events available on the `Marker` class are also available on the `MapboxMarker` component, prefixed by `mb-`.

### `mb-dragstart`

Mapped to the [`dragstart` event](https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:dragstart) of the `Marker` class.

### `mb-drag`

Mapped to the [`drag` event](https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:drag) of the `Marker` class.

### `mb-dragend`

Mapped to the [`dragend` event](https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:dragend) of the `Marker` class.

## Slots

### `default`

The `default` slot is used for marker with custom HTML.

### `popup`

The `popup` slot will be rendered inside the attached popup.
