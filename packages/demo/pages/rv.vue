<script setup>
  import { unref, ref } from 'vue';
  import { MapboxMap, MapboxMarker, useMap } from '@studiometa/vue-mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';

  const mapComponent = ref();

  let data = ref({ features: [] });
  useFetch('/data.json', {
    key: performance.now(),
    pick: ['features'],
  }).then((response) => {
    data.value.features = unref(response.data)?.features ?? [];
  });

  const length = computed(() => unref(data).features.length);
  const markers = computed(() =>
    unref(data)
      .features.map((feature) => feature.geometry.coordinates)
  );
  const visibleMarkers = computed(() => unref(markers).filter((point, index) => index === unref(currentIndex) || pointIsVisible(point)))
  const { currentIndex, goPrev, goNext } = useGoTo(0, length);

  // Preload flying to the next index
  preloadFlyToIndex(1);

  const currentMarker = computed(() => unref(markers)[unref(currentIndex)]);

  function preloadFlyToIndex(index) {
    if (!unref(markers)[index]) {
      return;
    }

    const { map } = unref(mapComponent);
    map.flyTo({
      center: unref(markers)[index],
      zoom: 15,
      preloadOnly: true,
    });

    return map.once('idle');
  }

  function preloadFlyToNext() {
    return preloadFlyToIndex(unref(currentIndex) + 1);
  }

  function pointIsVisible(point) {
    const { map } = unref(mapComponent);
    const { x, y } = map.project(point);
    return x > 0 && x < window.innerWidth && y > 0 && y < window.innerHeight;
  }

  watch(currentMarker, async (newCurrentMarker) => {
    const { map } = unref(mapComponent);
    map.flyTo({
      center: unref(newCurrentMarker),
      zoom: 15,
    });
    await map.once('idle');
    preloadFlyToNext();
  });
</script>

<template>
  <div class="page">
    <div class="controls">
      <pre>{{ currentMarker }}</pre>
      <div>Current: {{ currentIndex }}</div>
      <button @click="goPrev">Prev</button>
      <button @click="goNext">Next</button>
    </div>
    <ClientOnly>
      <MapboxMap
        ref="mapComponent"
        style="height: 100vh"
        access-token="pk.eyJ1IjoiYWdlbmNlc3R1ZGlvbWV0YSIsImEiOiJjanh5ZW81aHEwOHV3M2lwZzhhNW1vdXl5In0.3hbV2QKVzZWf511JK9xCug"
        map-style="mapbox://styles/agencestudiometa/cl3a4fii4008e14qv9xg584ed"
        :center="[-95.225, 47.254]"
        :zoom="15"
        :scroll-zoom="false"
      >
        <MapboxMarker v-for="(marker) in visibleMarkers" :key="marker.join('-')" :lng-lat="marker">
          <p class="custom-marker">{{ markers.findIndex((value) => value.join('-') === marker.join('-')) }}</p>
        </MapboxMarker>
      </MapboxMap>
    </ClientOnly>
  </div>
</template>

<style>
  .page {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .controls {
    z-index: 10;
    position: fixed;
    top: 1em;
    left: 1em;
    padding: 1em;
    color: white;
    background-color: #000;
    border-radius: 5px;
  }

  .custom-marker {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2em;
    height: 2em;
    background-color: #f00;
    border-radius: 50%;
  }
</style>
