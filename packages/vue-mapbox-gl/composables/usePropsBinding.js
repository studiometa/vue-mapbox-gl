import { watch, unref } from 'vue';

/**
 * @typedef {import('vue').Ref} Ref
 */

/**
 * Capitalize the first letter of a string
 *
 * @param  {String} string The string to capitalize
 * @return {String}        The capitalized string
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Map a mapbox element's events to the given vue element
 *
 * @template {any}    T
 * @param    {any}    props          The component props.
 * @param    {Ref<T>} mapboxElement  The Mapbox element bound to the component.
 * @param    {any}    propsConfig    The props original configuration.
 */
export function usePropsBinding(props, mapboxElement, propsConfig) {
  /**
   * Bind props to the given mapboxElement in order to update them when they change.
   *
   * @param   {T} element
   * @returns {void}
   */
  function bindProps(element) {
    Object.keys(props)
      .filter((prop) => props[prop] !== undefined && props[prop] !== null)
      .forEach((prop) => {
        const setMethodName =
          prop === 'mapStyle' ? 'setStyle' : `set${capitalizeFirstLetter(prop)}`;

        const methodExists = typeof element[setMethodName] === 'function';
        const propNeedsBinding =
          typeof propsConfig[prop] === 'undefined' || 'bind' in propsConfig[prop]
            ? propsConfig[prop]?.bind ?? false
            : true;

        // Do nothing if `setMethodName` is not a function of `mapBoxElement`
        // or if the props is not to be bounded
        if (!methodExists || !propNeedsBinding) {
          return;
        }

        // Set deep option to true if prop type is or can be Object
        const { type } = props[prop];
        const options = {
          deep: type === Object || (Array.isArray(type) && type.includes(Object)),
        };

        watch(
          () => props[prop],
          (newValue) => {
            element[setMethodName](newValue);
          },
          options
        );
      });
  }

  if (unref(mapboxElement)) {
    bindProps(unref(mapboxElement));
  } else {
    const unwatch = watch(mapboxElement, (newValue) => {
      if (newValue) {
        bindProps(newValue);
        unwatch();
      }
    });
  }
}
