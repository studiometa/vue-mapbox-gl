<script setup>
  import { ref } from 'vue';
  import { MapboxMap, MapboxGeocoder } from '@studiometa/vue-mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';

  const config = useRuntimeConfig();
  const showMap = ref(true);
</script>

<template>
  <div>
    <label>
      <input v-model="showMap" type="checkbox" />
      toggle map
    </label>
    <MapboxMap
      v-if="showMap"
      style="height: 60vh"
      :access-token="config.public.accessToken"
      map-style="mapbox://styles/mapbox/streets-v11">
      <MapboxGeocoder />
    </MapboxMap>
  </div>
</template>
