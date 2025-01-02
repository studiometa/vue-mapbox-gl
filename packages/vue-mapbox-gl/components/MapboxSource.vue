<script lang="ts">
  import type { GeoJSONSource, GeoJSONSourceSpecification } from 'mapbox-gl';
</script>

<script lang="ts" setup>
  import { unref, watch, onMounted, onUnmounted } from 'vue';
  import { useMap } from '../composables/index.js';

  const props = defineProps<{
    options?: GeoJSONSourceSpecification;
    id: string;
  }>();

  const { map } = useMap();

  watch(
    () => props.options.data,
    (newValue) => {
      unref(map).getSource<GeoJSONSource>(props.id).setData(newValue);
    },
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

<template>
  <div :id="id" />
</template>
