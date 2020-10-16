/**
 * Provide to children components a $map function to retrieve a map object
 *
 * @return {Object}
 */
var provideMap = function provideMap() {
  return {
    data: function data() {
      return {
        map: null
      };
    },
    provide: function provide() {
      var _this = this;

      return {
        $map: function $map() {
          return _this.map;
        }
      };
    }
  };
};
/**
 * Inject from parent component a $map function to retrieve a map object
 *
 * @return {Object}
 */

var injectMap = function injectMap() {
  return {
    inject: {
      $map: {
        default: null
      }
    },
    computed: {
      map: function map() {
        return typeof this.$map === 'function' ? this.$map() : null;
      }
    }
  };
};

export { injectMap, provideMap };
//# sourceMappingURL=provide-inject-map.js.map
