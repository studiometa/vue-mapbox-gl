import { inject } from 'vue';

/**
 * @typedef {import('vue').Ref} Ref
 */

/**
 * Inject the provided map instance.
 * @returns {{ map: Ref<any> }}
 */
export function useMap() {
  const map = inject('mapbox-map', null);

  return {
    map,
  };
}
