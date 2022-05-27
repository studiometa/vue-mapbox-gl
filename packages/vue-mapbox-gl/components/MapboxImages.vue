<template>
  <div>
    <mapbox-image
      v-for="(source, index) in sources"
      :key="`mapbox-images-${source.id}`"
      v-bind="source"
      @add="addHandler($event, index + 1, sources.length)" />
    <slot v-if="isReady" />
  </div>
</template>

<script>
  import MapboxImage from './MapboxImage';

  export default {
    name: 'MapboxImages',
    components: {
      MapboxImage,
    },
    props: {
      /**
       * A list of sources to add to the map
       * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
       * @see  ./MapboxImage.vue
       * @type {Object}
       */
      sources: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        isReady: false,
        addedImages: new Map(),
      };
    },
    methods: {
      addHandler(image, index, total) {
        if (!this.addedImages.has(image.id)) {
          this.addedImages.set(image.id, image);
          this.$emit('add', image, index, total);
        }

        if (this.addedImages.size === this.sources.length) {
          this.isReady = true;
          this.$emit('ready', this.addedImages.values());
        }
      },
    },
  };
</script>
