# 🗺 Vue Mapbox GL

[![NPM Version](https://img.shields.io/npm/v/@studiometa/vue-mapbox-gl.svg?style=flat-square)](https://www.npmjs.com/package/@studiometa/vue-mapbox-gl)
[![Dependency Status](https://img.shields.io/david/studiometa/vue-mapbox-gl.svg?label=deps&style=flat-square)](https://david-dm.org/studiometa/vue-mapbox-gl)
[![devDependency Status](https://img.shields.io/david/dev/studiometa/vue-mapbox-gl.svg?label=devDeps&style=flat-square)](https://david-dm.org/studiometa/vue-mapbox-gl?type=dev)

> A small components library to use Mapbox GL in Vue.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [To Do](#to_do)
- [Contributing](#contributing)
- [Note](#note)

## Installation

Install it with Yarn:

```bash
yarn add @studiometa/vue-mapbox-gl
```
Or with NPM:

```bash
npm install @studiometa/vue-mapbox-gl
```

You will have to install the package peer dependencies in order for the components to work correctly, with Yarn:

```bash
# Install mapbox-gl
yarn add mapbox-gl
# The geocoder package is only required if you use the `MapboxGeocoder` component
yarn add @mapbox/mapbox-gl-geocoder
```

Or with NPM:

```bash
# Install mapbox-gl
npm install mapbox-gl
# The geocoder package is only required if you use the `MapboxGeocoder` component
npm install @mapbox/mapbox-gl-geocoder
```

## Usage

Install all components in Vue:

```js
import Vue from 'vue';
import VueMapbox from '@studiometa/vue-mapbox-gl';

Vue.use(VueMapbox);
```

Or import only the ones you need in your Vue components:

```js
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';

export default {
  // ...
  components: {
    MapboxMap,
    MapboxMarker,
  },
  // ...
};
```

If you need to access to the Mapbox `map` instance, you can get it via the `mb-created` event on the `MapboxMap` component which is emitted when the map has been instantiated.

```html
<template>
  <mapbox-map
    access-key="..."
    @mb-created="(mapboxInstance) => map = mapboxInstance" />
</template>

<script>
  export default {
    data() {
      return {
        map: null,
      };
    },
  };
</script>
```

### From a CDN

You can install the components directly from a CDN:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- Include Mapbox's CSS files -->
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/mapbox-gl@1.1.0/dist/mapbox-gl.css">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@mapbox/mapbox-gl-geocoder@4.4.0/dist/mapbox-gl-geocoder.css">
    <style type="text/css">
      html,
      body,
      #app,
      .mapboxgl-map {
        margin: 0;
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <mapbox-map
        access-token="..."
        map-style="mapbox://styles/mapbox/streets-v11">
        <mapbox-marker :lng-lat="[0, 0]"></mapbox-marker>
      </mapbox-map>
    </div>

    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <script src="https://unpkg.com/mapbox-gl@1.1.0/dist/mapbox-gl.js"></script>
    <script src="https://unpkg.com/@mapbox/mapbox-gl-geocoder@4.4.0/dist/mapbox-gl-geocoder.min.js"></script>
    <script src="https://unpkg.com/@studiometa/vue-mapbox-gl@1.0.4/dist/VueMapboxGl.umd.min.js"></script>
    <script defer>
      Vue.use(VueMapboxGl);
      const app = new Vue({ el: '#app' });
    </script>
  </body>
</html>
```

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
yarn
```

### Useful commands

```bash
# Build for deployment
yarn run build
# Test before deployment
yarn run test
# Lint files
yarn run lint
# Fix linting errors
yarn run fix
```

## Note

This project is a rewrite of a fork of [openearth/vue2mapbox-gl](https://github.com/openearth/vue2mapbox-gl) and is published under the [GNU GPL 3](https://www.gnu.org/licenses/gpl-3.0.en.html) license.
