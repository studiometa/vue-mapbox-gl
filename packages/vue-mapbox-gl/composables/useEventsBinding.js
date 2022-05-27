import { computed, useAttrs, onMounted, onUnmounted } from 'vue';

/**
 * Map a mapbox element's events to a Vue component.
 *
 * @param  {(event:string, ...payload:any[]) => void} emitFn   The emit function for the current component
 * @param  {() => any}                        getMapboxElement The Mapbox element bound to the component
 * @param  {string[]                          events           The events to map
 * @param  {string}                           [layerId]        The layer on which the events are delegated
 * @return {void}
 */
export function useEventsBinding(emitFn, getMapboxElement, events = [], layerId = null) {
  const attrs = useAttrs();
  const listeners = computed(() =>
    Object.entries(attrs).filter(
      ([name, value]) => name.startsWith('on') && typeof value === 'function'
    )
  );

  onMounted(() => {
    const mapboxElement = getMapboxElement();
    const unbindEvents = listeners.value.map(([listener]) => {
      const originalEvent = listener.replace(/^onMb/, '');

      if (!events.includes(originalEvent)) {
        return;
      }

      const handler = (...payload) => {
        emitFn(listener, ...payload);
      };

      // If layerId is not null, all events must be
      // delegated from the map to the given layerId
      if (layerId) {
        mapboxElement.on(originalEvent, layerId, handler);

        return () => {
          mapboxElement.off(originalEvent, layerId, handler);
        };
      } else {
        mapboxElement.on(originalEvent, handler);

        return () => {
          mapboxElement.off(originalEvent, handler);
        };
      }
    }).filter(Boolean);

    onUnmounted(() => {
      unbindEvents.forEach((unbindEvent) => unbindEvent());
    });
  });
}
