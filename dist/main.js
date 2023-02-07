/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.mjs */ \"./src/main.mjs\");\n\n\n(0,_main_mjs__WEBPACK_IMPORTED_MODULE_0__.main)();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./node_modules/m00/src/defaults/data.mjs":
/*!************************************************!*\
  !*** ./node_modules/m00/src/defaults/data.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaults_data\": () => (/* binding */ defaults_data)\n/* harmony export */ });\nlet data = {};\nfunction defaults_data() {\n    return data;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/defaults/data.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/defaults/get.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/defaults/get.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaults_get\": () => (/* binding */ defaults_get)\n/* harmony export */ });\n/* harmony import */ var _function_is_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../function/is.mjs */ \"./node_modules/m00/src/function/is.mjs\");\n/* harmony import */ var _data_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.mjs */ \"./node_modules/m00/src/defaults/data.mjs\");\n/* harmony import */ var _property_has_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../property/has.mjs */ \"./node_modules/m00/src/property/has.mjs\");\n\n\n\nfunction defaults_get(name) {\n    if ((0,_function_is_mjs__WEBPACK_IMPORTED_MODULE_0__.function_is)(name)) {\n        name = name.name;\n    }\n    if ((0,_property_has_mjs__WEBPACK_IMPORTED_MODULE_2__.property_has)((0,_data_mjs__WEBPACK_IMPORTED_MODULE_1__.defaults_data)(), name)) {\n        return (0,_data_mjs__WEBPACK_IMPORTED_MODULE_1__.defaults_data)()[name];\n    }\n    return {};\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/defaults/get.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element.mjs":
/*!******************************************!*\
  !*** ./node_modules/m00/src/element.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element\": () => (/* binding */ element)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './arguments/assert.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './defined/is.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _string_is_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string/is.mjs */ \"./node_modules/m00/src/string/is.mjs\");\n/* harmony import */ var _element_child_add_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element/child/add.mjs */ \"./node_modules/m00/src/element/child/add.mjs\");\n/* harmony import */ var _element_style_default_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element/style/default.mjs */ \"./node_modules/m00/src/element/style/default.mjs\");\n\n\n\n\n\nfunction element(parent, tag_name) {\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './arguments/assert.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arguments, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './defined/is.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _string_is_mjs__WEBPACK_IMPORTED_MODULE_1__.string_is);\n    let e = document.createElement(tag_name);\n    (0,_element_style_default_mjs__WEBPACK_IMPORTED_MODULE_3__.element_style_default)(e, element);\n    (0,_element_child_add_mjs__WEBPACK_IMPORTED_MODULE_2__.element_child_add)(parent, e);\n    return e;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/child/add.mjs":
/*!****************************************************!*\
  !*** ./node_modules/m00/src/element/child/add.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_child_add\": () => (/* binding */ element_child_add)\n/* harmony export */ });\nfunction element_child_add(parent, e) {\n    parent.appendChild(e);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/child/add.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/style.mjs":
/*!************************************************!*\
  !*** ./node_modules/m00/src/element/style.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_style\": () => (/* binding */ element_style)\n/* harmony export */ });\n/* harmony import */ var _merge_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../merge.mjs */ \"./node_modules/m00/src/merge.mjs\");\n\nfunction element_style(e, style) {\n    (0,_merge_mjs__WEBPACK_IMPORTED_MODULE_0__.merge)(e.style, style);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/style.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/style/default.mjs":
/*!********************************************************!*\
  !*** ./node_modules/m00/src/element/style/default.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_style_default\": () => (/* binding */ element_style_default)\n/* harmony export */ });\n/* harmony import */ var _defaults_get_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../defaults/get.mjs */ \"./node_modules/m00/src/defaults/get.mjs\");\n/* harmony import */ var _style_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../style.mjs */ \"./node_modules/m00/src/element/style.mjs\");\n\n\nfunction element_style_default(e, component) {\n    (0,_style_mjs__WEBPACK_IMPORTED_MODULE_1__.element_style)(e, (0,_defaults_get_mjs__WEBPACK_IMPORTED_MODULE_0__.defaults_get)(component));\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/style/default.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/style/display/inline/block.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/m00/src/element/style/display/inline/block.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_style_display_inline_block\": () => (/* binding */ element_style_display_inline_block)\n/* harmony export */ });\n/* harmony import */ var _style_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../style.mjs */ \"./node_modules/m00/src/element/style.mjs\");\n\nfunction element_style_display_inline_block(e) {\n    (0,_style_mjs__WEBPACK_IMPORTED_MODULE_0__.element_style)(e, { display: 'inline-block' });\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/style/display/inline/block.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/style/width/min/max.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/m00/src/element/style/width/min/max.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_style_width_min_max\": () => (/* binding */ element_style_width_min_max)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../../../arguments/assert.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../../../defined/is.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _string_is_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../string/is.mjs */ \"./node_modules/m00/src/string/is.mjs\");\n/* harmony import */ var _style_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../style.mjs */ \"./node_modules/m00/src/element/style.mjs\");\n\n\n\n\nfunction element_style_width_min_max(e, value) {\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../../../arguments/assert.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arguments, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../../../defined/is.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _string_is_mjs__WEBPACK_IMPORTED_MODULE_1__.string_is);\n    (0,_style_mjs__WEBPACK_IMPORTED_MODULE_2__.element_style)(e, {\n        minWidth: value,\n        maxWith: value\n    });\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/style/width/min/max.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/text.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/element/text.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_text\": () => (/* binding */ element_text)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../arguments/assert.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../defined/is.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _string_is_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../string/is.mjs */ \"./node_modules/m00/src/string/is.mjs\");\n\n\n\nfunction element_text(e, text) {\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../arguments/assert.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arguments, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../defined/is.mjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _string_is_mjs__WEBPACK_IMPORTED_MODULE_1__.string_is);\n    e.innerHTML = text;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/text.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/with/text.mjs":
/*!****************************************************!*\
  !*** ./node_modules/m00/src/element/with/text.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_with_text\": () => (/* binding */ element_with_text)\n/* harmony export */ });\n/* harmony import */ var _text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../text.mjs */ \"./node_modules/m00/src/element/text.mjs\");\n/* harmony import */ var _element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../element.mjs */ \"./node_modules/m00/src/element.mjs\");\n\n\nfunction element_with_text(parent, tag_name, text) {\n    let e = (0,_element_mjs__WEBPACK_IMPORTED_MODULE_1__.element)(parent, tag_name);\n    (0,_text_mjs__WEBPACK_IMPORTED_MODULE_0__.element_text)(e, text);\n    return e;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/with/text.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/for/each.mjs":
/*!*******************************************!*\
  !*** ./node_modules/m00/src/for/each.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"for_each\": () => (/* binding */ for_each)\n/* harmony export */ });\n/* harmony import */ var _each_key_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./each/key.mjs */ \"./node_modules/m00/src/for/each/key.mjs\");\n\nfunction for_each(list, lambda) {\n    (0,_each_key_mjs__WEBPACK_IMPORTED_MODULE_0__.for_each_key)(list, key => {\n        let l = list[key];\n        lambda(l, key);\n    });\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/for/each.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/for/each/key.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/for/each/key.mjs ***!
  \***********************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\jared\\\\transport\\\\node_modules\\\\m00\\\\src\\\\for\\\\each\\\\key.mjs'\");\n\n//# sourceURL=webpack:///./node_modules/m00/src/for/each/key.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/function/is.mjs":
/*!**********************************************!*\
  !*** ./node_modules/m00/src/function/is.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"function_is\": () => (/* binding */ function_is)\n/* harmony export */ });\nfunction function_is(v) {\n    return typeof v === 'function';\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/function/is.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/merge.mjs":
/*!****************************************!*\
  !*** ./node_modules/m00/src/merge.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"merge\": () => (/* binding */ merge)\n/* harmony export */ });\n/* harmony import */ var _for_each_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./for/each.mjs */ \"./node_modules/m00/src/for/each.mjs\");\n\nfunction merge(b, a) {\n    (0,_for_each_mjs__WEBPACK_IMPORTED_MODULE_0__.for_each)(a, (a_i, key) => {\n        b[key] = a_i;\n    });\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/merge.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/property/has.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/property/has.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"property_has\": () => (/* binding */ property_has)\n/* harmony export */ });\nfunction property_has(object, property) {\n    return object.hasOwnProperty(property);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/property/has.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/string/is.mjs":
/*!********************************************!*\
  !*** ./node_modules/m00/src/string/is.mjs ***!
  \********************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\jared\\\\transport\\\\node_modules\\\\m00\\\\src\\\\string\\\\is.mjs'\");\n\n//# sourceURL=webpack:///./node_modules/m00/src/string/is.mjs?");

/***/ }),

/***/ "./src/component/top.mjs":
/*!*******************************!*\
  !*** ./src/component/top.mjs ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"component_top\": () => (/* binding */ component_top)\n/* harmony export */ });\n/* harmony import */ var _node_modules_m00_src_for_each_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../node_modules/m00/src/for/each.mjs */ \"./node_modules/m00/src/for/each.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_style_display_inline_block_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../node_modules/m00/src/element/style/display/inline/block.mjs */ \"./node_modules/m00/src/element/style/display/inline/block.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_style_width_min_max_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../node_modules/m00/src/element/style/width/min/max.mjs */ \"./node_modules/m00/src/element/style/width/min/max.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../node_modules/m00/src/element.mjs */ \"./node_modules/m00/src/element.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_style_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../node_modules/m00/src/element/style.mjs */ \"./node_modules/m00/src/element/style.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_with_text_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../node_modules/m00/src/element/with/text.mjs */ \"./node_modules/m00/src/element/with/text.mjs\");\n\n\n\n\n\n\nfunction component_top(parent) {\n    let container = (0,_node_modules_m00_src_element_mjs__WEBPACK_IMPORTED_MODULE_3__.element)(parent, 'div');\n    (0,_node_modules_m00_src_element_style_mjs__WEBPACK_IMPORTED_MODULE_4__.element_style)(container, {\n        backgroundColor: 'black',\n        color: 'white'\n    });\n    let left = (0,_node_modules_m00_src_element_with_text_mjs__WEBPACK_IMPORTED_MODULE_5__.element_with_text)(container, 'div', 'left');\n    (0,_node_modules_m00_src_element_style_display_inline_block_mjs__WEBPACK_IMPORTED_MODULE_1__.element_style_display_inline_block)(left);\n    (0,_node_modules_m00_src_element_style_width_min_max_mjs__WEBPACK_IMPORTED_MODULE_2__.element_style_width_min_max)(left, '33.33vw');\n    let middle = (0,_node_modules_m00_src_element_mjs__WEBPACK_IMPORTED_MODULE_3__.element)(container, 'div');\n    (0,_node_modules_m00_src_element_style_display_inline_block_mjs__WEBPACK_IMPORTED_MODULE_1__.element_style_display_inline_block)(middle);\n    (0,_node_modules_m00_src_element_style_width_min_max_mjs__WEBPACK_IMPORTED_MODULE_2__.element_style_width_min_max)(middle, '33.33vw');\n    (0,_node_modules_m00_src_for_each_mjs__WEBPACK_IMPORTED_MODULE_0__.for_each)([\n        'Home',\n        'Services',\n        'Careers',\n        'About',\n        'Contact'\n    ], label => {\n        (0,_node_modules_m00_src_element_with_text_mjs__WEBPACK_IMPORTED_MODULE_5__.element_with_text)(middle, 'span',  ` ${label} `);\n    });\n    let right = (0,_node_modules_m00_src_element_with_text_mjs__WEBPACK_IMPORTED_MODULE_5__.element_with_text)(container, 'div', 'right');\n    (0,_node_modules_m00_src_element_style_display_inline_block_mjs__WEBPACK_IMPORTED_MODULE_1__.element_style_display_inline_block)(right);\n    (0,_node_modules_m00_src_element_style_width_min_max_mjs__WEBPACK_IMPORTED_MODULE_2__.element_style_width_min_max)(right, '33.33vw');\n}\n\n//# sourceURL=webpack:///./src/component/top.mjs?");

/***/ }),

/***/ "./src/main.mjs":
/*!**********************!*\
  !*** ./src/main.mjs ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var m00_src_element_style_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! m00/src/element/style.mjs */ \"./node_modules/m00/src/element/style.mjs\");\n/* harmony import */ var _component_top_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/top.mjs */ \"./src/component/top.mjs\");\n\n\nfunction main() {\n    const parent = document.body;\n    (0,m00_src_element_style_mjs__WEBPACK_IMPORTED_MODULE_0__.element_style)(parent, { margin: 0 })\n    ;(0,_component_top_mjs__WEBPACK_IMPORTED_MODULE_1__.component_top)(parent);\n}\n\n//# sourceURL=webpack:///./src/main.mjs?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;