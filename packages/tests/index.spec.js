import { describe, it, expect } from 'vitest';
import * as pkg from '@studiometa/vue-mapbox-gl';

describe('The package', () => {
  it('should export all components', () => {
    expect(Object.keys(pkg)).toMatchInlineSnapshot(`
      [
        "StoreLocator",
        "VueScroller",
        "MapboxCluster",
        "MapboxGeocoder",
        "MapboxGeolocateControl",
        "MapboxImage",
        "MapboxImages",
        "MapboxLayer",
        "MapboxMap",
        "MapboxMarker",
        "MapboxNavigationControl",
        "MapboxPopup",
        "MapboxSource",
        "MapboxFullscreenControl",
        "useControl",
        "useEventsBinding",
        "useMap",
        "usePropsBinding",
      ]
    `);
  });
});
