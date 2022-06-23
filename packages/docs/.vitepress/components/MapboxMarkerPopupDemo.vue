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
    <MapboxMarker :lng-lat="[0, 0]" popup>
      <template v-slot:popup>
        <p>Hello world!</p>
      </template>
    </MapboxMarker>
  </MapboxMap>
</template>

<style scoped>
  p {
    color: #333;
  }
</style>
