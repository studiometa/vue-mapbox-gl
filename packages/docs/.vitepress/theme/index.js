import DefaultTheme from 'vitepress/theme';
import 'mapbox-gl/dist/mapbox-gl.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.MAPBOX_API_KEY =
      'pk.eyJ1IjoiYWdlbmNlc3R1ZGlvbWV0YSIsImEiOiJjanh5ZW81aHEwOHV3M2lwZzhhNW1vdXl5In0.3hbV2QKVzZWf511JK9xCug';
  },
};
