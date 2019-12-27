<template>
  <div>
    <mapbox-map
      style="margin-top: 1em; height: 400px;"
      :access-token="MAPBOX_API_KEY"
      map-style="mapbox://styles/mapbox/streets-v11">
      <mapbox-navigation-control position="bottom-right" />
    </mapbox-map>
  </div>
</template>

<style lang="scss">
  // Import mapbox stylesheet to get + - and compass buttons styles
  @import '~mapbox-gl/dist/mapbox-gl';
</style>
