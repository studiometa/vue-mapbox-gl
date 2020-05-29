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
        console.log('trackuserlocationend');
      },
      ontrackuserlocationstart() {
        console.log('trackuserlocationstart');
      },
      ongeolocate() {
        console.log('geolocate');
      },
      onerror() {
        console.log('Error');
      },
    },
  };
</script>
