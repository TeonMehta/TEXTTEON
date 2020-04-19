/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "ul {\n  text-align: center; }\n  ul li {\n    display: inline;\n    list-style: none;\n    padding: 10px 30px; }\n    ul li a {\n      text-decoration: none;\n      color: #01b075; }\n\n.contact_card {\n  width: 300px;\n  text-align: center; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Contacts */ "./src/components/Contacts.js");
/* harmony import */ var _components_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Create */ "./src/components/Create.js");
/* harmony import */ var _components_Update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Update */ "./src/components/Update.js");







function App() {
  return (
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/",
      exact: true,
      component: _components_Contacts__WEBPACK_IMPORTED_MODULE_3__["default"]
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/create",
      exact: true,
      component: _components_Create__WEBPACK_IMPORTED_MODULE_4__["default"]
    }),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/edit/:id",
      exact: true,
      component: _components_Update__WEBPACK_IMPORTED_MODULE_5__["default"]
    })))
  );
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Contacts.js":
/*!************************************!*\
  !*** ./src/components/Contacts.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contacts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Update */ "./src/components/Update.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var apiUrl = "http://localhost:8888/contacts/";

var Contacts =
/*#__PURE__*/
function (_Component) {
  _inherits(Contacts, _Component);

  function Contacts(props) {
    var _this;

    _classCallCheck(this, Contacts);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contacts).call(this, props));
    _this.deleteContact = _this.deleteContact.bind(_assertThisInitialized(_this));
    _this.state = {
      contacts: []
    };
    return _this;
  }

  _createClass(Contacts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(apiUrl).then(function (response) {
        _this2.setState({
          contacts: response.data
        });
      })["catch"](console.log);
    }
  }, {
    key: "deleteContact",
    value: function deleteContact(id) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"](apiUrl + id).then(function (response) {
        console.log(response.data);
      });
      this.setState({
        contacts: this.state.contacts.filter(function (el) {
          return el._id !== id;
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return (
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.contacts.map(function (contact, i) {
          return (
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: i
            },
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
              variant: "outlined",
              className: "contact_card"
            },
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact._id),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.first_name),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.last_name),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.phone_number),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.email),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.gender),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.instagram),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.snapchat),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.twitter),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.interest),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.industry),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
              component: "h3"
            }, contact.job)),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              size: "small"
            }, "MORE"),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              size: "small",
              onClick: function onClick() {
                _this3.deleteContact(contact._id);
              }
            }, "DELETE"),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
              to: "/edit/" + contact._id
            },
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              size: "small"
            }, "UPDATE")))))
          );
        }))
      );
    }
  }]);

  return Contacts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/Create.js":
/*!**********************************!*\
  !*** ./src/components/Create.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Create; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


















var Create =
/*#__PURE__*/
function (_Component) {
  _inherits(Create, _Component);

  function Create(props) {
    var _this;

    _classCallCheck(this, Create);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Create).call(this, props));
    _this.onFirstNameChange = _this.onFirstNameChange.bind(_assertThisInitialized(_this));
    _this.onLastNameChange = _this.onLastNameChange.bind(_assertThisInitialized(_this));
    _this.onNumberChange = _this.onNumberChange.bind(_assertThisInitialized(_this));
    _this.onEmailChange = _this.onEmailChange.bind(_assertThisInitialized(_this));
    _this.onGenderChange = _this.onGenderChange.bind(_assertThisInitialized(_this));
    _this.onInstagramChange = _this.onInstagramChange.bind(_assertThisInitialized(_this));
    _this.onSnapchatChange = _this.onSnapchatChange.bind(_assertThisInitialized(_this));
    _this.onTwitterChange = _this.onTwitterChange.bind(_assertThisInitialized(_this));
    _this.onIndustryChange = _this.onIndustryChange.bind(_assertThisInitialized(_this));
    _this.onInterestChange = _this.onInterestChange.bind(_assertThisInitialized(_this));
    _this.onJobChange = _this.onJobChange.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      gender: "",
      instagram: "",
      twitter: "",
      snapchat: "",
      interest: [],
      industry: "",
      job: "",
      users: []
    };
    return _this;
  }

  _createClass(Create, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        users: ["test user"],
        first_name: "First Name",
        last_name: "Last Name",
        phone_number: 5145555555,
        email: "Email Address",
        gender: "Prefer Not To Say",
        instagram: "Instagram Handle",
        twitter: "Twitter Handle",
        snapchat: "Snapchat",
        interest: ["Interests"],
        industry: "Industry",
        job: "Job Title"
      });
    }
  }, {
    key: "onFirstNameChange",
    value: function onFirstNameChange(e) {
      this.setState({
        first_name: e.target.value
      });
    }
  }, {
    key: "onLastNameChange",
    value: function onLastNameChange(e) {
      this.setState({
        last_name: e.target.value
      });
    }
  }, {
    key: "onNumberChange",
    value: function onNumberChange(e) {
      this.setState({
        phone_number: e.target.value
      });
    }
  }, {
    key: "onEmailChange",
    value: function onEmailChange(e) {
      this.setState({
        email: e.target.value
      });
    }
  }, {
    key: "onGenderChange",
    value: function onGenderChange(e) {
      this.setState({
        gender: e.target.value
      });
    }
  }, {
    key: "onInstagramChange",
    value: function onInstagramChange(e) {
      this.setState({
        instagram: e.target.value
      });
    }
  }, {
    key: "onSnapchatChange",
    value: function onSnapchatChange(e) {
      this.setState({
        snapchat: e.target.value
      });
    }
  }, {
    key: "onTwitterChange",
    value: function onTwitterChange(e) {
      this.setState({
        twitter: e.target.value
      });
    }
  }, {
    key: "onInterestChange",
    value: function onInterestChange(e) {
      this.setState({
        interest: e.target.value
      });
    }
  }, {
    key: "onIndustryChange",
    value: function onIndustryChange(e) {
      this.setState({
        industry: e.target.value
      });
    }
  }, {
    key: "onJobChange",
    value: function onJobChange(e) {
      this.setState({
        job: e.target.value
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var contact = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        phone_number: this.state.phone_number,
        email: this.state.email,
        gender: this.state.gender,
        instagram: this.state.instagram,
        twitter: this.state.twitter,
        snapchat: this.state.snapchat,
        industry: this.state.industry,
        interest: this.state.interest,
        job: this.state.job
      };
      console.log(contact);
      fetch("http://localhost:8888/contacts/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      }).then(function (response) {
        return response.json();
      }).then(function (contact) {
        console.log("Success:", contact);
      })["catch"](function (error) {
        console.error("Error:", error);
      });
      window.location = "/";
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "CREATE"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: this.onSubmit
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "first_name"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "first_name",
          id: "outlined-basic",
          label: "First Name",
          value: this.state.first_name,
          onChange: this.onFirstNameChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "last_name"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "last_name",
          id: "outlined-basic",
          label: "Last Name",
          value: this.state.last_name,
          onChange: this.onLastNameChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "number"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "phone_number",
          id: "outlined-basic",
          label: "Phone Number",
          value: this.state.phone_number,
          onChange: this.onNumberChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "email"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "email",
          id: "outlined-basic",
          label: "Email",
          value: this.state.email,
          onChange: this.onEmailChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gender"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
          component: "fieldset",
          style: {
            margin: 8,
            minWidth: 186
          }
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
          component: "legend"
        }, "Gender"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__["default"], {
          "aria-label": "Gender",
          name: "Gender",
          id: "Gender",
          value: this.state.gender,
          onChange: this.onGenderChange
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: "Female",
          control:
          /*#__PURE__*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], null),
          label: "Female"
        }),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: "Male",
          control:
          /*#__PURE__*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], null),
          label: "Male"
        }),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: "Prefer Not Say",
          control:
          /*#__PURE__*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], null),
          label: "Prefer Not Say"
        })))),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "instagram"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "email",
          id: "outlined-basic",
          label: "Instagram",
          value: this.state.instagram,
          onChange: this.onInstagramChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "twitter"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "email",
          id: "outlined-basic",
          label: "Twitter",
          value: this.state.twitter,
          onChange: this.onTwitterChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "snapchat"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "email",
          id: "outlined-basic",
          label: "Snapchat",
          value: this.state.snapchat,
          onChange: this.onSnapchatChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "interest"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
          style: {
            margin: 8
          }
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
          component: "legend"
        }, "Interests"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__["default"], null,
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          control:
          /*#__PURE__*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
            value: "Tech",
            onChange: this.onInterestChange
          }),
          label: "Tech"
        }),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          control:
          /*#__PURE__*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
            value: "Sports" // {this.state.interest}
            ,
            onChange: this.onInterestChange
          }),
          label: "Sports"
        })))),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "industry"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
          variant: "outlined",
          style: {
            margin: 8,
            minWidth: 186
          }
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: "Industry"
        }, "Industry"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__["default"], {
          labelId: "Industry",
          label: "Industry",
          value: this.state.industry,
          onChange: this.onIndustryChange
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Tech"
        }, "Tech"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Finance"
        }, "Finance"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Health"
        }, "Health"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Service"
        }, "Service"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Real Estate"
        }, "Real Estate"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Retail"
        }, "Retail"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Other"
        }, "Other")))),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "job"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "email",
          id: "outlined-basic",
          label: "Job Title",
          value: this.state.job,
          onChange: this.onJobChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "submit"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "submit",
          variant: "contained",
          color: "primary",
          style: {
            margin: 8
          }
        }, "Create"))))
      );
    }
  }]);

  return Create;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





function Navbar() {
  return (
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUsers"]
    }))),
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/create"
    },
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserPlus"]
    })))))
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Update.js":
/*!**********************************!*\
  !*** ./src/components/Update.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Update; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















var apiUrl = "http://localhost:8888/contacts/";
var apiEditUrl = "http://localhost:8888/contacts/edit/";

var Update =
/*#__PURE__*/
function (_Component) {
  _inherits(Update, _Component);

  function Update(props) {
    var _this;

    _classCallCheck(this, Update);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Update).call(this, props));
    _this.onFirstNameChange = _this.onFirstNameChange.bind(_assertThisInitialized(_this));
    _this.onLastNameChange = _this.onLastNameChange.bind(_assertThisInitialized(_this));
    _this.onNumberChange = _this.onNumberChange.bind(_assertThisInitialized(_this));
    _this.onEmailChange = _this.onEmailChange.bind(_assertThisInitialized(_this));
    _this.onGenderChange = _this.onGenderChange.bind(_assertThisInitialized(_this));
    _this.onInstagramChange = _this.onInstagramChange.bind(_assertThisInitialized(_this));
    _this.onSnapchatChange = _this.onSnapchatChange.bind(_assertThisInitialized(_this));
    _this.onTwitterChange = _this.onTwitterChange.bind(_assertThisInitialized(_this));
    _this.onIndustryChange = _this.onIndustryChange.bind(_assertThisInitialized(_this));
    _this.onInterestChange = _this.onInterestChange.bind(_assertThisInitialized(_this));
    _this.onJobChange = _this.onJobChange.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      gender: "",
      instagram: "",
      twitter: "",
      snapchat: "",
      interest: [],
      industry: "",
      job: "",
      users: []
    };
    return _this;
  }

  _createClass(Update, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var params = this.props.match.params;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(apiUrl + this.props.match.params.id).then(function (response) {
        _this2.setState({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          phone_number: response.data.phone_number,
          email: response.data.email,
          gender: response.data.gender,
          instagram: response.data.instagram,
          twitter: response.data.twitter,
          snapchat: response.data.snapchat,
          industry: response.data.industry,
          interest: response.data.interest,
          job: response.data.job
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "onFirstNameChange",
    value: function onFirstNameChange(e) {
      this.setState({
        first_name: e.target.value
      });
    }
  }, {
    key: "onLastNameChange",
    value: function onLastNameChange(e) {
      this.setState({
        last_name: e.target.value
      });
    }
  }, {
    key: "onNumberChange",
    value: function onNumberChange(e) {
      this.setState({
        phone_number: e.target.value
      });
    }
  }, {
    key: "onEmailChange",
    value: function onEmailChange(e) {
      this.setState({
        email: e.target.value
      });
    }
  }, {
    key: "onGenderChange",
    value: function onGenderChange(e) {
      this.setState({
        gender: e.target.value
      });
    }
  }, {
    key: "onInstagramChange",
    value: function onInstagramChange(e) {
      this.setState({
        instagram: e.target.value
      });
    }
  }, {
    key: "onSnapchatChange",
    value: function onSnapchatChange(e) {
      this.setState({
        snapchat: e.target.value
      });
    }
  }, {
    key: "onTwitterChange",
    value: function onTwitterChange(e) {
      this.setState({
        twitter: e.target.value
      });
    }
  }, {
    key: "onInterestChange",
    value: function onInterestChange(e) {
      this.setState({
        interest: e.target.value
      });
    }
  }, {
    key: "onIndustryChange",
    value: function onIndustryChange(e) {
      this.setState({
        industry: e.target.value
      });
    }
  }, {
    key: "onJobChange",
    value: function onJobChange(e) {
      this.setState({
        job: e.target.value
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var contact = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        phone_number: this.state.phone_number,
        email: this.state.email,
        gender: this.state.gender,
        instagram: this.state.instagram,
        twitter: this.state.twitter,
        snapchat: this.state.snapchat,
        industry: this.state.industry,
        interest: this.state.interest,
        job: this.state.job
      };
      console.log(contact);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(apiEditUrl + this.props.match.params.id, contact).then(function (res) {
        return console.log(res.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "EDIT"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: this.onSubmit
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "first_name"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "first_name",
          id: "outlined-basic",
          label: "First Name",
          value: this.state.first_name,
          onChange: this.onFirstNameChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "last_name"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "last_name",
          id: "outlined-basic",
          label: "Last Name",
          value: this.state.last_name,
          onChange: this.onLastNameChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "number"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "phone_number",
          id: "outlined-basic",
          label: "Phone Number",
          value: "+1" + this.state.phone_number,
          onChange: this.onNumberChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "email"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "email",
          id: "outlined-basic",
          label: "Email",
          value: this.state.email,
          onChange: this.onEmailChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gender"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
          component: "fieldset",
          style: {
            margin: 8,
            minWidth: 186
          }
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
          component: "legend"
        }, "Gender"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__["default"], {
          "aria-label": "Gender",
          name: "Gender",
          id: "Gender",
          value: this.state.gender,
          onChange: this.onGenderChange
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: "female",
          control:
          /*#__PURE__*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], null),
          label: "Female"
        }),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: "male",
          control:
          /*#__PURE__*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], null),
          label: "Male"
        }),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: "Prefer Not Say",
          control:
          /*#__PURE__*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], null),
          label: "Prefer Not Say"
        })))),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "instagram"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "email",
          id: "outlined-basic",
          label: "Instagram",
          value: this.state.instagram,
          onChange: this.onInstagramChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "twitter"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "email",
          id: "outlined-basic",
          label: "Twitter",
          value: this.state.twitter,
          onChange: this.onTwitterChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "snapchat"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "email",
          id: "outlined-basic",
          label: "Snapchat",
          value: this.state.snapchat,
          onChange: this.onSnapchatChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "interest"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
          style: {
            margin: 8
          }
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
          component: "legend"
        }, "Interests"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__["default"], null,
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          control:
          /*#__PURE__*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
            value: this.state.interest,
            onChange: this.onInterestChange
          }),
          label: "Tech"
        }),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          control:
          /*#__PURE__*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
            value: this.state.interest,
            onChange: this.onInterestChange
          }),
          label: "Sports"
        })))),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "industry"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
          variant: "outlined",
          style: {
            margin: 8,
            minWidth: 186
          }
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: "Industry"
        }, "Industry"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__["default"], {
          labelId: "Industry",
          label: "Industry",
          value: this.state.industry,
          onChange: this.onIndustryChange
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Tech"
        }, "Tech"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Finance"
        }, "Finance"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Health"
        }, "Health"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Service"
        }, "Service"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Real Estate"
        }, "Real Estate"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Retail"
        }, "Retail"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "Other"
        }, "Other")))),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "job"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "text",
          className: "email",
          id: "outlined-basic",
          label: "Job Title",
          value: this.state.job,
          onChange: this.onJobChange,
          variant: "outlined",
          style: {
            margin: 8
          }
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "submit"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "submit",
          variant: "contained",
          color: "primary",
          style: {
            margin: 8
          }
        }, "Update"))))
      );
    }
  }]);

  return Update;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], null,
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById("root"));

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/admin/Desktop/TEXTTEON/node_modules/webpack-dev-server/client/index.js?http://localhost:8080 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3M/NzViYSJdLCJuYW1lcyI6WyJBcHAiLCJDb250YWN0cyIsIkNyZWF0ZSIsIlVwZGF0ZSIsImFwaVVybCIsInByb3BzIiwiZGVsZXRlQ29udGFjdCIsImJpbmQiLCJzdGF0ZSIsImNvbnRhY3RzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJmaWx0ZXIiLCJlbCIsIl9pZCIsIm1hcCIsImNvbnRhY3QiLCJpIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBob25lX251bWJlciIsImVtYWlsIiwiZ2VuZGVyIiwiaW5zdGFncmFtIiwic25hcGNoYXQiLCJ0d2l0dGVyIiwiaW50ZXJlc3QiLCJpbmR1c3RyeSIsImpvYiIsIkNvbXBvbmVudCIsIm9uRmlyc3ROYW1lQ2hhbmdlIiwib25MYXN0TmFtZUNoYW5nZSIsIm9uTnVtYmVyQ2hhbmdlIiwib25FbWFpbENoYW5nZSIsIm9uR2VuZGVyQ2hhbmdlIiwib25JbnN0YWdyYW1DaGFuZ2UiLCJvblNuYXBjaGF0Q2hhbmdlIiwib25Ud2l0dGVyQ2hhbmdlIiwib25JbmR1c3RyeUNoYW5nZSIsIm9uSW50ZXJlc3RDaGFuZ2UiLCJvbkpvYkNoYW5nZSIsIm9uU3VibWl0IiwidXNlcnMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJtYXJnaW4iLCJtaW5XaWR0aCIsIk5hdmJhciIsImZhVXNlcnMiLCJmYVVzZXJQbHVzIiwiYXBpRWRpdFVybCIsInBhcmFtcyIsIm1hdGNoIiwicG9zdCIsInJlcyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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OztFQXJVaUM3QiwrQzs7Ozs7Ozs7Ozs7Ozs7QUNuQnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQXVDLGdEQUFRLENBQUNDLE1BQVQ7QUFBQTtBQUNFLDJEQUFDLDhEQUFEO0FBQUE7QUFDRSwyREFBQyw0Q0FBRCxPQURGLENBREYsRUFJRUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBSkYsRTs7Ozs7Ozs7Ozs7QUNOQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLG1NQUErRjs7QUFFakk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+YXBwXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgdWwgbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDsgfVxcbiAgICB1bCBsaSBhIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6ICMwMWIwNzU7IH1cXG5cXG4uY29udGFjdF9jYXJkIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBDb250YWN0cyBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RzXCI7XG5pbXBvcnQgQ3JlYXRlIGZyb20gXCIuL2NvbXBvbmVudHMvQ3JlYXRlXCI7XG5pbXBvcnQgVXBkYXRlIGZyb20gXCIuL2NvbXBvbmVudHMvVXBkYXRlXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCBjb21wb25lbnQ9e0NvbnRhY3RzfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9jcmVhdGVcIiBleGFjdCBjb21wb25lbnQ9e0NyZWF0ZX0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZWRpdC86aWRcIiBleGFjdCBjb21wb25lbnQ9e1VwZGF0ZX0gLz5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFVwZGF0ZSBmcm9tIFwiLi9VcGRhdGVcIjtcbmNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2NvbnRhY3RzL1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZGVsZXRlQ29udGFjdCA9IHRoaXMuZGVsZXRlQ29udGFjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb250YWN0czogW10sXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBheGlvc1xuICAgICAgLmdldChhcGlVcmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRhY3RzOiByZXNwb25zZS5kYXRhIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gIH1cblxuICBkZWxldGVDb250YWN0KGlkKSB7XG4gICAgYXhpb3MuZGVsZXRlKGFwaVVybCArIGlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250YWN0czogdGhpcy5zdGF0ZS5jb250YWN0cy5maWx0ZXIoKGVsKSA9PiBlbC5faWQgIT09IGlkKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3RoaXMuc3RhdGUuY29udGFjdHMubWFwKChjb250YWN0LCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPENhcmQgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPVwiY29udGFjdF9jYXJkXCI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiPntjb250YWN0Ll9pZH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDNcIj57Y29udGFjdC5maXJzdF9uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiPntjb250YWN0Lmxhc3RfbmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDNcIj57Y29udGFjdC5waG9uZV9udW1iZXJ9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCI+e2NvbnRhY3QuZW1haWx9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCI+e2NvbnRhY3QuZ2VuZGVyfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiPntjb250YWN0Lmluc3RhZ3JhbX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDNcIj57Y29udGFjdC5zbmFwY2hhdH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDNcIj57Y29udGFjdC50d2l0dGVyfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiPntjb250YWN0LmludGVyZXN0fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiPntjb250YWN0LmluZHVzdHJ5fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiPntjb250YWN0LmpvYn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPk1PUkU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNvbnRhY3QoY29udGFjdC5faWQpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBERUxFVEVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvZWRpdC9cIiArIGNvbnRhY3QuX2lkfT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+VVBEQVRFPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHRcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCI7XG5pbXBvcnQgUmFkaW8gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCI7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMub25GaXJzdE5hbWVDaGFuZ2UgPSB0aGlzLm9uRmlyc3ROYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkxhc3ROYW1lQ2hhbmdlID0gdGhpcy5vbkxhc3ROYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk51bWJlckNoYW5nZSA9IHRoaXMub25OdW1iZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRW1haWxDaGFuZ2UgPSB0aGlzLm9uRW1haWxDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uR2VuZGVyQ2hhbmdlID0gdGhpcy5vbkdlbmRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnN0YWdyYW1DaGFuZ2UgPSB0aGlzLm9uSW5zdGFncmFtQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNuYXBjaGF0Q2hhbmdlID0gdGhpcy5vblNuYXBjaGF0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblR3aXR0ZXJDaGFuZ2UgPSB0aGlzLm9uVHdpdHRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbmR1c3RyeUNoYW5nZSA9IHRoaXMub25JbmR1c3RyeUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnRlcmVzdENoYW5nZSA9IHRoaXMub25JbnRlcmVzdENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Kb2JDaGFuZ2UgPSB0aGlzLm9uSm9iQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlyc3RfbmFtZTogXCJcIixcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcbiAgICAgIHBob25lX251bWJlcjogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgZ2VuZGVyOiBcIlwiLFxuICAgICAgaW5zdGFncmFtOiBcIlwiLFxuICAgICAgdHdpdHRlcjogXCJcIixcbiAgICAgIHNuYXBjaGF0OiBcIlwiLFxuICAgICAgaW50ZXJlc3Q6IFtdLFxuICAgICAgaW5kdXN0cnk6IFwiXCIsXG4gICAgICBqb2I6IFwiXCIsXG4gICAgICB1c2VyczogW10sXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXJzOiBbXCJ0ZXN0IHVzZXJcIl0sXG4gICAgICBmaXJzdF9uYW1lOiBcIkZpcnN0IE5hbWVcIixcbiAgICAgIGxhc3RfbmFtZTogXCJMYXN0IE5hbWVcIixcbiAgICAgIHBob25lX251bWJlcjogNTE0NTU1NTU1NSxcbiAgICAgIGVtYWlsOiBcIkVtYWlsIEFkZHJlc3NcIixcbiAgICAgIGdlbmRlcjogXCJQcmVmZXIgTm90IFRvIFNheVwiLFxuICAgICAgaW5zdGFncmFtOiBcIkluc3RhZ3JhbSBIYW5kbGVcIixcbiAgICAgIHR3aXR0ZXI6IFwiVHdpdHRlciBIYW5kbGVcIixcbiAgICAgIHNuYXBjaGF0OiBcIlNuYXBjaGF0XCIsXG4gICAgICBpbnRlcmVzdDogW1wiSW50ZXJlc3RzXCJdLFxuICAgICAgaW5kdXN0cnk6IFwiSW5kdXN0cnlcIixcbiAgICAgIGpvYjogXCJKb2IgVGl0bGVcIixcbiAgICB9KTtcbiAgfVxuICBvbkZpcnN0TmFtZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaXJzdF9uYW1lOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbkxhc3ROYW1lQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxhc3RfbmFtZTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25OdW1iZXJDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGhvbmVfbnVtYmVyOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbkVtYWlsQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbkdlbmRlckNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBnZW5kZXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uSW5zdGFncmFtQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluc3RhZ3JhbTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25TbmFwY2hhdENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbmFwY2hhdDogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25Ud2l0dGVyQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHR3aXR0ZXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uSW50ZXJlc3RDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW50ZXJlc3Q6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uSW5kdXN0cnlDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5kdXN0cnk6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uSm9iQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGpvYjogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjb250YWN0ID0ge1xuICAgICAgZmlyc3RfbmFtZTogdGhpcy5zdGF0ZS5maXJzdF9uYW1lLFxuICAgICAgbGFzdF9uYW1lOiB0aGlzLnN0YXRlLmxhc3RfbmFtZSxcbiAgICAgIHBob25lX251bWJlcjogdGhpcy5zdGF0ZS5waG9uZV9udW1iZXIsXG4gICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgIGdlbmRlcjogdGhpcy5zdGF0ZS5nZW5kZXIsXG4gICAgICBpbnN0YWdyYW06IHRoaXMuc3RhdGUuaW5zdGFncmFtLFxuICAgICAgdHdpdHRlcjogdGhpcy5zdGF0ZS50d2l0dGVyLFxuICAgICAgc25hcGNoYXQ6IHRoaXMuc3RhdGUuc25hcGNoYXQsXG4gICAgICBpbmR1c3RyeTogdGhpcy5zdGF0ZS5pbmR1c3RyeSxcbiAgICAgIGludGVyZXN0OiB0aGlzLnN0YXRlLmludGVyZXN0LFxuICAgICAgam9iOiB0aGlzLnN0YXRlLmpvYixcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGNvbnRhY3QpO1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2NvbnRhY3RzL2FkZFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb250YWN0KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoY29udGFjdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3M6XCIsIGNvbnRhY3QpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DUkVBVEU8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdF9uYW1lXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdF9uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpcnN0TmFtZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFzdF9uYW1lXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdF9uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkxhc3ROYW1lQ2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwaG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQaG9uZSBOdW1iZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZV9udW1iZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTnVtYmVyQ2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25FbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZGVyXCI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZmllbGRzZXRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIG1pbldpZHRoOiAxODYgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5HZW5kZXI8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR2VuZGVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiR2VuZGVyXCJcbiAgICAgICAgICAgICAgICBpZD1cIkdlbmRlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2VuZGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uR2VuZGVyQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiRmVtYWxlXCJcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmVtYWxlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIk1hbGVcIlxuICAgICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNYWxlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlByZWZlciBOb3QgU2F5XCJcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJlZmVyIE5vdCBTYXlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkluc3RhZ3JhbVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmluc3RhZ3JhbX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnN0YWdyYW1DaGFuZ2V9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlR3aXR0ZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50d2l0dGVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblR3aXR0ZXJDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuYXBjaGF0XCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTbmFwY2hhdFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNuYXBjaGF0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNuYXBjaGF0Q2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmVzdFwiPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1hcmdpbjogOCB9fT5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5JbnRlcmVzdHM8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIlRlY2hcIiBvbkNoYW5nZT17dGhpcy5vbkludGVyZXN0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZWNoXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTcG9ydHNcIiAvLyB7dGhpcy5zdGF0ZS5pbnRlcmVzdH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkludGVyZXN0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTcG9ydHNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZHVzdHJ5XCI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCBtaW5XaWR0aDogMTg2IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiSW5kdXN0cnlcIj5JbmR1c3RyeTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJJbmR1c3RyeVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJbmR1c3RyeVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5kdXN0cnl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbmR1c3RyeUNoYW5nZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlRlY2hcIj5UZWNoPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJGaW5hbmNlXCI+RmluYW5jZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiSGVhbHRoXCI+SGVhbHRoPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTZXJ2aWNlXCI+U2VydmljZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUmVhbCBFc3RhdGVcIj5SZWFsIEVzdGF0ZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUmV0YWlsXCI+UmV0YWlsPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJPdGhlclwiPk90aGVyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJKb2IgVGl0bGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5qb2J9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSm9iQ2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVVzZXJQbHVzLCBmYVVzZXJzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2NyZWF0ZVwiPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0XCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCI7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWxcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xuaW1wb3J0IFJhZGlvIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIjtcbmNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2NvbnRhY3RzL1wiO1xuY29uc3QgYXBpRWRpdFVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2NvbnRhY3RzL2VkaXQvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwZGF0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5vbkZpcnN0TmFtZUNoYW5nZSA9IHRoaXMub25GaXJzdE5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTGFzdE5hbWVDaGFuZ2UgPSB0aGlzLm9uTGFzdE5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTnVtYmVyQ2hhbmdlID0gdGhpcy5vbk51bWJlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25FbWFpbENoYW5nZSA9IHRoaXMub25FbWFpbENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25HZW5kZXJDaGFuZ2UgPSB0aGlzLm9uR2VuZGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkluc3RhZ3JhbUNoYW5nZSA9IHRoaXMub25JbnN0YWdyYW1DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU25hcGNoYXRDaGFuZ2UgPSB0aGlzLm9uU25hcGNoYXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uVHdpdHRlckNoYW5nZSA9IHRoaXMub25Ud2l0dGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkluZHVzdHJ5Q2hhbmdlID0gdGhpcy5vbkluZHVzdHJ5Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkludGVyZXN0Q2hhbmdlID0gdGhpcy5vbkludGVyZXN0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkpvYkNoYW5nZSA9IHRoaXMub25Kb2JDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXG4gICAgICBsYXN0X25hbWU6IFwiXCIsXG4gICAgICBwaG9uZV9udW1iZXI6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIGdlbmRlcjogXCJcIixcbiAgICAgIGluc3RhZ3JhbTogXCJcIixcbiAgICAgIHR3aXR0ZXI6IFwiXCIsXG4gICAgICBzbmFwY2hhdDogXCJcIixcbiAgICAgIGludGVyZXN0OiBbXSxcbiAgICAgIGluZHVzdHJ5OiBcIlwiLFxuICAgICAgam9iOiBcIlwiLFxuICAgICAgdXNlcnM6IFtdLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2g6IHsgcGFyYW1zIH0sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYXBpVXJsICsgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmlyc3RfbmFtZTogcmVzcG9uc2UuZGF0YS5maXJzdF9uYW1lLFxuICAgICAgICAgIGxhc3RfbmFtZTogcmVzcG9uc2UuZGF0YS5sYXN0X25hbWUsXG4gICAgICAgICAgcGhvbmVfbnVtYmVyOiByZXNwb25zZS5kYXRhLnBob25lX251bWJlcixcbiAgICAgICAgICBlbWFpbDogcmVzcG9uc2UuZGF0YS5lbWFpbCxcbiAgICAgICAgICBnZW5kZXI6IHJlc3BvbnNlLmRhdGEuZ2VuZGVyLFxuICAgICAgICAgIGluc3RhZ3JhbTogcmVzcG9uc2UuZGF0YS5pbnN0YWdyYW0sXG4gICAgICAgICAgdHdpdHRlcjogcmVzcG9uc2UuZGF0YS50d2l0dGVyLFxuICAgICAgICAgIHNuYXBjaGF0OiByZXNwb25zZS5kYXRhLnNuYXBjaGF0LFxuICAgICAgICAgIGluZHVzdHJ5OiByZXNwb25zZS5kYXRhLmluZHVzdHJ5LFxuICAgICAgICAgIGludGVyZXN0OiByZXNwb25zZS5kYXRhLmludGVyZXN0LFxuICAgICAgICAgIGpvYjogcmVzcG9uc2UuZGF0YS5qb2IsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbiAgb25GaXJzdE5hbWVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlyc3RfbmFtZTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25MYXN0TmFtZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsYXN0X25hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uTnVtYmVyQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBob25lX251bWJlcjogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25FbWFpbENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlbWFpbDogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25HZW5kZXJDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZ2VuZGVyOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbkluc3RhZ3JhbUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnN0YWdyYW06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uU25hcGNoYXRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc25hcGNoYXQ6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uVHdpdHRlckNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0d2l0dGVyOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbkludGVyZXN0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGludGVyZXN0OiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbkluZHVzdHJ5Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluZHVzdHJ5OiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbkpvYkNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBqb2I6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY29udGFjdCA9IHtcbiAgICAgIGZpcnN0X25hbWU6IHRoaXMuc3RhdGUuZmlyc3RfbmFtZSxcbiAgICAgIGxhc3RfbmFtZTogdGhpcy5zdGF0ZS5sYXN0X25hbWUsXG4gICAgICBwaG9uZV9udW1iZXI6IHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyLFxuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICBnZW5kZXI6IHRoaXMuc3RhdGUuZ2VuZGVyLFxuICAgICAgaW5zdGFncmFtOiB0aGlzLnN0YXRlLmluc3RhZ3JhbSxcbiAgICAgIHR3aXR0ZXI6IHRoaXMuc3RhdGUudHdpdHRlcixcbiAgICAgIHNuYXBjaGF0OiB0aGlzLnN0YXRlLnNuYXBjaGF0LFxuICAgICAgaW5kdXN0cnk6IHRoaXMuc3RhdGUuaW5kdXN0cnksXG4gICAgICBpbnRlcmVzdDogdGhpcy5zdGF0ZS5pbnRlcmVzdCxcbiAgICAgIGpvYjogdGhpcy5zdGF0ZS5qb2IsXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhjb250YWN0KTtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdChhcGlFZGl0VXJsICsgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsIGNvbnRhY3QpXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMuZGF0YSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkVESVQ8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdF9uYW1lXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdF9uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpcnN0TmFtZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFzdF9uYW1lXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdF9uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkxhc3ROYW1lQ2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwaG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQaG9uZSBOdW1iZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17XCIrMVwiICsgdGhpcy5zdGF0ZS5waG9uZV9udW1iZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTnVtYmVyQ2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25FbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZGVyXCI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZmllbGRzZXRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIG1pbldpZHRoOiAxODYgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5HZW5kZXI8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR2VuZGVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiR2VuZGVyXCJcbiAgICAgICAgICAgICAgICBpZD1cIkdlbmRlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2VuZGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uR2VuZGVyQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmVtYWxlXCJcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmVtYWxlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm1hbGVcIlxuICAgICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNYWxlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlByZWZlciBOb3QgU2F5XCJcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJlZmVyIE5vdCBTYXlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkluc3RhZ3JhbVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmluc3RhZ3JhbX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnN0YWdyYW1DaGFuZ2V9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlR3aXR0ZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50d2l0dGVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblR3aXR0ZXJDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuYXBjaGF0XCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTbmFwY2hhdFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNuYXBjaGF0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNuYXBjaGF0Q2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmVzdFwiPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1hcmdpbjogOCB9fT5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5JbnRlcmVzdHM8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmludGVyZXN0fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW50ZXJlc3RDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlRlY2hcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnRlcmVzdH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkludGVyZXN0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTcG9ydHNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZHVzdHJ5XCI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCBtaW5XaWR0aDogMTg2IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiSW5kdXN0cnlcIj5JbmR1c3RyeTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJJbmR1c3RyeVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJbmR1c3RyeVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5kdXN0cnl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbmR1c3RyeUNoYW5nZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlRlY2hcIj5UZWNoPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJGaW5hbmNlXCI+RmluYW5jZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiSGVhbHRoXCI+SGVhbHRoPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTZXJ2aWNlXCI+U2VydmljZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUmVhbCBFc3RhdGVcIj5SZWFsIEVzdGF0ZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUmV0YWlsXCI+UmV0YWlsPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJPdGhlclwiPk90aGVyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJKb2IgVGl0bGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5qb2J9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSm9iQ2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDggfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxCcm93c2VyUm91dGVyPlxuICAgIDxBcHAgLz5cbiAgPC9Ccm93c2VyUm91dGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=