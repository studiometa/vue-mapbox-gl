<template>
  <mapbox-geolocate-control
    @mb-trackuserlocationstart="ontrackuserlocationstart()"
    @mb-trackuserlocationend="ontrackuserlocationend()"
    @mb-geolocate="ongeolocate()"
    @mb-error="onerror()" />
</template>

<script>
  export default {
    name: 'GeolocateControlDemo',
    methods: {
      ontrackuserlocationend() {
        console.log('MapboxGeolocateControl - trackuserlocationend');
      },
      ontrackuserlocationstart() {
        console.log('MapboxGeolocateControl - trackuserlocationstart');
      },
      ongeolocate() {
        console.log('MapboxGeolocateControl - geolocate');
      },
      onerror() {
        console.log('MapboxGeolocateControl - error');
      },
    },
  };
</script>
