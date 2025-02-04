import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-vue';
import { MapboxMap } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

describe('The MapboxMap component', () => {
  it('should display a map', async () => {
    const { emitted, getByTestId } = render(MapboxMap, {
      props: {
        accessToken:
          'pk.eyJ1IjoiYWdlbmNlc3R1ZGlvbWV0YSIsImEiOiJjbTZxZXZidzYxaXR3MmtzaG5qNzc3NGxqIn0.c_YVpXQptiZtOgzj_5jvaw',
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
