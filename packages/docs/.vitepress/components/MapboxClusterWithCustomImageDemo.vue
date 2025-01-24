<script setup>
  import { ref } from 'vue';
  import { MapboxMap, MapboxImage, MapboxCluster } from '@studiometa/vue-mapbox-gl';

  const mapCenter = ref([0, 0]);
</script>

<template>
  <MapboxMap
    style="height: 400px"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="mapCenter"
    :zoom="1">
    <MapboxImage
      id="cat"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png">
      <MapboxCluster
        data="/earthquakes.json"
        unclustered-point-layer-type="symbol"
        :unclustered-point-layout="{
          'icon-image': 'cat',
          'icon-size': 0.1,
        }"
        :unclustered-point-paint="null" />
    </MapboxImage>
  </MapboxMap>
</template>
