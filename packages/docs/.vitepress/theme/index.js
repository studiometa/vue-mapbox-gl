import DefaultTheme from 'vitepress/theme';
import 'mapbox-gl/dist/mapbox-gl.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.MAPBOX_API_KEY =
      'pk.eyJ1IjoiYWdlbmNlc3R1ZGlvbWV0YSIsImEiOiJjbTZxZXZidzYxaXR3MmtzaG5qNzc3NGxqIn0.c_YVpXQptiZtOgzj_5jvaw';
  },
};
