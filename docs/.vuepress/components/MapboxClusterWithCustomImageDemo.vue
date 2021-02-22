<template>
  <mapbox-map
    style="height: 400px"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="[0, 0]"
    :zoom="1">
    <mapbox-image id="cat" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png">
      <mapbox-cluster
        data="/earthquakes.json"
        unclustered-point-layer-type="symbol"
        :unclustered-point-layout="{
          'icon-image': 'cat',
          'icon-size': 0.1,
        }"
        :unclustered-point-paint="null" />
    </mapbox-image>
  </mapbox-map>
</template>

