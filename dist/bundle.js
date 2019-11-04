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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/user.js":
/*!********************************!*\
  !*** ./src/components/user.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar tagName = 'user-widget';\nvar style = \"\\n  <style>\\n  .user-thumb {\\n    border: 1px solid #F3F0E2;\\n    display: block;\\n    height: 50px;\\n    width: 50px;\\n    background-repeat: no-repeat;\\n    background-position: 55% 25%;\\n    margin-right: 8px;\\n    margin-bottom: 8px;\\n  }\\n  </style>\\n\";\n\nvar User =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(User, _HTMLElement);\n\n  function User() {\n    _classCallCheck(this, User);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(User).apply(this, arguments));\n  }\n\n  _createClass(User, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var userName = this.getAttribute('data-user-name');\n      var template = document.createElement('template');\n      template.innerHTML = this.getTemplate(userName, style);\n\n      if (!this.shadowRoot) {\n        this.attachShadow({\n          mode: 'open'\n        });\n        this.shadowRoot.appendChild(template.content.cloneNode(true));\n      }\n    }\n  }, {\n    key: \"getTemplate\",\n    value: function getTemplate(userName, style) {\n      return \"\".concat(style, \"<a\\n      style=\\\"background-image:url(http://cdn.krestanskaseznamka.cz/img/s/user-\").concat(userName, \".jpg);\\\"\\n      class=\\\"user-thumb\\\"\\n      href=\\\"#user/\").concat(userName, \"\\\"></a>\");\n    }\n  }]);\n\n  return User;\n}(_wrapNativeSuper(HTMLElement));\n\nvar register = function register() {\n  return customElements.define(tagName, User);\n};\n\nwindow.WebComponents ? window.WebComponents.waitFor(register) : register();\n\n//# sourceURL=webpack:///./src/components/user.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/user.js */ \"./src/views/user.js\");\n/* harmony import */ var _services_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.js */ \"./src/services/user.js\");\n/* harmony import */ var _views_dash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/dash.js */ \"./src/views/dash.js\");\n/* harmony import */ var _lib_observer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/observer.js */ \"./src/lib/observer.js\");\n\n\n\n\nvar state = {\n  users: []\n};\nvar proxy = Object(_lib_observer_js__WEBPACK_IMPORTED_MODULE_3__[\"onChange\"])(state, function () {// setTimeout(function () {\n  //   listUsers(state.users)\n  // }, 0);\n});\nObject(_services_user_js__WEBPACK_IMPORTED_MODULE_1__[\"userList\"])(function (list) {\n  proxy.users = list;\n});\n\nfunction getHash() {\n  return window.location.hash.replace('#', '');\n}\n\nfunction navigate(hash) {\n  console.log('rendering user: v1' + hash);\n\n  if (hash.includes('user/')) {\n    Object(_views_user_js__WEBPACK_IMPORTED_MODULE_0__[\"userDetail\"])(hash.replace('user/', ''));\n  } else if (hash === 'users') {\n    Object(_views_user_js__WEBPACK_IMPORTED_MODULE_0__[\"listUsers\"])(state.users);\n  } else if (hash === 'dash') {\n    Object(_views_dash_js__WEBPACK_IMPORTED_MODULE_2__[\"renderDash\"])();\n  } else {\n    Object(_views_dash_js__WEBPACK_IMPORTED_MODULE_2__[\"renderDash\"])();\n  }\n}\n\nwindow.onhashchange = function () {\n  navigate(getHash());\n};\n\nnavigate(getHash());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/observer.js":
/*!*****************************!*\
  !*** ./src/lib/observer.js ***!
  \*****************************/
/*! exports provided: onChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onChange\", function() { return onChange; });\nvar onChange = function onChange(objToWatch, onChangeFunction) {\n  var handler = {\n    get: function get(target, property, receiver) {\n      //onChangeFunction();\n      return Reflect.get(target, property, receiver);\n    },\n    set: function set(target, property, value) {\n      onChangeFunction();\n      return Reflect.set(target, property, value);\n    },\n    deleteProperty: function deleteProperty(target, property) {\n      onChangeFunction();\n      return Reflect.deleteProperty(target, property);\n    }\n  };\n  return new Proxy(objToWatch, handler);\n};\n\n\n\n//# sourceURL=webpack:///./src/lib/observer.js?");

/***/ }),

/***/ "./src/lib/render.js":
/*!***************************!*\
  !*** ./src/lib/render.js ***!
  \***************************/
/*! exports provided: render, context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"context\", function() { return context; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar $content = document.querySelector('#content');\n\nfunction context(html) {\n  var wrapperDiv = document.createElement('div');\n  wrapperDiv.innerHTML = html;\n  return wrapperDiv;\n}\n\nfunction render(input) {\n  if (_typeof(input) === 'object') {\n    $content.innerHTML = '';\n    $content.appendChild(input);\n  } else {\n    $content.innerHTML = input;\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/lib/render.js?");

/***/ }),

/***/ "./src/services/user.js":
/*!******************************!*\
  !*** ./src/services/user.js ***!
  \******************************/
/*! exports provided: userList, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userList\", function() { return userList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteUser\", function() { return deleteUser; });\nfunction userList(callBack) {\n  fetch('/api/user/list', {\n    method: 'GET'\n  }).then(function (res) {\n    return res.json();\n  }).then(function (d) {\n    callBack(d);\n  })[\"catch\"](function (err) {\n    console.error(err);\n  });\n}\n\nfunction deleteUser(name, callBack) {\n  fetch('/api/user/' + name, {\n    method: 'DELETE'\n  }).then(function (res) {\n    return res.json();\n  }).then(function (d) {\n    callBack(d);\n  })[\"catch\"](function (err) {\n    console.error(err);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/services/user.js?");

/***/ }),

/***/ "./src/views/dash.js":
/*!***************************!*\
  !*** ./src/views/dash.js ***!
  \***************************/
/*! exports provided: renderDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderDash\", function() { return renderDash; });\n/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/render.js */ \"./src/lib/render.js\");\n/* harmony import */ var _components_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/user.js */ \"./src/components/user.js\");\n/* harmony import */ var _components_user_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_user_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction dash(list) {\n  function test() {\n    return 'foo';\n  }\n\n  Object(_lib_render_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\"\\n    <h1>Dash</h1>\\n    <hr />\\n    \".concat(test(), \"\\n    <user-widget data-user-name=\\\"dave\\\"></user-widget>\\n  \"));\n}\n\nfunction renderDash() {\n  dash();\n}\n\n\n\n//# sourceURL=webpack:///./src/views/dash.js?");

/***/ }),

/***/ "./src/views/user.js":
/*!***************************!*\
  !*** ./src/views/user.js ***!
  \***************************/
/*! exports provided: listUsers, userDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listUsers\", function() { return listUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userDetail\", function() { return userDetail; });\n/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/render.js */ \"./src/lib/render.js\");\n/* harmony import */ var _components_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/user.js */ \"./src/components/user.js\");\n/* harmony import */ var _components_user_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_user_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.js */ \"./src/services/user.js\");\n\n\n\n\nfunction listUsers(list) {\n  var elm = Object(_lib_render_js__WEBPACK_IMPORTED_MODULE_0__[\"context\"])(\"\\n    <h1>Users</h1>\\n    <hr />\\n    <div class=\\\"container-fluid\\\">\\n    \".concat(list.map(function (item, i) {\n    return \"\\n      <div class=\\\"row\\\">\\n        <user-widget class=\\\"col-1\\\" data-user-name=\\\"\".concat(item.name, \"\\\"></user-widget>\\n        <div class=\\\"col-9\\\">\\n          \").concat(item.name, \"</br>\\n        </div>\\n        <div class=\\\"col-2\\\">\\n          <a href=\\\"#\\\" class=\\\"btn btn-danger btn-sm\\\" data-id=\\\"\").concat(item.name, \"\\\">delete</a>\\n        </div>\\n      </div>\\n    \");\n  }).join(''), \"\\n    </div>\\n  \"));\n  elm.querySelectorAll('.btn').forEach(function (node) {\n    node.addEventListener('click', function () {\n      var domItem = this.parentNode.parentNode;\n      Object(_services_user_js__WEBPACK_IMPORTED_MODULE_2__[\"deleteUser\"])(this.dataset.id, function () {\n        domItem.remove();\n      });\n      return false;\n    });\n  });\n  Object(_lib_render_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(elm);\n}\n\nfunction userDetail(userName) {\n  var elm = Object(_lib_render_js__WEBPACK_IMPORTED_MODULE_0__[\"context\"])(\"\\n    <h1>User Profile: \".concat(userName, \"</h1>\\n    <hr />\\n    <div class=\\\"container-fluid\\\">\\n      <user-widget class=\\\"col-1\\\" data-user-name=\\\"\").concat(userName, \"\\\"></user-widget>\\n    </div>\\n  \"));\n  Object(_lib_render_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(elm);\n}\n\n\n\n//# sourceURL=webpack:///./src/views/user.js?");

/***/ })

/******/ });