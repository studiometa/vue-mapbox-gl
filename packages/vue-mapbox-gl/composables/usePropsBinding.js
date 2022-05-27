import { onMounted, nextTick } from 'vue';

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
 * @param  {Vue}    vueElement    The Vue component in question
 * @param  {Mixed}  mapboxElement The Mapbox element bound to the component
 * @param  {Array}  events        The events to map
 * @param  {String} layerId       The layer on which the events are delegated
 * @return {Array}                The list of event/handler pair bounded
 */
export function usePropsBinding(props, getMapboxElement, propsConfig) {
  onMounted(async () => {
    await nextTick();
    const mapboxElement = getMapboxElement();
    Object.keys(props)
      .filter((prop) => props[prop] !== undefined)
      .forEach((prop) => {
        const setMethodName =
          prop === 'mapStyle' ? 'setStyle' : `set${capitalizeFirstLetter(prop)}`;

        const methodExists = typeof mapboxElement[setMethodName] === 'function';
        const propNeedsBinding = 'bind' in propsConfig[prop] ? propsConfig[prop].bind : true;

        // Do nothin if `setMethodName` is not a function of `mapBoxElement`
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
            mapboxElement[setMethodName](newValue);
          },
          options
        );
      });
  });
}
