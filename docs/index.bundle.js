/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cookie-stack.jpg */ "./src/img/cookie-stack.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Tangerine&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,100&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\nColors:\nPalette: https://coolors.co/320503-4f5d75-cb8857-4d7ea8-f3f5f7\n*/\n.menu-card, .content-container, .nav-tab {\n  background-color: rgba(243, 245, 247, 0.8);\n  border: 2px solid #4f5d75ff;\n}\n\nbody, html {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  font-family: \"Roboto\", sans-serif;\n  color: #4d7ea8ff;\n  min-width: 500px;\n  font-size: 16px;\n  font-weight: 300;\n  background-color: #cb8857ff;\n}\n\n#page-wrapper {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n#header {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 6rem;\n  margin-bottom: 2rem;\n}\n\n.title {\n  font-family: \"Tangerine\", cursive;\n  font-size: 5.5rem;\n  margin-bottom: 0px;\n  margin-bottom: -0.25em;\n  z-index: 5;\n  color: #4f5d75ff;\n}\n\n.title-baseline {\n  width: 23rem;\n  border: 2px solid #cb8857ff;\n  border-radius: 50%;\n  margin-bottom: 1.7rem;\n  content: \"y\";\n}\n\n.subtitle-band {\n  background-color: rgba(243, 245, 247, 0.8);\n  color: #4f5d75ff;\n  width: 100%;\n  text-align: center;\n}\n\n.subtitle {\n  margin: 0.1em;\n  font-family: \"Roboto\", sans-serif;\n  font-style: italic;\n  font-weight: 300;\n  font-size: 1.2rem;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n}\n\n.nav-tab-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  width: 20rem;\n  justify-content: space-between;\n}\n\n.nav-tab {\n  margin: 0em 1rem;\n  border-top-left-radius: 1em;\n  border-top-right-radius: 1em;\n  border-bottom: none;\n  padding: 0.5em;\n  border-bottom: none;\n}\n\n.nav-tab.active {\n  transform: scale(1.2);\n  margin-bottom: 0.1em;\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 3rem;\n}\n\n.content-container {\n  width: 80%;\n  max-width: 50rem;\n  text-align: center;\n  min-height: 15em;\n  border-radius: 2rem;\n  padding: 1em;\n}\n\n/*\n    Menu Styling\n*/\n.menu-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu-card {\n  width: 80%;\n  text-align: left;\n  padding: 1em;\n  margin-bottom: 0.8em;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: stretch;\n}\n.menu-card .text-wrapper {\n  flex-grow: 1;\n  margin-right: 2em;\n}\n.menu-card .text-wrapper p {\n  margin: 0.3em 0em;\n}\n.menu-card .text-wrapper .food-title {\n  font-weight: 500;\n  border-bottom: 2px solid #4d7ea8ff;\n  margin-bottom: 0.7em;\n}\n.menu-card .text-wrapper .food-description {\n  font-weight: 300;\n  font-style: italic;\n}\n.menu-card .text-wrapper .unit-price::before {\n  content: \"Single: $\";\n}\n.menu-card .text-wrapper .dozen-price::before {\n  content: \"Dozen: $\";\n}\n.menu-card .image-wrapper {\n  overflow: hidden;\n  height: 8rem;\n  width: 8rem;\n  border-radius: 0.5rem;\n  object-fit: cover;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.menu-card .image-wrapper img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n#footer {\n  background-color: #4f5d75ff;\n  color: rgba(243, 245, 247, 0.8);\n  margin-top: auto;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;;;CAAA;AAgBA;EACI,0CATG;EAUH,2BAAA;AATJ;;AAYA;EACI,SAAA;EACA,WAAA;EACA,YAAA;EACA,iCAXQ;EAYR,gBAnBQ;EAoBR,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,2BAxBI;AAeR;;AAYA;EACI,yDAAA;EACA,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;AATJ;;AAYA;EACI,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;AATJ;;AAYA;EACI,iCA1CS;EA2CT,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,UAAA;EACA,gBAvDI;AA8CR;;AAYA;EACI,YAAA;EACA,2BAAA;EACA,kBAAA;EACA,qBAAA;EACA,YAAA;AATJ;;AAYA;EACI,0CAhEG;EAiEH,gBApEI;EAqEJ,WAAA;EACA,kBAAA;AATJ;;AAaA;EACI,aAAA;EACA,iCAnEQ;EAoER,kBAAA;EACA,gBAAA;EACA,iBAAA;AAVJ;;AAaA;EACI,aAAA;EACA,uBAAA;AAVJ;;AAaA;EACI,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,YAAA;EACA,8BAAA;AAVJ;;AAaA;EAEI,gBAAA;EACA,2BAAA;EACA,4BAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;AAXJ;;AAcA;EACI,qBAAA;EACA,oBAAA;AAXJ;;AAcA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAXJ;;AAcA;EACI,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EAEA,YAAA;AAZJ;;AAeA;;CAAA;AAIA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AAbJ;;AAgBA;EAEI,UAAA;EACA,gBAAA;EACA,YAAA;EACA,oBAAA;EACA,mBAAA;EACA,aAAA;EACA,2BAAA;EACA,wBAAA;AAdJ;AAgBI;EACI,YAAA;EACA,iBAAA;AAdR;AAgBQ;EACI,iBAAA;AAdZ;AAiBQ;EACI,gBAAA;EACA,kCAAA;EACA,oBAAA;AAfZ;AAkBQ;EACI,gBAAA;EACA,kBAAA;AAhBZ;AAmBQ;EACI,oBAAA;AAjBZ;AAoBQ;EACI,mBAAA;AAlBZ;AAuBI;EACI,gBAAA;EACA,YAAA;EACA,WAAA;EACA,qBAAA;EACA,iBAAA;EACA,cAAA;EACA,YAAA;AArBR;AAuBQ;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AArBZ;;AA2BA;EACI,2BAnMI;EAoMJ,+BAjMG;EAkMH,gBAAA;AAxBJ","sourcesContent":["/*\nColors:\nPalette: https://coolors.co/320503-4f5d75-cb8857-4d7ea8-f3f5f7\n*/\n$chocolate: #320503ff; // --dark-sienna\n$slate: #4f5d75ff; // --independence\n$dough: #cb8857ff; // --raw-sienna\n$highlight: #4d7ea8ff; //--steel-blue\n$milk: rgba(243, 245, 247, .8); // --cultured\n\n// Google Fonts\n@import url('https://fonts.googleapis.com/css2?family=Tangerine&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,100&display=swap');\n$title-font: 'Tangerine', cursive;\n$body-font: 'Roboto', sans-serif;\n\n%content-box {\n    background-color: $milk;\n    border: 2px solid $slate;\n}\n\nbody,html {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    font-family: $body-font;\n    color: $highlight;\n    min-width: 500px;\n    font-size: 16px;\n    font-weight: 300;\n    background-color: $dough;\n}\n\n#page-wrapper {\n    background-image: url(./img/cookie-stack.jpg);\n    background-position: center;\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n    display:flex;\n    flex-direction: column;\n    overflow: auto;\n}\n\n#header {\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 6rem;\n    margin-bottom: 2rem;\n}\n\n.title {\n    font-family: $title-font;\n    font-size: 5.5rem;\n    margin-bottom: 0px;\n    margin-bottom: -.25em;\n    z-index: 5;\n    color: $slate;\n}\n\n.title-baseline {\n    width: 23rem;\n    border: 2px solid $dough;\n    border-radius: 50%;\n    margin-bottom: 1.7rem;\n    content: 'y';\n}\n\n.subtitle-band {\n    background-color: $milk;\n    color: $slate;\n    width: 100%;\n    text-align: center;\n}\n\n\n.subtitle {\n    margin: .1em;\n    font-family: $body-font;\n    font-style: italic;\n    font-weight: 300;\n    font-size: 1.2rem;\n}\n\n.nav {\n    display:flex;\n    justify-content: center;\n}\n\n.nav-tab-wrapper {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    width:20rem;\n    justify-content: space-between;\n}\n\n.nav-tab {\n    @extend %content-box;\n    margin: 0em 1rem;\n    border-top-left-radius: 1em;\n    border-top-right-radius: 1em;\n    border-bottom: none;\n    padding: .5em;\n    border-bottom: none;\n}\n\n.nav-tab.active {\n    transform: scale(1.2);\n    margin-bottom:.1em;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 3rem;\n}\n\n.content-container {\n    width:80%;\n    max-width: 50rem;\n    text-align: center;\n    min-height: 15em;\n    border-radius: 2rem;\n    @extend %content-box;\n    padding: 1em;\n}\n\n/*\n    Menu Styling\n*/\n\n.menu-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-card {\n    @extend %content-box;\n    width: 80%;\n    text-align: left;\n    padding: 1em;\n    margin-bottom: .8em;\n    border-radius: 1rem;\n    display:flex;\n    flex-direction: row-reverse;\n    justify-content: stretch;\n\n    .text-wrapper {\n        flex-grow: 1;\n        margin-right: 2em;\n\n        p {\n            margin: .3em 0em;\n        }    \n\n        .food-title {\n            font-weight:500;\n            border-bottom: 2px solid $highlight;\n            margin-bottom: .7em;\n        }\n\n        .food-description {\n            font-weight: 300;\n            font-style: italic;\n        }\n\n        .unit-price::before {\n            content: 'Single: $';\n        }\n\n        .dozen-price::before {\n            content: 'Dozen: $'\n        }\n    }\n\n\n    .image-wrapper {\n        overflow: hidden;\n        height: 8rem;\n        width: 8rem;\n        border-radius: .5rem;\n        object-fit: cover;\n        flex-shrink: 0;\n        flex-grow: 0;\n    \n        img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n\n        }\n    }\n}\n\n#footer {\n    background-color: $slate;\n    color: $milk;\n    margin-top: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/menu.csv":
/*!**********************!*\
  !*** ./src/menu.csv ***!
  \**********************/
/***/ ((module) => {

module.exports = [["ID","name","description","unit-price","dozen-price","imageURL"],["001","Chocolate Chip","This unique cookie is the prize of everybody",".57","5.60","https://bardonfro.github.io/odin-bakery/img/chocolate-chip.jpeg"],["002","Oatmeal Rasin","This other cookie, is also very good",".48","5.10","https://bardonfro.github.io/odin-bakery/img/oatmeal-raisin.jpeg"],["003","Peanut Butter","Filled with nutty delight, these are soft and moist",".49","4.95","https://bardonfro.github.io/odin-bakery/img/peanut-butter.jpeg"],["004","Lemon Glaze","A perfect blend of tart and sweet",".51","5.10","https://bardonfro.github.io/odin-bakery/img/lemon-glaze.jpeg"],["005","Molasses","These carry the perfect tang and crunch",".63","7.00","https://bardonfro.github.io/odin-bakery/img/molasses.jpeg"]]

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _dommy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dommy.js */ "./src/dommy.js");


const render = function() {
    const wrapper = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("div.content-container");

    const header = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("h3.content-header","Contact Us");

    const container = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el('div.contact-container');
    

    _dommy_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren(container,
        _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el('h4','Telephone'),
        _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el('p','(123) 456-7890'),
        _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el('h4','Address'),
        _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el('p','123 Street Town,ST')
        )
    _dommy_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren(wrapper,header,container)
    return wrapper;
}



/***/ }),

/***/ "./src/dommy.js":
/*!**********************!*\
  !*** ./src/dommy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "el": () => (/* binding */ el),
/* harmony export */   "appendChildren": () => (/* binding */ appendChildren)
/* harmony export */ });
const parseElementName = function(str) {
    let _element = {tag:"", id:"", classList:""};

    let subStrings = (function(str) {
        let symbols = ["#","."];
        symbols.forEach(function(sym){
            str = str.replaceAll(sym,("%" + sym));
        });
        return str.split("%");
    })(str);
    

    subStrings.forEach(function(sstr) {
        switch (sstr[0]) {
            case ("#"):
                _element.id = sstr.slice(1);
                break;
            case ("."):
                _element.classList = _element.classList + " " + sstr.slice(1);
                break;
            default:
                _element.tag = sstr;
        }
    })

    let element = document.createElement(_element.tag);
        if (_element.id.length > 0) {
            element.id = _element.id;
        }
        if (_element.classList.length > 0) {
            element.classList = _element.classList.slice(1);
        }
    return element;

}

const el = function (name, textContent) {
    const element = parseElementName(name);
    element.textContent = textContent;
    return element;
}

const appendChildren = function(parent, ...children) {
    children.forEach(function(child) {
        parent.appendChild(child);
    })
}




/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/github.png */ "./src/img/github.png");
// Locaion of image file for Github mark


//Github repo URL:
const repoURL = "https://github.com/bardonfro/odin-bakery"


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const gitMark = new Image();
        gitMark.src = _img_github_png__WEBPACK_IMPORTED_MODULE_0__;
        gitMark.classList = "github-mark";
        gitMark.style = "height: 1em;"

    const gitLink = document.createElement('a');
        gitLink.classList = 'github-link';
        gitLink.href = repoURL;
        gitLink.target = "_blank";
        gitLink.appendChild(gitMark);
        gitLink.style = "margin-left: 1em; display:flex; flex-direction:column; justify-content:center;";

        
    const textWrapper = document.createElement('div');
        textWrapper.textContent = '\u00A9 ' + (new Date().getFullYear()) + ' bardonfro';
        
    const footer = document.createElement('div');
        footer.id = 'footer';
        footer.style = "text-align: center; padding: .6em; display:flex; align-items:center; justify-content:center;"

    footer.appendChild(textWrapper);
    footer.appendChild(gitLink);

    return footer;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _dommy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dommy.js */ "./src/dommy.js");


const introText = "Thank you for visiting us on the web. We pride ourselves in making the finest cookies we make. Our quality ingredients come from grocery stores, carefully selected and paid for by a shopper. In the bakery you might find workers working. There is probably a machine. You should not find any rats. We hope you stop by to buy.";

const render = function() {
    const wrapper = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("div.content-container");
    
    const header = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("h3.content-header","Welcome");

    const intro = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("p.intro",introText);

    _dommy_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren(wrapper,header,intro);

    return wrapper;
}



/***/ }),

/***/ "./src/menu-process.js":
/*!*****************************!*\
  !*** ./src/menu-process.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.csv */ "./src/menu.csv");
/* harmony import */ var _menu_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_csv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_default_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/default.jpeg */ "./src/img/default.jpeg");


const getImagesOnline = true;


const getImage = function(URL) {
    const imageElement = new Image();
    imageElement.classList = 'cookie-image';
    
    if (getImagesOnline) {
        imageElement.src = URL;
    } else {
        imageElement.src = _img_default_jpeg__WEBPACK_IMPORTED_MODULE_1__;
    }

    return imageElement;
}

const createArray = function() {
    let arrMenu = [];
    
    //To identify the column mapping
    const index = {
        id: 0,
        name: 1,
        description: 2,
        unitPrice: 3,
        dozenPrice: 4,
        imageURL: 5,
    };

    _menu_csv__WEBPACK_IMPORTED_MODULE_0___default().slice(1).forEach(function(item) {
        const id = item[index.id];
        const name = item[index.name];
        const description = item[index.description];
        const unitPrice = item[index.unitPrice];
        const dozenPrice = item[index.dozenPrice];
        const imageURL = item[index.imageURL];
        const imageElement = getImage(imageURL);

        arrMenu.push({id, name, description, unitPrice, dozenPrice, imageURL,imageElement});
    })
    
    return arrMenu;
}

const arrMenu = createArray();

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {return arrMenu;}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _dommy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dommy.js */ "./src/dommy.js");
/* harmony import */ var _menu_process_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-process.js */ "./src/menu-process.js");



const menuItems = (0,_menu_process_js__WEBPACK_IMPORTED_MODULE_1__.default)();

const renderMenuItem = function (food) {
    const card = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("div.menu-card");
    const textWrapper = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("div.text-wrapper");

    const title = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("h4.food-title",food.name);
    const description = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("p.food-description",food.description);
    const unitPrice = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("p.unit-price",food.unitPrice);
    const dozenPrice = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("p.dozen-price",food.dozenPrice);
    
    const imageWrapper = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("div.image-wrapper");
    const image = food.imageElement;
    imageWrapper.appendChild(image);
   
    _dommy_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren(textWrapper,title,description,unitPrice,dozenPrice)
    _dommy_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren(card,imageWrapper,textWrapper);
    
    return card;

}

const render = function() {
    const wrapper = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("div.content-container");
    
    const header = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("h3.content-header","Our Menu");

    const menuWrapper = _dommy_js__WEBPACK_IMPORTED_MODULE_0__.el("div.menu-wrapper");

    menuItems.forEach(function(item) {
        menuWrapper.appendChild(renderMenuItem(item));
    });

    _dommy_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren(wrapper,header,menuWrapper);

    return wrapper;
}



/***/ }),

/***/ "./src/img/cookie-stack.jpg":
/*!**********************************!*\
  !*** ./src/img/cookie-stack.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4b86ab6580ed2f6fcc59.jpg";

/***/ }),

/***/ "./src/img/default.jpeg":
/*!******************************!*\
  !*** ./src/img/default.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1a4756a1f25853c90a3c.jpeg";

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _dommy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dommy.js */ "./src/dommy.js");
/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/github.png */ "./src/img/github.png");








let pages =[
    {name: "Home", render: _home_js__WEBPACK_IMPORTED_MODULE_1__.render},
    {name: "Menu", render: _menu_js__WEBPACK_IMPORTED_MODULE_2__.render},
    {name: "Contact", render: _contact_js__WEBPACK_IMPORTED_MODULE_3__.render},
];
const startPage = pages[0];

const pageWrapper = _dommy_js__WEBPACK_IMPORTED_MODULE_5__.el("div#page-wrapper");
    document.body.appendChild(pageWrapper);

const headerWrapper = _dommy_js__WEBPACK_IMPORTED_MODULE_5__.el("div#header");
const pageHeader = _dommy_js__WEBPACK_IMPORTED_MODULE_5__.el("h1.title", "Golden Edge");
const titleBaseline = _dommy_js__WEBPACK_IMPORTED_MODULE_5__.el("div.title-baseline");
const subtitleBand = _dommy_js__WEBPACK_IMPORTED_MODULE_5__.el('div.subtitle-band');

const pageSubhead = _dommy_js__WEBPACK_IMPORTED_MODULE_5__.el("h2.subtitle", "Confectioners of Fine Cookies");
subtitleBand.appendChild(pageSubhead);

const nav = _dommy_js__WEBPACK_IMPORTED_MODULE_5__.el("div.nav");
const navTabWrapper = _dommy_js__WEBPACK_IMPORTED_MODULE_5__.el("div.nav-tab-wrapper");
nav.appendChild(navTabWrapper);

pages.forEach(function(page) {
    navTabWrapper.appendChild(newNavTab(page));
})

const contentWrapper = _dommy_js__WEBPACK_IMPORTED_MODULE_5__.el("div#content");

_dommy_js__WEBPACK_IMPORTED_MODULE_5__.appendChildren(headerWrapper, pageHeader,titleBaseline, subtitleBand);
_dommy_js__WEBPACK_IMPORTED_MODULE_5__.appendChildren(pageWrapper,headerWrapper,nav,contentWrapper,(0,_footer_js__WEBPACK_IMPORTED_MODULE_4__.default)());


function newNavTab(obj) {
    const btn = _dommy_js__WEBPACK_IMPORTED_MODULE_5__.el("div.nav-tab",obj.name);
    obj.button = btn;
    btn.onclick = clickNavTab.bind(obj);

    return btn;
}

function clickNavTab() {
    document.querySelectorAll('.active').forEach(function(element) {
        element.classList.remove('active');
    })

    contentWrapper.textContent = "";
    contentWrapper.appendChild(this.render());
    this.button.classList.add("active");
}


//Initial page load - default to Home
const init = (function() {
    contentWrapper.appendChild(startPage.render());
    startPage.button.classList.add("active");
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9tZW51LmNzdiIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vb2Rpbi1iYWtlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYWtlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYWtlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vc3JjL2RvbW15LmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vc3JjL21lbnUtcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmFrZXJ5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmFrZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmFrZXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYWtlcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvY29va2llLXN0YWNrLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw1MDA7MSwxMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuQ29sb3JzOlxcblBhbGV0dGU6IGh0dHBzOi8vY29vbG9ycy5jby8zMjA1MDMtNGY1ZDc1LWNiODg1Ny00ZDdlYTgtZjNmNWY3XFxuKi9cXG4ubWVudS1jYXJkLCAuY29udGVudC1jb250YWluZXIsIC5uYXYtdGFiIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDUsIDI0NywgMC44KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0ZjVkNzVmZjtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNGQ3ZWE4ZmY7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYjg4NTdmZjtcXG59XFxuXFxuI3BhZ2Utd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2hlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDZyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUYW5nZXJpbmVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiA1LjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMC4yNWVtO1xcbiAgei1pbmRleDogNTtcXG4gIGNvbG9yOiAjNGY1ZDc1ZmY7XFxufVxcblxcbi50aXRsZS1iYXNlbGluZSB7XFxuICB3aWR0aDogMjNyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2I4ODU3ZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tYm90dG9tOiAxLjdyZW07XFxuICBjb250ZW50OiBcXFwieVxcXCI7XFxufVxcblxcbi5zdWJ0aXRsZS1iYW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDUsIDI0NywgMC44KTtcXG4gIGNvbG9yOiAjNGY1ZDc1ZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIG1hcmdpbjogMC4xZW07XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2LXRhYi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2LXRhYiB7XFxuICBtYXJnaW46IDBlbSAxcmVtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMWVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFlbTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5uYXYtdGFiLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi8qXFxuICAgIE1lbnUgU3R5bGluZ1xcbiovXFxuLm1lbnUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWNhcmQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbn1cXG4ubWVudS1jYXJkIC50ZXh0LXdyYXBwZXIge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XFxufVxcbi5tZW51LWNhcmQgLnRleHQtd3JhcHBlciBwIHtcXG4gIG1hcmdpbjogMC4zZW0gMGVtO1xcbn1cXG4ubWVudS1jYXJkIC50ZXh0LXdyYXBwZXIgLmZvb2QtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNGQ3ZWE4ZmY7XFxuICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcXG59XFxuLm1lbnUtY2FyZCAudGV4dC13cmFwcGVyIC5mb29kLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5tZW51LWNhcmQgLnRleHQtd3JhcHBlciAudW5pdC1wcmljZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJTaW5nbGU6ICRcXFwiO1xcbn1cXG4ubWVudS1jYXJkIC50ZXh0LXdyYXBwZXIgLmRvemVuLXByaWNlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkRvemVuOiAkXFxcIjtcXG59XFxuLm1lbnUtY2FyZCAuaW1hZ2Utd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgd2lkdGg6IDhyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG4ubWVudS1jYXJkIC5pbWFnZS13cmFwcGVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjVkNzVmZjtcXG4gIGNvbG9yOiByZ2JhKDI0MywgMjQ1LCAyNDcsIDAuOCk7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBQUE7QUFnQkE7RUFDSSwwQ0FURztFQVVILDJCQUFBO0FBVEo7O0FBWUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FYUTtFQVlSLGdCQW5CUTtFQW9CUixnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQXhCSTtBQWVSOztBQVlBO0VBQ0kseURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBVEo7O0FBWUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZQTtFQUNJLGlDQTFDUztFQTJDVCxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBdkRJO0FBOENSOztBQVlBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFUSjs7QUFZQTtFQUNJLDBDQWhFRztFQWlFSCxnQkFwRUk7RUFxRUosV0FBQTtFQUNBLGtCQUFBO0FBVEo7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsaUNBbkVRO0VBb0VSLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVZKOztBQWFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBVko7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQVZKOztBQWFBO0VBRUksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFYSjs7QUFjQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7QUFYSjs7QUFjQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBY0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0FBWko7O0FBZUE7O0NBQUE7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBYko7O0FBZ0JBO0VBRUksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQWRKO0FBZ0JJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBZFI7QUFnQlE7RUFDSSxpQkFBQTtBQWRaO0FBaUJRO0VBQ0ksZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FBZlo7QUFrQlE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBaEJaO0FBbUJRO0VBQ0ksb0JBQUE7QUFqQlo7QUFvQlE7RUFDSSxtQkFBQTtBQWxCWjtBQXVCSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFyQlI7QUF1QlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBckJaOztBQTJCQTtFQUNJLDJCQW5NSTtFQW9NSiwrQkFqTUc7RUFrTUgsZ0JBQUE7QUF4QkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG5Db2xvcnM6XFxuUGFsZXR0ZTogaHR0cHM6Ly9jb29sb3JzLmNvLzMyMDUwMy00ZjVkNzUtY2I4ODU3LTRkN2VhOC1mM2Y1ZjdcXG4qL1xcbiRjaG9jb2xhdGU6ICMzMjA1MDNmZjsgLy8gLS1kYXJrLXNpZW5uYVxcbiRzbGF0ZTogIzRmNWQ3NWZmOyAvLyAtLWluZGVwZW5kZW5jZVxcbiRkb3VnaDogI2NiODg1N2ZmOyAvLyAtLXJhdy1zaWVubmFcXG4kaGlnaGxpZ2h0OiAjNGQ3ZWE4ZmY7IC8vLS1zdGVlbC1ibHVlXFxuJG1pbGs6IHJnYmEoMjQzLCAyNDUsIDI0NywgLjgpOyAvLyAtLWN1bHR1cmVkXFxuXFxuLy8gR29vZ2xlIEZvbnRzXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw1MDA7MSwxMDAmZGlzcGxheT1zd2FwJyk7XFxuJHRpdGxlLWZvbnQ6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xcbiRib2R5LWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcbiVjb250ZW50LWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtaWxrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkc2xhdGU7XFxufVxcblxcbmJvZHksaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICRib2R5LWZvbnQ7XFxuICAgIGNvbG9yOiAkaGlnaGxpZ2h0O1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkb3VnaDtcXG59XFxuXFxuI3BhZ2Utd3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9jb29raWUtc3RhY2suanBnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJHRpdGxlLWZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogNS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0uMjVlbTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgY29sb3I6ICRzbGF0ZTtcXG59XFxuXFxuLnRpdGxlLWJhc2VsaW5lIHtcXG4gICAgd2lkdGg6IDIzcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkZG91Z2g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS43cmVtO1xcbiAgICBjb250ZW50OiAneSc7XFxufVxcblxcbi5zdWJ0aXRsZS1iYW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1pbGs7XFxuICAgIGNvbG9yOiAkc2xhdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5zdWJ0aXRsZSB7XFxuICAgIG1hcmdpbjogLjFlbTtcXG4gICAgZm9udC1mYW1pbHk6ICRib2R5LWZvbnQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2LXRhYi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDoyMHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2LXRhYiB7XFxuICAgIEBleHRlbmQgJWNvbnRlbnQtYm94O1xcbiAgICBtYXJnaW46IDBlbSAxcmVtO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxZW07XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIHBhZGRpbmc6IC41ZW07XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5uYXYtdGFiLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgbWFyZ2luLWJvdHRvbTouMWVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICB3aWR0aDo4MCU7XFxuICAgIG1heC13aWR0aDogNTByZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgQGV4dGVuZCAlY29udGVudC1ib3g7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLypcXG4gICAgTWVudSBTdHlsaW5nXFxuKi9cXG5cXG4ubWVudS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtY2FyZCB7XFxuICAgIEBleHRlbmQgJWNvbnRlbnQtYm94O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC44ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuXFxuICAgIC50ZXh0LXdyYXBwZXIge1xcbiAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XFxuXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBtYXJnaW46IC4zZW0gMGVtO1xcbiAgICAgICAgfSAgICBcXG5cXG4gICAgICAgIC5mb29kLXRpdGxlIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRoaWdobGlnaHQ7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjdlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5mb29kLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC51bml0LXByaWNlOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTaW5nbGU6ICQnO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRvemVuLXByaWNlOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdEb3plbjogJCdcXG4gICAgICAgIH1cXG4gICAgfVxcblxcblxcbiAgICAuaW1hZ2Utd3JhcHBlciB7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgaGVpZ2h0OiA4cmVtO1xcbiAgICAgICAgd2lkdGg6IDhyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAgIFxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzbGF0ZTtcXG4gICAgY29sb3I6ICRtaWxrO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gW1tcIklEXCIsXCJuYW1lXCIsXCJkZXNjcmlwdGlvblwiLFwidW5pdC1wcmljZVwiLFwiZG96ZW4tcHJpY2VcIixcImltYWdlVVJMXCJdLFtcIjAwMVwiLFwiQ2hvY29sYXRlIENoaXBcIixcIlRoaXMgdW5pcXVlIGNvb2tpZSBpcyB0aGUgcHJpemUgb2YgZXZlcnlib2R5XCIsXCIuNTdcIixcIjUuNjBcIixcImh0dHBzOi8vYmFyZG9uZnJvLmdpdGh1Yi5pby9vZGluLWJha2VyeS9pbWcvY2hvY29sYXRlLWNoaXAuanBlZ1wiXSxbXCIwMDJcIixcIk9hdG1lYWwgUmFzaW5cIixcIlRoaXMgb3RoZXIgY29va2llLCBpcyBhbHNvIHZlcnkgZ29vZFwiLFwiLjQ4XCIsXCI1LjEwXCIsXCJodHRwczovL2JhcmRvbmZyby5naXRodWIuaW8vb2Rpbi1iYWtlcnkvaW1nL29hdG1lYWwtcmFpc2luLmpwZWdcIl0sW1wiMDAzXCIsXCJQZWFudXQgQnV0dGVyXCIsXCJGaWxsZWQgd2l0aCBudXR0eSBkZWxpZ2h0LCB0aGVzZSBhcmUgc29mdCBhbmQgbW9pc3RcIixcIi40OVwiLFwiNC45NVwiLFwiaHR0cHM6Ly9iYXJkb25mcm8uZ2l0aHViLmlvL29kaW4tYmFrZXJ5L2ltZy9wZWFudXQtYnV0dGVyLmpwZWdcIl0sW1wiMDA0XCIsXCJMZW1vbiBHbGF6ZVwiLFwiQSBwZXJmZWN0IGJsZW5kIG9mIHRhcnQgYW5kIHN3ZWV0XCIsXCIuNTFcIixcIjUuMTBcIixcImh0dHBzOi8vYmFyZG9uZnJvLmdpdGh1Yi5pby9vZGluLWJha2VyeS9pbWcvbGVtb24tZ2xhemUuanBlZ1wiXSxbXCIwMDVcIixcIk1vbGFzc2VzXCIsXCJUaGVzZSBjYXJyeSB0aGUgcGVyZmVjdCB0YW5nIGFuZCBjcnVuY2hcIixcIi42M1wiLFwiNy4wMFwiLFwiaHR0cHM6Ly9iYXJkb25mcm8uZ2l0aHViLmlvL29kaW4tYmFrZXJ5L2ltZy9tb2xhc3Nlcy5qcGVnXCJdXSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIGRteSBmcm9tICcuL2RvbW15LmpzJztcblxuY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRteS5lbChcImRpdi5jb250ZW50LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRteS5lbChcImgzLmNvbnRlbnQtaGVhZGVyXCIsXCJDb250YWN0IFVzXCIpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG15LmVsKCdkaXYuY29udGFjdC1jb250YWluZXInKTtcbiAgICBcblxuICAgIGRteS5hcHBlbmRDaGlsZHJlbihjb250YWluZXIsXG4gICAgICAgIGRteS5lbCgnaDQnLCdUZWxlcGhvbmUnKSxcbiAgICAgICAgZG15LmVsKCdwJywnKDEyMykgNDU2LTc4OTAnKSxcbiAgICAgICAgZG15LmVsKCdoNCcsJ0FkZHJlc3MnKSxcbiAgICAgICAgZG15LmVsKCdwJywnMTIzIFN0cmVldCBUb3duLFNUJylcbiAgICAgICAgKVxuICAgIGRteS5hcHBlbmRDaGlsZHJlbih3cmFwcGVyLGhlYWRlcixjb250YWluZXIpXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmV4cG9ydCB7cmVuZGVyfTsiLCJjb25zdCBwYXJzZUVsZW1lbnROYW1lID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgbGV0IF9lbGVtZW50ID0ge3RhZzpcIlwiLCBpZDpcIlwiLCBjbGFzc0xpc3Q6XCJcIn07XG5cbiAgICBsZXQgc3ViU3RyaW5ncyA9IChmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgbGV0IHN5bWJvbHMgPSBbXCIjXCIsXCIuXCJdO1xuICAgICAgICBzeW1ib2xzLmZvckVhY2goZnVuY3Rpb24oc3ltKXtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlQWxsKHN5bSwoXCIlXCIgKyBzeW0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQoXCIlXCIpO1xuICAgIH0pKHN0cik7XG4gICAgXG5cbiAgICBzdWJTdHJpbmdzLmZvckVhY2goZnVuY3Rpb24oc3N0cikge1xuICAgICAgICBzd2l0Y2ggKHNzdHJbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgKFwiI1wiKTpcbiAgICAgICAgICAgICAgICBfZWxlbWVudC5pZCA9IHNzdHIuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChcIi5cIik6XG4gICAgICAgICAgICAgICAgX2VsZW1lbnQuY2xhc3NMaXN0ID0gX2VsZW1lbnQuY2xhc3NMaXN0ICsgXCIgXCIgKyBzc3RyLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBfZWxlbWVudC50YWcgPSBzc3RyO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChfZWxlbWVudC50YWcpO1xuICAgICAgICBpZiAoX2VsZW1lbnQuaWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5pZCA9IF9lbGVtZW50LmlkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QgPSBfZWxlbWVudC5jbGFzc0xpc3Quc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcblxufVxuXG5jb25zdCBlbCA9IGZ1bmN0aW9uIChuYW1lLCB0ZXh0Q29udGVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBwYXJzZUVsZW1lbnROYW1lKG5hbWUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSBmdW5jdGlvbihwYXJlbnQsIC4uLmNoaWxkcmVuKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH0pXG59XG5cblxuZXhwb3J0IHtlbCwgYXBwZW5kQ2hpbGRyZW59OyIsIi8vIExvY2Fpb24gb2YgaW1hZ2UgZmlsZSBmb3IgR2l0aHViIG1hcmtcbmltcG9ydCBnaXRNYXJrRmlsZSBmcm9tICcuL2ltZy9naXRodWIucG5nJztcblxuLy9HaXRodWIgcmVwbyBVUkw6XG5jb25zdCByZXBvVVJMID0gXCJodHRwczovL2dpdGh1Yi5jb20vYmFyZG9uZnJvL29kaW4tYmFrZXJ5XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBnaXRNYXJrID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGdpdE1hcmsuc3JjID0gZ2l0TWFya0ZpbGU7XG4gICAgICAgIGdpdE1hcmsuY2xhc3NMaXN0ID0gXCJnaXRodWItbWFya1wiO1xuICAgICAgICBnaXRNYXJrLnN0eWxlID0gXCJoZWlnaHQ6IDFlbTtcIlxuXG4gICAgY29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgZ2l0TGluay5jbGFzc0xpc3QgPSAnZ2l0aHViLWxpbmsnO1xuICAgICAgICBnaXRMaW5rLmhyZWYgPSByZXBvVVJMO1xuICAgICAgICBnaXRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICAgIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0TWFyayk7XG4gICAgICAgIGdpdExpbmsuc3R5bGUgPSBcIm1hcmdpbi1sZWZ0OiAxZW07IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1wiO1xuXG4gICAgICAgIFxuICAgIGNvbnN0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHRXcmFwcGVyLnRleHRDb250ZW50ID0gJ1xcdTAwQTkgJyArIChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkpICsgJyBiYXJkb25mcm8nO1xuICAgICAgICBcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XG4gICAgICAgIGZvb3Rlci5zdHlsZSA9IFwidGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAuNmVtOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjtcIlxuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufSIsImltcG9ydCAqIGFzIGRteSBmcm9tICcuL2RvbW15LmpzJztcblxuY29uc3QgaW50cm9UZXh0ID0gXCJUaGFuayB5b3UgZm9yIHZpc2l0aW5nIHVzIG9uIHRoZSB3ZWIuIFdlIHByaWRlIG91cnNlbHZlcyBpbiBtYWtpbmcgdGhlIGZpbmVzdCBjb29raWVzIHdlIG1ha2UuIE91ciBxdWFsaXR5IGluZ3JlZGllbnRzIGNvbWUgZnJvbSBncm9jZXJ5IHN0b3JlcywgY2FyZWZ1bGx5IHNlbGVjdGVkIGFuZCBwYWlkIGZvciBieSBhIHNob3BwZXIuIEluIHRoZSBiYWtlcnkgeW91IG1pZ2h0IGZpbmQgd29ya2VycyB3b3JraW5nLiBUaGVyZSBpcyBwcm9iYWJseSBhIG1hY2hpbmUuIFlvdSBzaG91bGQgbm90IGZpbmQgYW55IHJhdHMuIFdlIGhvcGUgeW91IHN0b3AgYnkgdG8gYnV5LlwiO1xuXG5jb25zdCByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG15LmVsKFwiZGl2LmNvbnRlbnQtY29udGFpbmVyXCIpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRteS5lbChcImgzLmNvbnRlbnQtaGVhZGVyXCIsXCJXZWxjb21lXCIpO1xuXG4gICAgY29uc3QgaW50cm8gPSBkbXkuZWwoXCJwLmludHJvXCIsaW50cm9UZXh0KTtcblxuICAgIGRteS5hcHBlbmRDaGlsZHJlbih3cmFwcGVyLGhlYWRlcixpbnRybyk7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZXhwb3J0IHtyZW5kZXJ9OyIsImltcG9ydCBEYXRhIGZyb20gJy4vbWVudS5jc3YnO1xuaW1wb3J0IGRlZmF1bHRJbWFnZSBmcm9tICcuL2ltZy9kZWZhdWx0LmpwZWcnO1xuY29uc3QgZ2V0SW1hZ2VzT25saW5lID0gdHJ1ZTtcblxuXG5jb25zdCBnZXRJbWFnZSA9IGZ1bmN0aW9uKFVSTCkge1xuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QgPSAnY29va2llLWltYWdlJztcbiAgICBcbiAgICBpZiAoZ2V0SW1hZ2VzT25saW5lKSB7XG4gICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBVUkw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IGRlZmF1bHRJbWFnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2VFbGVtZW50O1xufVxuXG5jb25zdCBjcmVhdGVBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBhcnJNZW51ID0gW107XG4gICAgXG4gICAgLy9UbyBpZGVudGlmeSB0aGUgY29sdW1uIG1hcHBpbmdcbiAgICBjb25zdCBpbmRleCA9IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6IDEsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAyLFxuICAgICAgICB1bml0UHJpY2U6IDMsXG4gICAgICAgIGRvemVuUHJpY2U6IDQsXG4gICAgICAgIGltYWdlVVJMOiA1LFxuICAgIH07XG5cbiAgICBEYXRhLnNsaWNlKDEpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBjb25zdCBpZCA9IGl0ZW1baW5kZXguaWRdO1xuICAgICAgICBjb25zdCBuYW1lID0gaXRlbVtpbmRleC5uYW1lXTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpdGVtW2luZGV4LmRlc2NyaXB0aW9uXTtcbiAgICAgICAgY29uc3QgdW5pdFByaWNlID0gaXRlbVtpbmRleC51bml0UHJpY2VdO1xuICAgICAgICBjb25zdCBkb3plblByaWNlID0gaXRlbVtpbmRleC5kb3plblByaWNlXTtcbiAgICAgICAgY29uc3QgaW1hZ2VVUkwgPSBpdGVtW2luZGV4LmltYWdlVVJMXTtcbiAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZ2V0SW1hZ2UoaW1hZ2VVUkwpO1xuXG4gICAgICAgIGFyck1lbnUucHVzaCh7aWQsIG5hbWUsIGRlc2NyaXB0aW9uLCB1bml0UHJpY2UsIGRvemVuUHJpY2UsIGltYWdlVVJMLGltYWdlRWxlbWVudH0pO1xuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIGFyck1lbnU7XG59XG5cbmNvbnN0IGFyck1lbnUgPSBjcmVhdGVBcnJheSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtyZXR1cm4gYXJyTWVudTt9XG4iLCJpbXBvcnQgKiBhcyBkbXkgZnJvbSAnLi9kb21teS5qcyc7XG5pbXBvcnQgbWVudVByb2Nlc3MgZnJvbSAnLi9tZW51LXByb2Nlc3MuanMnO1xuXG5jb25zdCBtZW51SXRlbXMgPSBtZW51UHJvY2VzcygpO1xuXG5jb25zdCByZW5kZXJNZW51SXRlbSA9IGZ1bmN0aW9uIChmb29kKSB7XG4gICAgY29uc3QgY2FyZCA9IGRteS5lbChcImRpdi5tZW51LWNhcmRcIik7XG4gICAgY29uc3QgdGV4dFdyYXBwZXIgPSBkbXkuZWwoXCJkaXYudGV4dC13cmFwcGVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkbXkuZWwoXCJoNC5mb29kLXRpdGxlXCIsZm9vZC5uYW1lKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRteS5lbChcInAuZm9vZC1kZXNjcmlwdGlvblwiLGZvb2QuZGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IHVuaXRQcmljZSA9IGRteS5lbChcInAudW5pdC1wcmljZVwiLGZvb2QudW5pdFByaWNlKTtcbiAgICBjb25zdCBkb3plblByaWNlID0gZG15LmVsKFwicC5kb3plbi1wcmljZVwiLGZvb2QuZG96ZW5QcmljZSk7XG4gICAgXG4gICAgY29uc3QgaW1hZ2VXcmFwcGVyID0gZG15LmVsKFwiZGl2LmltYWdlLXdyYXBwZXJcIik7XG4gICAgY29uc3QgaW1hZ2UgPSBmb29kLmltYWdlRWxlbWVudDtcbiAgICBpbWFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgXG4gICAgZG15LmFwcGVuZENoaWxkcmVuKHRleHRXcmFwcGVyLHRpdGxlLGRlc2NyaXB0aW9uLHVuaXRQcmljZSxkb3plblByaWNlKVxuICAgIGRteS5hcHBlbmRDaGlsZHJlbihjYXJkLGltYWdlV3JhcHBlcix0ZXh0V3JhcHBlcik7XG4gICAgXG4gICAgcmV0dXJuIGNhcmQ7XG5cbn1cblxuY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRteS5lbChcImRpdi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkbXkuZWwoXCJoMy5jb250ZW50LWhlYWRlclwiLFwiT3VyIE1lbnVcIik7XG5cbiAgICBjb25zdCBtZW51V3JhcHBlciA9IGRteS5lbChcImRpdi5tZW51LXdyYXBwZXJcIik7XG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKHJlbmRlck1lbnVJdGVtKGl0ZW0pKTtcbiAgICB9KTtcblxuICAgIGRteS5hcHBlbmRDaGlsZHJlbih3cmFwcGVyLGhlYWRlcixtZW51V3JhcHBlcik7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZXhwb3J0IHtyZW5kZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAqIGFzIGhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCAqIGFzIG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCAqIGFzIGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9mb290ZXIuanMnO1xuaW1wb3J0ICogYXMgZG15IGZyb20gJy4vZG9tbXkuanMnO1xuaW1wb3J0IGdpdGh1YiBmcm9tICcuL2ltZy9naXRodWIucG5nJztcblxubGV0IHBhZ2VzID1bXG4gICAge25hbWU6IFwiSG9tZVwiLCByZW5kZXI6IGhvbWUucmVuZGVyfSxcbiAgICB7bmFtZTogXCJNZW51XCIsIHJlbmRlcjogbWVudS5yZW5kZXJ9LFxuICAgIHtuYW1lOiBcIkNvbnRhY3RcIiwgcmVuZGVyOiBjb250YWN0LnJlbmRlcn0sXG5dO1xuY29uc3Qgc3RhcnRQYWdlID0gcGFnZXNbMF07XG5cbmNvbnN0IHBhZ2VXcmFwcGVyID0gZG15LmVsKFwiZGl2I3BhZ2Utd3JhcHBlclwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VXcmFwcGVyKTtcblxuY29uc3QgaGVhZGVyV3JhcHBlciA9IGRteS5lbChcImRpdiNoZWFkZXJcIik7XG5jb25zdCBwYWdlSGVhZGVyID0gZG15LmVsKFwiaDEudGl0bGVcIiwgXCJHb2xkZW4gRWRnZVwiKTtcbmNvbnN0IHRpdGxlQmFzZWxpbmUgPSBkbXkuZWwoXCJkaXYudGl0bGUtYmFzZWxpbmVcIik7XG5jb25zdCBzdWJ0aXRsZUJhbmQgPSBkbXkuZWwoJ2Rpdi5zdWJ0aXRsZS1iYW5kJyk7XG5cbmNvbnN0IHBhZ2VTdWJoZWFkID0gZG15LmVsKFwiaDIuc3VidGl0bGVcIiwgXCJDb25mZWN0aW9uZXJzIG9mIEZpbmUgQ29va2llc1wiKTtcbnN1YnRpdGxlQmFuZC5hcHBlbmRDaGlsZChwYWdlU3ViaGVhZCk7XG5cbmNvbnN0IG5hdiA9IGRteS5lbChcImRpdi5uYXZcIik7XG5jb25zdCBuYXZUYWJXcmFwcGVyID0gZG15LmVsKFwiZGl2Lm5hdi10YWItd3JhcHBlclwiKTtcbm5hdi5hcHBlbmRDaGlsZChuYXZUYWJXcmFwcGVyKTtcblxucGFnZXMuZm9yRWFjaChmdW5jdGlvbihwYWdlKSB7XG4gICAgbmF2VGFiV3JhcHBlci5hcHBlbmRDaGlsZChuZXdOYXZUYWIocGFnZSkpO1xufSlcblxuY29uc3QgY29udGVudFdyYXBwZXIgPSBkbXkuZWwoXCJkaXYjY29udGVudFwiKTtcblxuZG15LmFwcGVuZENoaWxkcmVuKGhlYWRlcldyYXBwZXIsIHBhZ2VIZWFkZXIsdGl0bGVCYXNlbGluZSwgc3VidGl0bGVCYW5kKTtcbmRteS5hcHBlbmRDaGlsZHJlbihwYWdlV3JhcHBlcixoZWFkZXJXcmFwcGVyLG5hdixjb250ZW50V3JhcHBlcixmb290ZXIoKSk7XG5cblxuZnVuY3Rpb24gbmV3TmF2VGFiKG9iaikge1xuICAgIGNvbnN0IGJ0biA9IGRteS5lbChcImRpdi5uYXYtdGFiXCIsb2JqLm5hbWUpO1xuICAgIG9iai5idXR0b24gPSBidG47XG4gICAgYnRuLm9uY2xpY2sgPSBjbGlja05hdlRhYi5iaW5kKG9iaik7XG5cbiAgICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiBjbGlja05hdlRhYigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcblxuICAgIGNvbnRlbnRXcmFwcGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcigpKTtcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5cbi8vSW5pdGlhbCBwYWdlIGxvYWQgLSBkZWZhdWx0IHRvIEhvbWVcbmNvbnN0IGluaXQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoc3RhcnRQYWdlLnJlbmRlcigpKTtcbiAgICBzdGFydFBhZ2UuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==