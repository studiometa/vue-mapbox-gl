import { _ as _slicedToArray } from '../_chunks/_rollupPluginBabelHelpers.fa6f610a.js';

/**
 * Map a mapbox element's events to the given vue element
 *
 * @param  {Vue}    vueElement    The Vue component in question
 * @param  {Mixed}  mapboxElement The Mapbox element bound to the component
 * @param  {Array}  events        The events to map
 * @param  {String} layerId       The layer on which the events are delegated
 * @return {Array}                The list of event/handler pair bounded
 */
function bindEvents(vueElement, mapboxElement) {
  var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var layerId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var vueEvents = vueElement.$listeners; // eslint-disable-next-line no-param-reassign

  vueElement.$$events = Object.keys(vueEvents).reduce(function ($$events, vueEvent) {
    var originalEvent = vueEvent.replace(/^mb-/, '');

    if (!events.includes(originalEvent)) {
      return $$events;
    }

    var handler = function handler() {
      for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
        payload[_key] = arguments[_key];
      }

      vueElement.$emit.apply(vueElement, [vueEvent].concat(payload));
    }; // If layerId is not null, all events must be
    // delegated from the map to the given layerId


    if (layerId) {
      mapboxElement.on(originalEvent, layerId, handler);
    } else {
      mapboxElement.on(originalEvent, handler);
    }

    $$events.push([originalEvent, handler]);
    return $$events;
  }, []);
}
/**
 * Unbind events from the map element
 *
 * @param  {Mixed} mapboxElement The Mapbox element which needs unbinding
 * @param  {Array}  handlers     The list of event/handler pair to unbind
 * @param  {String} layerId      The layer on which the events where delegated
 * @return {void}
 */

function unbindEvents(vueElement, mapboxElement) {
  var layerId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  vueElement.$$events.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        event = _ref2[0],
        handler = _ref2[1];

    // If layerId is not null, all events must be
    // delegated from the map to the given layerId
    if (layerId) {
      mapboxElement.off(event, layerId, handler);
    } else {
      mapboxElement.off(event, handler);
    }
  });
}

export { bindEvents, unbindEvents };
//# sourceMappingURL=bind-events.js.map
