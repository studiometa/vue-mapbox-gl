---
sidebar: auto
prev: ./MapboxImage.md
next: ./MapboxNavigationControl.md
---

# MapboxLayer

Custom style layer to render custom WebGL content.

<h2>Table of contents</h2>

[[toc]]

## Example

<client-only>
  <mapbox-map
    style="margin-top: 1em; height: 400px;"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11">
    <mapbox-layer id="triangle" />
  </mapbox-map>
</client-only>

```vue{5}
<mapbox-map
  style="height: 400px"
  access-token="..."
  map-style="mapbox://styles/mapbox/streets-v11">
  <mapbox-layer id="triangle" />
</mapbox-map>
```

## Props

### `id`
- Type `String`
- Required `true`

### `options`
- Type `Object`
- Default `{}`
- Required `false`

### `beforeId`
- Type `String`
- Default `undefined`
- Required `false`

## Events

### `mousedown`
### `mouseup`
### `click`
### `dblclick`
### `mousemove`
### `mouseenter`
### `mouseleave`
### `mouseover`
### `mouseout`
### `contextmenu`
### `touchstart`
### `touchend`
### `touchcancel`
