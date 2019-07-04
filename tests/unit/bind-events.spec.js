require('./URL.mock.js');
const { mount } = require('@vue/test-utils');
const { Marker } = require('mapbox-gl');
const { bindEvents, unbindEvents } = require('@/utils/bind-events');

/** @type {Array} The list of events available on a marker */
const events = ['dragstart', 'drag', 'dragend'];

/** @type {Marker} A Mapbox marker */
const marker = new Marker();

/** @type {Object} The Vue component definition */
const vueComponent = {
  render: h => h('div'),
  mounted() {
    bindEvents(this, marker, events);
  },
  destroyed() {
    unbindEvents(this, marker);
  },
};

// Init test
describe('Bind Events', () => {
  const wrapper = mount(vueComponent, {
    listeners: {
      click: () => {},
      'mb-drag': () => {},
    },
  });

  // Test if the events wherecorrectly bounded
  it('The Vue component shoud have one handler for the `mb-drag` event.', () => {
    expect(wrapper.vm.$listeners).toHaveProperty('mb-drag');
    expect(wrapper.vm.$listeners['mb-drag']).toBeTruthy();
  });

  // Test if the mapbox events are all correctly bounded
  it('The Mapbox component should have one handler for the `drag` event', () => {
    const { _listeners: markerListeners } = marker;
    expect(markerListeners).toHaveProperty('drag');
    expect(markerListeners.drag).toHaveLength(1);
  });

  // Test if triggering the event on the Mapbox component also emits an event
  // on the Vue component.
  it(`The Vue component should emit an \`mb-<name>\` event when the mapbox
    element emits the equivalent event.`, () => {
    marker.fire('drag');
    expect(wrapper.emitted()['mb-drag']).toBeTruthy();
  });

  // Test if the events are correctly detached from the Mapbox component
  // when the Vue component is destroyed
  it(`The event should be unbound from the Mapbox component when
     the Vue element is destroyed.`, () => {
    wrapper.destroy();
    const { _listeners: markerListeners } = marker;
    expect(markerListeners.drag).toHaveLength(0);
  });
});
