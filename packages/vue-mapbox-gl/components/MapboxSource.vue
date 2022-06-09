<template>
  <div :id="id" />
</template>

<script>
  const propsConfig = {
    options: {
      type: Object,
      default: () => {},
    },
    id: {
      type: String,
      required: true,
    },
  };
</script>

<script setup>
  import { watch } from 'vue';
  import { useMap } from '../composables/index.js';

  const props = defineProps(propsConfig);

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
