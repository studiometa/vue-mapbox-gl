# Vue Mapbox GL 🗺

> A small components library to use Mapbox GL in Vue.

## Usage

Add the package to your project and its peer dependencies:

```bash
yarn add @studiometa/vue-mapbox-gl mapbox-gl
# The geocoder package is only required if you use the `MapboxGeocoder` component
yarn add @mapbox/mapbox-gl-geocoder
```

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
