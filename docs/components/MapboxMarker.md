---
sidebar: auto
prev: ./MapboxMap.md
next: ./MapboxCluster.md
---

# MapboxMarker

Display a marker on the map.

- [`Marker` API reference](https://docs.mapbox.com/mapbox-gl-js/api/#marker)


<h2>Table of contents</h2>

[[toc]]

## Examples

### Basic usage

<client-only>
<mapbox-map
  style="margin-top: 1em; height: 400px;"
  :access-token="MAPBOX_API_KEY"
  map-style="mapbox://styles/mapbox/streets-v11">
  <mapbox-marker :lng-lat="[0, 0]" />
</mapbox-map>
</client-only>

```vue{5}
<mapbox-map
  style="height: 400px"
  access-token="..."
  map-style="mapbox://styles/mapbox/streets-v11">
  <mapbox-marker :lng-lat="[0, 0]" />
</mapbox-map>
```

## Props

### `lngLat`

- Type `Array`
- Required: `true`

### `popup`

- Type `Object`
- Default: `null`

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

### `draggable`

- Type `Boolean`
- Default: `false`

## Events

All events available on the `Marker` class are also available on the `MapboxMarker` component, prefixed by `mb-`.

### `mb-dragstart`

Mapped to the [`dragstart` event](https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:dragstart) of the `Marker` class.

### `mb-drag`

Mapped to the [`drag` event](https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:drag) of the `Marker` class.

### `mb-dragend`

Mapped to the [`dragend` event](https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:dragend) of the `Marker` class.
