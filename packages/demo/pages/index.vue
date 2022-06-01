<script setup>
  import { ref } from 'vue';
  import { MapboxMap, MapboxPopup, MapboxMarker } from '@studiometa/vue-mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';

  const lng = ref(0);
  const lat = ref(0);
  const zoom = ref(1);
  const createdHandler = () => console.log('Map created!');
</script>

<template>
  <div>
    <ClientOnly>
      <MapboxMap
        @mb-created="createdHandler"
        style="height: 400px"
        access-token="pk.eyJ1IjoiYWdlbmNlc3R1ZGlvbWV0YSIsImEiOiJjanh5ZW81aHEwOHV3M2lwZzhhNW1vdXl5In0.3hbV2QKVzZWf511JK9xCug"
        map-style="mapbox://styles/mapbox/streets-v11"
        :center="[lng, lat]"
        :zoom="zoom"
      >
        <MapboxPopup v-if="false" :lng-lat="[lng, lat]">
          <p>Hello world !</p>
        </MapboxPopup>

        <MapboxMarker :lng-lat="[lng, lat]">
          <!-- <template #popup> -->
          <p class="custom-marker">Hello world!</p>
          <!-- </template> -->
        </MapboxMarker>
      </MapboxMap>
    </ClientOnly>
    <input type="range" step="1" v-model="lng" />
    <input type="range" step="1" v-model="lat" />
    <input type="range" step="0.1" min="0" max="10" v-model.number="zoom" />
  </div>
</template>

<style>
  .custom-marker {
    padding: 1em;
    background-color: #fff;
    border-radius: 5px;
  }
</style>
