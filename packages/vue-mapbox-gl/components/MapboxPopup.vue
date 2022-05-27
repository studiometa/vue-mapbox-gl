<template>
  <div>
    <slot />
  </div>
</template>
<script>
  import { Popup, Point, LngLat } from 'mapbox-gl';
  import bindProps from '../utils/bind-props';
  import { bindEvents, unbindEvents } from '../utils/bind-events';
  import { injectMap } from '../mixins/provide-inject-map';

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#popup
   * @type {Object}
   */
  const props = {
    lngLat: {
      type: [ LngLat, Array, Object ],
      required: true,
    },
    closeButton: {
      type: Boolean,
      default: true,
    },
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    closeOnMove: {
      type: Boolean,
      default: false,
    },
    anchor: {
      type: String,
      default: null,
    },
    offset: {
      type: [ Number, Point, Array, Object ],
      default: null,
    },
    className: {
      type: String,
      default: null,
    },
    maxWidth: {
      type: String,
      default: '240px',
    },
    /**
     * Do not render the popup on the map.
     * @type {Object}
     */
    renderless: {
      type: Boolean,
      default: false,
      bind: false,
    },
  };

  /**
   * All Map events which will be mapped/bounded to the component
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#popup.event:open
   * @type {Array}
   */
  const events = [ 'open', 'close' ];

  export default {
    name: 'MapboxPopup',
    mixins: [ injectMap() ],
    props,
    data() {
      return {
        popup: null,
      };
    },
    computed: {
      options() {
        const { lngLat, ...options } = this.$props;
        return options;
      },
    },
    mounted() {
      this.popup = new Popup(this.options)
        .setLngLat(this.lngLat)
        .setDOMContent(this.$el);

      if (!this.renderless) {
        this.popup.addTo(this.map);
      }

      bindProps(this, this.popup, props);
      bindEvents(this, this.popup, events);

      this.$emit('mb-open', this.popup);
    },
    destroyed() {
      if (this.popup) {
        unbindEvents(this, this.popup);
        this.popup.remove();
      }
    },
  };

</script>
