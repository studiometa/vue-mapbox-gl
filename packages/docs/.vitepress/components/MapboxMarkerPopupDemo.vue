<script setup>
  import { ref } from 'vue';
  import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';

  const mapCenter = ref([0, 0]);
</script>

<template>
  <MapboxMap
    style="height: 400px"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="mapCenter"
    :zoom="1">
    <MapboxMarker :lng-lat="[0, 0]" popup>
      <template #popup>
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
