---
sidebar: auto
prev: ./MapboxLayer.md
next: ./MapboxPopup.md
---

# MapboxNavigationControl

Display navigation controls on the map, including two zoom buttons + - and a compass button to rotate the map.

- [Mapbox navigation controls documentation](https://docs.mapbox.com/mapbox-gl-js/api/#navigationcontrol)
- [Mapbox navigation controls example](https://docs.mapbox.com/mapbox-gl-js/example/navigation/)


<h2>Table of contents</h2>

[[toc]]

## Examples

### Basic usage

<client-only>
  <mapbox-navigation-control-demo style="margin-top: 1em;" />
</client-only>

<<< @/docs/.vuepress/components/MapboxNavigationControlDemo.vue{6}

## Props

### `position`

- Type: `String`
- Default: `top-right`

The position for the navigation control.

### `showCompass`

- Type: `Boolean`
- Default: `true`

Show the compass button with the navigation control.

### `showZoom`

- Type: `Boolean`
- Default: `true`

Show the zoom button with the navigation control.

### `visualizePitch`

- Type: `Boolean`
- Default: `false`

If `true` the pitch is visualized by rotating Y-axis of compass.
