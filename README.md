# 🗺 Vue 3 Mapbox GL

[![NPM Version](https://img.shields.io/npm/v/@studiometa/vue-mapbox-gl.svg?style=flat-square)](https://www.npmjs.com/package/@studiometa/vue-mapbox-gl)

> A small components library to use Mapbox GL in Vue 3 app.

## Installation & usage

Have a look at the [small guide](https://vue-mapbox-gl.studiometa.dev/guide/introduction/) for information on how to setup a simple map.

## Components

The following components are available:

|                                          Component                                          |                                                         Description                                                         | Doc. |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|------|
| [MapboxMap](https://vue-mapbox-gl.studiometa.dev/components/MapboxMap)                             | Display a map with the given style.                                                                                         | ✅    |
| [MapboxMarker](https://vue-mapbox-gl.studiometa.dev/components/MapboxMarker)                       | Display a simple or custom marker.                                                                                          | ✅    |
| [MapboxCluster](https://vue-mapbox-gl.studiometa.dev/components/MapboxCluster)                     | Display a GeoJSON as clusters.                                                                                              | ✅    |
| [MapboxGeocoder](https://vue-mapbox-gl.studiometa.dev/components/MapboxGeocoder)                   | Display a geocoder search input with the [@mapbox/mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) plugin. | ✅     |
| [MapboxImage](https://vue-mapbox-gl.studiometa.dev/components/MapboxImage)                         | Load an image to be used on the map.                                                                                        | ✅    |
| [MapboxImages](https://vue-mapbox-gl.studiometa.dev/components/MapboxImages)                       | Load multiple images to be used on the map.                                                                                 | ✅    |
| [MapboxLayer](https://vue-mapbox-gl.studiometa.dev/components/MapboxLayer)                         | Display a layer on the map.                                                                                                 | ❌    |
| [MapboxNavigationControl](https://vue-mapbox-gl.meta.fr/components/MapboxNavigationControl) | Display the map's navigation controls                                                                                       | ✅    |
| [MapboxPopup](https://vue-mapbox-gl.studiometa.dev/components/MapboxPopup)                         | Display a popup on the map                                                                                                  | ✅    |
| [MapboxSource](https://vue-mapbox-gl.studiometa.dev/components/MapboxSource)                       | Load a source of data to be used on the map                                                                                 | ❌    |

## Contributing

### Installation

```bash
# Clone the project
git clone git@github.com:studiometa/vue-mapbox-gl.git
# Cd in the repository
cd vue-mapbox-gl
# Install dependencies
npm i
```

### Useful commands

```bash
# Build for deployment
npm run build
# Test before deployment
npm run test
# Lint files
npm run lint
# Fix linting errors
npm run fix
```

## Note

This project is a rewrite of a fork of [openearth/vue2mapbox-gl](https://github.com/openearth/vue2mapbox-gl) and is published under the [GNU GPL 3](https://www.gnu.org/licenses/gpl-3.0.en.html) license.
