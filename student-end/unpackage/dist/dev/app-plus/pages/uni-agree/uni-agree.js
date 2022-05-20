"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************************************!*\
  !*** D:/ques/student-end/main.js?{"page":"pages%2Funi-agree%2Funi-agree"} ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/uni-agree/uni-agree.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/uni-agree/uni-agree'\n        _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBc0U7QUFDdEUsUUFBUSxtRkFBRztBQUNYLFFBQVEsbUZBQUc7QUFDWCxRQUFRLG1GQUFHO0FBQ1gsZ0JBQWdCLG1GQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy91bmktYWdyZWUvdW5pLWFncmVlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3VuaS1hZ3JlZS91bmktYWdyZWUnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** D:/ques/student-end/main.js?{"type":"appStyle"} ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************************************************!*\
  !*** D:/ques/student-end/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ques/student-end/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!**********************************************************************!*\
  !*** D:/ques/student-end/pages/uni-agree/uni-agree.nvue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page */ 6);\n/* harmony import */ var _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-agree.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"4040357a\",\n  false,\n  _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/uni-agree/uni-agree.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDeUU7QUFDTDtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHNFQUE4RDtBQUNsSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsc0VBQThEO0FBQ3ZIOztBQUVBOztBQUVBO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktYWdyZWUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01M2NiZjI4OCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1hZ3JlZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjQwNDAzNTdhXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VuaS1hZ3JlZS91bmktYWdyZWUubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!****************************************************************************************************!*\
  !*** D:/ques/student-end/pages/uni-agree/uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ques/student-end/pages/uni-agree/uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", { staticClass: ["page"] }, [
        _c("view", [
          _c(
            "u-text",
            {
              staticClass: ["title"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v("个人信息保护指引")]
          )
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v("1.在浏览使用时，我们会收集、使用设备标识信息用于推荐。")]
          )
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [
              _vm._v(
                "2.我们可能会申请位置权限，用于演示 uni-app 的地图、定位能力。"
              )
            ]
          )
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v("3.你可以查看完整版")]
          )
        ]),
        _c("view", { staticClass: ["text-item", "flex-r"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl", "hl"],
              appendAsTree: true,
              attrs: { append: "tree" },
              on: { click: _vm.openprotocol }
            },
            [_vm._v("《用户协议》")]
          ),
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v("和")]
          ),
          _c(
            "u-text",
            {
              staticClass: ["tl", "hl"],
              appendAsTree: true,
              attrs: { append: "tree" },
              on: { click: _vm.openPrivacyPolicy }
            },
            [_vm._v("《隐私政策》")]
          )
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [
              _vm._v(
                "以便了解我们收集、使用、共享、存储信息的情况，以及对信息的保护措施。"
              )
            ]
          )
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["service"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v("如果你同意请点击下面的按钮以接受我们的服务")]
          )
        ]),
        _c(
          "view",
          { staticClass: ["text-item", "confirm"] },
          [
            _c(
              "button",
              {
                staticClass: ["btn-privacy"],
                attrs: { type: "primary" },
                on: { click: _vm.agree }
              },
              [_vm._v("同意")]
            ),
            _c(
              "button",
              {
                staticClass: ["btn-privacy", "btn-disagree"],
                on: { click: _vm.disagree }
              },
              [_vm._v("暂不使用")]
            )
          ],
          1
        ),
        _c("view", { staticClass: ["exit-area"] })
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!**********************************************************************************************!*\
  !*** D:/ques/student-end/pages/uni-agree/uni-agree.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-agree.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9iLENBQWdCLHlkQUFHLEVBQUMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktYWdyZWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ques/student-end/pages/uni-agree/uni-agree.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uniStarterConfig = _interopRequireDefault(__webpack_require__(/*! @/uni-starter.config.js */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar about = _uniStarterConfig.default.about;var _default = { data: function data() {return {};}, onLoad: function onLoad() {this._canBack = false;}, onBackPress: function onBackPress() {return !this._canBack;}, methods: { openprotocol: function openprotocol(e) {uni.navigateTo({ url: \"/pages/common/webview/webview?url=\" + about.agreements[0].url });}, openPrivacyPolicy: function openPrivacyPolicy(e) {uni.navigateTo({ url: \"/pages/common/webview/webview?url=\" + about.agreements[1].url });}, agree: function agree(e) {var saveStatus = uni.setStorageSync(\"userprotocol\", 1);this._canBack = true;setTimeout(function () {uni.navigateBack({ animationDuration: 0 });}, 100);}, disagree: function disagree() {plus.runtime.quit();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdW5pLWFncmVlL3VuaS1hZ3JlZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQSx1Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDQSxLLEdBQUEseUIsQ0FBQSxLLGdCQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFVBRUEsQ0FKQSxFQUtBLE1BTEEsb0JBS0EsQ0FDQSxzQkFDQSxDQVBBLEVBUUEsV0FSQSx5QkFRQSxDQUNBLHNCQUNBLENBVkEsRUFXQSxXQUNBLFlBREEsd0JBQ0EsQ0FEQSxFQUNBLENBQ0EsaUJBQ0EsbUVBREEsSUFHQSxDQUxBLEVBTUEsaUJBTkEsNkJBTUEsQ0FOQSxFQU1BLENBQ0EsaUJBQ0EsbUVBREEsSUFHQSxDQVZBLEVBV0EsS0FYQSxpQkFXQSxDQVhBLEVBV0EsQ0FDQSx1REFDQSxxQkFDQSx3QkFDQSxtQkFDQSxvQkFEQSxJQUdBLENBSkEsRUFJQSxHQUpBLEVBS0EsQ0FuQkEsRUFvQkEsUUFwQkEsc0JBb0JBLENBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBLEtBckNBLEVBWEEsRSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPHZpZXcgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj7kuKrkurrkv6Hmga/kv53miqTmjIflvJU8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGV4dC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGxcIj4xLuWcqOa1j+iniOS9v+eUqOaXtu+8jOaIkeS7rOS8muaUtumbhuOAgeS9v+eUqOiuvuWkh+agh+ivhuS/oeaBr+eUqOS6juaOqOiNkOOAgjwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0bFwiPjIu5oiR5Lus5Y+v6IO95Lya55Sz6K+35L2N572u5p2D6ZmQ77yM55So5LqO5ryU56S6IHVuaS1hcHAg55qE5Zyw5Zu+44CB5a6a5L2N6IO95Yqb44CCPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInRleHQtaXRlbVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRsXCI+My7kvaDlj6/ku6Xmn6XnnIvlrozmlbTniYg8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGV4dC1pdGVtIGZsZXgtclwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRsIGhsXCIgQGNsaWNrPVwib3BlbnByb3RvY29sXCI+44CK55So5oi35Y2P6K6u44CLPC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRsXCI+IOWSjCA8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGwgaGxcIiBAY2xpY2s9XCJvcGVuUHJpdmFjeVBvbGljeVwiPuOAiumakOengeaUv+etluOAizwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0bFwiPuS7peS+v+S6huino+aIkeS7rOaUtumbhuOAgeS9v+eUqOOAgeWFseS6q+OAgeWtmOWCqOS/oeaBr+eahOaDheWGte+8jOS7peWPiuWvueS/oeaBr+eahOS/neaKpOaOquaWveOAgjwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzZXJ2aWNlXCI+5aaC5p6c5L2g5ZCM5oSP6K+354K55Ye75LiL6Z2i55qE5oyJ6ZKu5Lul5o6l5Y+X5oiR5Lus55qE5pyN5YqhPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInRleHQtaXRlbSBjb25maXJtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcHJpdmFjeVwiIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiYWdyZWVcIj7lkIzmhI88L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1wcml2YWN5IGJ0bi1kaXNhZ3JlZVwiIEBjbGljaz1cImRpc2FncmVlXCI+5pqC5LiN5L2/55SoPC9idXR0b24+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZXhpdC1hcmVhXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBjb25maWcgZnJvbSAnQC91bmktc3RhcnRlci5jb25maWcuanMnO1xuY29uc3QgeyBhYm91dCB9ID0gY29uZmlnXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5CYWNrID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkJhY2tQcmVzcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9jYW5CYWNrO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvcGVucHJvdG9jb2woZSkge1xyXG4gICAgICAgICAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvY29tbW9uL3dlYnZpZXcvd2Vidmlldz91cmw9XCIrYWJvdXQuYWdyZWVtZW50c1swXS51cmxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblx0XHRcdG9wZW5Qcml2YWN5UG9saWN5KGUpIHtcclxuXHRcdFx0ICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0ICAgICAgICB1cmw6IFwiL3BhZ2VzL2NvbW1vbi93ZWJ2aWV3L3dlYnZpZXc/dXJsPVwiK2Fib3V0LmFncmVlbWVudHNbMV0udXJsXHJcblx0XHRcdCAgICB9KVxyXG5cdFx0XHR9LFxyXG4gICAgICAgICAgICBhZ3JlZShlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2F2ZVN0YXR1cyA9IHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJwcm90b2NvbFwiLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbkJhY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pLm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc2FncmVlKCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xuXHRcdFx0XHRwbHVzLnJ1bnRpbWUucXVpdCgpO1xuXHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0Ly8gI2lmZGVmIEg1XG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICfnoa7lrprpgIDlh7rmnKzlupTnlKjvvJ8nLFxuXHRcdFx0XHRcdGNhbmNlbFRleHQ6XCLpgIDlh7pcIixcblx0XHRcdFx0XHRjb25maXJtVGV4dDpcIuWPlua2iFwiLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZighZS5jb25maXJtKXtcblx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWY9XCJhYm91dDpibGFua1wiO1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cuY2xvc2UoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyAjZW5kaWZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAucGFnZSB7XHJcbiAgICAgICAgcGFkZGluZzogODBweCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50bCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5obCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDdBRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb25maXJtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaXZhY3kge1xyXG4gICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWRpc2FncmVlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*************************************************!*\
  !*** D:/ques/student-end/uni-starter.config.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //这是应用的配置页面，App.vue挂载到getApp().globalData.config\nvar _default = {\n  \"h5\": {\n    \"url\": \"https://uni-starter.dcloud.net.cn\" //\t前端网页托管的域名\t\n    // 在h5端全局悬浮引导用户下载app的功能 更多自定义要求在/common/openApp.js中修改\t\n    // \"openApp\": { //如不需要本功能直接移除本节点即可\t\n    // \t//点击悬浮下载栏后打开的网页链接\n    // \t\"openUrl\": '/#/pages/ucenter/invite/invite',\n    // \t//左侧显示的应用名称\t\n    // \t\"appname\": 'uni-starter',\n    // \t//应用的图标\t\n    // \t\"logo\": './static/logo.png',\n    // }\n  },\n  \"mp\": {\n    \"weixin\": {\n      //微信小程序原始id，微信小程序分享时\n      \"id\": \"gh_33446d7f7a26\" } },\n\n\n  \"router\": {\n    /*\n              \t名词解释：“强制登录页”\n              \t\t在打开定义的需强制登录的页面之前会自动检查（前端校验）uni_id_token的值是否有效,\n              \t\t如果无效会自动跳转到登录页面\n              \t两种模式：\n              \t\t1.needLogin：黑名单模式。枚举游客不可访问的页面。\n              \t\t2.visitor：白名单模式。枚举游客可访问的页面。\n              \t* 注意：黑名单与白名单模式二选一\n              */\n    // \"needLogin\" : [\n    //  \t{pattern:/^\\/pages\\/list.*/},\t//支持正则表达式\n    // \t\t\"/uni_modules/uni-news-favorite/pages/uni-news-favorite/list\",\n    // \t\t\"/uni_modules/uni-feedback/pages/uni-feedback/add\"\n    // ],\n    \"visitor\": [\n    \"/\", //注意入口页必须直接写 \"/\"\n    { \"pattern\": /^\\/pages\\/list.*/ }, //支持正则表达式\n    { \"pattern\": /^\\/pages\\/ucenter\\/login-page.*/ },\n    \"/pages/common/webview/webview\",\n    \"/pages/grid/grid\",\n    \"/pages/ucenter/ucenter\",\n    \"/pages/ucenter/about/about\",\n    \"/pages/ucenter/settings/settings\"],\n\n    /*\n                                         login:配置登录类型与优先级\n                                         \t未列举到的，或设备环境不支持的选项，将被隐藏。如果你需要在不同平台有不同的配置，直接用条件编译即可\n                                         \t根据数组的第0项，决定登录方式的第一优先级。\n                                         */\n    \"login\": [\"weixin\", \"univerify\", \"username\", \"smsCode\", \"apple\"] },\n\n  //关于应用\n  \"about\": {\n    //应用名称\n    \"appName\": \"uni-starter\",\n    //应用logo\n    \"logo\": \"/static/logo.png\",\n    //公司名称\n    \"company\": \"北京xx网络技术有限公司\",\n    //口号\n    \"slogan\": \"云端一体应用快速开发模版\",\n    //政策协议\n    \"agreements\": [{\n      \"title\": \"用户服务协议\", //如果开启了多语言国际化，本配置将失效。请在 lang/en.js 和 lang/zh-Hans.js中配置\n      \"url\": \"请填写用户服务协议链接\" //对应的网络链接\n    },\n    {\n      \"title\": \"隐私政策\", //如果开启了多语言国际化，本配置将失效。请在 lang/en.js 和 lang/zh-Hans.js中配置\n      \"url\": \"请填写隐私政策链接\" //对应的网络链接\n    }],\n\n    //应用的链接，用于分享到第三方平台和生成关于我们页的二维码\n    \"download\": \"\",\n    //version\n    \"version\": \"1.0.0\" //用于非app端显示，app端自动获取\n  },\n  \"download\": { //用于生成二合一下载页面\n    \"ios\": \"https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8\",\n    \"android\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-97fca9f2-41f6-449f-a35e-3f135d4c3875/6d754387-a6c3-48ed-8ad2-e8f39b40fc01.apk\" },\n\n  //用于打开应用市场评分界面\n  \"marketId\": {\n    \"ios\": \"id1417078253\",\n    \"android\": \"123456\" },\n\n  //配置多语言国际化。i18n为英文单词 internationalization的首末字符i和n，18为中间的字符数 是“国际化”的简称\n  \"i18n\": {\n    \"enable\": false //默认关闭，国际化。如果你想使用国际化相关功能，请改为true\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pLXN0YXJ0ZXIuY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3RkFBQTtlQUNlO0FBQ2QsUUFBTTtBQUNMLFdBQU8sbUNBREYsQ0FDdUM7QUFDM0M7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkssR0FEUTtBQWFkLFFBQU07QUFDTCxjQUFVO0FBQ1Q7QUFDQSxZQUFNLGlCQUZHLEVBREwsRUFiUTs7O0FBbUJkLFlBQVU7QUFDVDs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQVk7QUFDWCxPQURXLEVBQ1A7QUFDSixNQUFDLFdBQVUsa0JBQVgsRUFGVyxFQUVxQjtBQUNoQyxNQUFDLFdBQVUsaUNBQVgsRUFIVztBQUlYLG1DQUpXO0FBS1gsc0JBTFc7QUFNWCw0QkFOVztBQU9YLGdDQVBXO0FBUVgsc0NBUlcsQ0FmSDs7QUF5QlQ7Ozs7O0FBS0EsYUFBUyxDQUFDLFFBQUQsRUFBVSxXQUFWLEVBQXNCLFVBQXRCLEVBQWtDLFNBQWxDLEVBQTZDLE9BQTdDLENBOUJBLEVBbkJJOztBQW1EZDtBQUNBLFdBQVM7QUFDUjtBQUNBLGVBQVcsYUFGSDtBQUdSO0FBQ0EsWUFBUSxrQkFKQTtBQUtSO0FBQ0EsZUFBVyxjQU5IO0FBT1I7QUFDQSxjQUFVLGNBUkY7QUFTUjtBQUNBLGtCQUFjLENBQUM7QUFDYixlQUFTLFFBREksRUFDTTtBQUNuQixhQUFPLGFBRk0sQ0FFUTtBQUZSLEtBQUQ7QUFJYjtBQUNDLGVBQVMsTUFEVixFQUNrQjtBQUNqQixhQUFPLFdBRlIsQ0FFb0I7QUFGcEIsS0FKYSxDQVZOOztBQW1CUjtBQUNBLGdCQUFZLEVBcEJKO0FBcUJSO0FBQ0EsZUFBVSxPQXRCRixDQXNCVTtBQXRCVixHQXBESztBQTRFZCxjQUFXLEVBQUU7QUFDWixXQUFNLGlFQURJO0FBRVYsZUFBVSx3SEFGQSxFQTVFRzs7QUFnRmQ7QUFDQSxjQUFXO0FBQ1YsV0FBTSxjQURJO0FBRVYsZUFBVSxRQUZBLEVBakZHOztBQXFGZDtBQUNBLFVBQU87QUFDTixjQUFTLEtBREgsQ0FDUztBQURULEdBdEZPLEUiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+i/meaYr+W6lOeUqOeahOmFjee9rumhtemdou+8jEFwcC52dWXmjILovb3liLBnZXRBcHAoKS5nbG9iYWxEYXRhLmNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQge1xuXHRcImg1XCI6IHtcblx0XHRcInVybFwiOiBcImh0dHBzOi8vdW5pLXN0YXJ0ZXIuZGNsb3VkLm5ldC5jblwiLCAvL1x05YmN56uv572R6aG15omY566h55qE5Z+f5ZCNXHRcblx0XHQgLy8g5ZyoaDXnq6/lhajlsYDmgqzmta7lvJXlr7znlKjmiLfkuIvovb1hcHDnmoTlip/og70g5pu05aSa6Ieq5a6a5LmJ6KaB5rGC5ZyoL2NvbW1vbi9vcGVuQXBwLmpz5Lit5L+u5pS5XHRcblx0XHQvLyBcIm9wZW5BcHBcIjogeyAvL+WmguS4jemcgOimgeacrOWKn+iDveebtOaOpeenu+mZpOacrOiKgueCueWNs+WPr1x0XG5cdFx0Ly8gXHQvL+eCueWHu+aCrOa1ruS4i+i9veagj+WQjuaJk+W8gOeahOe9kemhtemTvuaOpVxuXHRcdC8vIFx0XCJvcGVuVXJsXCI6ICcvIy9wYWdlcy91Y2VudGVyL2ludml0ZS9pbnZpdGUnLFxuXHRcdC8vIFx0Ly/lt6bkvqfmmL7npLrnmoTlupTnlKjlkI3np7BcdFxuXHRcdC8vIFx0XCJhcHBuYW1lXCI6ICd1bmktc3RhcnRlcicsXG5cdFx0Ly8gXHQvL+W6lOeUqOeahOWbvuagh1x0XG5cdFx0Ly8gXHRcImxvZ29cIjogJy4vc3RhdGljL2xvZ28ucG5nJyxcblx0XHQvLyB9XG5cdH0sXG5cdFwibXBcIjoge1xuXHRcdFwid2VpeGluXCI6IHtcblx0XHRcdC8v5b6u5L+h5bCP56iL5bqP5Y6f5aeLaWTvvIzlvq7kv6HlsI/nqIvluo/liIbkuqvml7Zcblx0XHRcdFwiaWRcIjogXCJnaF8zMzQ0NmQ3ZjdhMjZcIlxuXHRcdH1cblx0fSxcblx0XCJyb3V0ZXJcIjoge1xuXHRcdC8qXG5cdFx0XHTlkI3or43op6Pph4rvvJrigJzlvLrliLbnmbvlvZXpobXigJ1cblx0XHRcdFx05Zyo5omT5byA5a6a5LmJ55qE6ZyA5by65Yi255m75b2V55qE6aG16Z2i5LmL5YmN5Lya6Ieq5Yqo5qOA5p+l77yI5YmN56uv5qCh6aqM77yJdW5pX2lkX3Rva2Vu55qE5YC85piv5ZCm5pyJ5pWILFxuXHRcdFx0XHTlpoLmnpzml6DmlYjkvJroh6rliqjot7PovazliLDnmbvlvZXpobXpnaJcblx0XHRcdOS4pOenjeaooeW8j++8mlxuXHRcdFx0XHQxLm5lZWRMb2dpbu+8mum7keWQjeWNleaooeW8j+OAguaemuS4vua4uOWuouS4jeWPr+iuv+mXrueahOmhtemdouOAglxuXHRcdFx0XHQyLnZpc2l0b3LvvJrnmb3lkI3ljZXmqKHlvI/jgILmnprkuL7muLjlrqLlj6/orr/pl67nmoTpobXpnaLjgIJcblx0XHRcdCog5rOo5oSP77ya6buR5ZCN5Y2V5LiO55m95ZCN5Y2V5qih5byP5LqM6YCJ5LiAXG5cdFx0Ki9cblx0XHQvLyBcIm5lZWRMb2dpblwiIDogW1xuXHRcdC8vICBcdHtwYXR0ZXJuOi9eXFwvcGFnZXNcXC9saXN0LiovfSxcdC8v5pSv5oyB5q2j5YiZ6KGo6L6+5byPXG5cdFx0Ly8gXHRcdFwiL3VuaV9tb2R1bGVzL3VuaS1uZXdzLWZhdm9yaXRlL3BhZ2VzL3VuaS1uZXdzLWZhdm9yaXRlL2xpc3RcIixcblx0XHQvLyBcdFx0XCIvdW5pX21vZHVsZXMvdW5pLWZlZWRiYWNrL3BhZ2VzL3VuaS1mZWVkYmFjay9hZGRcIlxuXHRcdC8vIF0sXG5cdFx0XCJ2aXNpdG9yXCIgOiBbXG5cdFx0XHRcIi9cIiwvL+azqOaEj+WFpeWPo+mhteW/hemhu+ebtOaOpeWGmSBcIi9cIlxuXHRcdFx0e1wicGF0dGVyblwiOi9eXFwvcGFnZXNcXC9saXN0LiovfSxcdC8v5pSv5oyB5q2j5YiZ6KGo6L6+5byPXG5cdFx0XHR7XCJwYXR0ZXJuXCI6L15cXC9wYWdlc1xcL3VjZW50ZXJcXC9sb2dpbi1wYWdlLiovfSxcblx0XHRcdFwiL3BhZ2VzL2NvbW1vbi93ZWJ2aWV3L3dlYnZpZXdcIixcblx0XHRcdFwiL3BhZ2VzL2dyaWQvZ3JpZFwiLFxuXHRcdFx0XCIvcGFnZXMvdWNlbnRlci91Y2VudGVyXCIsXG5cdFx0XHRcIi9wYWdlcy91Y2VudGVyL2Fib3V0L2Fib3V0XCIsXG5cdFx0XHRcIi9wYWdlcy91Y2VudGVyL3NldHRpbmdzL3NldHRpbmdzXCJcblx0XHRdLFxuXHRcdC8qXG5cdFx0bG9naW466YWN572u55m75b2V57G75Z6L5LiO5LyY5YWI57qnXG5cdFx0XHTmnKrliJfkuL7liLDnmoTvvIzmiJborr7lpIfnjq/looPkuI3mlK/mjIHnmoTpgInpobnvvIzlsIbooqvpmpDol4/jgILlpoLmnpzkvaDpnIDopoHlnKjkuI3lkIzlubPlj7DmnInkuI3lkIznmoTphY3nva7vvIznm7TmjqXnlKjmnaHku7bnvJbor5HljbPlj69cblx0XHRcdOagueaNruaVsOe7hOeahOesrDDpobnvvIzlhrPlrprnmbvlvZXmlrnlvI/nmoTnrKzkuIDkvJjlhYjnuqfjgIJcblx0XHQqL1xuXHRcdFwibG9naW5cIjogW1wid2VpeGluXCIsXCJ1bml2ZXJpZnlcIixcInVzZXJuYW1lXCIsIFwic21zQ29kZVwiLCBcImFwcGxlXCJdXG5cdH0sXG5cdC8v5YWz5LqO5bqU55SoXG5cdFwiYWJvdXRcIjoge1xuXHRcdC8v5bqU55So5ZCN56ewXG5cdFx0XCJhcHBOYW1lXCI6IFwidW5pLXN0YXJ0ZXJcIixcblx0XHQvL+W6lOeUqGxvZ29cblx0XHRcImxvZ29cIjogXCIvc3RhdGljL2xvZ28ucG5nXCIsXG5cdFx0Ly/lhazlj7jlkI3np7Bcblx0XHRcImNvbXBhbnlcIjogXCLljJfkuqx4eOe9kee7nOaKgOacr+aciemZkOWFrOWPuFwiLFxuXHRcdC8v5Y+j5Y+3XG5cdFx0XCJzbG9nYW5cIjogXCLkupHnq6/kuIDkvZPlupTnlKjlv6vpgJ/lvIDlj5HmqKHniYhcIixcblx0XHQvL+aUv+etluWNj+iurlxuXHRcdFwiYWdyZWVtZW50c1wiOiBbe1xuXHRcdFx0XHRcInRpdGxlXCI6IFwi55So5oi35pyN5Yqh5Y2P6K6uXCIsIC8v5aaC5p6c5byA5ZCv5LqG5aSa6K+t6KiA5Zu96ZmF5YyW77yM5pys6YWN572u5bCG5aSx5pWI44CC6K+35ZyoIGxhbmcvZW4uanMg5ZKMIGxhbmcvemgtSGFucy5qc+S4remFjee9rlxuXHRcdFx0XHRcInVybFwiOiBcIuivt+Whq+WGmeeUqOaIt+acjeWKoeWNj+iurumTvuaOpVwiIC8v5a+55bqU55qE572R57uc6ZO+5o6lXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInRpdGxlXCI6IFwi6ZqQ56eB5pS/562WXCIsIC8v5aaC5p6c5byA5ZCv5LqG5aSa6K+t6KiA5Zu96ZmF5YyW77yM5pys6YWN572u5bCG5aSx5pWI44CC6K+35ZyoIGxhbmcvZW4uanMg5ZKMIGxhbmcvemgtSGFucy5qc+S4remFjee9rlxuXHRcdFx0XHRcInVybFwiOiBcIuivt+Whq+WGmemakOengeaUv+etlumTvuaOpVwiIC8v5a+55bqU55qE572R57uc6ZO+5o6lXG5cdFx0XHR9XG5cdFx0XSxcblx0XHQvL+W6lOeUqOeahOmTvuaOpe+8jOeUqOS6juWIhuS6q+WIsOesrOS4ieaWueW5s+WPsOWSjOeUn+aIkOWFs+S6juaIkeS7rOmhteeahOS6jOe7tOeggVxuXHRcdFwiZG93bmxvYWRcIjogXCJcIixcblx0XHQvL3ZlcnNpb25cblx0XHRcInZlcnNpb25cIjpcIjEuMC4wXCIgLy/nlKjkuo7pnZ5hcHDnq6/mmL7npLrvvIxhcHDnq6/oh6rliqjojrflj5Zcblx0fSxcblx0XCJkb3dubG9hZFwiOnsgLy/nlKjkuo7nlJ/miJDkuozlkIjkuIDkuIvovb3pobXpnaJcblx0XHRcImlvc1wiOlwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2NuL2FwcC9oZWxsby11bmktYXBwL2lkMTQxNzA3ODI1Mz9tdD04XCIsXG5cdFx0XCJhbmRyb2lkXCI6XCJodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLTk3ZmNhOWYyLTQxZjYtNDQ5Zi1hMzVlLTNmMTM1ZDRjMzg3NS82ZDc1NDM4Ny1hNmMzLTQ4ZWQtOGFkMi1lOGYzOWI0MGZjMDEuYXBrXCJcblx0fSxcblx0Ly/nlKjkuo7miZPlvIDlupTnlKjluILlnLror4TliIbnlYzpnaJcblx0XCJtYXJrZXRJZFwiOntcblx0XHRcImlvc1wiOlwiaWQxNDE3MDc4MjUzXCIsXG5cdFx0XCJhbmRyb2lkXCI6XCIxMjM0NTZcIlxuXHR9LFxuXHQvL+mFjee9ruWkmuivreiogOWbvemZheWMluOAgmkxOG7kuLroi7HmlofljZXor40gaW50ZXJuYXRpb25hbGl6YXRpb27nmoTpppbmnKvlrZfnrKZp5ZKMbu+8jDE45Li65Lit6Ze055qE5a2X56ym5pWwIOaYr+KAnOWbvemZheWMluKAneeahOeugOensFxuXHRcImkxOG5cIjp7XG5cdFx0XCJlbmFibGVcIjpmYWxzZSAvL+m7mOiupOWFs+mXre+8jOWbvemZheWMluOAguWmguaenOS9oOaDs+S9v+eUqOWbvemZheWMluebuOWFs+WKn+iDve+8jOivt+aUueS4unRydWVcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!******************************************************************************************************!*\
  !*** D:/ques/student-end/pages/uni-agree/uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ques/student-end/pages/uni-agree/uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "paddingTop": [
        "80",
        0,
        0,
        0
      ],
      "paddingRight": [
        "30",
        0,
        0,
        0
      ],
      "paddingBottom": [
        "80",
        0,
        0,
        0
      ],
      "paddingLeft": [
        "30",
        0,
        0,
        0
      ]
    }
  },
  ".title": {
    "": {
      "fontSize": [
        "18",
        0,
        0,
        1
      ],
      "lineHeight": [
        "30",
        0,
        0,
        1
      ],
      "marginBottom": [
        "20",
        0,
        0,
        1
      ]
    }
  },
  ".flex-r": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        2
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        2
      ]
    }
  },
  ".text-item": {
    "": {
      "marginBottom": [
        "5",
        0,
        0,
        3
      ]
    }
  },
  ".tl": {
    "": {
      "fontSize": [
        "14",
        0,
        0,
        4
      ],
      "lineHeight": [
        "20",
        0,
        0,
        4
      ]
    }
  },
  ".hl": {
    "": {
      "color": [
        "#007AFF",
        0,
        0,
        5
      ]
    }
  },
  ".service": {
    "": {
      "fontSize": [
        "16",
        0,
        0,
        6
      ],
      "lineHeight": [
        "20",
        0,
        0,
        6
      ],
      "marginTop": [
        "20",
        0,
        0,
        6
      ]
    }
  },
  ".confirm": {
    "": {
      "marginTop": [
        "50",
        0,
        0,
        7
      ],
      "flexDirection": [
        "row",
        0,
        0,
        7
      ]
    }
  },
  ".btn-privacy": {
    "": {
      "flex": [
        1,
        0,
        0,
        8
      ]
    }
  },
  ".btn-disagree": {
    "": {
      "marginLeft": [
        "20",
        0,
        0,
        9
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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


/***/ })
/******/ ]);