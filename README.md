# 🗺 Vue Mapbox GL

[![NPM Version](https://img.shields.io/npm/v/@studiometa/vue-mapbox-gl.svg?style=flat-square)](https://www.npmjs.com/package/@studiometa/vue-mapbox-gl)
[![Dependency Status](https://img.shields.io/david/studiometa/vue-mapbox-gl.svg?label=deps&style=flat-square)](https://david-dm.org/studiometa/vue-mapbox-gl)
[![devDependency Status](https://img.shields.io/david/dev/studiometa/vue-mapbox-gl.svg?label=devDeps&style=flat-square)](https://david-dm.org/studiometa/vue-mapbox-gl?type=dev)

> A small components library to use Mapbox GL in Vue.

**⚠️ This is the support branche for v1 supporting Vue 2.**

## Installation & usage

Have a look at the [small guide](https://support-1-x--vue-mapbox-gl.netlify.app/guide/) for information on how to setup a simple map.

## Components

The following components are available:

|                                          Component                                          |                                                         Description                                                         | Doc. |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|------|
| [MapboxMap](https://support-1-x--vue-mapbox-gl.netlify.app/components/MapboxMap)                             | Display a map with the given style.                                                                                         | ✅    |
| [MapboxMarker](https://support-1-x--vue-mapbox-gl.netlify.app/components/MapboxMarker)                       | Display a simple or custom marker.                                                                                          | ✅    |
| [MapboxCluster](https://support-1-x--vue-mapbox-gl.netlify.app/components/MapboxCluster)                     | Display a GeoJSON as clusters.                                                                                              | ✅    |
| [MapboxGeocoder](https://support-1-x--vue-mapbox-gl.netlify.app/components/MapboxGeocoder)                   | Display a geocoder search input with the [@mapbox/mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) plugin. | ✅     |
| [MapboxImage](https://support-1-x--vue-mapbox-gl.netlify.app/components/MapboxImage)                         | Load an image to be used on the map.                                                                                        | ✅    |
| [MapboxImages](https://support-1-x--vue-mapbox-gl.netlify.app/components/MapboxImages)                       | Load multiple images to be used on the map.                                                                                 | ✅    |
| [MapboxLayer](https://support-1-x--vue-mapbox-gl.netlify.app/components/MapboxLayer)                         | Display a layer on the map.                                                                                                 | ❌    |
| [MapboxNavigationControl](https://support-1-x--vue-mapbox-gl.netlify.app/components/MapboxNavigationControl) | Display the map's navigation controls                                                                                       | ✅    |
| [MapboxPopup](https://support-1-x--vue-mapbox-gl.netlify.app/components/MapboxPopup)                         | Display a popup on the map                                                                                                  | ✅    |
| [MapboxSource](https://support-1-x--vue-mapbox-gl.netlify.app/components/MapboxSource)                       | Load a source of data to be used on the map                                                                                 | ❌    |

## To do

- [ ] Add tests for each component
- [ ] Write a detailed documentation

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
