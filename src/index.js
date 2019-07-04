import * as components from './components';

/**
 * Install all components
 *
 * @param  {Vue}  Vue The Vue object
 * @return {void}
 */
function install(Vue) {
  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name]);
  });
}

// Export each components separately
export * from './components';

// Export the install function as default
export default install;
