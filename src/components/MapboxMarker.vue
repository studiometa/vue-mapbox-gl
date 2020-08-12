<template>
  <div>
    <div ref="content">
      <slot />
    </div>
    <mapbox-popup
      ref="popup"
      v-if="popup"
      v-bind="popupOptions">
      <slot name="popup" />
    </mapbox-popup>
  </div>
</template>

<script>
  import { Marker, Point } from 'mapbox-gl';
  import { injectMap } from '../mixins/provide-inject-map';
  import bindProps from '../utils/bind-props';
  import { bindEvents, unbindEvents } from '../utils/bind-events';
  import MapboxPopup from './MapboxPopup';

  /**
   * Component's props definition, we need to declare it outside the component
   * to be able to test the default values and the types.
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker
   * @type {Object}
   */
  const props = {
    lngLat: {
      type: Array,
      required: true,
    },
    popup: {
      type: [ Object, Boolean ],
      default: false,
      bind: false,
    },
    element: {
      type: HTMLElement,
      default: null,
    },
    offset: {
      type: [ Point, Array ],
      default: null,
    },
    anchor: {
      type: String,
      default: 'center',
    },
    color: {
      type: String,
      default: null,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
  };

  /**
   * All Map events which will be mapped/bounded to the component
   * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:dragstart
   * @type {Array}
   */
  const events = [ 'dragstart', 'drag', 'dragend' ];

  export default {
    name: 'MapboxMarker',
    components: {
      MapboxPopup,
    },
    mixins: [ injectMap() ],
    props,
    computed: {
      hasPopup() {
        return this.popup !== false && this.$refs.popup !== undefined;
      },
      popupInstance() {
        return this.hasPopup ? this.$refs.popup.popup : null;
      },
      popupOptions() {
        return {
          lngLat: this.lngLat,
          ...this.popup,
          renderless: true,
        };
      },
      options() {
        const { lngLat, popup, ...options } = this.$props;

        // Use current component's element if container is not set
        if (this.$slots.default) {
          options.element = this.$refs.content;
        }

        return options;
      },
    },
    mounted() {
      this.marker = new Marker(this.options)
        .setLngLat(this.lngLat)
        .addTo(this.map);

      // Bind props and events
      bindProps(this, this.marker, props);
      bindEvents(this, this.marker, events);

      if (this.hasPopup) {
        this.marker.setPopup(this.popupInstance);
      }
    },
    destroyed() {
      if (this.marker) {
        unbindEvents(this, this.marker);
        this.marker.remove();
      }
    },
  };
</script>
