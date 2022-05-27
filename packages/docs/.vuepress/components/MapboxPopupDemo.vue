<template>
  <mapbox-map
    style="margin-top: 1em; height: 400px;"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11">
    <mapbox-popup :lng-lat="[10, 10]">
      <p>Hello world !</p>
    </mapbox-popup>
  </mapbox-map>
</template>
