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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/PhotographersContext.jsx":
/*!******************************************!*\
  !*** ./context/PhotographersContext.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PhotographersContext: () => (/* binding */ PhotographersContext),\n/* harmony export */   PhotographersProvider: () => (/* binding */ PhotographersProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n\n\n\nconst PhotographersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction PhotographersProvider({ children }) {\n    const [photographers, setPhotographers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let mounted = true;\n        setLoading(true);\n        (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchPhotographers)().then((data)=>{\n            if (mounted) setPhotographers(data);\n        }).catch((err)=>{\n            if (mounted) setError(err.message);\n        }).finally(()=>{\n            if (mounted) setLoading(false);\n        });\n        return ()=>mounted = false;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhotographersContext.Provider, {\n        value: {\n            photographers,\n            setPhotographers,\n            loading,\n            error\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/administrator/Documents/Task/pixisphere-frontend-assignment/context/PhotographersContext.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1Bob3RvZ3JhcGhlcnNDb250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpRTtBQUNsQjtBQUV4QyxNQUFNSyxxQ0FBdUJKLG9EQUFhQSxHQUFFO0FBRTVDLFNBQVNLLHNCQUFzQixFQUFFQyxRQUFRLEVBQUU7SUFDaEQsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyRCxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBRW5DQyxnREFBU0EsQ0FBQztRQUNSLElBQUlXLFVBQVU7UUFDZEgsV0FBVztRQUNYUCw0REFBa0JBLEdBQ2ZXLElBQUksQ0FBQ0MsQ0FBQUE7WUFBVSxJQUFJRixTQUFTTCxpQkFBaUJPO1FBQU0sR0FDbkRDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFBUyxJQUFJSixTQUFTRCxTQUFTSyxJQUFJQyxPQUFPO1FBQUUsR0FDbERDLE9BQU8sQ0FBQztZQUFRLElBQUlOLFNBQVNILFdBQVc7UUFBTztRQUNsRCxPQUFPLElBQU9HLFVBQVU7SUFDMUIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNULHFCQUFxQmdCLFFBQVE7UUFBQ0MsT0FBTztZQUFFZDtZQUFlQztZQUFrQkM7WUFBU0U7UUFBTTtrQkFDckZMOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL3BpeGlzcGhlcmUtZnJvbnRlbmQtYXNzaWdubWVudC8uL2NvbnRleHQvUGhvdG9ncmFwaGVyc0NvbnRleHQuanN4PzgwOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZldGNoUGhvdG9ncmFwaGVycyB9IGZyb20gJy4uL2xpYi9hcGknXG5cbmV4cG9ydCBjb25zdCBQaG90b2dyYXBoZXJzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgZnVuY3Rpb24gUGhvdG9ncmFwaGVyc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbcGhvdG9ncmFwaGVycywgc2V0UGhvdG9ncmFwaGVyc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG1vdW50ZWQgPSB0cnVlXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGZldGNoUGhvdG9ncmFwaGVycygpXG4gICAgICAudGhlbihkYXRhID0+IHsgaWYgKG1vdW50ZWQpIHNldFBob3RvZ3JhcGhlcnMoZGF0YSkgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4geyBpZiAobW91bnRlZCkgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7IGlmIChtb3VudGVkKSBzZXRMb2FkaW5nKGZhbHNlKSB9KVxuICAgIHJldHVybiAoKSA9PiAobW91bnRlZCA9IGZhbHNlKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxQaG90b2dyYXBoZXJzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwaG90b2dyYXBoZXJzLCBzZXRQaG90b2dyYXBoZXJzLCBsb2FkaW5nLCBlcnJvciB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Bob3RvZ3JhcGhlcnNDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFBob3RvZ3JhcGhlcnMiLCJQaG90b2dyYXBoZXJzQ29udGV4dCIsIlBob3RvZ3JhcGhlcnNQcm92aWRlciIsImNoaWxkcmVuIiwicGhvdG9ncmFwaGVycyIsInNldFBob3RvZ3JhcGhlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJtb3VudGVkIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJmaW5hbGx5IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/PhotographersContext.jsx\n");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_BASE: () => (/* binding */ API_BASE),\n/* harmony export */   fetchPhotographerById: () => (/* binding */ fetchPhotographerById),\n/* harmony export */   fetchPhotographers: () => (/* binding */ fetchPhotographers)\n/* harmony export */ });\nconst API_BASE = process.env.NEXT_PUBLIC_API_BASE || \"/api\";\nasync function fetchPhotographers() {\n    const res = await fetch(`${API_BASE}/photographers`);\n    if (!res.ok) throw new Error(\"Failed to fetch\");\n    return res.json();\n}\nasync function fetchPhotographerById(id) {\n    const res = await fetch(`${API_BASE}/photographers/${id}`);\n    if (!res.ok) throw new Error(\"Failed to fetch photographer\");\n    return res.json();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLFdBQVdDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUksT0FBTTtBQUUzRCxlQUFlQztJQUNwQixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sQ0FBQyxFQUFFTixTQUFTLGNBQWMsQ0FBQztJQUNuRCxJQUFJLENBQUNLLElBQUlFLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07SUFDN0IsT0FBT0gsSUFBSUksSUFBSTtBQUNqQjtBQUVPLGVBQWVDLHNCQUFzQkMsRUFBRTtJQUM1QyxNQUFNTixNQUFNLE1BQU1DLE1BQU0sQ0FBQyxFQUFFTixTQUFTLGVBQWUsRUFBRVcsR0FBRyxDQUFDO0lBQ3pELElBQUksQ0FBQ04sSUFBSUUsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTTtJQUM3QixPQUFPSCxJQUFJSSxJQUFJO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl4aXNwaGVyZS1mcm9udGVuZC1hc3NpZ25tZW50Ly4vbGliL2FwaS5qcz80NTQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfQkFTRSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFIHx8ICcvYXBpJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQaG90b2dyYXBoZXJzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vcGhvdG9ncmFwaGVyc2ApXG4gIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCcpXG4gIHJldHVybiByZXMuanNvbigpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFBob3RvZ3JhcGhlckJ5SWQoaWQpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3Bob3RvZ3JhcGhlcnMvJHtpZH1gKVxuICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcGhvdG9ncmFwaGVyJylcbiAgcmV0dXJuIHJlcy5qc29uKClcbn1cbiJdLCJuYW1lcyI6WyJBUElfQkFTRSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRSIsImZldGNoUGhvdG9ncmFwaGVycyIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImpzb24iLCJmZXRjaFBob3RvZ3JhcGhlckJ5SWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_PhotographersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/PhotographersContext */ \"./context/PhotographersContext.jsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_PhotographersContext__WEBPACK_IMPORTED_MODULE_2__.PhotographersProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/administrator/Documents/Task/pixisphere-frontend-assignment/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/administrator/Documents/Task/pixisphere-frontend-assignment/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDeUM7QUFFeEQsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsZ0ZBQXFCQTtrQkFDcEIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXhpc3BoZXJlLWZyb250ZW5kLWFzc2lnbm1lbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBQaG90b2dyYXBoZXJzUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1Bob3RvZ3JhcGhlcnNDb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFBob3RvZ3JhcGhlcnNQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Bob3RvZ3JhcGhlcnNQcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlBob3RvZ3JhcGhlcnNQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();