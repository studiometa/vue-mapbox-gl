<script setup>
  import { ref, computed, watch } from 'vue';
  import { MapboxMap, MapboxGeolocateControl } from '@studiometa/vue-mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';

  const { accessToken } = useRuntimeConfig();

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
