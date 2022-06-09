import { inject, watch } from 'vue';

export function useMap() {
  const map = inject('mapbox-map');

  watch(map, (newValue) => {
    console.log('map has changed');
  });

  return {
    map,
  };
}
