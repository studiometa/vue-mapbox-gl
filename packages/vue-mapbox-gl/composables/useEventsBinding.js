import { watch, computed, useAttrs, onMounted, onUnmounted, unref } from 'vue';

/**
 * @typedef (import('vue').Ref) Ref
 */

const cache = new Map();
const regex = /onMb([A-Z])(.+)/;

/**
 * Get a Mapbox event name from a Vue event name.
 *
 * @param   {string} vueEventName
 * @returns {string}
 */
function getOriginalEvent(vueEventName) {
  if (!cache.has(vueEventName)) {
    cache.set(
      vueEventName,
      vueEventName.replace(regex, (match, $1, $2) => $1.toLowerCase() + $2)
    );
  }

  return cache.get(vueEventName);
}

/**
 * Map a mapbox element's events to a Vue component.
 *
 * @param  {(event:string, ...payload:any[]) => void} emitFn        The emit function for the current component
 * @param  {Ref<any>}                                 mapboxElement The Mapbox element bound to the component
 * @param  {string[]                                  [events]      The events to map
 * @param  {string}                                   [layerId]     The layer on which the events are delegated
 * @return {void}
 */
export function useEventsBinding(emitFn, mapboxElement, events = [], layerId = null) {
  const attrs = useAttrs();
  const vueEventNames = computed(() =>
    Object.entries(attrs)
      .filter(([name, value]) => name.startsWith('on') && typeof value === 'function')
      .map(([name]) => name)
  );

  const unbindFunctions = new Map();

  /**
   * Unbind events from the given Mapbox element.
   * @param   {string[]} eventNames
   * @returns {void}
   */
  function unbindEvents(eventNames) {
    if (!Array.isArray(eventNames)) {
      return;
    }

    eventNames.forEach((eventName) => {
      const unbindFn = unbindFunctions.get(eventName);
      if (typeof unbindFn === 'function') {
        unbindFn();
      }
    });
  }

  /**
   * Bind Vue events to the given Mapbox element.
   * @param   {string[]} eventNames
   * @returns {void}
   */
  function bindEvents(eventNames) {
    if (!Array.isArray(eventNames)) {
      return;
    }

    eventNames
      .forEach((eventName) => {
        const originalEvent = getOriginalEvent(eventName);

        if (!events.includes(originalEvent)) {
          return;
        }

        const handler = (...payload) => {
          emitFn(`mb-${originalEvent}`, ...payload);
        };

        // If layerId is not null, all events must be
        // delegated from the map to the given layerId
        if (layerId) {
          unref(mapboxElement).on(originalEvent, layerId, handler);

          unbindFunctions.set(eventName, () => {
            unref(mapboxElement).off(originalEvent, layerId, handler);
          });
        } else {
          unref(mapboxElement).on(originalEvent, handler);

          unbindFunctions.set(eventName, () => {
            unref(mapboxElement).off(originalEvent, handler);
          });
        }
      });
  }

  watch(
    vueEventNames,
    (newVueEventNames, oldVueEventNames) => {
      // Get old event names not in the new event names
      const eventNamesToDelete = Array.isArray(newVueEventNames)
        ? (oldVueEventNames ?? []).filter(
            (oldVueEventName) => !newVueEventNames.includes(oldVueEventName)
          )
        : oldVueEventNames ?? [];

      // Get new event names not in the old event names
      const eventNamesToAdd = Array.isArray(oldVueEventNames)
        ? (newVueEventNames ?? []).filter(
            (newVueEventName) => !oldVueEventNames.includes(newVueEventName)
          )
        : newVueEventNames ?? [];

      if (unref(mapboxElement)) {
        unbindEvents(eventNamesToDelete);
        bindEvents(eventNamesToAdd);
      } else {
        // We need to watch the mapbox element once as it can
        // be null when reaching this part of the code.
        const unwatch = watch(mapboxElement, (newValue) => {
          if (newValue) {
            unbindEvents(eventNamesToDelete);
            bindEvents(eventNamesToAdd);
            unwatch();
          }
        });
      }
    },
    { immediate: true }
  );
}
