<template>
  <mapbox-map
    style="margin-top: 1em; height: 400px;"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11">
    <mapbox-geocoder
      @mb-loading="onloading"
      @mb-results="onresults"
      @mb-result="onresult"
      @mb-error="onerror" />
  </mapbox-map>
</template>

<script>
  require('@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css')

  export default {
    name: 'MapboxGeocoderDemo',
    methods: {
      onloading(query) {
        console.log('onloading', query);
      },
      onresults(results) {
        console.log('onresults', results);
      },
      onresult(result) {
        console.log('onresult', result);
      },
      onerror(error) {
        console.log('onerror', error);
      },
    }
  };
</script>
