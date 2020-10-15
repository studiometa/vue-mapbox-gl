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
 * @param  {Vue}    vueElement    The Vue component in question
 * @param  {Mixed}  mapboxElement The Mapbox element bound to the component
 * @param  {Object} props         The component's props definition object
 * @return {void}
 */


function bindProps(vueElement, mapboxElement, props) {
  Object.keys(vueElement.$props).filter(function (prop) {
    return prop !== undefined;
  }).forEach(function (prop) {
    var setMethodName = prop === 'mapStyle' ? 'setStyle' : "set".concat(capitalizeFirstLetter(prop));
    var methodExists = typeof mapboxElement[setMethodName] === 'function';
    var propNeedsBinding = 'bind' in props[prop] ? props[prop].bind : true; // Do nothin if `setMethodName` is not a function of `mapBoxElement`
    // or if the props is not to be bounded

    if (!methodExists || !propNeedsBinding) {
      return;
    } // Set deep option to true if prop type is or can be Object


    var type = props[prop].type;
    var options = {
      deep: type === Object || Array.isArray(type) && type.includes(Object)
    };
    vueElement.$watch(prop, function (newValue) {
      mapboxElement[setMethodName](newValue);
    }, options);
  });
}

export default bindProps;
//# sourceMappingURL=bind-props.js.map
