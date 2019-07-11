---
sidebar: auto
prev: ./MapboxMarker.md
next: ./MapboxGeocoder.md
---


# MapboxCluster

Display a cluster on the map with data coming from a GeoJSON source.

- [Mapbox cluster example](https://docs.mapbox.com/mapbox-gl-js/example/cluster/)
- [Layer Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers)


<h2>Table of contents</h2>

[[toc]]

## Examples

### Basic usage

<client-only>
<mapbox-map
  style="margin-top: 1em; height: 400px;"
  :access-token="MAPBOX_API_KEY"
  map-style="mapbox://styles/mapbox/streets-v11">
  <mapbox-cluster data="/earthquakes.json" />
</mapbox-map>
</client-only>

```vue{5}
<mapbox-map
  style="height: 400px"
  access-token="..."
  map-style="mapbox://styles/mapbox/streets-v11">
  <mapbox-cluster data="/earthquakes.json" />
</mapbox-map>
```

## Props


### `data`

- Type `[ String, Object ]`
- Required `true`

The source of the data for the clustered points, must be a String or an Object of GeoJSON format.


### `clusterMaxZoom`

- Type `Number`
- Default `14`

The max zoom to cluster points on.

### `clusterRadius`

- Type `Number`
- Default `50`

Radius of each cluster when clustering point

### `clustersLayout`

- Type `Object`
- Default `{}`

The layout configuration for the clusters circles layer.

### `clustersPaint`

- Type `Object`
- Default `{ 'circle-color': '#000', 'circle-radius': 40 }`

The paint configuration for the clusters circles layer.

### `clusterCountLayout`

- Type `Object`
- Default `{ 'text-field': [ 'get', 'point_count_abbreviated' ] }`

The layout configuration for the clusters count layer.

### `clusterCountPaint`

- Type `Object`
- Default `{ 'text-color': 'white' }`

The paint configuration for the clusters count layer.

### `unclusteredPointLayerType`

- Type `String`
- Default `'circle'`

The type of the unclustered points layer.

### `unclusteredPointLayout`

- Type `Object`
- Default `{}`

The layout configuration for the unclustered points layer.

### `unclusteredPointPaint`

- Type `Object`
- Default `{ 'circle-color': '#000', 'circle-radius': 4 }`

The paint configuration for the unclustered points layer.

## Events

### `mb-cluster-click`

Emitted when the user clicks on a cluster.

**Params**
- `clusterId`: the ID of the cluster being clicked
- `event`: the Mapbox event object sent by the layer

### `mb-feature-click`

Emitted when the user clicks on a unclustered point (a feature).

**Params**
- `feature`: the feature being clicked on
- `event`: the Mapbox event object sent by the layer

### `mb-feature-mouseenter`

Emitted when the user's mouse enters an unclustered point.

**Params**
- `feature`: the feature being clicked on
- `event`: the Mapbox event object sent by the layer

### `mb-feature-mouseleave`

Emitted when the user's mouse leaves an unclustered point.

**Params**
- `event`: the Mapbox event object sent by the layer
