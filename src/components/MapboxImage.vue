<template>
  <div :id="id" />
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
       * @type {String|HTMLImageElement|Object}
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
        default: null,
      },
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
      // If source is not a string, we don't need to load the image and we can
      // add it to the map directly.
      if (typeof this.src !== 'string') {
        this.map.addImage(this.id, this.src, this.options);
        return;
      }

      try {
        const image = await this.loadImage(this.src);
        this.map.addImage(this.id, image, this.options);
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
