(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactAMAP"] = factory(require("react"), require("react-dom"));
	else
		root["ReactAMAP"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var errorMap = {
  'MARKER_ID_CONFLICT': 'Marker 的 id 属性重复',
  'MARKER_ID_REQUIRED': '每一个 Marker 必需有一个 id 属性',
  'MAP_INSTANCE_REQUIRED': '没有地图实例；组件必须作为 Map 的子组件使用',
  'CIRCLE_INSTANCE_REQUIRED': '',
  'CIRCLE_CENTER_REQUIRED': 'Circle 组件必需设置 center 属性',
  'CIRCLE_RADIUS_REQUIRED': 'Circle 组件必需设置 radius 属性',
  'SRC_REQUIRED': 'GroundImage 组件必需设置 src 属性',
  'BOUNDS_REQUIRED': 'GroundImage 组件必需设置 bounds 属性',
  'WINDOW_POSITION_REQUIRED': 'InfoWindow 组件必需设置 position 属性',
  'INVALID_AMAP_PLUGIN': 'plugins 属性不正确；目前支持的插件有\'Scale\', \'ToolBar\', \'MapType\', \'OverView\''
};

var getMessage = function getMessage(key) {
  return key in errorMap ? errorMap[key] : key;
};

var log = {
  // 开发者必须修正的问题，否则会影响其他程序运行
  error: function error(key) {
    throw new Error(getMessage(key));
  },

  // 是一个错误，导致本插件无法运行，但是不会影响开发者的其他功能
  warning: function warning(key) {
    // console.log(`%c${getMessage(key)}`, 'color:#f66;border-left: 2px solid red;padding-left: 4px;');
    console.warn(getMessage(key));
  },

  // 不影响使用，但不是本插件理想的使用方式
  optimize: function optimize(key) {
    console.log('%c' + getMessage(key), 'color:#d4d483;border-left: 2px solid #d4d483;padding-left: 4px;');
  }
};

exports.default = log;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _toCapitalString = __webpack_require__(11);

var _toCapitalString2 = _interopRequireDefault(_toCapitalString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withPropsReactive(MapComponent) {
  return function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.instanceCreated = false;
      _this.myMapComponent = null;
      _this.registeredEvents = [];
      _this.onInstanceCreated = _this.onInstanceCreated.bind(_this);
      return _this;
    }

    _createClass(_class, [{
      key: 'onInstanceCreated',
      value: function onInstanceCreated() {
        this.instanceCreated = true;
        if ('events' in this.props) {
          var instance = this.myMapComponent.instance;

          if (this.props.events.created) {
            this.props.events.created(instance);
          }
        }
        this.reactivePropChange(this.props, false);
      }
    }, {
      key: 'createEventsProxy',
      value: function createEventsProxy(props) {
        var self = this;
        var instance = this.myMapComponent.instance;

        var evs = Object.keys(props.events || {});
        evs.length && evs.forEach(function (ev) {
          if (self.registeredEvents.indexOf(ev) === -1) {
            self.registeredEvents.push(ev);
            instance.on(ev, function (ev) {
              return function () {
                if (self.props.events && ev in self.props.events) {
                  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  self.props.events[ev].apply(null, args);
                }
              };
            }(ev));
          }
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.reactivePropChange(nextProps, true);
      }
    }, {
      key: 'reactivePropChange',
      value: function reactivePropChange(nextProps) {
        var _this2 = this;

        var shouldDetectChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (!this.instanceCreated) {
          return false;
        }
        var _myMapComponent = this.myMapComponent,
            _myMapComponent$sette = _myMapComponent.setterMap,
            setterMap = _myMapComponent$sette === undefined ? {} : _myMapComponent$sette,
            _myMapComponent$conve = _myMapComponent.converterMap,
            converterMap = _myMapComponent$conve === undefined ? {} : _myMapComponent$conve,
            _myMapComponent$insta = _myMapComponent.instance,
            instance = _myMapComponent$insta === undefined ? {} : _myMapComponent$insta;

        var list = Object.keys(nextProps);
        list.length && list.forEach(function (key) {
          if (key === 'events') {
            return _this2.createEventsProxy(nextProps);
          }

          var willReactive = true;
          if (shouldDetectChange) {
            willReactive = _this2.detectPropChange(key, nextProps, _this2.props);
          }
          if (!willReactive) {
            return false;
          }
          var setterParam = nextProps[key];
          if (key in converterMap) {
            setterParam = converterMap[key](nextProps[key]);
          }
          if (key in setterMap) {
            setterMap[key](setterParam);
          } else {
            var trySetterName = 'set' + (0, _toCapitalString2.default)(key);
            if (trySetterName in instance) {
              instance[trySetterName](setterParam);
            }
          }
        });
      }
    }, {
      key: 'detectPropChange',
      value: function detectPropChange(key, nextProps, oldProps) {
        return nextProps[key] !== oldProps[key];
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return _react2.default.createElement(MapComponent, _extends({
          onInstanceCreated: this.onInstanceCreated,
          ref: function ref(comp) {
            _this3.myMapComponent = comp;
          }
        }, this.props));
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var instance = this.myMapComponent.instance;

        if (!instance) return;
        if ('destroy' in instance) {
          setTimeout(function () {
            instance.destroy();
          }, 10);
        }
        if ('hide' in instance) {
          instance.hide();
        }
        if ('__map__' in this.props && 'setMap' in instance) {
          instance.setMap(null);
        }
      }
    }]);

    return _class;
  }(_react2.default.Component);
};

exports.default = withPropsReactive;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasWindow = typeof window !== 'undefined';

/*
 * [lng, lat]
 * {lng, lat}
 * {longitude, latitude}
 */
var toLnglat = exports.toLnglat = function toLnglat(pos) {
  if (!pos) {
    return pos;
  }
  // 高德原生 AMap.LngLat 类
  if ('getLng' in pos && 'getLat' in pos) {
    return pos;
  }
  var lng = 0;
  var lat = 0;
  if ({}.toString.call(pos) === '[object Array]') {
    lng = pos[0];
    lat = pos[1];
  } else if ('lng' in pos && 'lat' in pos) {
    lng = pos.lng;
    lat = pos.lat;
  } else if ('longitude' in pos && 'latitude' in pos) {
    lng = pos.longitude;
    lat = pos.latitude;
  }
  return hasWindow ? new window.AMap.LngLat(lng, lat) : null;
};

var toPixel = exports.toPixel = function toPixel(ofst) {
  if (!ofst) {
    return ofst;
  }
  if ('getX' in ofst && 'getY' in ofst) {
    return ofst;
  }
  var x = 0;
  var y = 0;
  if ({}.toString.call(ofst) === '[object Array]') {
    x = ofst[0];
    y = ofst[1];
  } else if ('x' in ofst && 'y' in ofst) {
    x = ofst.x;
    y = ofst.y;
  }
  return hasWindow ? new window.AMap.Pixel(x, y) : null;
};

var toSize = exports.toSize = function toSize(size) {
  if (!size) {
    return size;
  }
  if ('getWidth' in size) {
    return size;
  }
  return hasWindow ? new window.AMap.Size(size.width, size.height) : null;
};

exports.default = {
  toLnglat: toLnglat,
  toPixel: toPixel,
  toSize: toSize
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isFun = function isFun(arg) {
  return !!arg && typeof arg === 'function';
};

exports.default = isFun;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withPropsReactive = __webpack_require__(2);

var _withPropsReactive2 = _interopRequireDefault(_withPropsReactive);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PolyEditor = function (_React$Component) {
  _inherits(PolyEditor, _React$Component);

  function PolyEditor(props) {
    _classCallCheck(this, PolyEditor);

    var _this = _possibleConstructorReturn(this, (PolyEditor.__proto__ || Object.getPrototypeOf(PolyEditor)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!(props.__map__ && props.__poly__)) {
        _log2.default.warning('MAP_INSTANCE_REQUIRED');
      } else {
        var self = _this;
        _this.setterMap = {
          active: function active(val) {
            self.toggleActive(val);
          }
        };
        _this.map = props.__map__;
        _this.poly = props.__poly__;
        _this.editorActive = false;
        _this.createEditorInstance().then(function () {
          _this.props.onInstanceCreated && _this.props.onInstanceCreated();
        });
      }
    }
    return _this;
  }

  _createClass(PolyEditor, [{
    key: 'toggleActive',
    value: function toggleActive(active) {
      if (active) {
        if (!this.editorActive) {
          this.activeEditor();
        }
      } else {
        if (this.editorActive) {
          this.inactiveEditor();
        }
      }
    }
  }, {
    key: 'activeEditor',
    value: function activeEditor() {
      if (this.polyEditor) {
        this.editorActive = true;
        this.polyEditor.open();
      }
    }
  }, {
    key: 'inactiveEditor',
    value: function inactiveEditor() {
      this.editorActive = false;
      if (this.polyEditor) {
        this.polyEditor.close();
      }
    }
  }, {
    key: 'createEditorInstance',
    value: function createEditorInstance() {
      var _this2 = this;

      if (this.polyEditor) {
        return Promise.resolve(this.polyEditor);
      }
      return new Promise(function (resolve) {
        _this2.map.plugin(['AMap.PolyEditor'], function () {
          _this2.polyEditor = new window.AMap.PolyEditor(_this2.map, _this2.poly);
          resolve(_this2.polyEditor);
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'instance',
    get: function get() {
      return this.polyEditor;
    }
  }]);

  return PolyEditor;
}(_react2.default.Component);

exports.default = (0, _withPropsReactive2.default)(PolyEditor);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderMarkerComponent = exports.getPropValue = exports.MarkerAllProps = exports.MarkerConfigurableProps = undefined;

var _common = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _isFun = __webpack_require__(4);

var _isFun2 = _interopRequireDefault(_isFun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkerConfigurableProps = exports.MarkerConfigurableProps = ['position', 'offset', 'icon', 'content', 'draggable', 'visible', 'zIndex', 'angle', 'animation', 'shadow', 'title', 'clickable', 'extData', 'label'];

var MarkerAllProps = exports.MarkerAllProps = MarkerConfigurableProps.concat(['topWhenClick', 'bubble', 'raiseOnDrag', 'cursor', 'autoRotation', 'shape']);

var getPropValue = exports.getPropValue = function getPropValue(key, value) {
  if (MarkerAllProps.indexOf(key) === -1) {
    return null;
  }
  if (key === 'position') {
    return (0, _common.toLnglat)(value);
  } else if (key === 'offset') {
    return (0, _common.toPixel)(value);
  }
  return value;
};

var renderMarkerComponent = exports.renderMarkerComponent = function renderMarkerComponent(component, marker) {
  var child = component;
  if ((0, _isFun2.default)(component)) {
    var extData = marker.getExtData();
    child = component(extData);
  }
  if (child) {
    (0, _reactDom.render)(_react2.default.createElement(
      'div',
      null,
      child
    ), marker.getContent());
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MouseTool = exports.Marker = exports.GroundImage = exports.InfoWindow = exports.PolyEditor = exports.Polyline = exports.Polygon = exports.CircleEditor = exports.Circle = exports.Markers = exports.Map = undefined;

var _map = __webpack_require__(9);

var _map2 = _interopRequireDefault(_map);

var _marker = __webpack_require__(12);

var _marker2 = _interopRequireDefault(_marker);

var _markers = __webpack_require__(13);

var _markers2 = _interopRequireDefault(_markers);

var _circle = __webpack_require__(14);

var _circle2 = _interopRequireDefault(_circle);

var _polygon = __webpack_require__(15);

var _polygon2 = _interopRequireDefault(_polygon);

var _polyline = __webpack_require__(16);

var _polyline2 = _interopRequireDefault(_polyline);

var _infowindow = __webpack_require__(17);

var _infowindow2 = _interopRequireDefault(_infowindow);

var _groundimage = __webpack_require__(18);

var _groundimage2 = _interopRequireDefault(_groundimage);

var _circleeditor = __webpack_require__(19);

var _circleeditor2 = _interopRequireDefault(_circleeditor);

var _polyeditor = __webpack_require__(6);

var _polyeditor2 = _interopRequireDefault(_polyeditor);

var _mousetool = __webpack_require__(20);

var _mousetool2 = _interopRequireDefault(_mousetool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Map = _map2.default;
exports.Markers = _markers2.default;
exports.Circle = _circle2.default;
exports.CircleEditor = _circleeditor2.default;
exports.Polygon = _polygon2.default;
exports.Polyline = _polyline2.default;
exports.PolyEditor = _polyeditor2.default;
exports.InfoWindow = _infowindow2.default;
exports.GroundImage = _groundimage2.default;
exports.Marker = _marker2.default;
exports.MouseTool = _mousetool2.default;
exports.default = {
  Map: _map2.default,
  Markers: _markers2.default,
  Circle: _circle2.default,
  CircleEditor: _circleeditor2.default,
  Polygon: _polygon2.default,
  Polyline: _polyline2.default,
  PolyEditor: _polyeditor2.default,
  InfoWindow: _infowindow2.default,
  GroundImage: _groundimage2.default,
  Marker: _marker2.default,
  MouseTool: _mousetool2.default
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _APILoader = __webpack_require__(10);

var _APILoader2 = _interopRequireDefault(_APILoader);

var _isFun = __webpack_require__(4);

var _isFun2 = _interopRequireDefault(_isFun);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

var _common = __webpack_require__(3);

var _withPropsReactive = __webpack_require__(2);

var _withPropsReactive2 = _interopRequireDefault(_withPropsReactive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;
var Children = _react2.default.Children;
var containerStyle = {
  width: '100%',
  height: '100%'
};
var wrapperStyle = {
  width: '100%',
  height: '100%',
  position: 'relative'

  // Native supported dynamic props by Amap
};var NativeDynamicProps = ['layers', 'zoom', 'center', 'labelzIndex',

// 'lang', native error in JSSDK when 3D viewMode
'mapStyle', 'features', 'cursor', 'pitch'];

/*
 * Props below can set by 'setStatus' altogether
 */
var StatusDynamicProps = ['animateEnable', 'doubleClickZoom', 'dragEnable', 'isHotspot', 'jogEnable', 'keyboardEnable', 'resizeEnable', 'rotateEnable', 'scrollWheel', 'touchZoom', 'zoomEnable', 'touchZoomCenter'];

var StaticProps = ['view', 'zooms', 'showIndoorMap', 'indoorMap', 'expandZoomRange', 'showBuildingBlock', 'viewMode', 'pitchEnable', 'buildingAnimation', 'skyColor'];

var CreateProps = NativeDynamicProps.concat(StatusDynamicProps, StaticProps);

// const reservedPropName = [
//   'amapkey',
//   'version',
//   'useAMapUI',
//   'onInstanceCreated',
//   'events',
//   'loading',
//   'plugins'
// ]

var defaultOpts = {
  MapType: {
    showRoad: false,
    showTraffic: false,
    defaultType: 0
  },
  ToolBar: {
    position: 'RB',
    noIpLocate: true,
    locate: true,
    liteStyle: true,
    autoPosition: false
  },
  OverView: {},
  ControlBar: {}
};

var BaseMap = function (_Component) {
  _inherits(BaseMap, _Component);

  function BaseMap(props) {
    _classCallCheck(this, BaseMap);

    var _this = _possibleConstructorReturn(this, (BaseMap.__proto__ || Object.getPrototypeOf(BaseMap)).call(this, props));

    _this.state = {
      mapLoaded: false
    };
    var self = _this;
    _this.setterMap = {
      zoom: function zoom(val) {
        self.map.setZoom(val);
      },
      cursor: function cursor(val) {
        self.map.setDefaultCursor(val);
      },
      labelzIndex: function labelzIndex(val) {
        self.map.setlabelzIndex(val);
      }
    };
    _this.converterMap = {
      center: _common.toLnglat,
      mapStyle: function mapStyle(styleStr) {
        if (styleStr.indexOf('amap://styles') === 0) {
          return styleStr;
        }
        return 'amap://styles/' + styleStr;
      }
    };
    if (typeof window !== 'undefined') {
      _this.pluginMap = {};
      new _APILoader2.default({
        key: props.amapkey,
        useAMapUI: props.useAMapUI,
        version: props.version,
        protocol: props.protocol
      }).load().then(function () {
        _this.createInstance();
        if (!_this.state.mapLoaded) {
          _this.setState({
            mapLoaded: true
          });
        }
      });
    }
    return _this;
  }

  _createClass(BaseMap, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.mapLoaded) {
        this.updateMapProps(this.props, nextProps);
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      return Children.map(this.props.children, function (child) {
        if (child) {
          var cType = child.type;
          /* 针对下面两种组件不注入地图相关属性
           * 1. 明确声明不需要注入的
           * 2. DOM 元素
           */
          if (cType.preventAmap || typeof cType === 'string') {
            return child;
          }
          return _react2.default.cloneElement(child, {
            __map__: _this2.map
          });
        }
        return child;
      });
    }
  }, {
    key: 'createInstance',
    value: function createInstance() {
      if (!this.map) {
        var options = this.buildCreateOptions();
        this.map = new window.AMap.Map(this.mapWrapper, options);
        // install map plugins
        this.setPlugins(this.props);
        this.props.onInstanceCreated && this.props.onInstanceCreated();
      }
    }
  }, {
    key: 'buildCreateOptions',
    value: function buildCreateOptions() {
      var _this3 = this;

      var props = this.props;
      var options = {};
      CreateProps.forEach(function (key) {
        if (key in props) {
          options[key] = _this3.getSetterValue(key, props);
        }
      });
      return options;
    }
  }, {
    key: 'updateMapProps',
    value: function updateMapProps(prevProps, nextProps) {
      var _this4 = this;

      var nextMapStatus = {};
      var statusChangeFlag = false;
      var statusPropExist = false;
      StatusDynamicProps.forEach(function (key) {
        if (key in nextProps) {
          statusPropExist = true;
          if (_this4.detectPropChanged(key, prevProps, nextProps)) {
            statusChangeFlag = true;
            nextMapStatus[key] = nextProps[key];
          }
        }
      });
      statusChangeFlag && this.map.setStatus(nextMapStatus);
      if (statusPropExist && 'status' in nextProps) {
        _log2.default.warning('\u4EE5\u4E0B\u8FD9\u4E9B\u5C5E\u6027\u53EF\u4EE5\u5355\u72EC\u63D0\u4F9B\u8FDB\u884C\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u7EDF\u4E00\u4F5C\u4E3A\u2018status\u2019\u5C5E\u6027\u914D\u7F6E\uFF1B\u4F46\u662F\u8BF7\u4E0D\u8981\u540C\u65F6\u4F7F\u7528\u8FD9\u4E24\u79CD\u65B9\u5F0F\u3002\n\uFF08' + StatusDynamicProps.join(', ') + '\uFF09');
      }
      StaticProps.forEach(function (key) {
        if (key in nextProps) {
          if (_this4.detectPropChanged(key, prevProps, nextProps)) {
            _log2.default.warning('\'' + key + '\' \u662F\u4E00\u4E2A\u9759\u6001\u5C5E\u6027\uFF0C\u5730\u56FE\u5B9E\u4F8B\u521B\u5EFA\u6210\u529F\u540E\u65E0\u6CD5\u4FEE\u6539');
          }
        }
      });
      this.setPlugins(nextProps);
    }
  }, {
    key: 'getSetterValue',
    value: function getSetterValue(key, props) {
      if (key in this.converterMap) {
        return this.converterMap[key](props[key]);
      }
      return props[key];
    }
  }, {
    key: 'detectPropChanged',
    value: function detectPropChanged(key, prevProps, nextProps) {
      return prevProps[key] !== nextProps[key];
    }
  }, {
    key: 'setPlugins',
    value: function setPlugins(props) {
      var _this5 = this;

      var pluginList = ['Scale', 'ToolBar', 'MapType', 'OverView', 'ControlBar'];
      if ('plugins' in props) {
        var plugins = props.plugins;
        if (plugins && plugins.length) {
          plugins.forEach(function (p) {
            var name = void 0,
                config = void 0,
                visible = void 0;
            if (typeof p === 'string') {
              name = p;
              config = null;
              visible = true;
            } else {
              name = p.name;
              config = p.options || {};
              visible = 'visible' in config && typeof config.visible === 'boolean' ? config.visible : true;
              delete config.visible;
            }
            var idx = pluginList.indexOf(name);
            if (idx === -1) {
              _log2.default.warning('\u6CA1\u6709 \u2018' + name + '\u2019 \u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u62FC\u5199\u9519\u8BEF');
            } else {
              if (visible) {
                pluginList.splice(idx, 1);
                _this5.installPlugin(name, config);
              }
            }
          });
        }
      }
      this.removeOrDisablePlugins(pluginList);
    }
  }, {
    key: 'removeOrDisablePlugins',
    value: function removeOrDisablePlugins(plugins) {
      var _this6 = this;

      if (plugins && plugins.length) {
        plugins.forEach(function (p) {
          if (p in _this6.pluginMap) {
            // ControlBar has no 'hide' method
            if (p === 'ControlBar') {
              _this6.map.removeControl(_this6.pluginMap[p]);
              delete _this6.pluginMap[p];
            } else {
              _this6.pluginMap[p].hide();
            }
          }
        });
      }
    }
  }, {
    key: 'installPlugin',
    value: function installPlugin(name, opts) {
      opts = opts || {};
      switch (name) {
        case 'Scale':
        case 'ToolBar':
        case 'OverView':
        case 'MapType':
          this.setMapPlugin(name, opts);
          break;
        case 'ControlBar':
          this.setControlBar(opts);
          break;
        default:
        // do nothing
      }
    }
  }, {
    key: 'setMapPlugin',
    value: function setMapPlugin(name, opts) {
      var _this7 = this;

      if (this.pluginMap[name]) {
        this.pluginMap[name].show();
      } else {
        var onCreated = opts.onCreated,
            restOpts = _objectWithoutProperties(opts, ['onCreated']);

        var initOpts = _extends({}, defaultOpts[name], restOpts);
        this.map.plugin(['AMap.' + name], function () {
          _this7.pluginMap[name] = new window.AMap[name](initOpts);
          _this7.map.addControl(_this7.pluginMap[name]);
          if ((0, _isFun2.default)(onCreated)) {
            onCreated(_this7.pluginMap[name]);
          }
        });
      }
    }
  }, {
    key: 'setControlBar',
    value: function setControlBar(opts) {
      var _this8 = this;

      if (this.pluginMap.ControlBar) {
        // do nothing
      } else {
        var onCreated = opts.onCreated,
            restOpts = _objectWithoutProperties(opts, ['onCreated']);

        var initOpts = _extends({}, defaultOpts.ControlBar, restOpts);
        this.map.plugin(['AMap.ControlBar'], function () {
          _this8.pluginMap.ControlBar = new window.AMap.ControlBar(initOpts);
          _this8.map.addControl(_this8.pluginMap.ControlBar);
          if ((0, _isFun2.default)(onCreated)) {
            onCreated(_this8.pluginMap.ControlBar);
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this9 = this;

      return _react2.default.createElement(
        'div',
        { style: wrapperStyle },
        _react2.default.createElement(
          'div',
          { ref: function ref(div) {
              _this9.mapWrapper = div;
            }, style: containerStyle },
          this.state.mapLoaded ? null : this.props.loading || null
        ),
        _react2.default.createElement(
          'div',
          null,
          this.state.mapLoaded ? this.renderChildren() : null
        )
      );
    }
  }, {
    key: 'instance',
    get: function get() {
      return this.map;
    }
  }]);

  return BaseMap;
}(Component);

exports.default = (0, _withPropsReactive2.default)(BaseMap);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_CONFIG = {
  v: '1.4.0',
  hostAndPath: 'webapi.amap.com/maps',
  key: 'f97efc35164149d0c0f299e7a8adb3d2',
  callback: '__amap_init_callback',
  useAMapUI: false
};

var mainPromise = null;
var amapuiPromise = null;
var amapuiInited = false;

var APILoader = function () {
  function APILoader(_ref) {
    var key = _ref.key,
        useAMapUI = _ref.useAMapUI,
        version = _ref.version,
        protocol = _ref.protocol;

    _classCallCheck(this, APILoader);

    this.config = _extends({}, DEFAULT_CONFIG, { useAMapUI: useAMapUI, protocol: protocol });
    if (typeof window !== 'undefined') {
      if (key) {
        this.config.key = key;
      } else if ('amapkey' in window) {
        this.config.key = window.amapkey;
      }
    }
    if (version) {
      this.config.v = version;
    }
    this.protocol = protocol || window.location.protocol;
    if (this.protocol.indexOf(':') === -1) {
      this.protocol += ':';
    }
  }

  _createClass(APILoader, [{
    key: 'getScriptSrc',
    value: function getScriptSrc(cfg) {
      return this.protocol + '//' + cfg.hostAndPath + '?v=' + cfg.v + '&key=' + cfg.key + '&callback=' + cfg.callback;
    }
  }, {
    key: 'buildScriptTag',
    value: function buildScriptTag(src) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.src = src;
      return script;
    }
  }, {
    key: 'getAmapuiPromise',
    value: function getAmapuiPromise() {
      if (window.AMapUI) {
        return Promise.resolve();
      }
      var script = this.buildScriptTag(this.protocol + '//webapi.amap.com/ui/1.1/main-async.js');
      var p = new Promise(function (resolve) {
        script.onload = function () {
          resolve();
        };
      });
      document.body.appendChild(script);
      return p;
    }
  }, {
    key: 'getMainPromise',
    value: function getMainPromise() {
      var _this = this;

      if (window.AMap) {
        return Promise.resolve();
      }
      var script = this.buildScriptTag(this.getScriptSrc(this.config));
      var p = new Promise(function (resolve) {
        window[_this.config.callback] = function () {
          resolve();
          delete window[_this.config.callback];
        };
      });
      document.body.appendChild(script);
      return p;
    }
  }, {
    key: 'load',
    value: function load() {
      if (typeof window === 'undefined') {
        return null;
      }
      var useAMapUI = this.config.useAMapUI;

      mainPromise = mainPromise || this.getMainPromise();
      if (useAMapUI) {
        amapuiPromise = amapuiPromise || this.getAmapuiPromise();
      }
      return new Promise(function (resolve) {
        mainPromise.then(function () {
          if (useAMapUI && amapuiPromise) {
            amapuiPromise.then(function () {
              if (window.initAMapUI && !amapuiInited) {
                window.initAMapUI();
                if (typeof useAMapUI === 'function') {
                  useAMapUI();
                }
                amapuiInited = true;
              }
              resolve();
            });
          } else {
            resolve();
          }
        });
      });
    }
  }]);

  return APILoader;
}();

exports.default = APILoader;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toCapitalString = function toCapitalString(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
};
exports.default = toCapitalString;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

var _withPropsReactive = __webpack_require__(2);

var _withPropsReactive2 = _interopRequireDefault(_withPropsReactive);

var _markerUtils = __webpack_require__(7);

var _common = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Marker = function (_React$Component) {
  _inherits(Marker, _React$Component);

  function Marker(props) {
    _classCallCheck(this, Marker);

    var _this = _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!props.__map__) {
        _log2.default.warning('MAP_INSTANCE_REQUIRED');
      } else {
        var self = _this;
        _this.setterMap = {
          visible: function visible(val) {
            if (val) {
              self.marker && self.marker.show();
            } else {
              self.marker && self.marker.hide();
            }
          },
          zIndex: function zIndex(val) {
            self.marker && self.marker.setzIndex(val);
          }
        };
        _this.converterMap = {
          position: _common.toLnglat,
          offset: _common.toPixel
        };
        _this.map = props.__map__;
        _this.element = _this.map.getContainer();
        setTimeout(function () {
          _this.createMarker(props);
        }, 13);
      }
    }
    return _this;
  }

  _createClass(Marker, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.map) {
        this.refreshMarkerLayout(nextProps);
      }
    }
  }, {
    key: 'createMarker',
    value: function createMarker(props) {
      var options = this.buildCreateOptions(props);
      this.marker = new window.AMap.Marker(options);

      this.marker.render = function (marker) {
        return function (component) {
          (0, _markerUtils.renderMarkerComponent)(component, marker);
        };
      }(this.marker);
      this.props.onInstanceCreated && this.props.onInstanceCreated();
      this.setMarkerLayout(props);
      this.setChildComponent(props);
    }

    // 在创建实例时根据传入配置，设置初始化选项

  }, {
    key: 'buildCreateOptions',
    value: function buildCreateOptions(props) {
      var _this2 = this;

      var opts = {};
      _markerUtils.MarkerAllProps.forEach(function (key) {
        if (key in props) {
          opts[key] = _this2.getSetterParam(key, props[key]);
        }
      });
      opts.map = this.map;
      return opts;
    }

    // 初始化标记的外观

  }, {
    key: 'setMarkerLayout',
    value: function setMarkerLayout(props) {
      if ('render' in props || 'children' in props && props.children) {
        this.createContentWrapper();
        if ('className' in props && props.className) {
          // https://github.com/ElemeFE/react-amap/issues/40
          this.contentWrapper.className = props.className;
        }
      }
    }
  }, {
    key: 'createContentWrapper',
    value: function createContentWrapper() {
      this.contentWrapper = document.createElement('div');
      this.marker.setContent(this.contentWrapper);
    }
  }, {
    key: 'setChildComponent',
    value: function setChildComponent(props) {
      if (this.contentWrapper) {
        if ('className' in props && props.className) {
          // https://github.com/ElemeFE/react-amap/issues/40
          this.contentWrapper.className = props.className;
        }
        if ('render' in props) {
          (0, _markerUtils.renderMarkerComponent)(props.render, this.marker);
        } else if ('children' in props) {
          var child = props.children;
          var childType = typeof child === 'undefined' ? 'undefined' : _typeof(child);
          if (childType !== 'undefined' && this.contentWrapper) {
            (0, _reactDom.render)(_react2.default.createElement(
              'div',
              null,
              child
            ), this.contentWrapper);
          }
        }
      }
    }
  }, {
    key: 'refreshMarkerLayout',
    value: function refreshMarkerLayout(nextProps) {
      this.setChildComponent(nextProps);
    }
  }, {
    key: 'getSetterParam',
    value: function getSetterParam(key, val) {
      if (key in this.converterMap) {
        return this.converterMap[key](val);
      }
      return val;
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'instance',
    get: function get() {
      return this.marker;
    }
  }]);

  return Marker;
}(_react2.default.Component);

exports.default = (0, _withPropsReactive2.default)(Marker);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _isFun = __webpack_require__(4);

var _isFun2 = _interopRequireDefault(_isFun);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

var _markerUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window !== 'undefined') {
  var styleText = '.amap_markers_pop_window{\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    background: #fff;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n}\n.amap_markers_pop_window::before{\n    content: \' \';\n    display: block;\n    position: absolute;\n    bottom: -12px;\n    left: 50%;\n    margin-left: -7px;\n    width: 0;\n    height: 0;\n    border-top: 12px solid #ddd;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n}\n.amap_markers_pop_window::after{\n    content: \' \';\n    display: block;\n    position: absolute;\n    bottom: -11px;\n    left: 50%;\n    margin-left: -6px;\n    width: 0;\n    height: 0;\n    border-top: 11px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n}\n.amap_markers_pop_window_item{\n    cursor:pointer;\n    width: 40px;\n    height: 50px;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n}\n.amap_markers_pop_window_item span{\n    pointer-events: none;\n}\n.amap_markers_window_overflow_warning{\n    text-align: center;\n    width: 100%;\n    margin: 5px 0;\n    color: #666;\n}';
  var headEl = document.head || document.getElementsByTagName('head')[0];
  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.textContent = styleText;
  headEl.appendChild(styleEl);
}

var Component = _react2.default.Component;

var SCALE = 0.8;
var SIZE_WIDTH = 32 * SCALE;
var SIZE_HEIGHT = 46 * SCALE - 2;
var SIZE_HOVER_WIDTH = 46 * SCALE;
var SIZE_HOVER_HEIGHT = 66 * SCALE - 2;
var MAX_INFO_MARKERS = 42;

var defaultOpts = {
  useCluster: false,
  markersCache: [],
  markerIDCache: []
};

var ClusterProps = ['gridSize', 'minClusterSize', 'maxZoom', 'averageCenter', 'styles', 'zoomOnClick', 'renderCluserMarker'];

var IdKey = '__react_amap__';

/*
 * props
 * {
 *  useCluster(boolean)是否使用聚合点
 *  markers(array<>)坐标列表
 *  __map__ 父级组件传过来的地图实例
 *  __ele__ 父级组件传过来的地图容器
 * }
 */

var Markers = function (_Component) {
  _inherits(Markers, _Component);

  function Markers(props) {
    _classCallCheck(this, Markers);

    var _this = _possibleConstructorReturn(this, (Markers.__proto__ || Object.getPrototypeOf(Markers)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!props.__map__) {
        _log2.default.warning('MAP_INSTANCE_REQUIRED');
      } else {
        _this.map = props.__map__;
        _this.element = _this.map.getContainer();
        _this.markersCache = defaultOpts.markersCache;
        _this.useCluster = null;
        _this.markerIDCache = defaultOpts.markerIDCache;
        _this.resetOffset = new window.AMap.Pixel(-SIZE_WIDTH / 2, -SIZE_HEIGHT);
        _this.hoverOffset = new window.AMap.Pixel(-SIZE_HOVER_WIDTH / 2, -SIZE_HOVER_HEIGHT);
        _this.createMarkers(props);
      }
    }
    return _this;
  }

  _createClass(Markers, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'createMarkers',
    value: function createMarkers(props) {
      var _this2 = this;

      var markers = props.markers || [];

      var mapMarkers = [];
      var markerReactChildDOM = {};
      markers.length && markers.forEach(function (raw, idx) {
        var options = _this2.buildCreateOptions(props, raw, idx);
        options.map = _this2.map;

        var markerContent = null;
        if ((0, _isFun2.default)(props.render)) {
          // $FlowFixMe
          var markerChild = props.render(raw);
          if (markerChild !== false) {
            var div = document.createElement('div');
            div.setAttribute(IdKey, '1');
            markerContent = div;
            markerReactChildDOM[idx] = markerChild;
          }
        }

        if (!markerContent) {
          markerContent = document.createElement('div');
          var img = document.createElement('img');
          img.src = '//webapi.amap.com/theme/v1.3/markers/n/mark_bs.png';
          markerContent.appendChild(img);
        }
        options.content = markerContent;

        var marker = new window.AMap.Marker(options);
        marker.on('click', function (e) {
          _this2.onMarkerClick(e);
        });
        marker.on('mouseover', function (e) {
          _this2.onMarkerHover(e);
        });
        marker.on('mouseout', function (e) {
          _this2.onMarkerHoverOut(e);
        });

        marker.render = function (marker) {
          return function (component) {
            return (0, _markerUtils.renderMarkerComponent)(component, marker);
          };
        }(marker);

        _this2.bindMarkerEvents(marker);
        mapMarkers.push(marker);
      });
      this.markersCache = mapMarkers;
      this.markerReactChildDOM = markerReactChildDOM;
      this.exposeMarkerInstance();

      this.checkClusterSettings(props);
    }
  }, {
    key: 'checkClusterSettings',
    value: function checkClusterSettings(props) {
      var _this3 = this;

      if (props.useCluster) {
        this.loadClusterPlugin(props.useCluster).then(function (cluster) {
          cluster.setMarkers(_this3.markersCache);
        });
      } else {
        if (this.mapCluster) {
          var markers = this.mapCluster.getMarkers();
          this.mapCluster.clearMarkers();
          markers.forEach(function (marker) {
            marker.setMap(_this3.map);
          });
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.map) {
        this.setMarkerChild();
      }
    }
  }, {
    key: 'setMarkerChild',
    value: function setMarkerChild() {
      var _this4 = this;

      Object.keys(this.markerReactChildDOM).forEach(function (idx) {
        var dom = _this4.markersCache[idx].getContent();
        var child = _this4.markerReactChildDOM[idx];
        _this4.renderMarkerChild(dom, child);
      });
    }
  }, {
    key: 'renderMarkerChild',
    value: function renderMarkerChild(dom, child) {
      (0, _reactDom.render)(_react2.default.createElement(
        'div',
        null,
        child
      ), dom);
    }
  }, {
    key: 'buildCreateOptions',
    value: function buildCreateOptions(props, raw, idx) {
      var result = {};
      // 强制用户通过 render 函数来定义外观
      // const disabledKeys = ['label', 'icon', 'content'];
      // 还是不强制好，通过覆盖的方式来(如果有 render，覆盖 content/icon);
      var disabledKeys = ['extData'];
      _markerUtils.MarkerAllProps.forEach(function (key) {
        if (key in raw && disabledKeys.indexOf(key) === -1) {
          result[key] = (0, _markerUtils.getPropValue)(key, raw[key]);
        } else if (key in props) {
          if ((0, _isFun2.default)(props[key])) {
            var tmpValue = props[key].call(null, raw, idx);
            result[key] = (0, _markerUtils.getPropValue)(key, tmpValue);
          } else {
            result[key] = (0, _markerUtils.getPropValue)(key, props[key]);
          }
        }
      });
      result.extData = raw;
      return result;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.map) {
        this.refreshMarkersLayout(nextProps);
      }
    }
  }, {
    key: 'refreshMarkersLayout',
    value: function refreshMarkersLayout(nextProps) {
      var markerChanged = nextProps.markers !== this.props.markers;
      var clusterChanged = !!this.props.useCluster !== !!nextProps.useCluster;
      if (markerChanged) {
        this.markersCache.length && this.markersCache.forEach(function (marker) {
          if (marker) {
            marker.setMap(null);
            marker = null;
          }
        });
        this.markersCache = defaultOpts.markersCache;
        this.createMarkers(nextProps);
        this.setMarkerChild();
      }
      if (markerChanged || clusterChanged) {
        if (this.markersWindow) {
          this.markersWindow.close();
        }
      }
      if (clusterChanged) {
        this.checkClusterSettings(nextProps);
      }
    }
  }, {
    key: 'loadClusterPlugin',
    value: function loadClusterPlugin(clusterConfig) {
      var _this5 = this;

      if (this.mapCluster) {
        return Promise.resolve(this.mapCluster);
      }
      var config = typeof clusterConfig === 'boolean' ? {} : clusterConfig;
      return new Promise(function (resolve) {
        _this5.map.plugin(['AMap.MarkerClusterer'], function () {
          resolve(_this5.createClusterPlugin(config));
        });
      });
    }
  }, {
    key: 'createClusterPlugin',
    value: function createClusterPlugin(config) {
      var options = {};
      // const style = {
      //   url: clusterIcon,
      //   size: new window.AMap.Size(56, 56),
      //   offset: new window.AMap.Pixel(-28, -28)
      // };
      var defalutOptions = {
        minClusterSize: 2,
        zoomOnClick: false,
        maxZoom: 18,
        gridSize: 60,
        // styles: [style, style, style],
        averageCenter: true
      };

      ClusterProps.forEach(function (key) {
        if (key in config) {
          options[key] = config[key];
        } else {
          options[key] = defalutOptions[key];
        }
      });

      this.mapCluster = new window.AMap.MarkerClusterer(this.map, [], options);
      var events = {};
      if ('events' in config) {
        events = config.events;
        if ('created' in events) {
          events.created(this.mapCluster);
        }
      }
      this.initClusterMarkerWindow();
      this.bindClusterEvent(events);
      return this.mapCluster;
    }
  }, {
    key: 'onMarkerClick',
    value: function onMarkerClick(e) {
      var marker = e.target;
      this.triggerMarkerClick(e, marker);
    }
  }, {
    key: 'onMarkerHover',
    value: function onMarkerHover(e) {
      e.target.setTop(true);
      this.setMarkerHovered(e, e.target);
    }
  }, {
    key: 'onMarkerHoverOut',
    value: function onMarkerHoverOut(e) {
      e.target.setTop(false);
      this.setMarkerHoverOut(e, e.target);
    }
  }, {
    key: 'onWindowMarkerClick',
    value: function onWindowMarkerClick(element) {
      var marker = element.markerRef;
      this.triggerMarkerClick(null, marker);
    }
  }, {
    key: 'onWindowMarkerHover',
    value: function onWindowMarkerHover(element) {
      var marker = element.markerRef;
      this.setMarkerHovered(null, marker);
    }
  }, {
    key: 'onWindowMarkerHoverOut',
    value: function onWindowMarkerHoverOut(element) {
      var marker = element.markerRef;
      this.setMarkerHoverOut(null, marker);
    }
  }, {
    key: 'setMarkerHovered',
    value: function setMarkerHovered(e, marker) {
      this.triggerMarkerHover(e, marker);
    }
  }, {
    key: 'setMarkerHoverOut',
    value: function setMarkerHoverOut(e, marker) {
      this.triggerMarkerHoverOut(e, marker);
    }
  }, {
    key: 'triggerMarkerClick',
    value: function triggerMarkerClick(e, marker) {
      // const raw = marker.getExtData();
      var events = this.props.events || {};
      if ((0, _isFun2.default)(events.click)) {
        events.click(e, marker);
      }
    }
  }, {
    key: 'triggerMarkerHover',
    value: function triggerMarkerHover(e, marker) {
      // const raw = marker.getExtData();
      var events = this.props.events || {};
      if ((0, _isFun2.default)(events.mouseover)) {
        events.mouseover(e, marker);
      }
    }
  }, {
    key: 'triggerMarkerHoverOut',
    value: function triggerMarkerHoverOut(e, marker) {
      // const raw = marker.getExtData();
      var events = this.props.events || {};
      if ((0, _isFun2.default)(events.mouseout)) {
        events.mouseout(e, marker);
      }
    }
  }, {
    key: 'initClusterMarkerWindow',
    value: function initClusterMarkerWindow() {
      this.markersWindow = new window.AMap.InfoWindow({
        isCustom: true,
        autoMove: true,
        closeWhenClickMap: true,
        content: '<span>loading...</span>',
        showShadow: false,
        offset: new window.AMap.Pixel(0, -20)
      });
      this.markersDOM = document.createElement('div');
      this.markersDOM.className = 'amap_markers_pop_window';
      this.markersWindow.setContent(this.markersDOM);
    }
  }, {
    key: 'bindClusterEvent',
    value: function bindClusterEvent(events) {
      var _this6 = this;

      this.mapCluster.on('click', function (e) {
        if (_this6.props.useCluster && _this6.props.useCluster.zoomOnClick) {
          //
        } else {
          var returnValue = true;
          if ((0, _isFun2.default)(events.click)) {
            returnValue = events.click(e);
          }
          if (returnValue !== false) {
            _this6.showMarkersInfoWindow(e);
          }
        }
      });
    }
  }, {
    key: 'showMarkersInfoWindow',
    value: function showMarkersInfoWindow(e) {
      var _this7 = this;

      var pos = e.lnglat;
      var markers = e.markers;
      this.markersDOM.innerHTML = '';
      if (markers && markers.length) {
        var length = markers.length;
        if (length > MAX_INFO_MARKERS) {
          markers = markers.slice(0, MAX_INFO_MARKERS);
        }
        markers.forEach(function (m) {
          var contentDOM = m.getContent();
          var itemDOM = document.createElement('div');
          itemDOM.className = 'window_marker_item';
          itemDOM.appendChild(contentDOM);
          itemDOM.markerRef = m;
          itemDOM.addEventListener('click', _this7.onWindowMarkerClick.bind(_this7, itemDOM), true);
          itemDOM.addEventListener('mouseover', _this7.onWindowMarkerHover.bind(_this7, itemDOM), true);
          itemDOM.addEventListener('mouseout', _this7.onWindowMarkerHoverOut.bind(_this7, itemDOM), true);

          _this7.markersDOM.appendChild(itemDOM);
        });
        if (length > MAX_INFO_MARKERS) {
          var warning = document.createElement('div');
          warning.className = 'amap_markers_window_overflow_warning';
          warning.innerText = '更多坐标请放大地图查看';
          this.markersDOM.appendChild(warning);
        }
      }
      this.markersWindow.open(this.map, pos);
    }
  }, {
    key: 'exposeMarkerInstance',
    value: function exposeMarkerInstance() {
      if ('events' in this.props) {
        var events = this.props.events || {};
        if ((0, _isFun2.default)(events.created)) {
          events.created(this.markersCache);
        }
      }
    }
  }, {
    key: 'bindMarkerEvents',
    value: function bindMarkerEvents(marker) {
      var events = this.props.events || {};
      var list = Object.keys(events);
      var preserveEv = ['click', 'mouseover', 'mouseout', 'created'];
      list.length && list.forEach(function (evName) {
        if (preserveEv.indexOf(evName) === -1) {
          marker.on(evName, events[evName]);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Markers;
}(Component);

exports.default = Markers;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withPropsReactive = __webpack_require__(2);

var _withPropsReactive2 = _interopRequireDefault(_withPropsReactive);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

var _common = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * props
 * {
 *  __map__ 父级组件传过来的地图实例
 * }
 */

var configurableProps = ['center', 'radius', 'draggable', 'extData',

/* 原生的接口中并没有这些对象，这是本组件的扩展 */
'visible', 'style'];

var allProps = configurableProps.concat(['zIndex', 'bubble']);

var Circle = function (_React$Component) {
  _inherits(Circle, _React$Component);

  function Circle(props) {
    _classCallCheck(this, Circle);

    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!props.__map__) {
        _log2.default.warning('MAP_INSTANCE_REQUIRED');
      } else {
        var self = _this;
        _this.setterMap = {
          visible: function visible(val) {
            if (self.mapCircle) {
              if (val) {
                self.mapCircle.show();
              } else {
                self.mapCircle.hide();
              }
            }
          },
          style: function style(val) {
            self.mapCircle && self.mapCircle.setOptions(val);
          }
        };
        _this.converterMap = {
          center: _common.toLnglat
        };
        _this.state = {
          loaded: false
        };
        _this.map = props.__map__;
        _this.element = _this.map.getContainer();
        _this.createInstance(props).then(function () {
          _this.setState({
            loaded: true
          });
          _this.props.onInstanceCreated && _this.props.onInstanceCreated();
        });
      }
    }
    return _this;
  }

  _createClass(Circle, [{
    key: 'createInstance',
    value: function createInstance(props) {
      var options = this.buildCreateOptions(props);
      options.map = this.map;
      this.mapCircle = new window.AMap.Circle(options);
      return Promise.resolve(this.mapCircle);
    }
  }, {
    key: 'buildCreateOptions',
    value: function buildCreateOptions(props) {
      var _this2 = this;

      var options = {};
      allProps.forEach(function (key) {
        if (key in props) {
          if (key === 'style' && props.style !== undefined) {
            var styleItem = Object.keys(props.style);
            styleItem.forEach(function (item) {
              // $FlowFixMe
              options[item] = props.style[item];
            });
          } else {
            options[key] = _this2.getSetterValue(key, props);
          }
        }
      });
      return options;
    }
  }, {
    key: 'getSetterValue',
    value: function getSetterValue(key, props) {
      if (key in this.converterMap) {
        return this.converterMap[key](props[key]);
      }
      return props[key];
    }
  }, {
    key: 'renderEditor',
    value: function renderEditor(children) {
      if (!children) {
        return null;
      }
      if (_react2.default.Children.count(children) !== 1) {
        return null;
      }
      return _react2.default.cloneElement(_react2.default.Children.only(children), {
        __circle__: this.mapCircle,
        __map__: this.map,
        __ele__: this.element
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.loaded ? this.renderEditor(this.props.children) : null;
    }
  }, {
    key: 'instance',
    get: function get() {
      return this.mapCircle;
    }
  }]);

  return Circle;
}(_react2.default.Component);

exports.default = (0, _withPropsReactive2.default)(Circle);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withPropsReactive = __webpack_require__(2);

var _withPropsReactive2 = _interopRequireDefault(_withPropsReactive);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

var _polyeditor = __webpack_require__(6);

var _polyeditor2 = _interopRequireDefault(_polyeditor);

var _common = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * props
 * {
 *  __map__ 父级组件传过来的地图实例
 *
 * }
 */

var configurableProps = ['path', 'draggable', 'extData',

/* 本插件扩展的属性*/
'style', 'visible'];

var allProps = configurableProps.concat(['zIndex', 'bubble']);

var Polygon = function (_Component) {
  _inherits(Polygon, _Component);

  function Polygon(props) {
    _classCallCheck(this, Polygon);

    var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!props.__map__) {
        _log2.default.warning('MAP_INSTANCE_REQUIRED');
      } else {
        var self = _this;
        _this.setterMap = {
          visible: function visible(val) {
            if (val) {
              self.polygon && self.polygon.show();
            } else {
              self.polygon && self.polygon.hide();
            }
          },
          style: function style(val) {
            self.polygon.setOptions(val);
          }
        };
        _this.converterMap = {
          path: function path(val) {
            return self.buildPathValue(val);
          }
        };
        _this.state = {
          loaded: false
        };
        _this.map = props.__map__;
        _this.element = _this.map.getContainer();
        setTimeout(function () {
          _this.initMapPolygon(props);
        }, 13);
      }
    }
    return _this;
  }

  _createClass(Polygon, [{
    key: 'initMapPolygon',
    value: function initMapPolygon(props) {
      var options = this.buildCreateOptions(props);
      options.map = this.map;
      this.polygon = new window.AMap.Polygon(options);
      this.setState({
        loaded: true
      });
      this.props.onInstanceCreated && this.props.onInstanceCreated();
    }
  }, {
    key: 'buildCreateOptions',
    value: function buildCreateOptions(props) {
      var _this2 = this;

      var options = {};
      allProps.forEach(function (key) {
        if (key in props) {
          if (key === 'style' && props.style) {
            var styleItem = Object.keys(props.style);
            styleItem.forEach(function (item) {
              // $FlowFixMe
              options[item] = props.style[item];
            });
            // visible 做特殊处理
          } else if (key !== 'visible') {
            options[key] = _this2.getSetterValue(key, props[key]);
          }
        }
      });
      return options;
    }
  }, {
    key: 'detectPropChanged',
    value: function detectPropChanged(key, nextProps) {
      return this.props[key] !== nextProps[key];
    }
  }, {
    key: 'getSetterValue',
    value: function getSetterValue(key, value) {
      if (key in this.converterMap) {
        return this.converterMap[key](value);
      }
      return value;
    }
  }, {
    key: 'buildPathValue',
    value: function buildPathValue(path) {
      var _this3 = this;

      if (path.length) {
        var firstNode = path[0];
        if (typeof firstNode[0] === 'number') {
          return path.map(function (p) {
            return (0, _common.toLnglat)(p);
          });
        }
        if ('getLng' in firstNode) {
          return path;
        }
        if ('longitude' in firstNode || 'lng' in firstNode) {
          return path.map(function (p) {
            return (0, _common.toLnglat)(p);
          });
        }
        if ('length' in firstNode && firstNode.length) {
          // $FlowFixMe
          return path.map(function (ring) {
            return _this3.buildPathValue(ring);
          });
        }
      }
      return [];
    }
  }, {
    key: 'renderEditor',
    value: function renderEditor(children) {
      if (!children) {
        return null;
      }
      if (_react2.default.Children.count(children) !== 1) {
        return null;
      }
      var child = _react2.default.Children.only(children);
      if (child.type === _polyeditor2.default) {
        return _react2.default.cloneElement(child, {
          __poly__: this.polygon,
          __map__: this.map
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.loaded ? this.renderEditor(this.props.children) : null;
    }
  }, {
    key: 'instance',
    get: function get() {
      return this.polygon;
    }
  }]);

  return Polygon;
}(_react.Component);

exports.default = (0, _withPropsReactive2.default)(Polygon);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withPropsReactive = __webpack_require__(2);

var _withPropsReactive2 = _interopRequireDefault(_withPropsReactive);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

var _polyeditor = __webpack_require__(6);

var _polyeditor2 = _interopRequireDefault(_polyeditor);

var _common = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;

var configurableProps = ['path', 'extData', 'draggable',

/* 扩展属性*/
'visible', 'style'];

var allProps = configurableProps.concat(['zIndex', 'bubble', 'showDir']);

var Polyline = function (_Component) {
  _inherits(Polyline, _Component);

  function Polyline(props) {
    _classCallCheck(this, Polyline);

    var _this = _possibleConstructorReturn(this, (Polyline.__proto__ || Object.getPrototypeOf(Polyline)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!props.__map__) {
        _log2.default.warning('MAP_INSTANCE_REQUIRED');
      } else {
        var self = _this;
        _this.setterMap = {
          visible: function visible(val) {
            if (val) {
              self.polyline && self.polyline.show();
            } else {
              self.polyline && self.polyline.hide();
            }
          },
          style: function style(val) {
            self.polyline.setOptions(val);
          }
        };
        _this.converterMap = {
          path: function path(val) {
            return self.buildPathValue(val);
          }
        };
        _this.state = {
          loaded: false
        };
        _this.map = props.__map__;
        _this.element = _this.map.getContainer();
        setTimeout(function () {
          _this.createMapPolyline(props);
        }, 13);
      }
    }
    return _this;
  }

  _createClass(Polyline, [{
    key: 'createMapPolyline',
    value: function createMapPolyline(props) {
      var options = this.buildCreateOptions(props);
      options.map = this.map;
      this.polyline = new window.AMap.Polyline(options);
      this.setState({
        loaded: true
      });
      this.props.onInstanceCreated && this.props.onInstanceCreated();
    }
  }, {
    key: 'buildCreateOptions',
    value: function buildCreateOptions(props) {
      var _this2 = this;

      var options = {};
      allProps.forEach(function (key) {
        if (key in props) {
          if (key === 'style' && props.style) {
            var styleItem = Object.keys(props.style);
            styleItem.forEach(function (item) {
              // $FlowFixMe
              options[item] = props.style[item];
            });
            // visible 做特殊处理
          } else if (key !== 'visible') {
            options[key] = _this2.getSetterValue(key, props[key]);
          }
        }
      });
      return options;
    }
  }, {
    key: 'detectPropChanged',
    value: function detectPropChanged(key, nextProps) {
      return this.props[key] !== nextProps[key];
    }
  }, {
    key: 'getSetterValue',
    value: function getSetterValue(key, value) {
      if (key in this.converterMap) {
        return this.converterMap[key](value);
      }
      return value;
    }
  }, {
    key: 'buildPathValue',
    value: function buildPathValue(path) {
      if (path.length) {
        if ('getLng' in path[0]) {
          return path;
        }
        return path.map(function (p) {
          return (0, _common.toLnglat)(p);
        });
      }
      return path;
    }
  }, {
    key: 'renderEditor',
    value: function renderEditor(children) {
      if (!children) {
        return null;
      }
      if (_react2.default.Children.count(children) !== 1) {
        return null;
      }
      var child = _react2.default.Children.only(children);
      if (child.type === _polyeditor2.default) {
        return _react2.default.cloneElement(child, {
          __poly__: this.polyline,
          __map__: this.map
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.loaded ? this.renderEditor(this.props.children) : null;
    }
  }, {
    key: 'instance',
    get: function get() {
      return this.polyline;
    }
  }]);

  return Polyline;
}(Component);

exports.default = (0, _withPropsReactive2.default)(Polyline);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _withPropsReactive = __webpack_require__(2);

var _withPropsReactive2 = _interopRequireDefault(_withPropsReactive);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

var _common = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * props
 * {
 *  __map__ 父级组件传过来的地图实例
 * }
 */

var Component = _react2.default.Component;

var configurableProps = ['content', 'position', 'size',
/* 以下属性是本插件的扩展 */
'visible',

/* 这个 setOffset  方法高德并没有明确在文档中列出来，不确定会不会撤销 */
'offset'];

var allProps = configurableProps.concat(['isCustom', 'autoMove', 'closeWhenClickMap', 'showShadow']);

var InfoWindow = function (_Component) {
  _inherits(InfoWindow, _Component);

  function InfoWindow(props) {
    _classCallCheck(this, InfoWindow);

    var _this = _possibleConstructorReturn(this, (InfoWindow.__proto__ || Object.getPrototypeOf(InfoWindow)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!props.__map__) {
        _log2.default.warning('MAP_INSTANCE_REQUIRED');
      } else {
        var self = _this;
        _this.setterMap = {
          visible: function visible(val) {
            if (val) {
              self.showWindow();
              self.setClassName(self.props);
              self.setChild(self.props);
            } else {
              self.closeWindow();
            }
          }
        };
        _this.converterMap = {
          size: _common.toSize,
          offset: _common.toPixel,
          position: _common.toLnglat
        };
        _this.map = props.__map__;
        _this.isCustom = true;
        setTimeout(function () {
          _this.createInfoWindow(props);
        }, 13);
      }
    }
    return _this;
  }

  _createClass(InfoWindow, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.map) {
        this.refreshWindowLayout(nextProps);
      }
    }
  }, {
    key: 'createInfoWindow',
    value: function createInfoWindow(props) {
      var options = this.buildCreateOptions(props);
      this.infoWindow = new window.AMap.InfoWindow(options);
      this.props.onInstanceCreated && this.props.onInstanceCreated();
    }
  }, {
    key: 'refreshWindowLayout',
    value: function refreshWindowLayout(nextProps) {
      this.setChild(nextProps);
      this.setClassName(nextProps);
    }
  }, {
    key: 'checkPropChanged',
    value: function checkPropChanged(key, nextProps) {
      return this.props[key] !== nextProps[key];
    }
  }, {
    key: 'showWindow',
    value: function showWindow() {
      this.infoWindow.open(this.map, this.infoWindow.getPosition());
    }
  }, {
    key: 'closeWindow',
    value: function closeWindow() {
      this.infoWindow.close();
    }
  }, {
    key: 'buildCreateOptions',
    value: function buildCreateOptions(props) {
      var _this2 = this;

      var options = {};

      // 如果开发者没有设置 isCustom 属性，默认设置为 false
      if ('isCustom' in props) {
        options.isCustom = !!props.isCustom;
      } else {
        options.isCustom = false;
      }

      if ('content' in props) {
        options.content = props.content;
      } else {
        this.infoDOM = document.createElement('div');
        options.content = this.infoDOM;
      }

      allProps.forEach(function (key) {
        if (key in props) {
          if (['visible', 'isCustom', 'content'].indexOf(key) === -1) {
            options[key] = _this2.getSetterValue(key, props[key]);
          }
        }
      });
      return options;
    }
  }, {
    key: 'getSetterValue',
    value: function getSetterValue(key, value) {
      if (key in this.converterMap) {
        return this.converterMap[key](value);
      }
      return value;
    }
  }, {
    key: 'setChild',
    value: function setChild(props) {
      var child = props.children;
      if (this.infoDOM && child) {
        (0, _reactDom.render)(_react2.default.createElement(
          'div',
          null,
          child
        ), this.infoDOM);
      } else {
        if (props.children) {
          console.warn('因为你设置 isCustom 为 true，InfoWindow 的 Children 被忽略');
        }
      }
    }
  }, {
    key: 'setClassName',
    value: function setClassName(props) {
      if (this.infoDOM) {
        var baseClsValue = '';
        // 刷新 className
        if ('className' in props && props.className) {
          baseClsValue += props.className;
        } else if (props.isCustom === true) {
          baseClsValue += 'amap_markers_pop_window';
        }
        this.infoDOM.className = baseClsValue;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'instance',
    get: function get() {
      return this.infoWindow;
    }
  }]);

  return InfoWindow;
}(Component);

exports.default = (0, _withPropsReactive2.default)(InfoWindow);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withPropsReactive = __webpack_require__(2);

var _withPropsReactive2 = _interopRequireDefault(_withPropsReactive);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * props
 * {
 *  __map__ 父级组件传过来的地图实例
 * }
 */
var defaultOpts = {
  clickable: false,
  opacity: 1,
  visible: true
};

var GroundImage = function (_React$Component) {
  _inherits(GroundImage, _React$Component);

  function GroundImage(props) {
    _classCallCheck(this, GroundImage);

    var _this = _possibleConstructorReturn(this, (GroundImage.__proto__ || Object.getPrototypeOf(GroundImage)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!props.__map__) {
        _log2.default.warning('MAP_INSTANCE_REQUIRED');
      } else {
        var self = _this;
        _this.setterMap = {
          visible: function visible(val) {
            if (val) {
              self.image && self.image.show();
            } else {
              self.image && self.image.hide();
            }
          },
          src: function src(val) {
            self.image.setImageUrl(val);
          }
        };
        _this.converterMap = {
          bounds: function bounds(val) {
            return self.buildBounds(val);
          }
        };
        _this.map = props.__map__;
        _this.element = _this.map.getContainer();
        setTimeout(function () {
          _this.createGroundImage(props);
        }, 13);
      }
    }
    return _this;
  }

  _createClass(GroundImage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'checkPropsChanged',
    value: function checkPropsChanged(nextProps, key) {
      return this.props[key] !== nextProps[key];
    }
  }, {
    key: 'createGroundImage',
    value: function createGroundImage(props) {
      var src = void 0,
          bounds = void 0,
          opacity = void 0,
          clickable = void 0;
      if ('src' in props) {
        src = props.src;
      } else {
        _log2.default.warning('SRC_REQUIRED', true);
      }
      if ('bounds' in props) {
        bounds = this.buildBounds(props.bounds);
      } else {
        _log2.default.warning('BOUNDS_REQUIRED', true);
      }

      if ('clickable' in props) {
        clickable = props.clickable;
      } else {
        clickable = defaultOpts.clickable;
      }
      if ('opacity' in props) {
        opacity = props.opacity;
      } else {
        opacity = defaultOpts.opacity;
      }
      this.image = new window.AMap.GroundImage(src, bounds, {
        map: this.map,
        clickable: clickable,
        opacity: opacity
      });
      this.props.onInstanceCreated && this.props.onInstanceCreated();
    }
  }, {
    key: 'buildBounds',
    value: function buildBounds(rawBounds) {
      if (!rawBounds) {
        return rawBounds;
      }
      if ('getSouthWest' in rawBounds) {
        return rawBounds;
      }
      var bounds = new window.AMap.Bounds(new window.AMap.LngLat(rawBounds.sw.longitude, rawBounds.sw.latitude), new window.AMap.LngLat(rawBounds.ne.longitude, rawBounds.ne.latitude));
      return bounds;
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'instance',
    get: function get() {
      return this.image;
    }
  }]);

  return GroundImage;
}(_react2.default.Component);

exports.default = (0, _withPropsReactive2.default)(GroundImage);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

var _isFun = __webpack_require__(4);

var _isFun2 = _interopRequireDefault(_isFun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircleEditor = function (_React$Component) {
  _inherits(CircleEditor, _React$Component);

  function CircleEditor(props) {
    _classCallCheck(this, CircleEditor);

    var _this = _possibleConstructorReturn(this, (CircleEditor.__proto__ || Object.getPrototypeOf(CircleEditor)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!(props.__map__ && props.__circle__)) {
        _log2.default.warning('CIRCLE_INSTANCE_REQUIRED');
      } else {
        _this.map = props.__map__;
        _this.element = _this.map.getContainer();
        _this.circle = props.__circle__;
        _this.editorActive = false;
        _this.onPropsUpdate(props);
      }
    }
    return _this;
  }

  _createClass(CircleEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.map) {
        this.onPropsUpdate(nextProps);
      }
    }
  }, {
    key: 'onPropsUpdate',
    value: function onPropsUpdate(props) {
      if ('active' in props && props.active === false) {
        this.toggleActive(false, props);
      } else {
        this.toggleActive(true, props);
      }
    }
  }, {
    key: 'toggleActive',
    value: function toggleActive(active, props) {
      if (active) {
        if (!this.editorActive) {
          this.activeEditor(props);
        }
      } else {
        if (this.editorActive) {
          this.inactiveEditor();
        }
      }
    }
  }, {
    key: 'activeEditor',
    value: function activeEditor(props) {
      var _this2 = this;

      this.loadCircleEditor(props).then(function (editor) {
        _this2.editorActive = true;
        editor.open();
      });
    }
  }, {
    key: 'inactiveEditor',
    value: function inactiveEditor() {
      this.editorActive = false;
      if (this.circleEditor) {
        this.circleEditor.close();
      }
    }
  }, {
    key: 'loadCircleEditor',
    value: function loadCircleEditor(props) {
      var _this3 = this;

      if (this.circleEditor) {
        return Promise.resolve(this.circleEditor);
      }
      return new Promise(function (resolve) {
        _this3.map.plugin(['AMap.CircleEditor'], function () {
          resolve(_this3.createEditorInstance(props));
        });
      });
    }
  }, {
    key: 'createEditorInstance',
    value: function createEditorInstance(props) {
      this.circleEditor = new window.AMap.CircleEditor(this.map, this.circle);
      var events = this.exposeEditorInstance(props);
      events && this.bindEditorEvents(events);
      return this.circleEditor;
    }
  }, {
    key: 'exposeEditorInstance',
    value: function exposeEditorInstance(props) {
      if ('events' in props) {
        var _events = props.events || {};
        if ((0, _isFun2.default)(_events.created)) {
          _events.created(this.circleEditor);
        }
        delete _events.created;
        return _events;
      }
      return false;
    }
  }, {
    key: 'bindEditorEvents',
    value: function bindEditorEvents(events) {
      var _this4 = this;

      var list = Object.keys(events);
      list.length && list.forEach(function (evName) {
        _this4.circleEditor.on(evName, events[evName]);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return CircleEditor;
}(_react2.default.Component);

exports.default = CircleEditor;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withPropsReactive = __webpack_require__(2);

var _withPropsReactive2 = _interopRequireDefault(_withPropsReactive);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouseTool = function (_React$Component) {
  _inherits(MouseTool, _React$Component);

  function MouseTool(props) {
    _classCallCheck(this, MouseTool);

    var _this = _possibleConstructorReturn(this, (MouseTool.__proto__ || Object.getPrototypeOf(MouseTool)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!props.__map__) {
        _log2.default.warning('MAP_INSTANCE_REQUIRED');
      } else {
        _this.map = props.__map__;
        _this.loadToolInstance().then(function () {
          _this.props.onInstanceCreated && _this.props.onInstanceCreated();
        });
      }
    }
    return _this;
  }

  _createClass(MouseTool, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'loadToolInstance',
    value: function loadToolInstance() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.map.plugin(['AMap.MouseTool'], function () {
          _this2.tool = new window.AMap.MouseTool(_this2.map);
          resolve();
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'instance',
    get: function get() {
      return this.tool;
    }
  }]);

  return MouseTool;
}(_react2.default.Component);

exports.default = (0, _withPropsReactive2.default)(MouseTool);

/***/ })
/******/ ]);
});