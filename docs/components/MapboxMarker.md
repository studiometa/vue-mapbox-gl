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

### Custom HTML

<client-only>
<mapbox-marker-custom-html-demo style="margin-top: 1em;" />
</client-only>

<<< @/docs/.vuepress/components/MapboxMarkerCustomHtmlDemo.vue{8-10,14-20}

### Linked popup

<client-only>
<mapbox-marker-popup-demo style="margin-top: 1em;" />
</client-only>

<<< @/docs/.vuepress/components/MapboxMarkerPopupDemo.vue{8-12}

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
