<template>
  <div :id="id" />
</template>

<script setup>
  import { unref, watch, onMounted, onUnmounted } from 'vue';
  import { useMap } from '../composables/index.js';

  const props = defineProps({
    options: {
      type: Object,
      default: () => {},
    },
    id: {
      type: String,
      required: true,
    },
  });

  const { map } = useMap();

  watch(
    () => props.options.data,
    (newValue) => {
      unref(map).getSource(props.id).setData(newValue);
    }
  );

  onMounted(() => {
    unref(map).addSource(props.id, props.options);
  });

  onUnmounted(() => {
    // Remove all layers tied to the source
    const { _layers: layers } = unref(map).style;

    Object.values(layers).forEach((value) => {
      if (value.source === props.id) {
        unref(map).removeLayer(value.id);
      }
    });

    // And remove the source
    unref(map).removeSource(props.id);
  });
</script>
