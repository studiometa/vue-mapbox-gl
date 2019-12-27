---
sidebar: auto
prev: ./MapboxLayer.md
next: ./MapboxPopup.md
---

# MapboxNavigationControl

Display navigation controls on the map, including two zoom buttons + - and a compass button to rotate the map.

- [Mapbox navigation controls example](https://docs.mapbox.com/mapbox-gl-js/example/navigation/)


<h2>Table of contents</h2>

[[toc]]

## Examples

### Basic usage

<client-only>
  <mapbox-navigation-control-demo api-key="MAPBOX_API_KEY" />
</client-only>

<<< @/docs/.vuepress/components/MapboxNavigationControlDemo.vue

## Props

### `position`

- Type `[ String ]`
- Required `false`
- default `top-right`

The position for the navigation control.

### `showCompass`

- Type `[ Boolean ]`
- Required `false`
- default `true`

Show the compass button with the navigation control.

### `showZoom`

- Type `[ Boolean ]`
- Required `false`
- default `true`

Show the zoom button with the navigation control.
