---
sidebar: auto
prev: ./MapboxCluster.md
next: ./MapboxGeocoder.md
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

```vue
<template>
  <mapbox-map
    style="margin-top: 1em; height: 400px;"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11">
    <mapbox-geocoder />
  </mapbox-map>
</template>

<script>
  // MaboxGeocoder stylesheet needs to be imported manually.
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
</script>
```

### Without a map

This component can be used outside of the `<mapbox-map>` component. You will need to pass the `accessToken` props.

<client-only>
  <mapbox-geocoder-demo-without-map />
</client-only>

```vue
<template>
  <mapbox-geocoder 
    :access-token="MAPBOX_API_KEY"
    @mb-created="instance => control = instance" />
</template>

<script>
  // MaboxGeocoder stylesheet needs to be imported manually.
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
</script>
```

:::warning
This feature requires a minimal version of `4.5.0` for the `@mapbox/mapbox-gl-geocoder` package, as per its [changelog entry](https://github.com/mapbox/mapbox-gl-geocoder/blob/master/CHANGELOG.md#v450).
:::

## Props

### `acccessToken`
- Type `String`
- Required: only when used without a map
- Default: `no-token`

Your Mapbox access token or `no-token` if you are not using a map style from Mapbox.

### `zoom`
- Type `Number`
- Required: `false`
- Default: `16`
Zoom level to use to animate the map when no result is found.

### `flyTo`
- Type `[ Boolen, Object ]`
- Required: `false`
- Default: `true`
If `false`, animating the map to a selected result is disabled. If `true`, animating the map will use the default animation parameters. If an object, it will be passed as options to the map flyTo or fitBounds method providing control over the animation of the transition.

### `placeholder`
- Type `String`
- Required: `false`
- Default: `Search`
Override the default placeholder attribute value.

### `proximity`
- Type `Object`
- Required: `false`
- Default: `{}`
A proximity argument: this is a geographical point given as an object with latitude and longitude properties. Search results closer to this point will be given higher priority.

### `trackProximity`
- Type `Boolean`
- Required: `false`
- Default: `true`
If `true`, the geocoder proximity will automatically update based on the map view.

### `collapsed`
- Type `Boolean`
- Required: `false`
- Default: `false`
If `true`, the geocoder control will collapse until hovered or in focus.

### `clearAndBlurOnEsc`
- Type `Boolean`
- Required: `false`
- Default: `false`
If `true`, the geocoder control will clear it's contents and blur when user presses the escape key.

### `clearOnBlur`
- Type `Boolean`
- Required: `false`
- Default: `false`
If `true`, the geocoder control will clear it's value when the input blurs.

### `bbox`
- Type `Array`
- Required: `false`
- Default: `[]`
A bounding box argument: this is a bounding box given as an array in the format [minX, minY, maxX, maxY]. Search results will be limited to the bounding box.

### `countries`
- Type `String`
- Required: `false`
- Default: `''`
A comma separated list of country codes to limit results to specified country or countries.

### `types`
- Type `String`
- Required: `false`
- Default: `''`
A comma seperated list of types that filter results to match those specified. [See documentation for available types](https://docs.mapbox.com/api/search/#data-types ). If reverseGeocode is enabled, you should specify one type. If you configure more than one type, the first type will be used.

### `minLength`
- Type `Number`
- Required: `false`
- Default: `2`
Minimum number of characters to enter before results are shown.

### `limit`
- Type `Number`
- Required: `false`
- Default: `5`
Maximum number of results to show.

### `language`
- Type `String`
- Required: `false`
- Default: ``
Specify the language to use for response text and query result weighting. Options are IETF language tags comprised of a mandatory ISO 639-1 language code and optionally one or more IETF subtags for country or script. More than one value can also be specified, separated by commas. Defaults to the browser's language settings.

### `filter`
- Type `Function`
- Required: `false`
- Default: ``
A function which accepts a Feature in the [Carmen GeoJSON format](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) to filter out results from the Geocoding API response before they are included in the suggestions list. Return true to keep the item, false otherwise.

### `localGeocoder`
- Type `Function`
- Required: `false`
- Default: ``
A function accepting the query string which performs local geocoding to supplement results from the Mapbox Geocoding API. Expected to return an Array of GeoJSON Features in the [Carmen GeoJSON format](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md).

### `reverseMode`
- Type `String`
- Required: `false`
- Default: `distance`
- Available values: `distance | score`
Set the factors that are used to sort nearby results.

### `reverseGeocode`
- Type `Boolean`
- Required: `false`
- Default: `false`
If true, enable reverse geocoding mode. In reverse geocoding, search input is expected to be coordinates in the form lat, lon, with suggestions being the reverse geocodes.

### `enableEventLogging`
- Type `Boolean`
- Required: `false`
- Default: `false`
Allow Mapbox to collect anonymous usage statistics from the plugin.

### `marker`
- Type `[ Boolean, Object ]`
- Required: `false`
- Default: `true`
If `true`, a Marker will be added to the map at the location of the user-selected result using a default set of Marker options. If the value is an object, the marker will be constructed using these options. If `false`, no marker will be added to the map. Requires that options.mapboxgl also be set.

### `render`
- Type `Function,`
- Required: `false`
- Default: ``
A function that specifies how the results should be rendered in the dropdown menu. This function should accepts a single [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) object as input and return a string. Any HTML in the returned string will be rendered.

### `getItemValue`
- Type `Function,`
- Required: `false`
- Default: `(item) => item.place_name`
A function that specifies how the selected result should be rendered in the search bar. This function should accept a single [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) object as input and return a string. HTML tags in the output string will not be rendered.

### `mode`
- Type `String,`
- Required: `false`
- Default: `mapbox.places`
A string specifying the geocoding endpoint to query. Options are `mapbox.places` and `mapbox.places-permanent`. The `mapbox.places-permanent` mode requires an enterprise license for permanent geocodes.

### `localGeocoderOnly`
- Type `Boolean,`
- Required: `false`
- Default: `false`
If `true`, indicates that the localGeocoder results should be the only ones returned to the user. If `false`, indicates that the localGeocoder results should be combined with those from the Mapbox API with the localGeocoder results ranked higher.


[Documentation of all paramaters available in options](https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#parameters)


## Events
All events available on the `MapboxGeocoder` class are also available on the `MapboxGeocoder` component, prefixed by `mb-`.

### `mb-created`

Fired when the `MapboxGeocoder` instance is created with the instance as parameter.

### `mb-loading`

Fired when the geocoder is looking up a query. Receive a `{ query }` parameter.

### `mb-results`

Fired when the geocoder returns a response. Receive a `{ results }` parameter.

### `mb-result`

Fired when input is set. Receive a `{ result }` parameter.

### `mb-error`

Fired when input is set. Receive a `error` parameter.
