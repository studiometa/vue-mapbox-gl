<script setup>
  import { ref } from 'vue';
  import { MapboxGeocoder } from '@studiometa/vue-mapbox-gl';
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';

  const props = defineProps({
    reverseGeocode: {
      type: Boolean,
      default: false,
    },
  });

  const log = console.log.bind(null, '[MapboxGeocoderDemoWithoutMap]');
</script>

<template>
  <div class="preview">
    <div>
      <MapboxGeocoder
        :access-token="MAPBOX_API_KEY"
        :reverse-geocode="reverseGeocode"
        @mb-loading="log('loading', $event)"
        @mb-results="log('results', $event)"
        @mb-result="log('result', $event)"
        @mb-error="log('error', $event)" />
    </div>
  </div>
</template>

<style>
  .preview {
    z-index: 999;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3em;
    background-color: #eee;
    border-radius: 6px;
  }
</style>
