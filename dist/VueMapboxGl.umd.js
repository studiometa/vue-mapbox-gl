(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mapbox-gl"), require("@mapbox/mapbox-gl-geocoder"));
	else if(typeof define === 'function' && define.amd)
		define(["mapboxgl", "MapboxGeocoder"], factory);
	else if(typeof exports === 'object')
		exports["VueMapboxGl"] = factory(require("mapbox-gl"), require("@mapbox/mapbox-gl-geocoder"));
	else
		root["VueMapboxGl"] = factory(root["mapboxgl"], root["MapboxGeocoder"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__2ff6__, __WEBPACK_EXTERNAL_MODULE__7c06__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2ff6":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2ff6__;

/***/ }),

/***/ "6dd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "7c06":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7c06__;

/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "MapboxCluster", function() { return MapboxCluster; });
__webpack_require__.d(components_namespaceObject, "MapboxGeocoder", function() { return MapboxGeocoder; });
__webpack_require__.d(components_namespaceObject, "MapboxImage", function() { return MapboxImage; });
__webpack_require__.d(components_namespaceObject, "MapboxImages", function() { return MapboxImages; });
__webpack_require__.d(components_namespaceObject, "MapboxLayer", function() { return MapboxLayer; });
__webpack_require__.d(components_namespaceObject, "MapboxMap", function() { return MapboxMap; });
__webpack_require__.d(components_namespaceObject, "MapboxMarker", function() { return MapboxMarker; });
__webpack_require__.d(components_namespaceObject, "MapboxNavigationControl", function() { return MapboxNavigationControl; });
__webpack_require__.d(components_namespaceObject, "MapboxPopup", function() { return MapboxPopup; });
__webpack_require__.d(components_namespaceObject, "MapboxSource", function() { return MapboxSource; });
__webpack_require__.d(components_namespaceObject, "MapboxGeolocateControl", function() { return MapboxGeolocateControl; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxCluster.vue?vue&type=template&id=15b39ef1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}},[_c('mapbox-source',{attrs:{"id":_vm.sourceId,"options":_vm.source}}),_c('mapbox-layer',{attrs:{"id":_vm.clustersLayer.id,"options":_vm.clustersLayer},on:{"click":_vm.clustersClickHandler,"mouseenter":_vm.clustersMouseenterHandler,"mouseleave":_vm.clustersMouseleaveHandler}}),_c('mapbox-layer',{attrs:{"id":_vm.clusterCountLayer.id,"options":_vm.clusterCountLayer}}),_c('mapbox-layer',{attrs:{"id":_vm.unclusteredPointLayer.id,"options":_vm.unclusteredPointLayer},on:{"click":_vm.unclusteredPointClickHandler,"mouseenter":_vm.unclusteredPointMouseenterHandler,"mouseleave":_vm.unclusteredPointMouseleaveHandler}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxCluster.vue?vue&type=template&id=15b39ef1&

// CONCATENATED MODULE: ./src/utils/uniq-id.js
/**
 * Get a prefixed or not uniq id
 * @param  {String} prefix The prefix to add to the generated id
 * @return {String}        A (prefixed) uniq id
 */
function uniqId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var uniq = new Date().getTime() + Math.floor(Math.random() * 10000 + 1);
  return prefix ? prefix + uniq.toString(16) : uniq.toString(16);
}
// CONCATENATED MODULE: ./src/mixins/provide-inject-map.js
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxLayer.vue?vue&type=template&id=09492b96&
var MapboxLayervue_type_template_id_09492b96_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var MapboxLayervue_type_template_id_09492b96_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxLayer.vue?vue&type=template&id=09492b96&

// CONCATENATED MODULE: ./src/utils/bind-events.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Map a mapbox element's events to the given vue element
 *
 * @param  {Vue}    vueElement    The Vue component in question
 * @param  {Mixed}  mapboxElement The Mapbox element bound to the component
 * @param  {Array}  events        The events to map
 * @param  {String} layerId       The layer on which the events are delegated
 * @return {Array}                The list of event/handler pair bounded
 */
function bindEvents(vueElement, mapboxElement) {
  var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var layerId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var vueEvents = vueElement.$listeners; // eslint-disable-next-line no-param-reassign

  vueElement.$$events = Object.keys(vueEvents).reduce(function ($$events, vueEvent) {
    var originalEvent = vueEvent.replace(/^mb-/, '');

    if (!events.includes(originalEvent)) {
      return $$events;
    }

    var handler = function handler() {
      for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
        payload[_key] = arguments[_key];
      }

      vueElement.$emit.apply(vueElement, [vueEvent].concat(payload));
    }; // If layerId is not null, all events must be
    // delegated from the map to the given layerId


    if (layerId) {
      mapboxElement.on(originalEvent, layerId, handler);
    } else {
      mapboxElement.on(originalEvent, handler);
    }

    $$events.push([originalEvent, handler]);
    return $$events;
  }, []);
}
/**
 * Unbind events from the map element
 *
 * @param  {Mixed} mapboxElement The Mapbox element which needs unbinding
 * @param  {Array}  handlers     The list of event/handler pair to unbind
 * @param  {String} layerId      The layer on which the events where delegated
 * @return {void}
 */

function unbindEvents(vueElement, mapboxElement) {
  var layerId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  vueElement.$$events.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        event = _ref2[0],
        handler = _ref2[1];

    // If layerId is not null, all events must be
    // delegated from the map to the given layerId
    if (layerId) {
      mapboxElement.off(event, layerId, handler);
    } else {
      mapboxElement.off(event, handler);
    }
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxLayer.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//


/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#on
 * @type {Array}
 */

var events = ['mousedown', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout', 'contextmenu', 'touchstart', 'touchend', 'touchcancel'];
/* harmony default export */ var MapboxLayervue_type_script_lang_js_ = ({
  name: 'MapboxLayer',
  mixins: [injectMap()],
  props: {
    /**
     * Id of the layer
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
     * @type {String}
     */
    id: {
      type: String,
      required: true
    },

    /**
     * Options for the layer
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
     * @see  https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers
     * @type {Object}
     */
    options: {
      type: Object,
      default: function _default() {}
    },

    /**
     * The ID of an existing layer to insert the new layer before.
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
     * @type {String}
     */
    beforeId: {
      type: String,
      default: undefined
    }
  },
  mounted: function mounted() {
    // Make sure to remove any existing layer and/or source to avoid conflicts
    if (this.layerExists()) {
      this.map.removeLayer(this.id);
    }

    if (this.sourceExists()) {
      this.map.removeSource(this.id);
    } // Bind events


    bindEvents(this, this.map, events, this.id);
    this.map.addLayer(_objectSpread({}, this.options, {
      id: this.id
    }), this.beforeId);
  },
  destroyed: function destroyed() {
    if (this.layerExists()) {
      unbindEvents(this, this.map, this.id);
      this.map.removeLayer(this.id);
    }

    if (this.sourceExists()) {
      this.map.removeSource(this.id);
    }
  },
  methods: {
    /**
     * Test if the component's layer exists
     * @return {Boolean}
     */
    layerExists: function layerExists() {
      return typeof this.map.getLayer(this.id) !== 'undefined';
    },

    /**
     * Test if a source with the layer's ID exists
     * @return {Boolean}
     */
    sourceExists: function sourceExists() {
      return typeof this.map.getSource(this.id) !== 'undefined';
    }
  }
});
// CONCATENATED MODULE: ./src/components/MapboxLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxLayervue_type_script_lang_js_ = (MapboxLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/MapboxLayer.vue





/* normalize component */

var component = normalizeComponent(
  components_MapboxLayervue_type_script_lang_js_,
  MapboxLayervue_type_template_id_09492b96_render,
  MapboxLayervue_type_template_id_09492b96_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxLayer = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxSource.vue?vue&type=template&id=7e2167f8&
var MapboxSourcevue_type_template_id_7e2167f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var MapboxSourcevue_type_template_id_7e2167f8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxSource.vue?vue&type=template&id=7e2167f8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxSource.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var MapboxSourcevue_type_script_lang_js_ = ({
  name: 'MapboxSource',
  mixins: [injectMap()],
  props: {
    options: {
      type: Object,
      default: function _default() {}
    },
    id: {
      type: String,
      required: true
    }
  },
  watch: {
    'options.data': function watchOptionsData(newData) {
      this.map.getSource(this.id).setData(newData);
    }
  },
  mounted: function mounted() {
    this.map.addSource(this.id, this.options);
  },
  destroyed: function destroyed() {
    var _this = this;

    // Remove all layers tied to the source
    var layers = this.map.style._layers;
    Object.values(layers).forEach(function (value) {
      if (value.source === _this.id) {
        _this.map.removeLayer(value.id);
      }
    }); // And remove the source

    this.map.removeSource(this.id);
  }
});
// CONCATENATED MODULE: ./src/components/MapboxSource.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxSourcevue_type_script_lang_js_ = (MapboxSourcevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxSource.vue





/* normalize component */

var MapboxSource_component = normalizeComponent(
  components_MapboxSourcevue_type_script_lang_js_,
  MapboxSourcevue_type_template_id_7e2167f8_render,
  MapboxSourcevue_type_template_id_7e2167f8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxSource = (MapboxSource_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxCluster.vue?vue&type=script&lang=js&
function MapboxClustervue_type_script_lang_js_slicedToArray(arr, i) { return MapboxClustervue_type_script_lang_js_arrayWithHoles(arr) || MapboxClustervue_type_script_lang_js_iterableToArrayLimit(arr, i) || MapboxClustervue_type_script_lang_js_nonIterableRest(); }

function MapboxClustervue_type_script_lang_js_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function MapboxClustervue_type_script_lang_js_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MapboxClustervue_type_script_lang_js_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var MapboxClustervue_type_script_lang_js_ = ({
  name: 'MapboxCluster',
  components: {
    MapboxLayer: MapboxLayer,
    MapboxSource: MapboxSource
  },
  mixins: [injectMap()],
  props: {
    /**
     * The source of the data for the clustered points,
     * must be a String or an Object of GeoJSON format.
     * @type {String|GeoJSON}
     */
    data: {
      type: [String, Object],
      required: true
    },

    /**
     * The max zoom to cluster points on
     * @type {Number}
     */
    clusterMaxZoom: {
      type: Number,
      default: 14
    },

    /**
     * Radius of each cluster when clustering point
     * @type {Number}
     */
    clusterRadius: {
      type: Number,
      default: 50
    },

    /**
     * The layout configuration for the clusters circles
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {Object}
     */
    clustersLayout: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * The paint configuration for the clusters circles
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {Object}
     */
    clustersPaint: {
      type: Object,
      default: function _default() {
        return {
          'circle-color': '#000',
          'circle-radius': 40
        };
      }
    },

    /**
     * The layout configuration for the clusters count
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {Object}
     */
    clusterCountLayout: {
      type: Object,
      default: function _default() {
        return {
          'text-field': ['get', 'point_count_abbreviated']
        };
      }
    },

    /**
     * The paint configuration for the clusters count
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {Object}
     */
    clusterCountPaint: {
      type: Object,
      default: function _default() {
        return {
          'text-color': 'white'
        };
      }
    },

    /**
     * The type of the unclustered points layer
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {String}
     */
    unclusteredPointLayerType: {
      type: String,
      default: 'circle'
    },

    /**
     * The layout configuration for the unclustered points
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {Object}
     */
    unclusteredPointLayout: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * The paint configuration for the unclustered points
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {Object}
     */
    unclusteredPointPaint: {
      type: Object,
      default: function _default() {
        return {
          'circle-color': '#000',
          'circle-radius': 4
        };
      }
    }
  },
  data: function data() {
    return {
      id: uniqId('mb-cluster-')
    };
  },
  computed: {
    /**
     * The source ID
     * @type {String}
     */
    sourceId: function sourceId() {
      return this.getId('source');
    },

    /**
     * The source configuration
     * @type {Object}
     */
    source: function source() {
      var _this$$props = this.$props,
          data = _this$$props.data,
          clusterMaxZoom = _this$$props.clusterMaxZoom,
          clusterRadius = _this$$props.clusterRadius;
      return {
        type: 'geojson',
        cluster: true,
        data: data,
        clusterMaxZoom: clusterMaxZoom,
        clusterRadius: clusterRadius
      };
    },

    /**
     * The clusters layer configuration
     * @type {Object}
     */
    clustersLayer: function clustersLayer() {
      return {
        id: this.getId('clusters'),
        type: 'circle',
        source: this.sourceId,
        filter: ['has', 'point_count'],
        layout: this.clustersLayout,
        paint: this.clustersPaint
      };
    },

    /**
     * The cluster count layer configuration
     * @type {Object}
     */
    clusterCountLayer: function clusterCountLayer() {
      return {
        id: this.getId('cluster-count'),
        type: 'symbol',
        source: this.sourceId,
        filter: ['has', 'point_count'],
        layout: this.clusterCountLayout,
        paint: this.clusterCountPaint
      };
    },

    /**
     * The unclustered points layer
     * @type {Object}
     */
    unclusteredPointLayer: function unclusteredPointLayer() {
      return {
        id: this.getId('unclustered-point'),
        type: this.unclusteredPointLayerType,
        source: this.sourceId,
        filter: ['!', ['has', 'point_count']],
        layout: this.unclusteredPointLayout,
        paint: this.unclusteredPointPaint
      };
    }
  },
  methods: {
    /**
     * Get a suffixed ID based on the instance ID
     *
     * @param  {String} suffix The suffix of the ID
     * @return {String}        The formatted ID
     */
    getId: function getId(suffix) {
      return "".concat(this.id, "-").concat(suffix);
    },

    /**
     * Click handler for the clusters layer to zoom on the clicked cluster
     *
     * @param  {Object} event The Mapbox click event's object
     * @return {void}
     */
    clustersClickHandler: function clustersClickHandler(event) {
      var _this = this;

      var feature = this.map.queryRenderedFeatures(event.point, {
        layers: [this.clustersLayer.id]
      })[0];
      var clusterId = feature.properties.cluster_id; // Emit a cluster click event

      this.$emit('mb-cluster-click', clusterId, event);
      this.map.getSource(this.sourceId).getClusterExpansionZoom(clusterId, function (err, zoom) {
        if (err) {
          return;
        }

        _this.map.easeTo({
          center: feature.geometry.coordinates,
          zoom: zoom
        });
      });
    },

    /**
     * Mouseenter handler for the clusters layer to set a pointer cursor
     *
     * @return {void}
     */
    clustersMouseenterHandler: function clustersMouseenterHandler() {
      this.map.getCanvas().style.cursor = 'pointer';
    },

    /**
     * Mouseleave handler for the clusters layer to unset the pointer cursor
     *
     * @return {void}
     */
    clustersMouseleaveHandler: function clustersMouseleaveHandler() {
      this.map.getCanvas().style.cursor = '';
    },

    /**
     * Handler for the click event on a single feature, emits an event with
     * the feature object and the original event object
     *
     * @param  {Object} event The Mapbox click event's object
     * @return {void}
     */
    unclusteredPointClickHandler: function unclusteredPointClickHandler(event) {
      var _event$features = MapboxClustervue_type_script_lang_js_slicedToArray(event.features, 1),
          feature = _event$features[0];

      this.$emit('mb-feature-click', feature, event);
    },

    /**
     * Handler for the mouseenter event on a single feature.
     * Emits an event with the feature object and the original event as
     * parameters, and sets the cursor style to pointer.
     *
     * @param  {Object} event The Mapbox mouseenter event's object
     * @return {void}
     */
    unclusteredPointMouseenterHandler: function unclusteredPointMouseenterHandler(event) {
      var _event$features2 = MapboxClustervue_type_script_lang_js_slicedToArray(event.features, 1),
          feature = _event$features2[0];

      this.$emit('mb-feature-mouseenter', feature, event);
      this.map.getCanvas().style.cursor = 'pointer';
    },

    /**
     * Handler for the mouseleave event on a single feature.
     * Emits an event with the original event object as parameter, and resets
     * the cursor style to its default value.
     *
     * @param  {Object} event The Mapbox mouselvea event‘s object
     * @return {void}
     */
    unclusteredPointMouseleaveHandler: function unclusteredPointMouseleaveHandler(event) {
      this.$emit('mb-feature-mouseleave', event);
      this.map.getCanvas().style.cursor = '';
    }
  }
});
// CONCATENATED MODULE: ./src/components/MapboxCluster.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxClustervue_type_script_lang_js_ = (MapboxClustervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxCluster.vue





/* normalize component */

var MapboxCluster_component = normalizeComponent(
  components_MapboxClustervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxCluster = (MapboxCluster_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxGeocoder.vue?vue&type=template&id=07b00dd9&
var MapboxGeocodervue_type_template_id_07b00dd9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var MapboxGeocodervue_type_template_id_07b00dd9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxGeocoder.vue?vue&type=template&id=07b00dd9&

// EXTERNAL MODULE: external {"commonjs":"mapbox-gl","commonjs2":"mapbox-gl","amd":"mapboxgl","root":"mapboxgl"}
var external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_ = __webpack_require__("2ff6");
var external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_);

// EXTERNAL MODULE: external {"commonjs":"@mapbox/mapbox-gl-geocoder","commonjs2":"@mapbox/mapbox-gl-geocoder","amd":"MapboxGeocoder","root":"MapboxGeocoder"}
var mapbox_gl_geocoder_amd_MapboxGeocoder_root_MapboxGeocoder_ = __webpack_require__("7c06");
var mapbox_gl_geocoder_amd_MapboxGeocoder_root_MapboxGeocoder_default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_geocoder_amd_MapboxGeocoder_root_MapboxGeocoder_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxGeocoder.vue?vue&type=script&lang=js&
function MapboxGeocodervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MapboxGeocodervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MapboxGeocodervue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { MapboxGeocodervue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MapboxGeocodervue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MapboxGeocodervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//
//
//
//





if (!external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_default.a) {
  throw new Error('mapboxgl is not installed.');
}

if (!mapbox_gl_geocoder_amd_MapboxGeocoder_root_MapboxGeocoder_default.a) {
  throw new Error('MapboxGeocoder is not installed.');
}
/**
 ** Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @see https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#parameters
 * @type {object}
 */


var props = {
  accessToken: {
    type: String,
    default: 'no-token'
  },
  zoom: {
    type: Number,
    default: function _default() {
      return 16;
    }
  },
  flyTo: {
    type: [Boolean, Object],
    default: function _default() {
      return true;
    }
  },
  placeholder: {
    type: String,
    default: function _default() {
      return 'Search';
    }
  },
  proximity: {
    type: Object,
    default: function _default() {}
  },
  trackProximity: {
    type: Boolean,
    default: function _default() {
      return true;
    }
  },
  collapsed: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  },
  clearAndBlurOnEsc: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  },
  clearOnBlur: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  },
  bbox: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  countries: {
    type: String,
    default: function _default() {
      return '';
    }
  },
  types: {
    type: String,
    default: function _default() {
      return '';
    }
  },
  minLength: {
    type: Number,
    default: function _default() {
      return 2;
    }
  },
  limit: {
    type: Number,
    default: function _default() {
      return 5;
    }
  },
  language: {
    type: String
  },
  filter: {
    type: Function
  },
  localGeocoder: {
    type: Function
  },
  reverseMode: {
    type: String,
    default: function _default() {
      return 'distance';
    }
  },
  reverseGeocode: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  },
  enableEventLogging: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  },
  marker: {
    type: Boolean,
    default: function _default() {
      return true;
    }
  },
  render: {
    type: Function
  },
  getItemValue: {
    type: Function,
    default: function _default(item) {
      return item.place_name;
    }
  },
  mode: {
    type: String,
    default: function _default() {
      return 'mapbox.places';
    }
  },
  localGeocoderOnly: {
    type: Boolean,
    default: function _default() {
      return false;
    }
  }
};
/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#on
 * @type {Array}
 */

var MapboxGeocodervue_type_script_lang_js_events = ['loading', 'results', 'result', 'error'];
/* harmony default export */ var MapboxGeocodervue_type_script_lang_js_ = ({
  name: 'MapboxGeocoder',
  mixins: [injectMap()],
  props: props,
  mounted: function mounted() {
    var _this$$props = this.$props,
        accessToken = _this$$props.accessToken,
        $props = _objectWithoutProperties(_this$$props, ["accessToken"]); // Delete the `reverseMode` property if we are not reverse geocoding as it is not supported by
    // the Mapbox SDK.
    //
    // The `reverseMode` option can not be supported yet as it is conditionned by the search
    // query format following a specific regex:
    //
    // ```js
    //  /(-?\d+\.?\d*)[, ]+(-?\d+\.?\d*)[ ]*$/.test(searchInput)
    // ```
    //
    // @todo use the same regex as the mapbox-gl-geocoder lib or open an issue
    //
    // @see https://github.com/mapbox/mapbox-sdk-js/blob/main/services/geocoding.js (92-104)
    // @see https://github.com/mapbox/mapbox-sdk-js/blob/main/services/geocoding.js (161-172)
    // @see https://github.com/mapbox/mapbox-gl-geocoder/blob/master/lib/index.js (437-458)
    // eslint-disable-next-line no-constant-condition


    if (!$props.reverseGeocode || true) {
      delete $props.reverseMode;
    }

    this.control = new mapbox_gl_geocoder_amd_MapboxGeocoder_root_MapboxGeocoder_default.a(MapboxGeocodervue_type_script_lang_js_objectSpread({
      accessToken: external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_default.a.accessToken || accessToken,
      mapboxgl: external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_default.a
    }, $props)); // Bind events

    bindEvents(this, this.control, MapboxGeocodervue_type_script_lang_js_events);
    this.control.addTo(this.map || this.$el);
  },
  destroyed: function destroyed() {
    unbindEvents(this, this.control);

    if (this.map) {
      this.map.removeControl(this.control);
    }
  }
});
// CONCATENATED MODULE: ./src/components/MapboxGeocoder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxGeocodervue_type_script_lang_js_ = (MapboxGeocodervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxGeocoder.vue





/* normalize component */

var MapboxGeocoder_component = normalizeComponent(
  components_MapboxGeocodervue_type_script_lang_js_,
  MapboxGeocodervue_type_template_id_07b00dd9_render,
  MapboxGeocodervue_type_template_id_07b00dd9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxGeocoder = (MapboxGeocoder_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxImage.vue?vue&type=template&id=8945ec82&
var MapboxImagevue_type_template_id_8945ec82_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}},[(_vm.isReady)?_vm._t("default"):_vm._e()],2)}
var MapboxImagevue_type_template_id_8945ec82_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxImage.vue?vue&type=template&id=8945ec82&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxImage.vue?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//

/* harmony default export */ var MapboxImagevue_type_script_lang_js_ = ({
  name: 'MapboxImage',
  mixins: [injectMap()],
  props: {
    /**
     * The ID of the image
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @type {String}
     */
    id: {
      type: String,
      required: true
    },

    /**
     * The image as String, an HTMLImageElement, ImageData, or object with
     * width, height, and data properties with the same format as ImageData.
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @type {String|HTMLImageElement|ImageData|Object}
     */
    src: {
      type: [String, HTMLImageElement, ImageData, Object],
      required: true
    },

    /**
     * The options object for the image to add
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @type {Object}
     */
    options: {
      type: Object,
      default: function _default() {
        return {
          pixelRatio: 1,
          sdf: false
        };
      }
    }
  },
  data: function data() {
    return {
      isReady: false
    };
  },
  watch: {
    src: {
      handler: function handler(newValue) {
        this.map.updateImage(this.id, newValue);
      },
      deep: true
    }
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var id, src, options, image;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = this.id, src = this.src, options = this.options; // If source is not a string, we don't need to load the image and we can
              // add it to the map directly.

              if (!(typeof src !== 'string')) {
                _context.next = 6;
                break;
              }

              this.map.addImage(id, src, options);
              this.$emit('add', {
                id: id,
                src: src,
                options: options
              });
              this.isReady = true;
              return _context.abrupt("return");

            case 6:
              _context.next = 8;
              return this.loadImage(src);

            case 8:
              image = _context.sent;
              this.map.addImage(id, image, options);
              this.$emit('add', {
                id: id,
                src: image,
                options: options
              });
              this.isReady = true;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  destroyed: function destroyed() {
    if (this.map.hasImage(this.id)) {
      this.map.removeImage(this.id);
    }
  },
  methods: {
    /**
     * Load the given image with the Mapbox `loadImage` method
     *
     * @param  {String}  src The source URL for the image
     * @return {Promise}     A promise which will resolve on load
     */
    loadImage: function () {
      var _loadImage = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(src) {
        var _this = this;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  _this.map.loadImage(src, function (err, data) {
                    if (err) {
                      return reject(err);
                    }

                    return resolve(data);
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function loadImage(_x) {
        return _loadImage.apply(this, arguments);
      }

      return loadImage;
    }()
  }
});
// CONCATENATED MODULE: ./src/components/MapboxImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxImagevue_type_script_lang_js_ = (MapboxImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxImage.vue





/* normalize component */

var MapboxImage_component = normalizeComponent(
  components_MapboxImagevue_type_script_lang_js_,
  MapboxImagevue_type_template_id_8945ec82_render,
  MapboxImagevue_type_template_id_8945ec82_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxImage = (MapboxImage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxImages.vue?vue&type=template&id=568459f2&
var MapboxImagesvue_type_template_id_568459f2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.sources),function(source,index){return _c('mapbox-image',_vm._b({key:("mapbox-images-" + (source.id)),on:{"add":function($event){return _vm.addHandler($event, index + 1, _vm.sources.length)}}},'mapbox-image',source,false))}),(_vm.isReady)?_vm._t("default"):_vm._e()],2)}
var MapboxImagesvue_type_template_id_568459f2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxImages.vue?vue&type=template&id=568459f2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxImages.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MapboxImagesvue_type_script_lang_js_ = ({
  name: 'MapboxImages',
  components: {
    MapboxImage: MapboxImage
  },
  props: {
    /**
     * A list of sources to add to the map
     * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage
     * @see  ./MapboxImage.vue
     * @type {Object}
     */
    sources: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      isReady: false,
      addedImages: new Map()
    };
  },
  methods: {
    addHandler: function addHandler(image, index, total) {
      if (!this.addedImages.has(image.id)) {
        this.addedImages.set(image.id, image);
        this.$emit('add', image, index, total);
      }

      if (this.addedImages.size === this.sources.length) {
        this.isReady = true;
        this.$emit('ready', this.addedImages.values());
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/MapboxImages.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxImagesvue_type_script_lang_js_ = (MapboxImagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxImages.vue





/* normalize component */

var MapboxImages_component = normalizeComponent(
  components_MapboxImagesvue_type_script_lang_js_,
  MapboxImagesvue_type_template_id_568459f2_render,
  MapboxImagesvue_type_template_id_568459f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxImages = (MapboxImages_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxMap.vue?vue&type=template&id=15edc638&
var MapboxMapvue_type_template_id_15edc638_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isLoaded)?_c('div',[_vm._t("default")],2):_c('div',[_vm._t("loader")],2)])}
var MapboxMapvue_type_template_id_15edc638_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxMap.vue?vue&type=template&id=15edc638&

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__("6dd8");

// CONCATENATED MODULE: ./src/utils/bind-props.js
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxMap.vue?vue&type=script&lang=js&
function MapboxMapvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MapboxMapvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MapboxMapvue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { MapboxMapvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MapboxMapvue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MapboxMapvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MapboxMapvue_type_script_lang_js_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MapboxMapvue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MapboxMapvue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//
//
//
//
//
//
//
//
//
//
//






if (!external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_default.a) {
  throw new Error('mapboxgl is not installed.');
}
/**
 * Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map
 * @type {Object}
 */


var MapboxMapvue_type_script_lang_js_props = {
  accessToken: {
    type: String,
    default: 'no-token'
  },
  container: {
    type: [HTMLElement, String],
    default: undefined
  },
  minZoom: {
    type: Number,
    default: 0
  },
  maxZoom: {
    type: Number,
    default: 22
  },
  minPitch: {
    type: Number,
    default: 0
  },
  maxPitch: {
    type: Number,
    default: 60
  },
  mapStyle: {
    type: [Object, String],
    required: true
  },
  hash: {
    type: Boolean,
    default: false
  },
  interactive: {
    type: Boolean,
    default: true
  },
  bearingSnap: {
    type: Number,
    default: 7
  },
  pitchWithRotate: {
    type: Boolean,
    default: true
  },
  clickTolerance: {
    type: Number,
    default: 3
  },
  attributionControl: {
    type: Boolean,
    default: true
  },
  customAttribution: {
    type: [String, Array],
    default: null
  },
  logoPosition: {
    type: String,
    default: 'bottom-left'
  },
  failIfMajorPerformanceCaveat: {
    type: Boolean,
    default: false
  },
  preserveDrawingBuffer: {
    type: Boolean,
    default: false
  },
  antialias: {
    type: Boolean,
    default: false
  },
  refreshExpiredTiles: {
    type: Boolean,
    default: true
  },
  maxBounds: {
    type: [external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_["LngLatBounds"], Array],
    default: undefined
  },
  scrollZoom: {
    type: [Boolean, Object],
    default: true
  },
  boxZoom: {
    type: Boolean,
    default: true
  },
  dragRotate: {
    type: Boolean,
    default: true
  },
  dragPan: {
    type: [Boolean, Object],
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  doubleClickZoom: {
    type: Boolean,
    default: true
  },
  touchZoomRotate: {
    type: [Boolean, Object],
    default: true
  },
  trackResize: {
    type: Boolean,
    default: true
  },
  center: {
    type: [external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_["LngLat"], Array, Object],
    default: function _default() {
      return [0, 0];
    }
  },
  zoom: {
    type: Number,
    default: 0
  },
  bearing: {
    type: Number,
    default: 0
  },
  pitch: {
    type: Number,
    default: 0
  },
  bounds: {
    type: [external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_["LngLatBounds"], Array],
    default: undefined
  },
  fitBoundsOptions: {
    type: Object,
    default: null
  },
  renderWorldCopies: {
    type: Boolean,
    default: true
  },
  maxTileCacheSize: {
    type: Number,
    default: null
  },
  localIdeographFontFamily: {
    type: String,
    default: 'sans-serif'
  },
  transformRequest: {
    type: Function,
    default: null
  },
  collectResourceTiming: {
    type: Boolean,
    default: false
  },
  fadeDuration: {
    type: Number,
    default: 300
  },
  crossSourceCollisions: {
    type: Boolean,
    default: true
  }
};
/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map.event:resize
 * @type {Array}
 */

var MapboxMapvue_type_script_lang_js_events = ['resize', 'remove', 'mousedown', 'mouseup', 'mouseover', 'mousemove', 'click', 'dblclick', 'mouseenter', 'mouseleave', 'mouseout', 'contextmenu', 'wheel', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'movestart', 'move', 'moveend', 'dragstart', 'drag', 'dragend', 'zoomstart', 'zoom', 'zoomend', 'rotatestart', 'rotate', 'rotateend', 'pitchstart', 'pitch', 'pitchend', 'boxzoomstart', 'boxzoomend', 'boxzoomcancel', 'webglcontextlost', 'webglcontextrestored', 'load', 'render', 'idle', 'error', 'data', 'styledata', 'sourcedata', 'dataloading', 'styledataloading', 'sourcedataloading', 'styleimagemissing'];
/* harmony default export */ var MapboxMapvue_type_script_lang_js_ = ({
  name: 'MapboxMap',
  mixins: [provideMap()],
  props: MapboxMapvue_type_script_lang_js_props,
  data: function data() {
    return {
      isLoaded: false
    };
  },
  computed: {
    options: function options() {
      var _this$$props = this.$props,
          accessToken = _this$$props.accessToken,
          style = _this$$props.mapStyle,
          options = MapboxMapvue_type_script_lang_js_objectWithoutProperties(_this$$props, ["accessToken", "mapStyle"]); // Use current component's element if container is not set


      if (!options.container && this.$el) {
        options.container = this.$el;
      }

      return MapboxMapvue_type_script_lang_js_objectSpread({
        style: style
      }, options);
    }
  },
  mounted: function mounted() {
    var _this = this;

    external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_default.a.accessToken = this.accessToken;
    this.map = new external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_default.a.Map(this.options);
    this.map.on('load', function () {
      _this.isLoaded = true;
    }); // Bind props and events

    bindProps(this, this.map, MapboxMapvue_type_script_lang_js_props);
    bindEvents(this, this.map, MapboxMapvue_type_script_lang_js_events);
    this.$emit('mb-created', this.map); // Mapbox has some resize issues
    // Create an observer  on this object
    // Call resize on the map when we change szie

    var observer = new ResizeObserver_es["a" /* default */](this.resizeHandler);
    observer.observe(this.options.container);
    this.resizeObserver = observer;
  },
  destroyed: function destroyed() {
    unbindEvents(this, this.map);
    this.resizeObserver.disconnect();
    this.map.remove();
  },
  methods: {
    /**
     * Handler for any change of the map's size
     *
     * @return {void}
     */
    resizeHandler: function resizeHandler() {
      if (this.map) {
        this.map.resize();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/MapboxMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxMapvue_type_script_lang_js_ = (MapboxMapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxMap.vue





/* normalize component */

var MapboxMap_component = normalizeComponent(
  components_MapboxMapvue_type_script_lang_js_,
  MapboxMapvue_type_template_id_15edc638_render,
  MapboxMapvue_type_template_id_15edc638_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxMap = (MapboxMap_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxMarker.vue?vue&type=template&id=1c733044&
var MapboxMarkervue_type_template_id_1c733044_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"content"},[_vm._t("default")],2),(_vm.popup)?_c('mapbox-popup',_vm._b({ref:"popup"},'mapbox-popup',_vm.popupOptions,false),[_vm._t("popup")],2):_vm._e()],1)}
var MapboxMarkervue_type_template_id_1c733044_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxMarker.vue?vue&type=template&id=1c733044&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxPopup.vue?vue&type=template&id=1c854914&
var MapboxPopupvue_type_template_id_1c854914_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var MapboxPopupvue_type_template_id_1c854914_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxPopup.vue?vue&type=template&id=1c854914&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxPopup.vue?vue&type=script&lang=js&
function MapboxPopupvue_type_script_lang_js_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MapboxPopupvue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MapboxPopupvue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//
//
//
//
//




/**
 * Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#popup
 * @type {Object}
 */

var MapboxPopupvue_type_script_lang_js_props = {
  lngLat: {
    type: [external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_["LngLat"], Array, Object],
    required: true
  },
  closeButton: {
    type: Boolean,
    default: true
  },
  closeOnClick: {
    type: Boolean,
    default: true
  },
  closeOnMove: {
    type: Boolean,
    default: false
  },
  anchor: {
    type: String,
    default: null
  },
  offset: {
    type: [Number, external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_["Point"], Array, Object],
    default: null
  },
  className: {
    type: String,
    default: null
  },
  maxWidth: {
    type: String,
    default: '240px'
  },

  /**
   * Do not render the popup on the map.
   * @type {Object}
   */
  renderless: {
    type: Boolean,
    default: false,
    bind: false
  }
};
/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#popup.event:open
 * @type {Array}
 */

var MapboxPopupvue_type_script_lang_js_events = ['open', 'close'];
/* harmony default export */ var MapboxPopupvue_type_script_lang_js_ = ({
  name: 'MapboxPopup',
  mixins: [injectMap()],
  props: MapboxPopupvue_type_script_lang_js_props,
  data: function data() {
    return {
      popup: null
    };
  },
  computed: {
    options: function options() {
      var _this$$props = this.$props,
          lngLat = _this$$props.lngLat,
          options = MapboxPopupvue_type_script_lang_js_objectWithoutProperties(_this$$props, ["lngLat"]);

      return options;
    }
  },
  mounted: function mounted() {
    this.popup = new external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_["Popup"](this.options).setLngLat(this.lngLat).setDOMContent(this.$el);

    if (!this.renderless) {
      this.popup.addTo(this.map);
    }

    bindProps(this, this.popup, MapboxPopupvue_type_script_lang_js_props);
    bindEvents(this, this.popup, MapboxPopupvue_type_script_lang_js_events);
    this.$emit('mb-open', this.popup);
  },
  destroyed: function destroyed() {
    if (this.popup) {
      unbindEvents(this, this.popup);
      this.popup.remove();
    }
  }
});
// CONCATENATED MODULE: ./src/components/MapboxPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxPopupvue_type_script_lang_js_ = (MapboxPopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxPopup.vue





/* normalize component */

var MapboxPopup_component = normalizeComponent(
  components_MapboxPopupvue_type_script_lang_js_,
  MapboxPopupvue_type_template_id_1c854914_render,
  MapboxPopupvue_type_template_id_1c854914_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxPopup = (MapboxPopup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxMarker.vue?vue&type=script&lang=js&
function MapboxMarkervue_type_script_lang_js_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MapboxMarkervue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MapboxMarkervue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MapboxMarkervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MapboxMarkervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MapboxMarkervue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { MapboxMarkervue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MapboxMarkervue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MapboxMarkervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//





/**
 * Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker
 * @type {Object}
 */

var MapboxMarkervue_type_script_lang_js_props = {
  lngLat: {
    type: Array,
    required: true
  },
  popup: {
    type: [Object, Boolean],
    default: false,
    bind: false
  },
  element: {
    type: HTMLElement,
    default: null
  },
  offset: {
    type: [external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_["Point"], Array],
    default: null
  },
  anchor: {
    type: String,
    default: 'center'
  },
  color: {
    type: String,
    default: null
  },
  scale: {
    type: Number,
    default: 1
  },
  draggable: {
    type: Boolean,
    default: false
  },
  rotation: {
    type: Number,
    default: 0
  },
  pitchAlignment: {
    type: String,
    default: 'auto'
  },
  rotationAlignment: {
    type: String,
    default: 'auto'
  }
};
/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:dragstart
 * @type {Array}
 */

var MapboxMarkervue_type_script_lang_js_events = ['dragstart', 'drag', 'dragend'];
/* harmony default export */ var MapboxMarkervue_type_script_lang_js_ = ({
  name: 'MapboxMarker',
  components: {
    MapboxPopup: MapboxPopup
  },
  mixins: [injectMap()],
  props: MapboxMarkervue_type_script_lang_js_props,
  computed: {
    hasPopup: function hasPopup() {
      return this.popup !== false && this.$refs.popup !== undefined;
    },
    popupInstance: function popupInstance() {
      return this.hasPopup ? this.$refs.popup.popup : null;
    },
    popupOptions: function popupOptions() {
      return MapboxMarkervue_type_script_lang_js_objectSpread({
        lngLat: this.lngLat
      }, this.popup, {
        renderless: true
      });
    },
    options: function options() {
      var _this$$props = this.$props,
          lngLat = _this$$props.lngLat,
          popup = _this$$props.popup,
          options = MapboxMarkervue_type_script_lang_js_objectWithoutProperties(_this$$props, ["lngLat", "popup"]); // Use current component's element if container is not set


      if (this.$slots.default) {
        options.element = this.$refs.content;
      }

      return options;
    }
  },
  mounted: function mounted() {
    this.marker = new external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_["Marker"](this.options).setLngLat(this.lngLat).addTo(this.map); // Bind props and events

    bindProps(this, this.marker, MapboxMarkervue_type_script_lang_js_props);
    bindEvents(this, this.marker, MapboxMarkervue_type_script_lang_js_events);

    if (this.hasPopup) {
      this.marker.setPopup(this.popupInstance);
    }
  },
  destroyed: function destroyed() {
    if (this.marker) {
      unbindEvents(this, this.marker);
      this.marker.remove();
    }
  }
});
// CONCATENATED MODULE: ./src/components/MapboxMarker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxMarkervue_type_script_lang_js_ = (MapboxMarkervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxMarker.vue





/* normalize component */

var MapboxMarker_component = normalizeComponent(
  components_MapboxMarkervue_type_script_lang_js_,
  MapboxMarkervue_type_template_id_1c733044_render,
  MapboxMarkervue_type_template_id_1c733044_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxMarker = (MapboxMarker_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxNavigationControl.vue?vue&type=template&id=35094436&
var MapboxNavigationControlvue_type_template_id_35094436_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var MapboxNavigationControlvue_type_template_id_35094436_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxNavigationControl.vue?vue&type=template&id=35094436&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxNavigationControl.vue?vue&type=script&lang=js&
//
//
//
//



/**
 * Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @type {Object}
 */

var MapboxNavigationControlvue_type_script_lang_js_props = {
  showCompass: {
    type: Boolean,
    default: true
  },
  showZoom: {
    type: Boolean,
    default: true
  },
  visualizePitch: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'top-right',
    bind: false
  }
};
/* harmony default export */ var MapboxNavigationControlvue_type_script_lang_js_ = ({
  name: 'MapboxNavigationControl',
  mixins: [injectMap()],
  props: MapboxNavigationControlvue_type_script_lang_js_props,
  mounted: function mounted() {
    this.control = new external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_["NavigationControl"](this.$props);
    bindProps(this, this.control, MapboxNavigationControlvue_type_script_lang_js_props);
    this.map.addControl(this.control, this.position);
  },
  destroyed: function destroyed() {
    this.map.removeControl(this.control);
  }
});
// CONCATENATED MODULE: ./src/components/MapboxNavigationControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxNavigationControlvue_type_script_lang_js_ = (MapboxNavigationControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxNavigationControl.vue





/* normalize component */

var MapboxNavigationControl_component = normalizeComponent(
  components_MapboxNavigationControlvue_type_script_lang_js_,
  MapboxNavigationControlvue_type_template_id_35094436_render,
  MapboxNavigationControlvue_type_template_id_35094436_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxNavigationControl = (MapboxNavigationControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325f18d1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxGeolocateControl.vue?vue&type=template&id=36ea1930&
var MapboxGeolocateControlvue_type_template_id_36ea1930_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var MapboxGeolocateControlvue_type_template_id_36ea1930_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxGeolocateControl.vue?vue&type=template&id=36ea1930&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxGeolocateControl.vue?vue&type=script&lang=js&
//
//
//
//





if (!external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_default.a) {
  throw new Error('mapboxgl is not installed.');
}
/**
 * Component's props definition, we need to declare it outside the component
 * to be able to test the default values and the types.
 * @see https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol
 * @type {Object}
 */


var MapboxGeolocateControlvue_type_script_lang_js_props = {
  positionOptions: {
    type: Object,
    default: function _default() {
      return {
        enableHighAccuracy: false,
        timeout: 6000
      };
    }
  },
  fitBoundsOptions: {
    type: Object,
    default: function _default() {
      return {
        maxZoom: 15
      };
    }
  },
  trackUserLocation: {
    type: Boolean,
    default: false
  },
  showAccuracyCircle: {
    type: Boolean,
    default: true
  },
  showUserLocation: {
    type: Boolean,
    default: true
  },
  position: {
    type: String,
    default: 'top-right',
    bind: false
  }
};
/**
 * All geolocationControl events which will be mapped/bounded to the component
 * @see https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol.event:trackuserlocationend
 * @type {Array}
 */

var MapboxGeolocateControlvue_type_script_lang_js_events = ['trackuserlocationend', 'error', 'geolocate', 'outofmaxbounds', 'trackuserlocationstart'];
/* harmony default export */ var MapboxGeolocateControlvue_type_script_lang_js_ = ({
  name: 'MapboxGeolocateControl',
  mixins: [injectMap()],
  props: MapboxGeolocateControlvue_type_script_lang_js_props,
  mounted: function mounted() {
    this.control = new external_commonjs_mapbox_gl_commonjs2_mapbox_gl_amd_mapboxgl_root_mapboxgl_default.a.GeolocateControl(this.$props); // Bind props and events

    bindProps(this, this.control, MapboxGeolocateControlvue_type_script_lang_js_props);
    bindEvents(this, this.control, MapboxGeolocateControlvue_type_script_lang_js_events); // Add GeolocationControl to the map

    this.map.addControl(this.control, this.position);
  },
  destroyed: function destroyed() {
    if (this.control) {
      unbindEvents(this, this.control, MapboxGeolocateControlvue_type_script_lang_js_events);
      this.map.removeControl(this.control);
    }
  }
});
// CONCATENATED MODULE: ./src/components/MapboxGeolocateControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxGeolocateControlvue_type_script_lang_js_ = (MapboxGeolocateControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxGeolocateControl.vue





/* normalize component */

var MapboxGeolocateControl_component = normalizeComponent(
  components_MapboxGeolocateControlvue_type_script_lang_js_,
  MapboxGeolocateControlvue_type_template_id_36ea1930_render,
  MapboxGeolocateControlvue_type_template_id_36ea1930_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxGeolocateControl = (MapboxGeolocateControl_component.exports);
// CONCATENATED MODULE: ./src/components/index.js






















// CONCATENATED MODULE: ./src/index.js

/**
 * Install all components
 *
 * @param  {Vue}  Vue The Vue object
 * @return {void}
 */

function install(Vue) {
  Object.keys(components_namespaceObject).forEach(function (name) {
    Vue.component(name, components_namespaceObject[name]);
  });
} // Export each components separately

 // Export the install function as default

/* harmony default export */ var src_0 = (install);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* concated harmony reexport MapboxCluster */__webpack_require__.d(__webpack_exports__, "MapboxCluster", function() { return MapboxCluster; });
/* concated harmony reexport MapboxGeocoder */__webpack_require__.d(__webpack_exports__, "MapboxGeocoder", function() { return MapboxGeocoder; });
/* concated harmony reexport MapboxImage */__webpack_require__.d(__webpack_exports__, "MapboxImage", function() { return MapboxImage; });
/* concated harmony reexport MapboxImages */__webpack_require__.d(__webpack_exports__, "MapboxImages", function() { return MapboxImages; });
/* concated harmony reexport MapboxLayer */__webpack_require__.d(__webpack_exports__, "MapboxLayer", function() { return MapboxLayer; });
/* concated harmony reexport MapboxMap */__webpack_require__.d(__webpack_exports__, "MapboxMap", function() { return MapboxMap; });
/* concated harmony reexport MapboxMarker */__webpack_require__.d(__webpack_exports__, "MapboxMarker", function() { return MapboxMarker; });
/* concated harmony reexport MapboxNavigationControl */__webpack_require__.d(__webpack_exports__, "MapboxNavigationControl", function() { return MapboxNavigationControl; });
/* concated harmony reexport MapboxPopup */__webpack_require__.d(__webpack_exports__, "MapboxPopup", function() { return MapboxPopup; });
/* concated harmony reexport MapboxSource */__webpack_require__.d(__webpack_exports__, "MapboxSource", function() { return MapboxSource; });
/* concated harmony reexport MapboxGeolocateControl */__webpack_require__.d(__webpack_exports__, "MapboxGeolocateControl", function() { return MapboxGeolocateControl; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
});
//# sourceMappingURL=VueMapboxGl.umd.js.map