<template>
  <div>
    <MapboxImage
      v-for="(source, index) in sources"
      :key="`mapbox-images-${source.id}`"
      v-bind="source"
      @mb-add="addHandler($event, index + 1)" />
    <slot v-if="isReady" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import MapboxImage from './MapboxImage.vue';

  const props = defineProps({
    /**
     * A list of sources to add to the map
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @see  ./MapboxImage.vue
     * @type {object}
     */
    sources: {
      type: Array,
      required: true,
    },
  });
  const emit = defineEmits(['mb-add', 'mb-ready']);

  const isReady = ref(false);
  const addedImages = new Map();

  /**
   * Handle the add of a single image.
   * @param {ImageBitmap} image
   * @param {number} index
   */
  function addHandler(image, index) {
    if (!addedImages.has(image.id)) {
      addedImages.set(image.id, image);
      emit('mb-add', image, index, props.sources.length);
    }

    if (addedImages.size === props.sources.length) {
      isReady.value = true;
      emit('mb-ready', addedImages.values());
    }
  }
</script>
