export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // Provide the MAPBOX_API_KEY env variable to all components
  Vue.mixin({
    data() {
      return {
        MAPBOX_API_KEY: process.env.MAPBOX_API_KEY
      };
    }
  });
};
