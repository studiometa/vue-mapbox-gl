<template>
  <mapbox-map
    style="height: 400px"
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="[0, 0]"
    :zoom="1">
    <mapbox-images :sources="iconSources">
      <mapbox-layer
        id="pois"
        :options="layerOptions" />
    </mapbox-images>
  </mapbox-map>
</template>

<script>
  export default {
    data() {
      return {
        iconSources: [
          {
            src:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Dog_silhouette.svg/429px-Dog_silhouette.svg.png',
            id: 'dog',
          },
          {
            src:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png',
            id: 'cat',
          },
        ],
        layerOptions: {
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {
                    icon: 'cat',
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [ -25, 0 ],
                  },
                },
                {
                  type: 'Feature',
                  properties: {
                    icon: 'dog',
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [ 25, 0 ],
                  },
                },
              ],
            },
          },
          layout: {
            'icon-image': [ 'get', 'icon' ],
            'icon-size': 0.25,
          },
        },
      };
    },
  };
</script>
