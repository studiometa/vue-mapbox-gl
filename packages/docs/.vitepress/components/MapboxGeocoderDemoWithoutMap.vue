<template>
  <div class="preview">
    <mapbox-geocoder
      :access-token="MAPBOX_API_KEY"
      :reverse-geocode="reverseGeocode"
      @mb-loading="log('loading', $event)"
      @mb-results="log('results', $event)"
      @mb-result="log('result', $event)"
      @mb-error="log('error', $event)" />
  </div>
</template>

<script>
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';

  export default {
    name: 'MapboxGeocoderDemoWithoutMap',
    props: {
      reverseGeocode: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      log: console.log,
    },
  };
</script>

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
