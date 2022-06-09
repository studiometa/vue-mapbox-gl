<template>
  <div>
    <MapboxImage
      v-for="(source, index) in sources"
      :key="`mapbox-images-${source.id}`"
      v-bind="source"
      @mb-add="addHandler($event, index + 1, sources.length)"
    />
    <slot v-if="isReady" />
  </div>
</template>

<script>
  const propsConfig = {
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
  };
</script>

<script setup>
  import { ref } from 'vue';
  import MapboxImage from './MapboxImage.vue';

  const props = defineProps(propsConfig);
  const emit = defineEmits();

  const isReady = ref(false);
  const addedImages = new Map();

  function addHandler(image, index, total) {
    console.log('addHandler', image, index, total)
    if (!addedImages.has(image.id)) {
      addedImages.set(image.id, image);
      emit('mb-add', image, index, total);
    }

    if (addedImages.size === props.sources.length) {
      isReady.value = true;
      emit('mb-ready', addedImages.values());
    }
  }
</script>
