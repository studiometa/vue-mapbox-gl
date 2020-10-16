import './_chunks/_rollupPluginBabelHelpers.fa6f610a.js';
import './utils/uniq-id.js';
import './mixins/provide-inject-map.js';
import './utils/bind-events.js';
export { default as MapboxLayer } from './components/MapboxLayer.js';
import './_chunks/normalize-component.d57baabe.js';
export { default as MapboxSource } from './components/MapboxSource.js';
export { default as MapboxCluster } from './components/MapboxCluster.js';
import 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder';
export { default as MapboxGeocoder } from './components/MapboxGeocoder.js';
export { default as MapboxImage } from './components/MapboxImage.js';
export { default as MapboxImages } from './components/MapboxImages.js';
import './utils/bind-props.js';
export { default as MapboxMap } from './components/MapboxMap.js';
export { default as MapboxPopup } from './components/MapboxPopup.js';
export { default as MapboxMarker } from './components/MapboxMarker.js';
export { default as MapboxNavigationControl } from './components/MapboxNavigationControl.js';
export { default as MapboxGeolocateControl } from './components/MapboxGeolocateControl.js';
import { c as components } from './_chunks/index.388811e1.js';

/**
 * Install all components
 *
 * @param  {Vue}  Vue The Vue object
 * @return {void}
 */

function install(Vue) {
  Object.keys(components).forEach(function (name) {
    Vue.component(name, components[name]);
  });
} // Export each components separately

export default install;
export { install };
//# sourceMappingURL=index.js.map
