<template>
  <mapbox-map
    style="height: 400px;"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11">
    <mapbox-navigation-control position="bottom-right" />
  </mapbox-map>
</template>
