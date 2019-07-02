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
 * Automatically set a mapbox element's props when the vue element props changes
 *
 * @param  {Vue}    vueElement      The Vue component in question
 * @param  {Mixed}  mapboxElement   The Mapbox element bound to the component
 * @param  {Object} propsDefinition The component's props definition object
 * @return {void}
 */
export default function bindProps(vueElement, mapboxElement, propsDefinition) {
  Object.keys(vueElement.$props)
    .filter(prop => prop !== undefined)
    .forEach((prop) => {
      const setMethodName = prop === 'mapStyle'
        ? 'setStyle'
        : `set${capitalizeFirstLetter(prop)}`;

      // Do nothin if `setMethodName` is not a function of `mapBoxElement`
      // or if the props is not to be bounded
      if (typeof mapboxElement[setMethodName] !== 'function' || !prop.bind) {
        return;
      }

      // Set deep option to true if prop type is or can be Object
      const { type } = propsDefinition[prop];
      const options = {
        deep: type === Object || (Array.isArray(type) && type.includes(Object)),
      };

      vueElement.$watch(
        prop,
        (newVal) => {
          mapboxElement[setMethodName](newVal);
        },
        options
      );
    });
}
