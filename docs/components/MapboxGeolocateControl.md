---
sidebar: auto
prev: ./MapboxSource.md
next: ./MapboxMap.md
---


# MapboxGeolocateControl

Display a geolocatation control button on the map. When activated the map will travel to the user location.

This button **will not display** for user who are blocking the acces to the gps postion.

- [Mapbox geolocation control documentation](https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol.event:geolocate)
- [Mapbox geolocation control exemple](https://docs.mapbox.com/mapbox-gl-js/example/locate-user/)


<h2>Table of contents</h2>

[[toc]]

## Examples

### Basic usage

<client-only>
<mapbox-map
  style="margin-top: 1em; height: 400px;"
  :access-token="MAPBOX_API_KEY"
  map-style="mapbox://styles/mapbox/streets-v11">
  <mapbox-geolocate-control-demo />
</mapbox-map>
</client-only>

```vue{5}
<mapbox-map
  style="height: 400px"
  access-token="..."
  map-style="mapbox://styles/mapbox/streets-v11">
  <mapbox-geolocate-control />
</mapbox-map>
```


## Props

### `positionOptions`
- Type `[ Object ]`
- Required: `false`
- Default `{ enableHighAccuracy:false, timeout:6000 }`

A Geolocation API PositionOptions object.

### `fitBoundsOptions`
- Type `[ Object ]`
- Required: `false`
- Default `{ maxZoom: 15 }`

A fitBounds options object to use when the map is panned and zoomed to the user's location. The default is to use a maxZoom of 15 to limit how far the map will zoom in for very accurate locations.

### `trackUserLocation`
- Type `[ Boolean ]`
- Required: `false`
- Default `false`

If true the Geolocate Control becomes a toggle button and when active the map will receive updates to the user's location as it changes.

### `showAccuracyCircle`
- Type `[ Boolean ]`
- Required: `false`
- Default `true`

By default, if showUserLocation is true , a transparent circle will be drawn around the user location indicating the accuracy (95% confidence level) of the user's location. Set to false to disable. Always disabled when showUserLocation is false .

### `showUserLocation`
- Type `[ Boolean ]`
- Required: `false`
- Default `true`

By default a dot will be shown on the map at the user's location. Set to false to disable.

### `position`
- Type `[ String ]`
- Required: `false`
- Default `top-right`

The position for the geolocation control.


## Events

### `mb-trackuserlocationstart`
Emitted when the geolocation is started.

### `mb-trackuserlocationend`
Emitted when the geolocation is ended.

### `mb-trackuserlocationgeolocate`
Emitted on each Geolocation API position update which returned as success.

### `mb-error`
Emitted on each Geolocation API position update which returned as an error.

### `mb-outofmaxbounds`
Emitted on each Geolocation API position update which returned as success but user position is out of map maxBounds.
