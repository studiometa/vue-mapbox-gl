# Introduction

The package `@studiometa/vue-mapbox-gl` is a library of Vue 3 components to facilitate usage of `mapbox-gl` in Vue applications.

It exports a set of components mapped to Mapbox GL main features as well as some premade advanced components (cluster, store locator).

## Components

Check the detailed documentation on each components for a more advanced usage:

|                             Component                              |                                                         Description                                                         |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| [MapboxMap](/components/MapboxMap/)                             | Display a map with the given style.                                                                                         |
| [MapboxMarker](/components/MapboxMarker/)                       | Display a simple or custom marker.                                                                                          |
| [MapboxCluster](/components/MapboxCluster/)                     | Display a GeoJSON as clusters.                                                                                              |
| [MapboxGeocoder](/components/MapboxGeocoder/)                   | Display a geocoder search input with the [@mapbox/mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) plugin. |
| [MapboxImage](/components/MapboxImage/)                         | Load an image to be used on the map.                                                                                        |
| [MapboxImages](/components/MapboxImages/)                       | Load multiple images to be used on the map.                                                                                 |
| [MapboxLayer](/components/MapboxLayer/)                         | Display a layer on the map.                                                                                                 |
| [MapboxNavigationControl](/components/MapboxNavigationControl/) | Display the map's navigation controls                                                                                       |
| [MapboxGeolocateControl](/components/MapboxGeolocateControl/)   | Display the map's geolocation control                                                                                 |
| [MapboxPopup](/components/MapboxPopup/)                         | Display a popup on the map                                                                                                  |
| [MapboxSource](/components/MapboxSource/)                       | Load a source of data to be used on the map                                                                                 |
| [StoreLocator](/components/StoreLocator/)                       | Easily create a Store Locator                                                                                 |


## Note

This project is a rewrite of a fork of [openearth/vue2mapbox-gl](https://github.com/openearth/vue2mapbox-gl) and is published under the [GNU GPL 3](https://www.gnu.org/licenses/gpl-3.0.en.html) license.
