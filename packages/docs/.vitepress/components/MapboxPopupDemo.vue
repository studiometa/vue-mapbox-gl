<script setup>
  import { MapboxMap, MapboxPopup } from '@studiometa/vue-mapbox-gl';
</script>

<template>
  <MapboxMap
    style="margin-top: 1em; height: 400px"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11">
    <MapboxPopup :lng-lat="[10, 10]">
      <p>Hello world !</p>
    </MapboxPopup>
  </MapboxMap>
</template>
