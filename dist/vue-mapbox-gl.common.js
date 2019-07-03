module.exports =
/******/ (function(modules) { // webpackBootstrap
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

module.exports = require("mapbox-gl");

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

module.exports = require("@mapbox/mapbox-gl-geocoder");

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5611afc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxMap.vue?vue&type=template&id=62d32350&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isLoaded)?_c('div',[_vm._t("default")],2):_c('div',[_vm._t("loader")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxMap.vue?vue&type=template&id=62d32350&

// EXTERNAL MODULE: external {"amd":"mapbox-gl","commonjs2":"mapbox-gl","commonjs":"mapbox-gl","global":"mapbox-gl","root":"mapbox-gl","umd":"mapbox-gl"}
var external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_ = __webpack_require__("2ff6");
var external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_default = /*#__PURE__*/__webpack_require__.n(external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_);

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
 * @param  {Vue}    vueElement      The Vue component in question
 * @param  {Mixed}  mapboxElement   The Mapbox element bound to the component
 * @param  {Object} propsDefinition The component's props definition object
 * @return {void}
 */


function bindProps(vueElement, mapboxElement, propsDefinition) {
  Object.keys(vueElement.$props).filter(prop => prop !== undefined).forEach(prop => {
    const setMethodName = prop === 'mapStyle' ? 'setStyle' : `set${capitalizeFirstLetter(prop)}`; // Do nothin if `setMethodName` is not a function of `mapBoxElement`
    // or if the props is not to be bounded

    if (typeof mapboxElement[setMethodName] !== 'function' || !prop.bind) {
      return;
    } // Set deep option to true if prop type is or can be Object


    const {
      type
    } = propsDefinition[prop];
    const options = {
      deep: type === Object || Array.isArray(type) && type.includes(Object)
    };
    vueElement.$watch(prop, newVal => {
      mapboxElement[setMethodName](newVal);
    }, options);
  });
}
// CONCATENATED MODULE: ./src/utils/bind-events.js
/**
 * Map a mapbox element's events to the given vue element
 *
 * @param  {Vue}    vueElement    The Vue component in question
 * @param  {Mixed}  mapboxElement The Mapbox element bound to the component
 * @param  {Array}  events        The events to map
 * @param  {String} layerId       The layer on which the events are delegated
 * @return {Array}                The list of event/handler pair bounded
 */
function bindEvents(vueElement, mapboxElement, events = [], layerId = null) {
  const {
    _events: vueEvents
  } = vueElement; // eslint-disable-next-line no-param-reassign

  vueElement.$$events = Object.keys(vueEvents).map(vueEvent => {
    const originalEvent = vueEvent.replace(/^mb-/, '');

    if (!events.includes(originalEvent)) {
      return null;
    }

    const handler = (...payload) => {
      vueElement.$emit(vueEvent, ...payload);
    }; // If layerId is not null, all events must be
    // delegated from the map to the given layerId


    if (layerId) {
      mapboxElement.on(originalEvent, layerId, handler);
    } else {
      mapboxElement.on(originalEvent, handler);
    }

    return [originalEvent, handler];
  });
}
/**
 * Unbind events from the map element
 *
 * @param  {Mixed} mapboxElement The Mapbox element which needs unbinding
 * @param  {Array}  handlers     The list of event/handler pair to unbind
 * @param  {String} layerId      The layer on which the events where delegated
 * @return {void}
 */

function unbindEvents(vueElement, mapboxElement, layerId = null) {
  vueElement.$$events.forEach(([event, handler]) => {
    // If layerId is not null, all events must be
    // delegated from the map to the given layerId
    if (layerId) {
      mapboxElement.off(event, layerId, handler);
    } else {
      mapboxElement.off(event, handler);
    }
  });
}
// CONCATENATED MODULE: ./src/mixins/provide-inject-map.js
/**
 * Provide to children components a $map function to retrieve a map object
 *
 * @return {Object}
 */
const provideMap = () => ({
  data() {
    return {
      map: null
    };
  },

  provide() {
    return {
      $map: () => this.map
    };
  }

});
/**
 * Inject from parent component a $map function to retrieve a map object
 *
 * @return {Object}
 */

const injectMap = () => ({
  inject: ['$map'],
  computed: {
    map() {
      return this.$map();
    }

  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxMap.vue?vue&type=script&lang=js&
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
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map
 * @type {Object}
 */

const props = {
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
    type: [external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_default.a.LngLatBounds, Array],
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
    type: Boolean,
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
    type: [external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_default.a.LngLat, Array, Object],
    default: () => [0, 0]
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
    type: [external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_default.a.LngLatBounds, Array],
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

const events = ['resize', 'remove', 'mousedown', 'mouseup', 'mouseover', 'mousemove', 'click', 'dblclick', 'mouseenter', 'mouseleave', 'mouseout', 'contextmenu', 'wheel', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'movestart', 'move', 'moveend', 'dragstart', 'drag', 'dragend', 'zoomstart', 'zoom', 'zoomend', 'rotatestart', 'rotate', 'rotateend', 'pitchstart', 'pitch', 'pitchend', 'boxzoomstart', 'boxzoomend', 'boxzoomcancel', 'webglcontextlost', 'webglcontextrestored', 'load', 'render', 'idle', 'error', 'data', 'styledata', 'sourcedata', 'dataloading', 'styledataloading', 'sourcedataloading', 'styleimagemissing'];
/* harmony default export */ var MapboxMapvue_type_script_lang_js_ = ({
  name: 'MapboxMap',
  mixins: [provideMap()],
  props,

  data() {
    return {
      isLoaded: false
    };
  },

  computed: {
    options() {
      const {
        accessToken,
        mapStyle: style,
        ...options
      } = this.$props; // Use current component's element if container is not set

      if (!options.container && this.$el) {
        options.container = this.$el;
      }

      return {
        style,
        ...options
      };
    }

  },

  mounted() {
    external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_default.a.accessToken = this.accessToken;
    this.map = new external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_default.a.Map(this.options);
    this.$on('mb-load', () => {
      this.isLoaded = true;
    }); // Bind props and events

    bindProps(this, this.map, props);
    bindEvents(this, this.map, events);
    this.$emit('mb-created', this.map); // Mapbox has some resize issues
    // Create an observer  on this object
    // Call resize on the map when we change szie

    const observer = new ResizeObserver_es["a" /* default */](this.resizeHandler);
    observer.observe(this.options.container);
    this.resizeObserver = observer;
  },

  destroyed() {
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
    resizeHandler() {
      if (this.map) {
        this.map.resize();
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/MapboxMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxMapvue_type_script_lang_js_ = (MapboxMapvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./src/components/MapboxMap.vue





/* normalize component */

var component = normalizeComponent(
  components_MapboxMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxMap = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5611afc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxCluster.vue?vue&type=template&id=1b91e3c2&
var MapboxClustervue_type_template_id_1b91e3c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}},[_c('mapbox-source',{attrs:{"id":_vm.sourceId,"options":_vm.source}}),_c('mapbox-layer',{attrs:{"id":_vm.getId('cluster'),"options":_vm.clustersLayer},on:{"click":_vm.clustersClickHandler,"mouseenter":_vm.clustersMouseenterHandler,"mouseleave":_vm.clustersMouseleaveHandler}}),_c('mapbox-layer',{attrs:{"id":_vm.getId('cluster-count'),"options":_vm.clusterCountLayer}}),_c('mapbox-layer',{attrs:{"id":_vm.getId('unclustered-point'),"options":_vm.unclusteredPointLayer},on:{"click":_vm.unclusteredPointClickHandler,"mouseenter":_vm.unclusteredPointMouseenterHandler,"mouseleave":_vm.unclusteredPointMouseleaveHandler}})],1)}
var MapboxClustervue_type_template_id_1b91e3c2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxCluster.vue?vue&type=template&id=1b91e3c2&

// CONCATENATED MODULE: ./src/utils/uniq-id.js
/**
 * Get a prefixed or not uniq id
 * @param  {String} prefix The prefix to add to the generated id
 * @return {String}        A (prefixed) uniq id
 */
function uniqId(prefix = '') {
  const uniq = new Date().getTime() + Math.floor(Math.random() * 10000 + 1);
  return prefix ? prefix + uniq.toString(16) : uniq.toString(16);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5611afc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxLayer.vue?vue&type=template&id=85444b82&
var MapboxLayervue_type_template_id_85444b82_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var MapboxLayervue_type_template_id_85444b82_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxLayer.vue?vue&type=template&id=85444b82&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxLayer.vue?vue&type=script&lang=js&
//
//
//
//


/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#map#on
 * @type {Array}
 */

const MapboxLayervue_type_script_lang_js_events = ['mousedown', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout', 'contextmenu', 'touchstart', 'touchend', 'touchcancel'];
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
      default: () => {}
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

  mounted() {
    if (this.id && this.layerExists()) {
      this.map.removeLayer(this.id);
    } // Bind events


    bindEvents(this, this.map, MapboxLayervue_type_script_lang_js_events, this.id);
    this.map.addLayer({ ...this.options,
      id: this.id
    }, this.beforeId);
  },

  destroyed() {
    if (this.layerExists()) {
      unbindEvents(this, this.map, this.id);
      this.map.removeLayer(this.id);
    }
  },

  methods: {
    /**
     * Test if the component's exists in the Map object
     * @return {Boolean}
     */
    layerExists() {
      return typeof this.map.getLayer(this.id) !== 'undefined';
    }

  }
});
// CONCATENATED MODULE: ./src/components/MapboxLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxLayervue_type_script_lang_js_ = (MapboxLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxLayer.vue





/* normalize component */

var MapboxLayer_component = normalizeComponent(
  components_MapboxLayervue_type_script_lang_js_,
  MapboxLayervue_type_template_id_85444b82_render,
  MapboxLayervue_type_template_id_85444b82_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxLayer = (MapboxLayer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5611afc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxSource.vue?vue&type=template&id=19293bc4&
var MapboxSourcevue_type_template_id_19293bc4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var MapboxSourcevue_type_template_id_19293bc4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxSource.vue?vue&type=template&id=19293bc4&

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
      default: () => {}
    },
    id: {
      type: String,
      required: true
    }
  },

  mounted() {
    this.map.addSource(this.id, this.options);
  },

  destroyed() {
    // Remove all layers tied to the source
    const {
      _layers: layers
    } = this.map.style;
    Object.values(layers).forEach(value => {
      if (value.source === this.id) {
        this.map.removeLayer(value.id);
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
  MapboxSourcevue_type_template_id_19293bc4_render,
  MapboxSourcevue_type_template_id_19293bc4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxSource = (MapboxSource_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxCluster.vue?vue&type=script&lang=js&
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
      required: true
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
      default: () => ({})
    },

    /**
     * The paint configuration for the clusters circles
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {Object}
     */
    clustersPaint: {
      type: Object,
      default: () => ({
        'circle-color': '#000',
        'circle-radius': 40
      })
    },

    /**
     * The layout configuration for the clusters count
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {Object}
     */
    clusterCountLayout: {
      type: Object,
      default: () => ({
        'text-field': ['get', 'point_count_abbreviated']
      })
    },

    /**
     * The paint configuration for the clusters count
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {Object}
     */
    clusterCountPaint: {
      type: Object,
      default: () => ({
        'text-color': 'white'
      })
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
      default: () => ({})
    },

    /**
     * The paint configuration for the unclustered points
     * @see  https://docs.mapbox.com/mapbox-gl-js/example/cluster/
     * @type {Object}
     */
    unclusteredPointPaint: {
      type: Object,
      default: () => ({
        'circle-color': '#000',
        'circle-radius': 4
      })
    }
  },

  data() {
    return {
      id: uniqId('mb-cluster-')
    };
  },

  computed: {
    /**
     * The source ID
     * @type {String}
     */
    sourceId() {
      return this.getId('source');
    },

    /**
     * The source configuration
     * @type {Object}
     */
    source() {
      const {
        data,
        clusterMaxZoom,
        clusterRadius
      } = this.$props;
      return {
        type: 'geojson',
        cluster: true,
        data,
        clusterMaxZoom,
        clusterRadius
      };
    },

    /**
     * The clusters layer configuration
     * @type {Object}
     */
    clustersLayer() {
      return {
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
    clusterCountLayer() {
      return {
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
    unclusteredPointLayer() {
      return {
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
    getId(suffix) {
      return `${this.id}-${suffix}`;
    },

    /**
     * Click handler for the clusters layer to zoom on the clicked cluster
     *
     * @param  {Object} event The Mapbox click event's object
     * @return {void}
     */
    clustersClickHandler(event) {
      const feature = this.map.queryRenderedFeatures(event.point, {
        layers: [this.clustersLayer.id]
      })[0];
      const {
        cluster_id: clusterId
      } = feature.properties; // Emit a cluster click event

      this.$emit('mb-cluster-click', clusterId, event);
      this.map.getSource(this.sourceId).getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) {
          return;
        }

        this.map.easeTo({
          center: feature.geometry.coordinates,
          zoom
        });
      });
    },

    /**
     * Mouseenter handler for the clusters layer to set a pointer cursor
     *
     * @return {void}
     */
    clustersMouseenterHandler() {
      this.map.getCanvas().style.cursor = 'pointer';
    },

    /**
     * Mouseleave handler for the clusters layer to unset the pointer cursor
     *
     * @return {void}
     */
    clustersMouseleaveHandler() {
      this.map.getCanvas().style.cursor = '';
    },

    /**
     * Handler for the click event on a single feature, emits an event with
     * the feature object and the original event object
     *
     * @param  {Object} event The Mapbox click event's object
     * @return {void}
     */
    unclusteredPointClickHandler(event) {
      const [feature] = event.features;
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
    unclusteredPointMouseenterHandler(event) {
      const [feature] = event.features;
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
    unclusteredPointMouseleaveHandler(event) {
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
  MapboxClustervue_type_template_id_1b91e3c2_render,
  MapboxClustervue_type_template_id_1b91e3c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxCluster = (MapboxCluster_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5611afc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxGeocoder.vue?vue&type=template&id=615b331a&
var MapboxGeocodervue_type_template_id_615b331a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var MapboxGeocodervue_type_template_id_615b331a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxGeocoder.vue?vue&type=template&id=615b331a&

// EXTERNAL MODULE: external {"amd":"@mapbox/mapbox-gl-geocoder","commonjs2":"@mapbox/mapbox-gl-geocoder","commonjs":"@mapbox/mapbox-gl-geocoder","global":"@mapbox/mapbox-gl-geocoder","root":"@mapbox/mapbox-gl-geocoder","umd":"@mapbox/mapbox-gl-geocoder"}
var mapbox_gl_geocoder_ = __webpack_require__("7c06");
var mapbox_gl_geocoder_default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_geocoder_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxGeocoder.vue?vue&type=script&lang=js&
//
//
//
//



/* harmony default export */ var MapboxGeocodervue_type_script_lang_js_ = ({
  name: 'MapboxGeocoder',
  mixins: [injectMap()],
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },

  mounted() {
    this.control = new mapbox_gl_geocoder_default.a({ ...this.options,
      accessToken: external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_default.a.accessToken,
      mapboxgl: external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_default.a
    });
    this.map.addControl(this.control);
  },

  destroyed() {
    this.map.removeControl(this.control);
  }

});
// CONCATENATED MODULE: ./src/components/MapboxGeocoder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxGeocodervue_type_script_lang_js_ = (MapboxGeocodervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxGeocoder.vue





/* normalize component */

var MapboxGeocoder_component = normalizeComponent(
  components_MapboxGeocodervue_type_script_lang_js_,
  MapboxGeocodervue_type_template_id_615b331a_render,
  MapboxGeocodervue_type_template_id_615b331a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxGeocoder = (MapboxGeocoder_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5611afc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxMarker.vue?vue&type=template&id=50fb8d83&
var MapboxMarkervue_type_template_id_50fb8d83_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"content"},[_vm._t("default")],2),(_vm.popup)?_c('mapbox-popup',_vm._b({ref:"popup"},'mapbox-popup',_vm.popup,false),[_vm._t("popup")],2):_vm._e()],1)}
var MapboxMarkervue_type_template_id_50fb8d83_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxMarker.vue?vue&type=template&id=50fb8d83&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5611afc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxPopup.vue?vue&type=template&id=9fe02538&
var MapboxPopupvue_type_template_id_9fe02538_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var MapboxPopupvue_type_template_id_9fe02538_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxPopup.vue?vue&type=template&id=9fe02538&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxPopup.vue?vue&type=script&lang=js&
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

const MapboxPopupvue_type_script_lang_js_props = {
  lngLat: {
    type: [external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_["LngLat"], Array, Object],
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
  anchor: {
    type: String,
    default: null
  },
  offset: {
    type: [Number, external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_["Point"], Array, Object],
    default: null
  },
  className: {
    type: String,
    default: null
  },
  maxWidth: {
    type: String,
    default: '240px'
  }
};
/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#popup.event:open
 * @type {Array}
 */

const MapboxPopupvue_type_script_lang_js_events = ['open', 'close'];
/* harmony default export */ var MapboxPopupvue_type_script_lang_js_ = ({
  name: 'MapboxPopup',
  mixins: [injectMap()],
  props: MapboxPopupvue_type_script_lang_js_props,

  data() {
    return {
      popup: null
    };
  },

  computed: {
    options() {
      const {
        lngLat,
        ...options
      } = this.$props;
      return options;
    }

  },

  mounted() {
    this.popup = new external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_["Popup"](this.options).setLngLat(this.lngLat).setDOMContent(this.$el).addTo(this.map);
    bindProps(this, this.popup, MapboxPopupvue_type_script_lang_js_props);
    bindEvents(this, this.popup, MapboxPopupvue_type_script_lang_js_events);
    this.$emit('mb-open', this.popup);
  },

  destroyed() {
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
  MapboxPopupvue_type_template_id_9fe02538_render,
  MapboxPopupvue_type_template_id_9fe02538_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxPopup = (MapboxPopup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxMarker.vue?vue&type=script&lang=js&
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

const MapboxMarkervue_type_script_lang_js_props = {
  lngLat: {
    type: Array,
    required: true
  },
  popup: {
    type: Object,
    default: null,
    bind: false
  },
  element: {
    type: HTMLElement,
    default: null
  },
  offset: {
    type: [external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_["Point"], Array],
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
  draggable: {
    type: Boolean,
    default: false
  }
};
/**
 * All Map events which will be mapped/bounded to the component
 * @see  https://docs.mapbox.com/mapbox-gl-js/api/#marker.event:dragstart
 * @type {Array}
 */

const MapboxMarkervue_type_script_lang_js_events = ['dragstart', 'drag', 'dragend'];
/* harmony default export */ var MapboxMarkervue_type_script_lang_js_ = ({
  name: 'MapboxMarker',
  components: {
    MapboxPopup: MapboxPopup
  },
  mixins: [injectMap()],
  props: MapboxMarkervue_type_script_lang_js_props,
  computed: {
    hasPopup() {
      return this.popup !== null && this.$refs.popup;
    },

    popupInstance() {
      return this.hasPopup ? this.$refs.popup.popup : null;
    },

    options() {
      const {
        lngLat,
        popup,
        ...options
      } = this.$props; // Use current component's element if container is not set

      if (this.$slots.default) {
        options.element = this.$refs.content;
      }

      return options;
    }

  },

  mounted() {
    this.marker = new external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_["Marker"](this.options).setLngLat(this.lngLat).addTo(this.map); // Bind props and events

    bindProps(this, this.marker, MapboxMarkervue_type_script_lang_js_props);
    bindEvents(this, this.marker, MapboxMarkervue_type_script_lang_js_events);

    if (this.hasPopup) {
      this.marker.setPopup(this.popupInstance);
    }
  },

  destroyed() {
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
  MapboxMarkervue_type_template_id_50fb8d83_render,
  MapboxMarkervue_type_template_id_50fb8d83_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxMarker = (MapboxMarker_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5611afc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapboxNavigationControl.vue?vue&type=template&id=88f06d32&
var MapboxNavigationControlvue_type_template_id_88f06d32_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var MapboxNavigationControlvue_type_template_id_88f06d32_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MapboxNavigationControl.vue?vue&type=template&id=88f06d32&

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

const MapboxNavigationControlvue_type_script_lang_js_props = {
  showCompass: {
    type: Boolean,
    default: true
  },
  showZoom: {
    type: Boolean,
    default: true
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

  mounted() {
    this.control = new external_amd_mapbox_gl_commonjs2_mapbox_gl_commonjs_mapbox_gl_global_mapbox_gl_root_mapbox_gl_umd_mapbox_gl_["NavigationControl"](this.options);
    bindProps(this, this.control, MapboxNavigationControlvue_type_script_lang_js_props);
    this.map.addControl(this.control, this.position);
  },

  destroyed() {
    this.map.removeControl(this.control);
  }

});
// CONCATENATED MODULE: ./src/components/MapboxNavigationControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapboxNavigationControlvue_type_script_lang_js_ = (MapboxNavigationControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MapboxNavigationControl.vue





/* normalize component */

var MapboxNavigationControl_component = normalizeComponent(
  components_MapboxNavigationControlvue_type_script_lang_js_,
  MapboxNavigationControlvue_type_template_id_88f06d32_render,
  MapboxNavigationControlvue_type_template_id_88f06d32_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapboxNavigationControl = (MapboxNavigationControl_component.exports);
// CONCATENATED MODULE: ./src/main.js








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
} // Export each components separately


 // Export the install function as default

/* harmony default export */ var main = (install);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport MapboxMap */__webpack_require__.d(__webpack_exports__, "MapboxMap", function() { return MapboxMap; });
/* concated harmony reexport MapboxCluster */__webpack_require__.d(__webpack_exports__, "MapboxCluster", function() { return MapboxCluster; });
/* concated harmony reexport MapboxGeocoder */__webpack_require__.d(__webpack_exports__, "MapboxGeocoder", function() { return MapboxGeocoder; });
/* concated harmony reexport MapboxLayer */__webpack_require__.d(__webpack_exports__, "MapboxLayer", function() { return MapboxLayer; });
/* concated harmony reexport MapboxMarker */__webpack_require__.d(__webpack_exports__, "MapboxMarker", function() { return MapboxMarker; });
/* concated harmony reexport MapboxNavigationControl */__webpack_require__.d(__webpack_exports__, "MapboxNavigationControl", function() { return MapboxNavigationControl; });
/* concated harmony reexport MapboxPopup */__webpack_require__.d(__webpack_exports__, "MapboxPopup", function() { return MapboxPopup; });
/* concated harmony reexport MapboxSource */__webpack_require__.d(__webpack_exports__, "MapboxSource", function() { return MapboxSource; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ })

/******/ });
//# sourceMappingURL=vue-mapbox-gl.common.js.map