<template>
  <mapbox-map
    style="height: 400px"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="[0, 0]"
    :zoom="1">
    <mapbox-marker :lng-lat="[0, 0]" popup>
      <template v-slot:popup>
        <p>Hello world!</p>
      </template>
    </mapbox-marker>
  </mapbox-map>
</template>
