<script>
  import mapboxgl from 'mapbox-gl';

  if (!mapboxgl) {
    throw new Error('mapboxgl is not installed.');
  }

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see https://docs.mapbox.com/mapbox-gl-js/api/markers/#fullscreencontrol
   * @type {object}
   */
  const propsConfig = {
    // eslint-disable-next-line vue/require-default-prop
    container: typeof HTMLElement !== 'undefined' ? HTMLElement : Object,
    position: {
      type: String,
      default: 'top-right',
    },
  };
</script>

<script setup>
  import { useControl } from '../composables/index.js';

  const props = defineProps(propsConfig);
  const { control } = useControl(mapboxgl.FullscreenControl, {
    propsConfig,
    props,
  });

  defineExpose({ control });
</script>
