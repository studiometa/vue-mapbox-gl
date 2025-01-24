import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-vue';
import { MapboxMap } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

describe('The MapboxMap component', () => {
  it('should display a map', async () => {
    const { emitted, getByTestId } = render(MapboxMap, {
      props: {
        accessToken:
          'pk.eyJ1IjoiYWdlbmNlc3R1ZGlvbWV0YSIsImEiOiJjanh5ZW81aHEwOHV3M2lwZzhhNW1vdXl5In0.3hbV2QKVzZWf511JK9xCug',
        mapStyle: 'mapbox://styles/mapbox/streets-v11',
      },
      attrs: {
        'data-testid': 'map',
        style: {
          height: '100vh',
        },
      },
    });

    await expect.element(getByTestId('map')).toBeVisible();
    expect(emitted('mb-created')).toBeDefined();
  });
});
