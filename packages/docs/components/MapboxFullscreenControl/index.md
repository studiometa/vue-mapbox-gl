<script setup>
  import { MapboxMap, MapboxFullscreenControl } from '@studiometa/vue-mapbox-gl';
</script>

# MapboxFullscreenControl

Display a fullscreen control button on the map.

- [Mapbox fullscreen control documentation](https://docs.mapbox.com/mapbox-gl-js/api/markers/#fullscreencontrol)
- [Mapbox fullscreen control exemple](https://docs.mapbox.com/mapbox-gl-js/example/fullscreen/)

<h2>Table of contents</h2>

[[toc]]

## Examples

### Basic usage

<ClientOnly>
<MapboxMap
  style="margin-top: 1em; height: 400px;"
  :access-token="MAPBOX_API_KEY"
  map-style="mapbox://styles/mapbox/streets-v11">
  <MapboxFullscreenControl />
</MapboxMap>
</ClientOnly>

```vue {9}
<script setup>
  import { MapboxMap, MapboxFullscreenControl } from '@studiometa/vue-mapbox-gl';
</script>

<MapboxMap
  style="height: 400px"
  access-token="..."
  map-style="mapbox://styles/mapbox/streets-v11">
  <MapboxFullscreenControl />
</MapboxMap>
```


## Props

### `container`
- Type `HTMLElement`
- Required: `false`
- Default `null`

The compatible DOM element which should be made full screen. By default, the map container element will be made full screen.

### `position`
- Type `string`
- Required: `false`
- Default `'top-right'`

The position for the fullscreen control.
