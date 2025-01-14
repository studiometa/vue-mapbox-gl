import { describe, it, expect } from 'vitest';
import * as pkg from '@studiometa/vue-mapbox-gl';

describe('The package', () => {
  it('should export all components', () => {
    expect(Object.keys(pkg).sort()).toMatchInlineSnapshot(`
      [
        "MapboxCluster",
        "MapboxFullscreenControl",
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
        "StoreLocator",
        "VueScroller",
        "useControl",
        "useEventsBinding",
        "useMap",
        "usePropsBinding",
      ]
    `);
  });
});
