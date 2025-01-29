"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/client.ts":
/*!***********************!*\
  !*** ./lib/client.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//connect to sanity\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"3c4n15ly\",\n    dataset: \"production\",\n    apiVersion: \"2024-01-01\",\n    useCdn: true,\n    token: process.env.NEXT_PUBLIC_SANITY_TOKEN\n});\n//be able to use sanity images\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);\nconst urlFor = (source)=>builder.image(source)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUNNO0FBRWhELG1CQUFtQjtBQUNaLE1BQU1FLE1BQU0sR0FBR0YscURBQVksQ0FBQztJQUNqQ0csU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsTUFBTSxFQUFFLElBQUk7SUFDWkMsS0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msd0JBQXdCO0NBQzVDLENBQUMsQ0FBQztBQUVILDhCQUE4QjtBQUM5QixNQUFNQyxPQUFPLEdBQUdWLHdEQUFlLENBQUNDLE1BQU0sQ0FBQztBQUVoQyxNQUFNVSxNQUFNLEdBQUcsQ0FBQ0MsTUFBVSxHQUFLRixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waWJiaWUtd2ViLy4vbGliL2NsaWVudC50cz8xNTVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xuXG4vL2Nvbm5lY3QgdG8gc2FuaXR5XG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiBcIjNjNG4xNWx5XCIsXG4gIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxuICBhcGlWZXJzaW9uOiBcIjIwMjQtMDEtMDFcIixcbiAgdXNlQ2RuOiB0cnVlLFxuICB0b2tlbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1RPS0VOLFxufSk7XG5cbi8vYmUgYWJsZSB0byB1c2Ugc2FuaXR5IGltYWdlc1xuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xuXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZTphbnkpID0+IGJ1aWxkZXIuaW1hZ2Uoc291cmNlKSJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9UT0tFTiIsImJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/client.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.ts\");\n\n\nconst Home = ({})=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/tub/workspace/pibbie/pibbie-web/pages/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nconst getStaticProps = async ()=>{\n    const productQuery = `*[_type=='product']`;\n    const products = await _lib_client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(productQuery);\n    return {\n        props: {\n            products\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUN1QztBQUV2QyxNQUFNQyxJQUFJLEdBQWtCLENBQUMsRUFBRyxHQUFLO0lBQ25DLHFCQUNFLDhEQUFDQyxLQUFHOzs7O2lCQUVFLENBQ047Q0FDSDtBQUVELGlFQUFlRCxJQUFJLEVBQUM7QUFFYixNQUFNRSxjQUFjLEdBQUcsVUFBWTtJQUN4QyxNQUFNQyxZQUFZLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUMxQyxNQUFNQyxRQUFRLEdBQUcsTUFBTUwscURBQVksQ0FBQ0ksWUFBWSxDQUFDO0lBRWpELE9BQU87UUFDTEcsS0FBSyxFQUFFO1lBQ0xGLFFBQVE7U0FDVDtLQUNGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGliYmllLXdlYi8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2xpYi9jbGllbnRcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2U8eyB9PiA9ICh7IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RRdWVyeSA9IGAqW190eXBlPT0ncHJvZHVjdCddYDtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocHJvZHVjdFF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJIb21lIiwiZGl2IiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9kdWN0UXVlcnkiLCJwcm9kdWN0cyIsImZldGNoIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();