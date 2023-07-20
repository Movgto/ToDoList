/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/style.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::after,\n*::before {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #dfdfdf;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n#list-ctr {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 3rem;\n  width: 90%;\n  max-width: 40rem;\n  background-color: #fff;\n  box-shadow: 0 0.4rem 1rem rgba(74, 74, 74, 0.3529411765);\n}\n#list-ctr #list-header {\n  font-size: 0.5rem;\n  font-weight: 100;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n  color: #4a4a4a;\n}\n#list-ctr input {\n  border: none;\n}\n#list-ctr input:focus {\n  outline: none;\n}\n#list-ctr i {\n  font-size: 1rem;\n  color: #afafaf;\n}\n#list-ctr .task {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.2rem;\n  border-top: 0.1rem solid #dfdfdf;\n  padding: 0.5rem;\n  font-size: 3rem;\n}\n#list-ctr .task .desc {\n  flex: 1 1;\n}\n#list-ctr .task i:hover {\n  cursor: move;\n}\n#list-ctr .task.selected {\n  background-color: #fcff50;\n}\n#list-ctr .task.selected input {\n  background-color: transparent;\n}\n#list-ctr .task.selected i:hover {\n  cursor: pointer;\n}\n#list-ctr #add {\n  padding: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  border-top: 0.1rem solid #dfdfdf;\n}\n#list-ctr #add input {\n  font-size: 1rem;\n  font-style: italic;\n}\n#list-ctr button {\n  border: none;\n  background-color: transparent;\n}\n#list-ctr button:hover {\n  cursor: pointer;\n}\n#list-ctr .task.completed {\n  text-decoration: line-through;\n}\n#list-ctr #complete-ctr {\n  display: flex;\n  justify-content: center;\n  background-color: #efefef;\n  padding: 0;\n  margin: 0;\n  border-top: 0.1rem solid #dfdfdf;\n}\n#list-ctr #complete-ctr button {\n  padding: 0.5rem;\n  color: #6a6a6a;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacktest/./src/stylesheets/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpacktest/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpacktest/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/stylesheets/style.scss":
/*!************************************!*\
  !*** ./src/stylesheets/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpacktest/./src/stylesheets/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpacktest/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpacktest/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpacktest/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpacktest/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpacktest/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpacktest/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/style.scss */ \"./src/stylesheets/style.scss\");\n/* harmony import */ var _modules_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/list.js */ \"./src/modules/list.js\");\n\r\n\r\n\r\n(0,_modules_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://webpacktest/./src/index.js?");

/***/ }),

/***/ "./src/modules/interactive.js":
/*!************************************!*\
  !*** ./src/modules/interactive.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeCheckbox: () => (/* binding */ changeCheckbox),\n/* harmony export */   clearCompleted: () => (/* binding */ clearCompleted)\n/* harmony export */ });\nconst clearCompleted = (list, updateIndexFunc) => {\r\n  const completedTasks = document.querySelectorAll('.completed');\r\n  completedTasks.forEach((task) => {\r\n    list.tasks = list.tasks.filter((item) => (item.index !== Number(task.getAttribute('key'))));\r\n    task.remove();\r\n  });\r\n\r\n  updateIndexFunc();\r\n};\r\n\r\nconst changeCheckbox = (checkbox, task, updateStorageFunc, list) => {\r\n  checkbox.addEventListener('click', () => {\r\n    if (checkbox.checked === true) {\r\n      task.classList.add('completed');\r\n      list.tasks[Number(task.getAttribute('key'))].completed = true;\r\n      updateStorageFunc();\r\n    } else {\r\n      task.classList.remove('completed');\r\n      list.tasks[Number(task.getAttribute('key'))].completed = false;\r\n      updateStorageFunc();\r\n    }\r\n  });\r\n};\n\n//# sourceURL=webpack://webpacktest/./src/modules/interactive.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _listStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listStorage.js */ \"./src/modules/listStorage.js\");\n/* harmony import */ var _listFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listFunctions.js */ \"./src/modules/listFunctions.js\");\n/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ \"./src/modules/interactive.js\");\n\r\n\r\n\r\n\r\nconst list = document.getElementById('list');\r\nconst addInput = document.querySelector('#add input');\r\nconst addBtn = document.querySelector('#add button');\r\nconst clear = document.querySelector('#clear');\r\nconst resetBtn = document.querySelector('#reset-btn');\r\n\r\nconst resetAnimation = () => {\r\n  const animationOptions = {\r\n    duration: 500,\r\n    iterations: 1,\r\n  };\r\n\r\n  const keys = [\r\n    {\r\n      transform: 'rotate(0)',\r\n    },\r\n    {\r\n      transform: 'rotate(360deg)',\r\n    },\r\n  ];\r\n  resetBtn.animate(keys, animationOptions);\r\n};\r\n\r\nconst initiateList = () => {\r\n  const listData = JSON.parse(localStorage.getItem('taskList'));\r\n  if (!listData || listData.length > 0) {\r\n    _listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks = listData;\r\n  }\r\n\r\n  _listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.forEach((task) => {\r\n    const newTask = (0,_listFunctions_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(task.description, task.completed);\r\n    list.appendChild(newTask);\r\n  });\r\n\r\n  (0,_listFunctions_js__WEBPACK_IMPORTED_MODULE_1__.updateIndex)();\r\n\r\n  addBtn.addEventListener('click', () => {\r\n    (0,_listFunctions_js__WEBPACK_IMPORTED_MODULE_1__.addToList)(0, addInput.value, false, true);\r\n  });\r\n\r\n  addInput.addEventListener('keydown', (e) => {\r\n    if (e.keyCode === 13) {\r\n      (0,_listFunctions_js__WEBPACK_IMPORTED_MODULE_1__.addToList)(0, addInput.value, false, true);\r\n    }\r\n  });\r\n\r\n  clear.addEventListener('click', () => { (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.clearCompleted)(_listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _listFunctions_js__WEBPACK_IMPORTED_MODULE_1__.updateIndex); });\r\n  resetBtn.addEventListener('click', () => {\r\n    resetAnimation();\r\n    const taskElements = document.querySelectorAll('.task');\r\n    taskElements.forEach((task) => {\r\n      task.remove();\r\n    });\r\n    _listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks = [];\r\n    (0,_listFunctions_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initiateList);\n\n//# sourceURL=webpack://webpacktest/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/listFunctions.js":
/*!**************************************!*\
  !*** ./src/modules/listFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToList: () => (/* binding */ addToList),\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   updateIndex: () => (/* binding */ updateIndex),\n/* harmony export */   updateStorage: () => (/* binding */ updateStorage)\n/* harmony export */ });\n/* harmony import */ var _listStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listStorage.js */ \"./src/modules/listStorage.js\");\n/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ \"./src/modules/interactive.js\");\n\r\n\r\n\r\nconst list = document.getElementById('list');\r\nconst addInput = document.querySelector('#add input');\r\n\r\nconst updateStorage = () => {\r\n  localStorage.setItem('taskList', JSON.stringify(_listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks));\r\n};\r\n\r\nconst updateIndex = () => {\r\n  const taskElements = document.querySelectorAll('.task');\r\n\r\n  taskElements.forEach((taskEl, i) => {\r\n    taskEl.setAttribute('key', i);\r\n  });\r\n\r\n  _listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.forEach((task, i) => {\r\n    task.index = i;\r\n  });\r\n\r\n  updateStorage();\r\n};\r\n\r\nconst createTask = (desc, completed) => {\r\n  const taskEl = document.createElement('div');\r\n  taskEl.className = 'task';\r\n  taskEl.innerHTML = `<input class=\"check\" type=\"checkbox\" />\r\n                          <input class=\"desc\" type=\"text\"/>\r\n                          <button class=\"move-btn\" type=\"button\">\r\n                              <i class=\"fa-solid fa-ellipsis-vertical\"></i>\r\n                          </button>`;\r\n\r\n  const checkbox = taskEl.querySelector('.check');\r\n  const descField = taskEl.querySelector('.desc');\r\n  const btn = taskEl.querySelector('button');\r\n  let mouseHovering = false;\r\n  descField.value = desc;\r\n\r\n  const taskIcon = taskEl.querySelector('i');\r\n  if (completed) {\r\n    checkbox.setAttribute('checked', 'true');\r\n    taskEl.classList.add('completed');\r\n  }\r\n\r\n  descField.addEventListener('focus', () => {\r\n    taskEl.classList.add('selected');\r\n    taskIcon.classList.remove('fa-ellipsis-vertical');\r\n    taskIcon.classList.add('fa-trash');\r\n  });\r\n\r\n  descField.addEventListener('focusout', () => {\r\n    if (!mouseHovering) {\r\n      taskIcon.classList.remove('fa-trash');\r\n      taskEl.classList.remove('selected');\r\n      taskIcon.classList.add('fa-ellipsis-vertical');\r\n    }\r\n  });\r\n\r\n  descField.addEventListener('change', () => {\r\n    const index = taskEl.getAttribute('key');\r\n    _listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[index].description = descField.value;\r\n    updateStorage();\r\n  });\r\n\r\n  (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.changeCheckbox)(checkbox, taskEl, updateStorage, _listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n  btn.addEventListener('click', () => {\r\n    if (taskEl.classList.contains('selected')) {\r\n      const index = Number(taskEl.getAttribute('key'));\r\n      _listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks = _listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.filter((item) => (item.index !== index));\r\n      taskEl.remove();\r\n      updateIndex();\r\n    }\r\n  });\r\n\r\n  btn.addEventListener('mouseenter', () => {\r\n    mouseHovering = true;\r\n  });\r\n\r\n  btn.addEventListener('mouseout', () => {\r\n    mouseHovering = false;\r\n  });\r\n\r\n  return taskEl;\r\n};\r\n\r\nconst addToList = (index, description, completed, push = false) => {\r\n  const newTask = createTask(description, completed);\r\n\r\n  if (description === null || description === '') {\r\n    return;\r\n  }\r\n\r\n  if (push) {\r\n    list.appendChild(newTask);\r\n    _listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.push({\r\n      description,\r\n      completed,\r\n    });\r\n  } else {\r\n    const listElements = document.querySelectorAll('.task');\r\n    listElements[index].insertBefore(newTask);\r\n    _listStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.splice(index, 0, {\r\n      description,\r\n      completed,\r\n    });\r\n  }\r\n\r\n  addInput.value = '';\r\n\r\n  updateIndex();\r\n};\n\n//# sourceURL=webpack://webpacktest/./src/modules/listFunctions.js?");

/***/ }),

/***/ "./src/modules/listStorage.js":
/*!************************************!*\
  !*** ./src/modules/listStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass List {\r\n    static tasks = [];\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack://webpacktest/./src/modules/listStorage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;