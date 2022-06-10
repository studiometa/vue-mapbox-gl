<script setup>
  import { MapboxMap, MapboxGeocoder } from '@studiometa/vue-mapbox-gl';
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';

  const log = console.log.bind(null, '[MapboxGeocoderDemo]');
</script>

<template>
  <MapboxMap
    style="margin-top: 1em; height: 400px"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11">
    <MapboxGeocoder
      @mb-loading="log('loading', $event)"
      @mb-results="log('results', $event)"
      @mb-result="log('result', $event)"
      @mb-error="log('error', $event)"
      @mb-clear="log('clear', $event)" />
  </MapboxMap>
</template>


