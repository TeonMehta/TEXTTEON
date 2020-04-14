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
exports.push([module.i, "ul {\n  text-align: center; }\n  ul li {\n    display: inline;\n    list-style: none;\n    padding: 10px 30px; }\n    ul li a {\n      text-decoration: none;\n      color: #01b075; }\n", ""]);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Contacts */ "./src/components/Contacts.js");
/* harmony import */ var _components_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Create */ "./src/components/Create.js");
/* harmony import */ var _components_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Edit */ "./src/components/Edit.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
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
          exact: true
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contacts__WEBPACK_IMPORTED_MODULE_3__["default"], null)),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/create",
          exact: true
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Create__WEBPACK_IMPORTED_MODULE_4__["default"], null)),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/edit/:id",
          exact: true
        })))
      );
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Contacts =
/*#__PURE__*/
function (_Component) {
  _inherits(Contacts, _Component);

  function Contacts(props) {
    var _this;

    _classCallCheck(this, Contacts);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contacts).call(this, props));
    _this.state = {
      contacts: []
    };
    return _this;
  }

  _createClass(Contacts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("http://localhost:8888/contacts/").then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.setState({
          contacts: data
        });
      })["catch"](console.log);
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, console.log(this.state.contacts), this.state.contacts.map(function (contact, i) {
          return (
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: i
            },
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "name"
            }, contact._id),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "name"
            }, contact.first_name),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "name"
            }, contact.last_name),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "number"
            }, contact.phone_number),
            /*#__PURE__*/
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "number"
            }, contact.email))
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
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      users: []
    };
    return _this;
  }

  _createClass(Create, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        users: ["test user"],
        first_name: "test",
        last_name: "test",
        phone_number: 1234567,
        email: "test"
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
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var contact = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        phone_number: this.state.phone_number,
        email: this.state.email
      };
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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: ""
        }, "FIRST NAME"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          value: this.state.first_name,
          onChange: this.onFirstNameChange
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "last_name"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: ""
        }, "LAST NAME"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          value: this.state.last_name,
          onChange: this.onLastNameChange
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "number"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: ""
        }, "NUMBER"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          value: this.state.phone_number,
          onChange: this.onNumberChange
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "email"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: ""
        }, "EMAIL"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          value: this.state.email,
          onChange: this.onEmailChange
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "submit"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "submit",
          value: "Create Contact"
        }))))
      );
    }
  }]);

  return Create;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/Edit.js":
/*!********************************!*\
  !*** ./src/components/Edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Edit =
/*#__PURE__*/
function (_Component) {
  _inherits(Edit, _Component);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Edit).call(this, props));
    _this.onNameChange = _this.onNameChange.bind(_assertThisInitialized(_this));
    _this.onNumberChange = _this.onNumberChange.bind(_assertThisInitialized(_this));
    _this.onEmailChange = _this.onEmailChange.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.state = {
      name: "",
      number: "",
      email: ""
    };
    return _this;
  }

  _createClass(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("http://localhost:8888/contacts/" + this.props.match.params.id).then(function (res) {
        _this2.setState({
          name: res.data.name,
          number: res.data.number
        });
      })["catch"](console.log);
    }
  }, {
    key: "onNameChange",
    value: function onNameChange(e) {
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: "onNumberChange",
    value: function onNumberChange(e) {
      this.setState({
        number: e.target.value
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
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var contact = {
        name: this.state.name,
        number: this.state.number,
        email: this.state.email
      };
      fetch("http://localhost:8888/contacts/" + this.props.match.params.id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      }).then(function (res) {
        return console.log(res.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "EDIT"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: this.onSubmit
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "name"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: ""
        }, "Contact Name:"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          value: this.state.name,
          onChange: this.onNameChange
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "number"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: ""
        }, "Contact Number:"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          value: this.state.number,
          onChange: this.onNumberChange
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "email"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: ""
        }, "ContactEmail:"),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          value: this.state.email,
          onChange: this.onEmailChange
        })),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "submit"
        },
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "submit",
          value: "EDIT SMC"
        }))))
      );
    }
  }]);

  return Edit;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
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
  }]);

  return Navbar;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiQ29udGFjdHMiLCJwcm9wcyIsInN0YXRlIiwiY29udGFjdHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImNvbnRhY3QiLCJpIiwiX2lkIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBob25lX251bWJlciIsImVtYWlsIiwiQ3JlYXRlIiwib25GaXJzdE5hbWVDaGFuZ2UiLCJiaW5kIiwib25MYXN0TmFtZUNoYW5nZSIsIm9uTnVtYmVyQ2hhbmdlIiwib25FbWFpbENoYW5nZSIsIm9uU3VibWl0IiwidXNlcnMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiZXJyb3IiLCJFZGl0Iiwib25OYW1lQ2hhbmdlIiwibmFtZSIsIm51bWJlciIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJOYXZiYXIiLCJmYVVzZXJzIiwiZmFVc2VyUGx1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QTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzfmFwcFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJ1bCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIHVsIGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7IH1cXG4gICAgdWwgbGkgYSB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGNvbG9yOiAjMDFiMDc1OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBeXFxcXC5cXFxcL2xvZyRcIjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IENvbnRhY3RzIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdHNcIjtcbmltcG9ydCBDcmVhdGUgZnJvbSBcIi4vY29tcG9uZW50cy9DcmVhdGVcIjtcbmltcG9ydCBFZGl0IGZyb20gXCIuL2NvbXBvbmVudHMvRWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdD5cbiAgICAgICAgICAgICAgICA8Q29udGFjdHMvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NyZWF0ZVwiIGV4YWN0ID5cbiAgICAgICAgICAgICAgICA8Q3JlYXRlLz5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9lZGl0LzppZFwiIGV4YWN0ID5cbiAgICAgICAgICAgICAgICB7Lyo8RWRpdC8+Ki99XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29udGFjdHM6IFtdLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0Ojg4ODgvY29udGFjdHMvXCIpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRhY3RzOiBkYXRhIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvbnRhY3RzKX1cbiAgICAgICAge3RoaXMuc3RhdGUuY29udGFjdHMubWFwKChjb250YWN0LCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2NvbnRhY3QuX2lkfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2NvbnRhY3QuZmlyc3RfbmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntjb250YWN0Lmxhc3RfbmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyXCI+e2NvbnRhY3QucGhvbmVfbnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj57Y29udGFjdC5lbWFpbH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5vbkZpcnN0TmFtZUNoYW5nZSA9IHRoaXMub25GaXJzdE5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTGFzdE5hbWVDaGFuZ2UgPSB0aGlzLm9uTGFzdE5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTnVtYmVyQ2hhbmdlID0gdGhpcy5vbk51bWJlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25FbWFpbENoYW5nZSA9IHRoaXMub25FbWFpbENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlyc3RfbmFtZTogXCJcIixcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcbiAgICAgIHBob25lX251bWJlcjogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgdXNlcnM6IFtdLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VyczogW1widGVzdCB1c2VyXCJdLFxuICAgICAgZmlyc3RfbmFtZTogXCJ0ZXN0XCIsXG4gICAgICBsYXN0X25hbWU6IFwidGVzdFwiLFxuICAgICAgcGhvbmVfbnVtYmVyOiAxMjM0NTY3LFxuICAgICAgZW1haWw6IFwidGVzdFwiLFxuICAgIH0pO1xuICB9XG4gIG9uRmlyc3ROYW1lQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpcnN0X25hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uTGFzdE5hbWVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGFzdF9uYW1lOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbk51bWJlckNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwaG9uZV9udW1iZXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uRW1haWxDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZW1haWw6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY29udGFjdCA9IHtcbiAgICAgIGZpcnN0X25hbWU6IHRoaXMuc3RhdGUuZmlyc3RfbmFtZSxcbiAgICAgIGxhc3RfbmFtZTogdGhpcy5zdGF0ZS5sYXN0X25hbWUsXG4gICAgICBwaG9uZV9udW1iZXI6IHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyLFxuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgfTtcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9jb250YWN0cy9hZGRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGFjdCksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGNvbnRhY3QpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzOlwiLCBjb250YWN0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q1JFQVRFPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RfbmFtZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5GSVJTVCBOQU1FPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0X25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmlyc3ROYW1lQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhc3RfbmFtZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5MQVNUIE5BTUU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdF9uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkxhc3ROYW1lQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5OVU1CRVI8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVfbnVtYmVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk51bWJlckNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5FTUFJTDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25FbWFpbENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDcmVhdGUgQ29udGFjdFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5vbk5hbWVDaGFuZ2UgPSB0aGlzLm9uTmFtZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25OdW1iZXJDaGFuZ2UgPSB0aGlzLm9uTnVtYmVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkVtYWlsQ2hhbmdlID0gdGhpcy5vbkVtYWlsQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgbnVtYmVyOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9jb250YWN0cy9cIiArIHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBuYW1lOiByZXMuZGF0YS5uYW1lLFxuICAgICAgICAgIG51bWJlcjogcmVzLmRhdGEubnVtYmVyLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICB9XG4gIG9uTmFtZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbk51bWJlckNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBudW1iZXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uRW1haWxDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZW1haWw6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY29udGFjdCA9IHtcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgIG51bWJlcjogdGhpcy5zdGF0ZS5udW1iZXIsXG4gICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICB9O1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2NvbnRhY3RzL1wiICsgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhY3QpLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzLmRhdGEpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMT5FRElUPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5Db250YWN0IE5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTmFtZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+Q29udGFjdCBOdW1iZXI6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm51bWJlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25OdW1iZXJDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWxcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+Q29udGFjdEVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25FbWFpbENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJFRElUIFNNQ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFVc2VyUGx1cywgZmFVc2VycyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2Vyc30gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NyZWF0ZVwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8QnJvd3NlclJvdXRlcj5cbiAgICA8QXBwIC8+XG4gIDwvQnJvd3NlclJvdXRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9