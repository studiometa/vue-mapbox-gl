import MapboxMap from './components/MapboxMap';
import MapboxCluster from './components/MapboxCluster';
import MapboxGeocoder from './components/MapboxGeocoder';
import MapboxLayer from './components/MapboxLayer';
import MapboxMarker from './components/MapboxMarker';
import MapboxNavigationControl from './components/MapboxNavigationControl';
import MapboxPopup from './components/MapboxPopup';
import MapboxSource from './components/MapboxSource';

/**
 * Install all components
 *
 * @param  {Vue}  Vue The Vue object
 * @return {void}
 */
function install(Vue) {
  Vue.component('mapbox-map', MapboxMap);
  Vue.component('mapbox-cluster', MapboxCluster);
  Vue.component('mapbox-geocoder', MapboxGeocoder);
  Vue.component('mapbox-layer', MapboxLayer);
  Vue.component('mapbox-marker', MapboxMarker);
  Vue.component('mapbox-navigation-control', MapboxNavigationControl);
  Vue.component('mapbox-popup', MapboxPopup);
  Vue.component('mapbox-source', MapboxSource);
}

// Export each components separately
export {
  MapboxMap,
  MapboxCluster,
  MapboxGeocoder,
  MapboxLayer,
  MapboxMarker,
  MapboxNavigationControl,
  MapboxPopup,
  MapboxSource,
};

// Export the install function as default
export default install;
