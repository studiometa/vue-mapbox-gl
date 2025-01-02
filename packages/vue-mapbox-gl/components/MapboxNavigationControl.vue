<template>
  <div />
</template>

<script lang="ts">
  import mapboxgl from 'mapbox-gl';

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @type {object}
   */
  const propsConfig = {
    showCompass: {
      type: Boolean,
      default: true,
    },
    showZoom: {
      type: Boolean,
      default: true,
    },
    visualizePitch: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top-right',
      bind: false,
    },
  };
</script>

<script lang="ts" setup>
  import { useControl } from '../composables/index.js';

  const { NavigationControl } = mapboxgl;

  const props = defineProps(propsConfig);

  const { control } = useControl(NavigationControl, { props, propsConfig });

  defineExpose({ control });
</script>
