<template>
  <mapbox-map
    :access-token="MAPBOX_API_KEY"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="mapCenter"
    :zoom="1">
    <mapbox-popup
      v-if="popup.isOpen"
      :key="popup.position.join('-')"
      :lng-lat="popup.position"
      anchor="bottom"
      @mb-close="() => popup.isOpen = false">
      <div>{{ popup.data }}</div>
    </mapbox-popup>
    <mapbox-cluster
      data="/earthquakes.json"
      @mb-feature-click="openPopup($event)" />
  </mapbox-map>
</template>

<script>
  export default {
    data: () => ({
      mapCenter: [ 0, 0 ],
      popup: {
        isOpen: false,
        position: [0,0],
        data: null,
      }
    }),
    methods: {
      async openPopup({ geometry, properties }) {
        await this.$nextTick();
        this.popup.position = [ ...geometry.coordinates ];
        this.popup.isOpen = true;
        /**
         * Mapbox GL convert's properties values to JSON, so we need to parse them
         * to retreive any complex data structure such as arrays and objects.
         */
        this.popup.data = Object.entries(properties).reduce((data, [ key, value ]) => {
          try {
            data[key] = JSON.parse(value);
            return data;
          } catch (err) {
            // Silence is golden.
          }
          data[key] = value;
          return data;
        }, {});
      },
    },
  };
</script>
