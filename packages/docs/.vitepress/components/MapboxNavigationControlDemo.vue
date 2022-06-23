<script setup>
  import { MapboxMap, MapboxNavigationControl } from '@studiometa/vue-mapbox-gl';
</script>

<template>
  <MapboxMap
    style="height: 400px"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11">
    <MapboxNavigationControl position="bottom-right" />
  </MapboxMap>
</template>
