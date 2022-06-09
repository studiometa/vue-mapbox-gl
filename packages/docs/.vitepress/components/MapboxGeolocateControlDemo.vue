<script setup>
  import { MapboxGeolocateControl } from '@studiometa/vue-mapbox-gl';

  const log = console.log.bind(null, '[MapboxGeolocateControl]');
</script>

<template>
  <MapboxGeolocateControl
    @mb-trackuserlocationstart="log('trackuserlocationstart', $event)"
    @mb-trackuserlocationend="log('trackuserlocationend', $event)"
    @mb-geolocate="log('geolocate', $event)"
    @mb-error="log('error', $event)" />
</template>
