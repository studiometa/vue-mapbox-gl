<template>
  <div />
</template>

<script>
  import mapboxgl from 'mapbox-gl';

  const { NavigationControl } = mapboxgl;

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @type {Object}
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

<script setup>
  import { onMounted, onUnmounted, ref, unref } from 'vue';
  import { useMap, usePropsBinding } from '../composables/index.js';

  const props = defineProps(propsConfig);

  const { map } = useMap();
  const control = ref();

  usePropsBinding(props, control, propsConfig);

  onMounted(() => {
    control.value = new NavigationControl(props);
    unref(map).addControl(unref(control), props.position);
  });

  onUnmounted(() => {
    if (unref(control)) {
      unref(map).removeControl(unref(control));
    }
  });

  defineExpose({ control });
</script>
