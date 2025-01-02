<template>
  <div :id="id">
    <slot v-if="isReady" />
  </div>
</template>

<script lang="ts">
  const propsConfig = {
    /**
     * The ID of the image
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @type {string}
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * The image as String, an HTMLImageElement, ImageData, or object with
     * width, height, and data properties with the same format as ImageData.
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @type {string | HTMLImageElement | ImageData | object}
     */
    src: {
      type: [
        String,
        typeof HTMLImageElement !== 'undefined' && HTMLImageElement,
        typeof ImageData !== 'undefined' && ImageData,
        Object,
      ],
      required: true,
    },
    /**
     * The options object for the image to add
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @type {object}
     */
    options: {
      type: Object,
      default: () => ({ pixelRatio: 1, sdf: false }),
    },
  };
</script>

<script lang="ts" setup>
  import { ref, unref, watch, onMounted, onUnmounted } from 'vue';
  import { useMap } from '../composables/index.js';

  const props = defineProps(propsConfig);
  const emit = defineEmits(['mb-add']);

  const { map } = useMap();
  const isReady = ref(false);

  /**
   * Load the given image with the Mapbox `loadImage` method
   * @param  {string}  src The source URL for the image
   * @returns {Promise}     A promise which will resolve on load
   */
  async function loadImage(src) {
    return new Promise((resolve, reject) => {
      unref(map).loadImage(src, (err, data) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    });
  }

  // Update image when the source changes.
  watch(
    () => props.src,
    async (newValue) => {
      const image = typeof newValue !== 'string' ? newValue : await loadImage(newValue);
      unref(map).updateImage(props.id, image);
    },
    { deep: true },
  );

  onMounted(async () => {
    const { id, src, options } = props;

    const image = typeof src !== 'string' ? src : await loadImage(src);
    unref(map).addImage(id, image, options);
    emit('mb-add', { id, image, options });

    isReady.value = true;
  });

  onUnmounted(() => {
    if (unref(map) && unref(map).hasImage(props.id)) {
      unref(map).removeImage(props.id);
    }
  });
</script>
