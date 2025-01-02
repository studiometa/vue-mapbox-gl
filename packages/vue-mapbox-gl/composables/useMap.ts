import { inject } from 'vue';
import type { ShallowRef } from 'vue';
import type { Map } from 'mapbox-gl';

/**
 * Inject the provided map instance.
 */
export function useMap(): { map: ShallowRef<Map | null> } {
  const map = inject<ShallowRef<Map | null>>('mapbox-map', null);

  return {
    map,
  };
}
