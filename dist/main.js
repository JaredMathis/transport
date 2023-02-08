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

/***/ "./node_modules/m00/src/arguments/assert.mjs":
/*!***************************************************!*\
  !*** ./node_modules/m00/src/arguments/assert.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arguments_assert\": () => (/* binding */ arguments_assert)\n/* harmony export */ });\n/* harmony import */ var _list_slice_end_to_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../list/slice/end/to.mjs */ \"./node_modules/m00/src/list/slice/end/to.mjs\");\n/* harmony import */ var _undefined_is_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../undefined/is.mjs */ \"./node_modules/m00/src/undefined/is.mjs\");\n/* harmony import */ var _assert_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assert.mjs */ \"./node_modules/m00/src/assert.mjs\");\n/* harmony import */ var _for_each_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../for/each.mjs */ \"./node_modules/m00/src/for/each.mjs\");\n\n\n\n\nfunction arguments_assert(_arguments) {\n    (0,_assert_mjs__WEBPACK_IMPORTED_MODULE_2__.assert)(!(0,_undefined_is_mjs__WEBPACK_IMPORTED_MODULE_1__.undefined_is)(_arguments));\n    let types = Array.from(arguments).slice(1);\n    (0,_assert_mjs__WEBPACK_IMPORTED_MODULE_2__.assert)(_arguments.length === types.length);\n    (0,_for_each_mjs__WEBPACK_IMPORTED_MODULE_3__.for_each)(types, (type, index) => {\n        let argument = _arguments[index];\n        (0,_assert_mjs__WEBPACK_IMPORTED_MODULE_2__.assert)(type(argument));\n    });\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/arguments/assert.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/assert.mjs":
/*!*****************************************!*\
  !*** ./node_modules/m00/src/assert.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"assert\": () => (/* binding */ assert)\n/* harmony export */ });\nfunction assert(condition) {\n    if (!condition) {\n        throw new Error(``);\n    }\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/assert.mjs?");

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

/***/ "./node_modules/m00/src/defaults/set.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/defaults/set.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaults_set\": () => (/* binding */ defaults_set)\n/* harmony export */ });\n/* harmony import */ var _data_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.mjs */ \"./node_modules/m00/src/defaults/data.mjs\");\n/* harmony import */ var _property_set_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../property/set.mjs */ \"./node_modules/m00/src/property/set.mjs\");\n\n\nfunction defaults_set(name, default_value) {\n    (0,_property_set_mjs__WEBPACK_IMPORTED_MODULE_1__.property_set)((0,_data_mjs__WEBPACK_IMPORTED_MODULE_0__.defaults_data)(), name, default_value);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/defaults/set.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/defined/is.mjs":
/*!*********************************************!*\
  !*** ./node_modules/m00/src/defined/is.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defined_is\": () => (/* binding */ defined_is)\n/* harmony export */ });\n/* harmony import */ var _undefined_is_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../undefined/is.mjs */ \"./node_modules/m00/src/undefined/is.mjs\");\n\nfunction defined_is(v) {\n    return !(0,_undefined_is_mjs__WEBPACK_IMPORTED_MODULE_0__.undefined_is)(v);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/defined/is.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element.mjs":
/*!******************************************!*\
  !*** ./node_modules/m00/src/element.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element\": () => (/* binding */ element)\n/* harmony export */ });\n/* harmony import */ var _arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arguments/assert.mjs */ \"./node_modules/m00/src/arguments/assert.mjs\");\n/* harmony import */ var _defined_is_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defined/is.mjs */ \"./node_modules/m00/src/defined/is.mjs\");\n/* harmony import */ var _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string/is.mjs */ \"./node_modules/m00/src/string/is.mjs\");\n/* harmony import */ var _element_child_add_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element/child/add.mjs */ \"./node_modules/m00/src/element/child/add.mjs\");\n/* harmony import */ var _element_style_default_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element/style/default.mjs */ \"./node_modules/m00/src/element/style/default.mjs\");\n\n\n\n\n\nfunction element(parent, tag_name) {\n    (0,_arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__.arguments_assert)(arguments, _defined_is_mjs__WEBPACK_IMPORTED_MODULE_1__.defined_is, _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__.string_is);\n    let e = document.createElement(tag_name);\n    (0,_element_style_default_mjs__WEBPACK_IMPORTED_MODULE_4__.element_style_default)(e, element);\n    (0,_element_child_add_mjs__WEBPACK_IMPORTED_MODULE_3__.element_child_add)(parent, e);\n    return e;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/attribute/merge.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/m00/src/element/attribute/merge.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_attribute_merge\": () => (/* binding */ element_attribute_merge)\n/* harmony export */ });\n/* harmony import */ var _for_each_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../for/each.mjs */ \"./node_modules/m00/src/for/each.mjs\");\n/* harmony import */ var _set_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set.mjs */ \"./node_modules/m00/src/element/attribute/set.mjs\");\n\n\nfunction element_attribute_merge(e, attributes) {\n    (0,_for_each_mjs__WEBPACK_IMPORTED_MODULE_0__.for_each)(attributes, (attribute_value, attribute_key) => {\n        (0,_set_mjs__WEBPACK_IMPORTED_MODULE_1__.element_attribute_set)(e, attribute_key, attribute_value);\n    });\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/attribute/merge.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/attribute/set.mjs":
/*!********************************************************!*\
  !*** ./node_modules/m00/src/element/attribute/set.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_attribute_set\": () => (/* binding */ element_attribute_set)\n/* harmony export */ });\n/* harmony import */ var _arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../arguments/assert.mjs */ \"./node_modules/m00/src/arguments/assert.mjs\");\n/* harmony import */ var _defined_is_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../defined/is.mjs */ \"./node_modules/m00/src/defined/is.mjs\");\n/* harmony import */ var _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../string/is.mjs */ \"./node_modules/m00/src/string/is.mjs\");\n\n\n\nfunction element_attribute_set(e, attribute, value) {\n    (0,_arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__.arguments_assert)(arguments, _defined_is_mjs__WEBPACK_IMPORTED_MODULE_1__.defined_is, _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__.string_is, _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__.string_is);\n    e.setAttribute(attribute, value);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/attribute/set.mjs?");

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

/***/ "./node_modules/m00/src/element/style/margin/vertical.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/m00/src/element/style/margin/vertical.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_style_margin_vertical\": () => (/* binding */ element_style_margin_vertical)\n/* harmony export */ });\n/* harmony import */ var _style_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style.mjs */ \"./node_modules/m00/src/element/style.mjs\");\n\n\nfunction element_style_margin_vertical(e, value) {\n    (0,_style_mjs__WEBPACK_IMPORTED_MODULE_0__.element_style)(e, {\n        marginTop: value,\n        marginBottom: value,\n    })\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/style/margin/vertical.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/style/margin/vertical/auto.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/m00/src/element/style/margin/vertical/auto.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_style_margin_vertical_auto\": () => (/* binding */ element_style_margin_vertical_auto)\n/* harmony export */ });\n/* harmony import */ var _vertical_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../vertical.mjs */ \"./node_modules/m00/src/element/style/margin/vertical.mjs\");\n\nfunction element_style_margin_vertical_auto(e) {\n    (0,_vertical_mjs__WEBPACK_IMPORTED_MODULE_0__.element_style_margin_vertical)(e, 'auto');\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/style/margin/vertical/auto.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/style/width/min/max.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/m00/src/element/style/width/min/max.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_style_width_min_max\": () => (/* binding */ element_style_width_min_max)\n/* harmony export */ });\n/* harmony import */ var _arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../arguments/assert.mjs */ \"./node_modules/m00/src/arguments/assert.mjs\");\n/* harmony import */ var _defined_is_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../defined/is.mjs */ \"./node_modules/m00/src/defined/is.mjs\");\n/* harmony import */ var _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../string/is.mjs */ \"./node_modules/m00/src/string/is.mjs\");\n/* harmony import */ var _style_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../style.mjs */ \"./node_modules/m00/src/element/style.mjs\");\n\n\n\n\nfunction element_style_width_min_max(e, value) {\n    (0,_arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__.arguments_assert)(arguments, _defined_is_mjs__WEBPACK_IMPORTED_MODULE_1__.defined_is, _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__.string_is);\n    (0,_style_mjs__WEBPACK_IMPORTED_MODULE_3__.element_style)(e, {\n        minWidth: value,\n        maxWidth: value\n    });\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/style/width/min/max.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/element/text.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/element/text.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"element_text\": () => (/* binding */ element_text)\n/* harmony export */ });\n/* harmony import */ var _arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../arguments/assert.mjs */ \"./node_modules/m00/src/arguments/assert.mjs\");\n/* harmony import */ var _defined_is_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../defined/is.mjs */ \"./node_modules/m00/src/defined/is.mjs\");\n/* harmony import */ var _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../string/is.mjs */ \"./node_modules/m00/src/string/is.mjs\");\n\n\n\nfunction element_text(e, text) {\n    (0,_arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__.arguments_assert)(arguments, _defined_is_mjs__WEBPACK_IMPORTED_MODULE_1__.defined_is, _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__.string_is);\n    e.innerHTML = text;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/element/text.mjs?");

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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"for_each_key\": () => (/* binding */ for_each_key)\n/* harmony export */ });\nfunction for_each_key(list, lambda) {\n    for (let i in list) {\n        lambda(i);\n    }\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/for/each/key.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/function/is.mjs":
/*!**********************************************!*\
  !*** ./node_modules/m00/src/function/is.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"function_is\": () => (/* binding */ function_is)\n/* harmony export */ });\nfunction function_is(v) {\n    return typeof v === 'function';\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/function/is.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/list/is.mjs":
/*!******************************************!*\
  !*** ./node_modules/m00/src/list/is.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"list_is\": () => (/* binding */ list_is)\n/* harmony export */ });\nfunction list_is(a) {\n    return Array.isArray(a);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/list/is.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/list/slice/end/to.mjs":
/*!****************************************************!*\
  !*** ./node_modules/m00/src/list/slice/end/to.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"list_slice_end_to\": () => (/* binding */ list_slice_end_to)\n/* harmony export */ });\n/* harmony import */ var _arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../arguments/assert.mjs */ \"./node_modules/m00/src/arguments/assert.mjs\");\n/* harmony import */ var _number_negative_not_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../number/negative/not.mjs */ \"./node_modules/m00/src/number/negative/not.mjs\");\n/* harmony import */ var _is_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../is.mjs */ \"./node_modules/m00/src/list/is.mjs\");\n\n\n\nfunction list_slice_end_to(list, index) {\n    (0,_arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_0__.arguments_assert)(arguments, _is_mjs__WEBPACK_IMPORTED_MODULE_2__.list_is, _number_negative_not_mjs__WEBPACK_IMPORTED_MODULE_1__.number_negative_not);\n    return list.slice(index);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/list/slice/end/to.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/merge.mjs":
/*!****************************************!*\
  !*** ./node_modules/m00/src/merge.mjs ***!
  \****************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\jared\\\\transport\\\\node_modules\\\\m00\\\\src\\\\merge.mjs'\");\n\n//# sourceURL=webpack:///./node_modules/m00/src/merge.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/number/at/least.mjs":
/*!**************************************************!*\
  !*** ./node_modules/m00/src/number/at/least.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"number_at_least\": () => (/* binding */ number_at_least)\n/* harmony export */ });\n/* harmony import */ var _is_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../is.mjs */ \"./node_modules/m00/src/number/is.mjs\");\n/* harmony import */ var _arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../arguments/assert.mjs */ \"./node_modules/m00/src/arguments/assert.mjs\");\n\n\nfunction number_at_least(at_least) {\n    (0,_arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_1__.arguments_assert)(arguments, _is_mjs__WEBPACK_IMPORTED_MODULE_0__.number_is);\n    return function number_at_least_inner(n) {\n        return (0,_is_mjs__WEBPACK_IMPORTED_MODULE_0__.number_is)(n) && n >= at_least;\n    };\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/number/at/least.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/number/is.mjs":
/*!********************************************!*\
  !*** ./node_modules/m00/src/number/is.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"number_is\": () => (/* binding */ number_is)\n/* harmony export */ });\nfunction number_is(n) {\n    return typeof n === typeof 1;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/number/is.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/number/negative/not.mjs":
/*!******************************************************!*\
  !*** ./node_modules/m00/src/number/negative/not.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"number_negative_not\": () => (/* binding */ number_negative_not)\n/* harmony export */ });\n/* harmony import */ var _at_least_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../at/least.mjs */ \"./node_modules/m00/src/number/at/least.mjs\");\n\nfunction number_negative_not(n) {\n    return (0,_at_least_mjs__WEBPACK_IMPORTED_MODULE_0__.number_at_least)(0)(n);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/number/negative/not.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/property/has.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/property/has.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"property_has\": () => (/* binding */ property_has)\n/* harmony export */ });\nfunction property_has(object, property) {\n    return object.hasOwnProperty(property);\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/property/has.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/property/set.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/property/set.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"property_set\": () => (/* binding */ property_set)\n/* harmony export */ });\n/* harmony import */ var _has_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has.mjs */ \"./node_modules/m00/src/property/has.mjs\");\n/* harmony import */ var _assert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assert.mjs */ \"./node_modules/m00/src/assert.mjs\");\n\n\nfunction property_set(object, property_name, value) {\n    (0,_assert_mjs__WEBPACK_IMPORTED_MODULE_1__.assert)(!(0,_has_mjs__WEBPACK_IMPORTED_MODULE_0__.property_has)(object, property_name));\n    object[property_name] = value;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/property/set.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/string/is.mjs":
/*!********************************************!*\
  !*** ./node_modules/m00/src/string/is.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"string_is\": () => (/* binding */ string_is)\n/* harmony export */ });\nfunction string_is(s) {\n    return typeof s === typeof '';\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/string/is.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/undefined/is.mjs":
/*!***********************************************!*\
  !*** ./node_modules/m00/src/undefined/is.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"undefined_is\": () => (/* binding */ undefined_is)\n/* harmony export */ });\nfunction undefined_is(a) {\n    return a === undefined;\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/undefined/is.mjs?");

/***/ }),

/***/ "./node_modules/m00/src/window/match/media/on/change.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/m00/src/window/match/media/on/change.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"window_match_media_on_change\": () => (/* binding */ window_match_media_on_change)\n/* harmony export */ });\n/* harmony import */ var _function_is_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../function/is.mjs */ \"./node_modules/m00/src/function/is.mjs\");\n/* harmony import */ var _arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../arguments/assert.mjs */ \"./node_modules/m00/src/arguments/assert.mjs\");\n/* harmony import */ var _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../string/is.mjs */ \"./node_modules/m00/src/string/is.mjs\");\n\n\n\nfunction window_match_media_on_change(media_query, on_change) {\n    (0,_arguments_assert_mjs__WEBPACK_IMPORTED_MODULE_1__.arguments_assert)(arguments, _string_is_mjs__WEBPACK_IMPORTED_MODULE_2__.string_is, _function_is_mjs__WEBPACK_IMPORTED_MODULE_0__.function_is);\n    const mq = window.matchMedia(media_query);\n    mq.addEventListener('change', e => on_change(e.matches));\n    on_change(mq.matches)\n}\n\n//# sourceURL=webpack:///./node_modules/m00/src/window/match/media/on/change.mjs?");

/***/ }),

/***/ "./src/component/top.mjs":
/*!*******************************!*\
  !*** ./src/component/top.mjs ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"component_top\": () => (/* binding */ component_top)\n/* harmony export */ });\n/* harmony import */ var _node_modules_m00_src_window_match_media_on_change_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../node_modules/m00/src/window/match/media/on/change.mjs */ \"./node_modules/m00/src/window/match/media/on/change.mjs\");\n/* harmony import */ var _config_company_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/company.mjs */ \"./src/config/company.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_style_margin_vertical_auto_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../node_modules/m00/src/element/style/margin/vertical/auto.mjs */ \"./node_modules/m00/src/element/style/margin/vertical/auto.mjs\");\n/* harmony import */ var _node_modules_m00_src_for_each_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../node_modules/m00/src/for/each.mjs */ \"./node_modules/m00/src/for/each.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_style_display_inline_block_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../node_modules/m00/src/element/style/display/inline/block.mjs */ \"./node_modules/m00/src/element/style/display/inline/block.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_style_width_min_max_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../node_modules/m00/src/element/style/width/min/max.mjs */ \"./node_modules/m00/src/element/style/width/min/max.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../node_modules/m00/src/element.mjs */ \"./node_modules/m00/src/element.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_style_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../node_modules/m00/src/element/style.mjs */ \"./node_modules/m00/src/element/style.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_with_text_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../node_modules/m00/src/element/with/text.mjs */ \"./node_modules/m00/src/element/with/text.mjs\");\n\n\n\n\n\n\n\n\n\nfunction component_top(parent) {\n    let container = (0,_node_modules_m00_src_element_mjs__WEBPACK_IMPORTED_MODULE_6__.element)(parent, 'div');\n    (0,_node_modules_m00_src_element_style_mjs__WEBPACK_IMPORTED_MODULE_7__.element_style)(container, {\n        backgroundColor: 'black',\n        color: 'white',\n        display: 'flex',\n        'align-items': 'center'\n    });\n    let left = (0,_node_modules_m00_src_element_with_text_mjs__WEBPACK_IMPORTED_MODULE_8__.element_with_text)(container, 'div', (0,_config_company_mjs__WEBPACK_IMPORTED_MODULE_1__.config_company)().name);\n    (0,_node_modules_m00_src_element_style_display_inline_block_mjs__WEBPACK_IMPORTED_MODULE_4__.element_style_display_inline_block)(left);\n    (0,_node_modules_m00_src_element_style_width_min_max_mjs__WEBPACK_IMPORTED_MODULE_5__.element_style_width_min_max)(left, '33.33%');\n    (0,_node_modules_m00_src_element_style_margin_vertical_auto_mjs__WEBPACK_IMPORTED_MODULE_2__.element_style_margin_vertical_auto)(left);\n    let middle = (0,_node_modules_m00_src_element_mjs__WEBPACK_IMPORTED_MODULE_6__.element)(container, 'div');\n    (0,_node_modules_m00_src_element_style_mjs__WEBPACK_IMPORTED_MODULE_7__.element_style)(container, { textAlign: 'center' });\n    (0,_node_modules_m00_src_element_style_display_inline_block_mjs__WEBPACK_IMPORTED_MODULE_4__.element_style_display_inline_block)(middle);\n    (0,_node_modules_m00_src_element_style_width_min_max_mjs__WEBPACK_IMPORTED_MODULE_5__.element_style_width_min_max)(middle, '33.33%');\n    const links = [\n        'Home',\n        'Services',\n        'Careers',\n        'About',\n        'Contact'\n    ];\n    (0,_node_modules_m00_src_for_each_mjs__WEBPACK_IMPORTED_MODULE_3__.for_each)(links, label => {\n        let link = (0,_node_modules_m00_src_element_with_text_mjs__WEBPACK_IMPORTED_MODULE_8__.element_with_text)(middle, 'div', ` ${ label } `);\n        (0,_node_modules_m00_src_element_style_display_inline_block_mjs__WEBPACK_IMPORTED_MODULE_4__.element_style_display_inline_block)(link);\n        (0,_node_modules_m00_src_element_style_mjs__WEBPACK_IMPORTED_MODULE_7__.element_style)(link, { padding: '0.8vh' });\n    });\n    (0,_node_modules_m00_src_element_style_margin_vertical_auto_mjs__WEBPACK_IMPORTED_MODULE_2__.element_style_margin_vertical_auto)(middle);\n    let right = (0,_node_modules_m00_src_element_with_text_mjs__WEBPACK_IMPORTED_MODULE_8__.element_with_text)(container, 'div', (0,_config_company_mjs__WEBPACK_IMPORTED_MODULE_1__.config_company)().phone);\n    (0,_node_modules_m00_src_element_style_display_inline_block_mjs__WEBPACK_IMPORTED_MODULE_4__.element_style_display_inline_block)(right);\n    (0,_node_modules_m00_src_element_style_width_min_max_mjs__WEBPACK_IMPORTED_MODULE_5__.element_style_width_min_max)(right, '33.33%');\n    (0,_node_modules_m00_src_element_style_margin_vertical_auto_mjs__WEBPACK_IMPORTED_MODULE_2__.element_style_margin_vertical_auto)(right);\n    (0,_node_modules_m00_src_window_match_media_on_change_mjs__WEBPACK_IMPORTED_MODULE_0__.window_match_media_on_change)(`(max-width: 600px)`, matches => {\n        if (matches) {\n            alert('here');\n        }\n    });\n}\n\n//# sourceURL=webpack:///./src/component/top.mjs?");

/***/ }),

/***/ "./src/config/company.mjs":
/*!********************************!*\
  !*** ./src/config/company.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config_company\": () => (/* binding */ config_company)\n/* harmony export */ });\nfunction config_company() {\n    return {\n        name: 'My Company Name',\n        phone: '(800) 123-4567',\n    }\n}\n\n//# sourceURL=webpack:///./src/config/company.mjs?");

/***/ }),

/***/ "./src/main.mjs":
/*!**********************!*\
  !*** ./src/main.mjs ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _node_modules_m00_src_element_attribute_merge_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../node_modules/m00/src/element/attribute/merge.mjs */ \"./node_modules/m00/src/element/attribute/merge.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_style_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../node_modules/m00/src/element/style.mjs */ \"./node_modules/m00/src/element/style.mjs\");\n/* harmony import */ var _node_modules_m00_src_defaults_set_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../node_modules/m00/src/defaults/set.mjs */ \"./node_modules/m00/src/defaults/set.mjs\");\n/* harmony import */ var _node_modules_m00_src_element_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../node_modules/m00/src/element.mjs */ \"./node_modules/m00/src/element.mjs\");\n/* harmony import */ var _component_top_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/top.mjs */ \"./src/component/top.mjs\");\n\n\n\n\n\nfunction main() {\n    (0,_node_modules_m00_src_defaults_set_mjs__WEBPACK_IMPORTED_MODULE_2__.defaults_set)(_node_modules_m00_src_element_mjs__WEBPACK_IMPORTED_MODULE_3__.element.name, {\n        fontFamily: 'Sans-Serif',\n        fontSize: '2.8vh'\n    });\n    const parent = document.body;\n    (0,_node_modules_m00_src_element_style_mjs__WEBPACK_IMPORTED_MODULE_1__.element_style)(parent, { margin: 0 });\n    (0,_component_top_mjs__WEBPACK_IMPORTED_MODULE_4__.component_top)(parent);\n    let s = (0,_node_modules_m00_src_element_mjs__WEBPACK_IMPORTED_MODULE_3__.element)(parent, 'script');\n    (0,_node_modules_m00_src_element_attribute_merge_mjs__WEBPACK_IMPORTED_MODULE_0__.element_attribute_merge)(s, {\n        src: 'https://kit.fontawesome.com/9fc689c523.js',\n        crossorigin: 'anonymous'\n    });\n}\n\n//# sourceURL=webpack:///./src/main.mjs?");

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