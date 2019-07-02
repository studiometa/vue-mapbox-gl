<template>
  <div :id="id" />
</template>

<script>
  import { injectMap } from '../mixins/provide-inject-map';

  export default {
    name: 'MapboxSource',
    mixins: [ injectMap() ],
    props: {
      options: {
        type: Object,
        default: () => {},
      },
      id: {
        type: String,
        required: true,
      },
    },
    mounted() {
      this.map.addSource(this.id, this.options);
    },
    destroyed() {
      // Remove all layers tied to the source
      const { _layers: layers } = this.map.style;
      Object.values(layers).forEach((value) => {
        if (value.source === this.id) {
          this.map.removeLayer(value.id);
        }
      });

      // And remove the source
      this.map.removeSource(this.id);
    },
  };
</script>
