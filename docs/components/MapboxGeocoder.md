---
sidebar: auto
prev: ./MapboxCluster.md
next: ./MapboxImage.md
---

# MapboxGeocoder

Display a search form to search for places using Mapbox Geocoding API.
This component does not support outside of the map.

- [Mapbox geocoder API reference](https://github.com/mapbox/mapbox-gl-geocoder)

<h2>Table of contents</h2>

[[toc]]

## Examples

### Basic usage

<client-only>
  <mapbox-geocoder-demo />
</client-only>

```vue{5}
// Add MaboxGeocoder stylesheet.
require('@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css');

<mapbox-map
  style="margin-top: 1em; height: 400px;"
  :access-token="MAPBOX_API_KEY"
  map-style="mapbox://styles/mapbox/streets-v11">
  <mapbox-geocoder />
</mapbox-map>
```

## Props

### `options`
- Type `Object`
- Required: `false`
- Default: {}

[Documentation of all paramaters available in options](https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#parameters)


## Events
All events available on the `MapboxGeocoder` class are also available on the `MapboxGeocoder` component, prefixed by `mb-`.

### `mb-loading`

Fired when the geocoder is looking up a query. Receive a `{ query }` parameter.

### `mb-results`

Fired when the geocoder returns a response. Receive a `{ results }` parameter.

### `mb-result`

Fired when input is set. Receive a `{ result }` parameter.

### `mb-error`

Fired when input is set. Receive a `error` parameter.
