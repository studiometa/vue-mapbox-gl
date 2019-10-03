<template>
  <div :id="id">
    <slot v-if="isReady" />
  </div>
</template>

<script>
  import { injectMap } from '../mixins/provide-inject-map';

  export default {
    name: 'MapboxImage',
    mixins: [ injectMap() ],
    props: {
      /**
       * The ID of the image
       * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
       * @type {String}
       */
      id: {
        type: String,
        required: true,
      },
      /**
       * The image as String, an HTMLImageElement, ImageData, or object with
       * width, height, and data properties with the same format as ImageData.
       * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
       * @type {String|HTMLImageElement|ImageData|Object}
       */
      src: {
        type: [ String, HTMLImageElement, ImageData, Object ],
        required: true,
      },
      /**
       * The options object for the image to add
       * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
       * @type {Object}
       */
      options: {
        type: Object,
        default: () => ({ pixelRatio: 1, sdf: false }),
      },
    },
    data() {
      return {
        isReady: false,
      };
    },
    watch: {
      src: {
        handler(newValue) {
          this.map.updateImage(this.id, newValue);
        },
        deep: true,
      },
    },
    async mounted() {
      const { id, src, options } = this;

      // If source is not a string, we don't need to load the image and we can
      // add it to the map directly.
      if (typeof src !== 'string') {
        this.map.addImage(id, src, options);
        this.$emit('add', { id, src, options });
        this.isReady = true;
        return;
      }

      try {
        const image = await this.loadImage(src);
        this.map.addImage(id, image, options);
        this.$emit('add', { id, src: image, options });
        this.isReady = true;
      } catch (err) {
        throw err;
      }
    },
    destroyed() {
      if (this.map.hasImage(this.id)) {
        this.map.removeImage(this.id);
      }
    },
    methods: {
      /**
       * Load the given image with the Mapbox `loadImage` method
       *
       * @param  {String}  src The source URL for the image
       * @return {Promise}     A promise which will resolve on load
       */
      async loadImage(src) {
        return new Promise((resolve, reject) => {
          this.map.loadImage(src, (err, data) => {
            if (err) {
              return reject(err);
            }

            return resolve(data);
          });
        });
      },
    },
  };
</script>
