<script setup>
  import { ref, computed, watch } from 'vue';
  import { MapboxMap, MapboxGeolocateControl } from '@studiometa/vue-mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';

  const accessToken =
    'pk.eyJ1IjoiYWdlbmNlc3R1ZGlvbWV0YSIsImEiOiJjanh5ZW81aHEwOHV3M2lwZzhhNW1vdXl5In0.3hbV2QKVzZWf511JK9xCug';

  const geolocate = ref();
  const control = computed(() => geolocate.value?.control);

  // The private `_setup` property can also be watched,
  // as it is the property tested in the `trigger()` method.
  watch(
    () => control.value?._setup,
    () => console.log('Can use the `trigger()` method.'),
  );

  watch(control, (geolocateControl) => {
    if (geolocateControl) {
      geolocateControl.trigger();
    }
  });
</script>

<template>
  <div>
    <MapboxMap
      style="height: 60vh"
      :access-token="accessToken"
      map-style="mapbox://styles/mapbox/streets-v11">
      <MapboxGeolocateControl ref="geolocate" />
    </MapboxMap>
  </div>
</template>
