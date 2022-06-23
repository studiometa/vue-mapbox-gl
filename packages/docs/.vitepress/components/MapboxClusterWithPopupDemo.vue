<script setup>
  import { ref, nextTick } from 'vue';
  import { MapboxMap, MapboxPopup, MapboxCluster } from '@studiometa/vue-mapbox-gl';

  const mapCenter = ref([0, 0]);
  const isOpen = ref(false);
  const position = ref([0, 0]);
  const content = ref();

  async function openPopup({ geometry, properties }) {
    await nextTick();
    position.value = [...geometry.coordinates];
    isOpen.value = true;

    /**
     * Mapbox GL convert's properties values to JSON, so we need to parse them
     * to retreive any complex data structure such as arrays and objects.
     */
    content.value = Object.fromEntries(
      Object.entries(properties).map(([key, value]) => {
        try {
          return [key, JSON.parse(value)];
        } catch (err) {
          // Silence is golden.
        }

        return [key, value];
      })
    );
  }
</script>

<template>
  <MapboxMap
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="mapCenter"
    :zoom="1">
    <MapboxPopup
      v-if="isOpen"
      :key="position.join('-')"
      :lng-lat="position"
      anchor="bottom"
      @mb-close="() => (isOpen = false)">
      <pre>{{ content }}</pre>
    </MapboxPopup>
    <MapboxCluster data="/earthquakes.json" @mb-feature-click="openPopup" />
  </MapboxMap>
</template>
