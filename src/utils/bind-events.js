/**
 * Map a mapbox element's events to the given vue element
 *
 * @param  {Vue}    vueElement    The Vue component in question
 * @param  {Mixed}  mapboxElement The Mapbox element bound to the component
 * @param  {Array}  events        The events to map
 * @param  {String} layerId       The layer on which the events are delegated
 * @return {Array}                The list of event/handler pair bounded
 */
export function bindEvents(
  vueElement,
  mapboxElement,
  events = [],
  layerId = null,
) {
  const { _events: vueEvents } = vueElement;
  // eslint-disable-next-line no-param-reassign
  vueElement.$$events = Object.keys(vueEvents).map((vueEvent) => {
    const originalEvent = vueEvent.replace(/^mb-/, '');
    if (!events.includes(originalEvent)) {
      return null;
    }

    const handler = (...payload) => {
      vueElement.$emit(vueEvent, ...payload);
    };

    // If layerId is not null, all events must be
    // delegated from the map to the given layerId
    if (layerId) {
      mapboxElement.on(originalEvent, layerId, handler);
    } else {
      mapboxElement.on(originalEvent, handler);
    }

    return [ originalEvent, handler ];
  });
}


/**
 * Unbind events from the map element
 *
 * @param  {Mixed} mapboxElement The Mapbox element which needs unbinding
 * @param  {Array}  handlers     The list of event/handler pair to unbind
 * @param  {String} layerId      The layer on which the events where delegated
 * @return {void}
 */
export function unbindEvents(
  vueElement,
  mapboxElement,
  layerId = null,
) {
  vueElement.$$events.forEach(([ event, handler ]) => {
    // If layerId is not null, all events must be
    // delegated from the map to the given layerId
    if (layerId) {
      mapboxElement.off(event, layerId, handler);
    } else {
      mapboxElement.off(event, handler);
    }
  });
}
