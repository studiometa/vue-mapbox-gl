---
sidebar: auto
prev: ./MapboxNavigationControl.md
next: ./MapboxSource.md
---

# MapboxPopup

Display a popup on the map.

- [Mapbox popup example](https://docs.mapbox.com/mapbox-gl-js/example/popup/)


<h2>Table of contents</h2>

[[toc]]

## Examples

### Basic usage

<client-only>
  <mapbox-popup-demo api-key="MAPBOX_API_KEY" />
</client-only>

<<< @/docs/.vuepress/components/MapboxPopupDemo.vue

### Advance usage
@todo

## Props

### `lngLat`

- Type `[ LngLat, Array, Object ]`
- Required `true`

Center position for the popup.

### `closeButton`

- Type `[ Boolean ]`
- Required `false`
- default `true`

Display a close button on the popup.

### `closeOnClick`

- Type `[ Boolean ]`
- Required `false`
- default `true`

Close the popup on close button click.

### `anchor`

- Type `[ String ]`
- Required `false`

@todo.

### `offset`

- Type `[ Number, Point, Array, Object ]`
- Required `false`
- default `null`

Offset the popup from it's original lngLat position.

### `className`

- Type `[ String ]`
- Required `false`
- default `null`

Add a className to the popup.

### `maxWidth`

- Type `[ String ]`
- Required `false`
- default `240px`

Set a max-width to the popup.

## Events
@todo

## Slots

### `default`

The default slot will be rendered inside the popup.

