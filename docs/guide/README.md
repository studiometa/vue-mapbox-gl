---
sidebar: auto
---

# Guide

## Installation

Install it with NPM:

```bash
npm install @studiometa/vue-mapbox-gl
```

You will have to install the peer dependencies in order for the components to work correctly:

```bash
# Install mapbox-gl
npm install mapbox-gl
# The geocoder package is only required if you use the `MapboxGeocoder` component
npm install @mapbox/mapbox-gl-geocoder
```

## Usage

### As a module

Install all components in Vue:

```js
import Vue from 'vue';
import VueMapbox from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

Vue.use(VueMapbox);
```

Or import only the ones you need in your Vue components:

```js
import MapboxMap from '@studiometa/vue-mapbox-gl/dist/components/MapboxMap';
import MapboxMarker from '@studiometa/vue-mapbox-gl/dist/components/MapboxMarker';
import 'mapbox-gl/dist/mapbox-gl.css';

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
