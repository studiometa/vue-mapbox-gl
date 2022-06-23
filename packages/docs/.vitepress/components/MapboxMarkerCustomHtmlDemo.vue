<script setup>
  import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
</script>

<template>
  <MapboxMap
    style="height: 400px"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="[0, 0]"
    :zoom="1">
    <MapboxMarker :lng-lat="[0, 0]">
      <p class="custom-marker">Hello world!</p>
    </MapboxMarker>
  </MapboxMap>
</template>

<style scoped>
  .custom-marker {
    padding: 1em;
    background-color: #fff;
    border-radius: 5px;
  }
</style>
