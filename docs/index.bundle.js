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

module.exports = [["ID","name","description","unit-price","dozen-price","imageURL"],["001","Chocolate Chip","This unique cookie is the prize of everybody",".57","5.60","https://upload.wikimedia.org/wikipedia/commons/9/9a/Choco_chip_cookie.jpg"],["002","Oatmeal Rasin","This other cookie, is also very good",".48","5.10","https://upload.wikimedia.org/wikipedia/commons/f/f1/Oatmeal_Raisin_Cookie.jpeg"],["003","Peanut Butter","Filled with nutty delight, these are soft and moist",".49","4.95","https://upload.wikimedia.org/wikipedia/commons/9/99/Peanut_butter_cookies_with_m%26m%27s_and_chocolate_chips.jpg"],["004","Lemon Glaze","A perfect blend of tart and sweet",".51","5.10","https://upload.wikimedia.org/wikipedia/commons/e/e3/Lemon_shortbread_cookies_with_lemon_royal_icing.jpg"],["005","Molasses","These carry the perfect tang and crunch",".63","7.00","https://upload.wikimedia.org/wikipedia/commons/7/74/Molasses-Cookies-2006March09.JPG"]]

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9tZW51LmNzdiIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vb2Rpbi1iYWtlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYWtlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYWtlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vc3JjL2RvbW15LmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5Ly4vc3JjL21lbnUtcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tYmFrZXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmFrZXJ5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmFrZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmFrZXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYWtlcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJha2VyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvY29va2llLXN0YWNrLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw1MDA7MSwxMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuQ29sb3JzOlxcblBhbGV0dGU6IGh0dHBzOi8vY29vbG9ycy5jby8zMjA1MDMtNGY1ZDc1LWNiODg1Ny00ZDdlYTgtZjNmNWY3XFxuKi9cXG4ubWVudS1jYXJkLCAuY29udGVudC1jb250YWluZXIsIC5uYXYtdGFiIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDUsIDI0NywgMC44KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0ZjVkNzVmZjtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNGQ3ZWE4ZmY7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYjg4NTdmZjtcXG59XFxuXFxuI3BhZ2Utd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2hlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDZyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUYW5nZXJpbmVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiA1LjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMC4yNWVtO1xcbiAgei1pbmRleDogNTtcXG4gIGNvbG9yOiAjNGY1ZDc1ZmY7XFxufVxcblxcbi50aXRsZS1iYXNlbGluZSB7XFxuICB3aWR0aDogMjNyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2I4ODU3ZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tYm90dG9tOiAxLjdyZW07XFxuICBjb250ZW50OiBcXFwieVxcXCI7XFxufVxcblxcbi5zdWJ0aXRsZS1iYW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDUsIDI0NywgMC44KTtcXG4gIGNvbG9yOiAjNGY1ZDc1ZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIG1hcmdpbjogMC4xZW07XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2LXRhYi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2LXRhYiB7XFxuICBtYXJnaW46IDBlbSAxcmVtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMWVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFlbTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5uYXYtdGFiLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi8qXFxuICAgIE1lbnUgU3R5bGluZ1xcbiovXFxuLm1lbnUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWNhcmQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbn1cXG4ubWVudS1jYXJkIC50ZXh0LXdyYXBwZXIge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XFxufVxcbi5tZW51LWNhcmQgLnRleHQtd3JhcHBlciBwIHtcXG4gIG1hcmdpbjogMC4zZW0gMGVtO1xcbn1cXG4ubWVudS1jYXJkIC50ZXh0LXdyYXBwZXIgLmZvb2QtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNGQ3ZWE4ZmY7XFxuICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcXG59XFxuLm1lbnUtY2FyZCAudGV4dC13cmFwcGVyIC5mb29kLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5tZW51LWNhcmQgLnRleHQtd3JhcHBlciAudW5pdC1wcmljZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJTaW5nbGU6ICRcXFwiO1xcbn1cXG4ubWVudS1jYXJkIC50ZXh0LXdyYXBwZXIgLmRvemVuLXByaWNlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkRvemVuOiAkXFxcIjtcXG59XFxuLm1lbnUtY2FyZCAuaW1hZ2Utd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgd2lkdGg6IDhyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG4ubWVudS1jYXJkIC5pbWFnZS13cmFwcGVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjVkNzVmZjtcXG4gIGNvbG9yOiByZ2JhKDI0MywgMjQ1LCAyNDcsIDAuOCk7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBQUE7QUFnQkE7RUFDSSwwQ0FURztFQVVILDJCQUFBO0FBVEo7O0FBWUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FYUTtFQVlSLGdCQW5CUTtFQW9CUixnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQXhCSTtBQWVSOztBQVlBO0VBQ0kseURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBVEo7O0FBWUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZQTtFQUNJLGlDQTFDUztFQTJDVCxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBdkRJO0FBOENSOztBQVlBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFUSjs7QUFZQTtFQUNJLDBDQWhFRztFQWlFSCxnQkFwRUk7RUFxRUosV0FBQTtFQUNBLGtCQUFBO0FBVEo7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsaUNBbkVRO0VBb0VSLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVZKOztBQWFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBVko7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQVZKOztBQWFBO0VBRUksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFYSjs7QUFjQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7QUFYSjs7QUFjQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBY0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0FBWko7O0FBZUE7O0NBQUE7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBYko7O0FBZ0JBO0VBRUksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQWRKO0FBZ0JJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBZFI7QUFnQlE7RUFDSSxpQkFBQTtBQWRaO0FBaUJRO0VBQ0ksZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FBZlo7QUFrQlE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBaEJaO0FBbUJRO0VBQ0ksb0JBQUE7QUFqQlo7QUFvQlE7RUFDSSxtQkFBQTtBQWxCWjtBQXVCSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFyQlI7QUF1QlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBckJaOztBQTJCQTtFQUNJLDJCQW5NSTtFQW9NSiwrQkFqTUc7RUFrTUgsZ0JBQUE7QUF4QkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG5Db2xvcnM6XFxuUGFsZXR0ZTogaHR0cHM6Ly9jb29sb3JzLmNvLzMyMDUwMy00ZjVkNzUtY2I4ODU3LTRkN2VhOC1mM2Y1ZjdcXG4qL1xcbiRjaG9jb2xhdGU6ICMzMjA1MDNmZjsgLy8gLS1kYXJrLXNpZW5uYVxcbiRzbGF0ZTogIzRmNWQ3NWZmOyAvLyAtLWluZGVwZW5kZW5jZVxcbiRkb3VnaDogI2NiODg1N2ZmOyAvLyAtLXJhdy1zaWVubmFcXG4kaGlnaGxpZ2h0OiAjNGQ3ZWE4ZmY7IC8vLS1zdGVlbC1ibHVlXFxuJG1pbGs6IHJnYmEoMjQzLCAyNDUsIDI0NywgLjgpOyAvLyAtLWN1bHR1cmVkXFxuXFxuLy8gR29vZ2xlIEZvbnRzXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw1MDA7MSwxMDAmZGlzcGxheT1zd2FwJyk7XFxuJHRpdGxlLWZvbnQ6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xcbiRib2R5LWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcbiVjb250ZW50LWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtaWxrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkc2xhdGU7XFxufVxcblxcbmJvZHksaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICRib2R5LWZvbnQ7XFxuICAgIGNvbG9yOiAkaGlnaGxpZ2h0O1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkb3VnaDtcXG59XFxuXFxuI3BhZ2Utd3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9jb29raWUtc3RhY2suanBnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJHRpdGxlLWZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogNS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0uMjVlbTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgY29sb3I6ICRzbGF0ZTtcXG59XFxuXFxuLnRpdGxlLWJhc2VsaW5lIHtcXG4gICAgd2lkdGg6IDIzcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkZG91Z2g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS43cmVtO1xcbiAgICBjb250ZW50OiAneSc7XFxufVxcblxcbi5zdWJ0aXRsZS1iYW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1pbGs7XFxuICAgIGNvbG9yOiAkc2xhdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5zdWJ0aXRsZSB7XFxuICAgIG1hcmdpbjogLjFlbTtcXG4gICAgZm9udC1mYW1pbHk6ICRib2R5LWZvbnQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2LXRhYi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDoyMHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2LXRhYiB7XFxuICAgIEBleHRlbmQgJWNvbnRlbnQtYm94O1xcbiAgICBtYXJnaW46IDBlbSAxcmVtO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxZW07XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIHBhZGRpbmc6IC41ZW07XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5uYXYtdGFiLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgbWFyZ2luLWJvdHRvbTouMWVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICB3aWR0aDo4MCU7XFxuICAgIG1heC13aWR0aDogNTByZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgQGV4dGVuZCAlY29udGVudC1ib3g7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLypcXG4gICAgTWVudSBTdHlsaW5nXFxuKi9cXG5cXG4ubWVudS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtY2FyZCB7XFxuICAgIEBleHRlbmQgJWNvbnRlbnQtYm94O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC44ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuXFxuICAgIC50ZXh0LXdyYXBwZXIge1xcbiAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XFxuXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBtYXJnaW46IC4zZW0gMGVtO1xcbiAgICAgICAgfSAgICBcXG5cXG4gICAgICAgIC5mb29kLXRpdGxlIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRoaWdobGlnaHQ7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjdlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5mb29kLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC51bml0LXByaWNlOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTaW5nbGU6ICQnO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRvemVuLXByaWNlOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdEb3plbjogJCdcXG4gICAgICAgIH1cXG4gICAgfVxcblxcblxcbiAgICAuaW1hZ2Utd3JhcHBlciB7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgaGVpZ2h0OiA4cmVtO1xcbiAgICAgICAgd2lkdGg6IDhyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAgIFxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzbGF0ZTtcXG4gICAgY29sb3I6ICRtaWxrO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gW1tcIklEXCIsXCJuYW1lXCIsXCJkZXNjcmlwdGlvblwiLFwidW5pdC1wcmljZVwiLFwiZG96ZW4tcHJpY2VcIixcImltYWdlVVJMXCJdLFtcIjAwMVwiLFwiQ2hvY29sYXRlIENoaXBcIixcIlRoaXMgdW5pcXVlIGNvb2tpZSBpcyB0aGUgcHJpemUgb2YgZXZlcnlib2R5XCIsXCIuNTdcIixcIjUuNjBcIixcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOS85YS9DaG9jb19jaGlwX2Nvb2tpZS5qcGdcIl0sW1wiMDAyXCIsXCJPYXRtZWFsIFJhc2luXCIsXCJUaGlzIG90aGVyIGNvb2tpZSwgaXMgYWxzbyB2ZXJ5IGdvb2RcIixcIi40OFwiLFwiNS4xMFwiLFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9mL2YxL09hdG1lYWxfUmFpc2luX0Nvb2tpZS5qcGVnXCJdLFtcIjAwM1wiLFwiUGVhbnV0IEJ1dHRlclwiLFwiRmlsbGVkIHdpdGggbnV0dHkgZGVsaWdodCwgdGhlc2UgYXJlIHNvZnQgYW5kIG1vaXN0XCIsXCIuNDlcIixcIjQuOTVcIixcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOS85OS9QZWFudXRfYnV0dGVyX2Nvb2tpZXNfd2l0aF9tJTI2bSUyN3NfYW5kX2Nob2NvbGF0ZV9jaGlwcy5qcGdcIl0sW1wiMDA0XCIsXCJMZW1vbiBHbGF6ZVwiLFwiQSBwZXJmZWN0IGJsZW5kIG9mIHRhcnQgYW5kIHN3ZWV0XCIsXCIuNTFcIixcIjUuMTBcIixcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZS9lMy9MZW1vbl9zaG9ydGJyZWFkX2Nvb2tpZXNfd2l0aF9sZW1vbl9yb3lhbF9pY2luZy5qcGdcIl0sW1wiMDA1XCIsXCJNb2xhc3Nlc1wiLFwiVGhlc2UgY2FycnkgdGhlIHBlcmZlY3QgdGFuZyBhbmQgY3J1bmNoXCIsXCIuNjNcIixcIjcuMDBcIixcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNy83NC9Nb2xhc3Nlcy1Db29raWVzLTIwMDZNYXJjaDA5LkpQR1wiXV0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBkbXkgZnJvbSAnLi9kb21teS5qcyc7XG5cbmNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkbXkuZWwoXCJkaXYuY29udGVudC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkbXkuZWwoXCJoMy5jb250ZW50LWhlYWRlclwiLFwiQ29udGFjdCBVc1wiKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRteS5lbCgnZGl2LmNvbnRhY3QtY29udGFpbmVyJyk7XG4gICAgXG5cbiAgICBkbXkuYXBwZW5kQ2hpbGRyZW4oY29udGFpbmVyLFxuICAgICAgICBkbXkuZWwoJ2g0JywnVGVsZXBob25lJyksXG4gICAgICAgIGRteS5lbCgncCcsJygxMjMpIDQ1Ni03ODkwJyksXG4gICAgICAgIGRteS5lbCgnaDQnLCdBZGRyZXNzJyksXG4gICAgICAgIGRteS5lbCgncCcsJzEyMyBTdHJlZXQgVG93bixTVCcpXG4gICAgICAgIClcbiAgICBkbXkuYXBwZW5kQ2hpbGRyZW4od3JhcHBlcixoZWFkZXIsY29udGFpbmVyKVxuICAgIHJldHVybiB3cmFwcGVyO1xufVxuXG5leHBvcnQge3JlbmRlcn07IiwiY29uc3QgcGFyc2VFbGVtZW50TmFtZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCBfZWxlbWVudCA9IHt0YWc6XCJcIiwgaWQ6XCJcIiwgY2xhc3NMaXN0OlwiXCJ9O1xuXG4gICAgbGV0IHN1YlN0cmluZ3MgPSAoZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGxldCBzeW1ib2xzID0gW1wiI1wiLFwiLlwiXTtcbiAgICAgICAgc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uKHN5bSl7XG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZUFsbChzeW0sKFwiJVwiICsgc3ltKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RyLnNwbGl0KFwiJVwiKTtcbiAgICB9KShzdHIpO1xuICAgIFxuXG4gICAgc3ViU3RyaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHNzdHIpIHtcbiAgICAgICAgc3dpdGNoIChzc3RyWzBdKSB7XG4gICAgICAgICAgICBjYXNlIChcIiNcIik6XG4gICAgICAgICAgICAgICAgX2VsZW1lbnQuaWQgPSBzc3RyLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoXCIuXCIpOlxuICAgICAgICAgICAgICAgIF9lbGVtZW50LmNsYXNzTGlzdCA9IF9lbGVtZW50LmNsYXNzTGlzdCArIFwiIFwiICsgc3N0ci5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgX2VsZW1lbnQudGFnID0gc3N0cjtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoX2VsZW1lbnQudGFnKTtcbiAgICAgICAgaWYgKF9lbGVtZW50LmlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBfZWxlbWVudC5pZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2VsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ID0gX2VsZW1lbnQuY2xhc3NMaXN0LnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG5cbn1cblxuY29uc3QgZWwgPSBmdW5jdGlvbiAobmFtZSwgdGV4dENvbnRlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gcGFyc2VFbGVtZW50TmFtZShuYW1lKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IGFwcGVuZENoaWxkcmVuID0gZnVuY3Rpb24ocGFyZW50LCAuLi5jaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9KVxufVxuXG5cbmV4cG9ydCB7ZWwsIGFwcGVuZENoaWxkcmVufTsiLCIvLyBMb2NhaW9uIG9mIGltYWdlIGZpbGUgZm9yIEdpdGh1YiBtYXJrXG5pbXBvcnQgZ2l0TWFya0ZpbGUgZnJvbSAnLi9pbWcvZ2l0aHViLnBuZyc7XG5cbi8vR2l0aHViIHJlcG8gVVJMOlxuY29uc3QgcmVwb1VSTCA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2JhcmRvbmZyby9vZGluLWJha2VyeVwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZ2l0TWFyayA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBnaXRNYXJrLnNyYyA9IGdpdE1hcmtGaWxlO1xuICAgICAgICBnaXRNYXJrLmNsYXNzTGlzdCA9IFwiZ2l0aHViLW1hcmtcIjtcbiAgICAgICAgZ2l0TWFyay5zdHlsZSA9IFwiaGVpZ2h0OiAxZW07XCJcblxuICAgIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGdpdExpbmsuY2xhc3NMaXN0ID0gJ2dpdGh1Yi1saW5rJztcbiAgICAgICAgZ2l0TGluay5ocmVmID0gcmVwb1VSTDtcbiAgICAgICAgZ2l0TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICBnaXRMaW5rLmFwcGVuZENoaWxkKGdpdE1hcmspO1xuICAgICAgICBnaXRMaW5rLnN0eWxlID0gXCJtYXJnaW4tbGVmdDogMWVtOyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsganVzdGlmeS1jb250ZW50OmNlbnRlcjtcIjtcblxuICAgICAgICBcbiAgICBjb25zdCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0V3JhcHBlci50ZXh0Q29udGVudCA9ICdcXHUwMEE5ICcgKyAobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKSArICcgYmFyZG9uZnJvJztcbiAgICAgICAgXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb3Rlci5pZCA9ICdmb290ZXInO1xuICAgICAgICBmb290ZXIuc3R5bGUgPSBcInRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogLjZlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7XCJcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZCh0ZXh0V3JhcHBlcik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdExpbmspO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn0iLCJpbXBvcnQgKiBhcyBkbXkgZnJvbSAnLi9kb21teS5qcyc7XG5cbmNvbnN0IGludHJvVGV4dCA9IFwiVGhhbmsgeW91IGZvciB2aXNpdGluZyB1cyBvbiB0aGUgd2ViLiBXZSBwcmlkZSBvdXJzZWx2ZXMgaW4gbWFraW5nIHRoZSBmaW5lc3QgY29va2llcyB3ZSBtYWtlLiBPdXIgcXVhbGl0eSBpbmdyZWRpZW50cyBjb21lIGZyb20gZ3JvY2VyeSBzdG9yZXMsIGNhcmVmdWxseSBzZWxlY3RlZCBhbmQgcGFpZCBmb3IgYnkgYSBzaG9wcGVyLiBJbiB0aGUgYmFrZXJ5IHlvdSBtaWdodCBmaW5kIHdvcmtlcnMgd29ya2luZy4gVGhlcmUgaXMgcHJvYmFibHkgYSBtYWNoaW5lLiBZb3Ugc2hvdWxkIG5vdCBmaW5kIGFueSByYXRzLiBXZSBob3BlIHlvdSBzdG9wIGJ5IHRvIGJ1eS5cIjtcblxuY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRteS5lbChcImRpdi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkbXkuZWwoXCJoMy5jb250ZW50LWhlYWRlclwiLFwiV2VsY29tZVwiKTtcblxuICAgIGNvbnN0IGludHJvID0gZG15LmVsKFwicC5pbnRyb1wiLGludHJvVGV4dCk7XG5cbiAgICBkbXkuYXBwZW5kQ2hpbGRyZW4od3JhcHBlcixoZWFkZXIsaW50cm8pO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmV4cG9ydCB7cmVuZGVyfTsiLCJpbXBvcnQgRGF0YSBmcm9tICcuL21lbnUuY3N2JztcbmltcG9ydCBkZWZhdWx0SW1hZ2UgZnJvbSAnLi9pbWcvZGVmYXVsdC5qcGVnJztcbmNvbnN0IGdldEltYWdlc09ubGluZSA9IHRydWU7XG5cblxuY29uc3QgZ2V0SW1hZ2UgPSBmdW5jdGlvbihVUkwpIHtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0ID0gJ2Nvb2tpZS1pbWFnZSc7XG4gICAgXG4gICAgaWYgKGdldEltYWdlc09ubGluZSkge1xuICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gVVJMO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBkZWZhdWx0SW1hZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlRWxlbWVudDtcbn1cblxuY29uc3QgY3JlYXRlQXJyYXkgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgYXJyTWVudSA9IFtdO1xuICAgIFxuICAgIC8vVG8gaWRlbnRpZnkgdGhlIGNvbHVtbiBtYXBwaW5nXG4gICAgY29uc3QgaW5kZXggPSB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAxLFxuICAgICAgICBkZXNjcmlwdGlvbjogMixcbiAgICAgICAgdW5pdFByaWNlOiAzLFxuICAgICAgICBkb3plblByaWNlOiA0LFxuICAgICAgICBpbWFnZVVSTDogNSxcbiAgICB9O1xuXG4gICAgRGF0YS5zbGljZSgxKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgaWQgPSBpdGVtW2luZGV4LmlkXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGl0ZW1baW5kZXgubmFtZV07XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaXRlbVtpbmRleC5kZXNjcmlwdGlvbl07XG4gICAgICAgIGNvbnN0IHVuaXRQcmljZSA9IGl0ZW1baW5kZXgudW5pdFByaWNlXTtcbiAgICAgICAgY29uc3QgZG96ZW5QcmljZSA9IGl0ZW1baW5kZXguZG96ZW5QcmljZV07XG4gICAgICAgIGNvbnN0IGltYWdlVVJMID0gaXRlbVtpbmRleC5pbWFnZVVSTF07XG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGdldEltYWdlKGltYWdlVVJMKTtcblxuICAgICAgICBhcnJNZW51LnB1c2goe2lkLCBuYW1lLCBkZXNjcmlwdGlvbiwgdW5pdFByaWNlLCBkb3plblByaWNlLCBpbWFnZVVSTCxpbWFnZUVsZW1lbnR9KTtcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiBhcnJNZW51O1xufVxuXG5jb25zdCBhcnJNZW51ID0gY3JlYXRlQXJyYXkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7cmV0dXJuIGFyck1lbnU7fVxuIiwiaW1wb3J0ICogYXMgZG15IGZyb20gJy4vZG9tbXkuanMnO1xuaW1wb3J0IG1lbnVQcm9jZXNzIGZyb20gJy4vbWVudS1wcm9jZXNzLmpzJztcblxuY29uc3QgbWVudUl0ZW1zID0gbWVudVByb2Nlc3MoKTtcblxuY29uc3QgcmVuZGVyTWVudUl0ZW0gPSBmdW5jdGlvbiAoZm9vZCkge1xuICAgIGNvbnN0IGNhcmQgPSBkbXkuZWwoXCJkaXYubWVudS1jYXJkXCIpO1xuICAgIGNvbnN0IHRleHRXcmFwcGVyID0gZG15LmVsKFwiZGl2LnRleHQtd3JhcHBlclwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG15LmVsKFwiaDQuZm9vZC10aXRsZVwiLGZvb2QubmFtZSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkbXkuZWwoXCJwLmZvb2QtZGVzY3JpcHRpb25cIixmb29kLmRlc2NyaXB0aW9uKTtcbiAgICBjb25zdCB1bml0UHJpY2UgPSBkbXkuZWwoXCJwLnVuaXQtcHJpY2VcIixmb29kLnVuaXRQcmljZSk7XG4gICAgY29uc3QgZG96ZW5QcmljZSA9IGRteS5lbChcInAuZG96ZW4tcHJpY2VcIixmb29kLmRvemVuUHJpY2UpO1xuICAgIFxuICAgIGNvbnN0IGltYWdlV3JhcHBlciA9IGRteS5lbChcImRpdi5pbWFnZS13cmFwcGVyXCIpO1xuICAgIGNvbnN0IGltYWdlID0gZm9vZC5pbWFnZUVsZW1lbnQ7XG4gICAgaW1hZ2VXcmFwcGVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgIFxuICAgIGRteS5hcHBlbmRDaGlsZHJlbih0ZXh0V3JhcHBlcix0aXRsZSxkZXNjcmlwdGlvbix1bml0UHJpY2UsZG96ZW5QcmljZSlcbiAgICBkbXkuYXBwZW5kQ2hpbGRyZW4oY2FyZCxpbWFnZVdyYXBwZXIsdGV4dFdyYXBwZXIpO1xuICAgIFxuICAgIHJldHVybiBjYXJkO1xuXG59XG5cbmNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkbXkuZWwoXCJkaXYuY29udGVudC1jb250YWluZXJcIik7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG15LmVsKFwiaDMuY29udGVudC1oZWFkZXJcIixcIk91ciBNZW51XCIpO1xuXG4gICAgY29uc3QgbWVudVdyYXBwZXIgPSBkbXkuZWwoXCJkaXYubWVudS13cmFwcGVyXCIpO1xuXG4gICAgbWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChyZW5kZXJNZW51SXRlbShpdGVtKSk7XG4gICAgfSk7XG5cbiAgICBkbXkuYXBwZW5kQ2hpbGRyZW4od3JhcHBlcixoZWFkZXIsbWVudVdyYXBwZXIpO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmV4cG9ydCB7cmVuZGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgKiBhcyBob21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgKiBhcyBtZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgKiBhcyBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcbmltcG9ydCAqIGFzIGRteSBmcm9tICcuL2RvbW15LmpzJztcbmltcG9ydCBnaXRodWIgZnJvbSAnLi9pbWcvZ2l0aHViLnBuZyc7XG5cbmxldCBwYWdlcyA9W1xuICAgIHtuYW1lOiBcIkhvbWVcIiwgcmVuZGVyOiBob21lLnJlbmRlcn0sXG4gICAge25hbWU6IFwiTWVudVwiLCByZW5kZXI6IG1lbnUucmVuZGVyfSxcbiAgICB7bmFtZTogXCJDb250YWN0XCIsIHJlbmRlcjogY29udGFjdC5yZW5kZXJ9LFxuXTtcbmNvbnN0IHN0YXJ0UGFnZSA9IHBhZ2VzWzBdO1xuXG5jb25zdCBwYWdlV3JhcHBlciA9IGRteS5lbChcImRpdiNwYWdlLXdyYXBwZXJcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlV3JhcHBlcik7XG5cbmNvbnN0IGhlYWRlcldyYXBwZXIgPSBkbXkuZWwoXCJkaXYjaGVhZGVyXCIpO1xuY29uc3QgcGFnZUhlYWRlciA9IGRteS5lbChcImgxLnRpdGxlXCIsIFwiR29sZGVuIEVkZ2VcIik7XG5jb25zdCB0aXRsZUJhc2VsaW5lID0gZG15LmVsKFwiZGl2LnRpdGxlLWJhc2VsaW5lXCIpO1xuY29uc3Qgc3VidGl0bGVCYW5kID0gZG15LmVsKCdkaXYuc3VidGl0bGUtYmFuZCcpO1xuXG5jb25zdCBwYWdlU3ViaGVhZCA9IGRteS5lbChcImgyLnN1YnRpdGxlXCIsIFwiQ29uZmVjdGlvbmVycyBvZiBGaW5lIENvb2tpZXNcIik7XG5zdWJ0aXRsZUJhbmQuYXBwZW5kQ2hpbGQocGFnZVN1YmhlYWQpO1xuXG5jb25zdCBuYXYgPSBkbXkuZWwoXCJkaXYubmF2XCIpO1xuY29uc3QgbmF2VGFiV3JhcHBlciA9IGRteS5lbChcImRpdi5uYXYtdGFiLXdyYXBwZXJcIik7XG5uYXYuYXBwZW5kQ2hpbGQobmF2VGFiV3JhcHBlcik7XG5cbnBhZ2VzLmZvckVhY2goZnVuY3Rpb24ocGFnZSkge1xuICAgIG5hdlRhYldyYXBwZXIuYXBwZW5kQ2hpbGQobmV3TmF2VGFiKHBhZ2UpKTtcbn0pXG5cbmNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG15LmVsKFwiZGl2I2NvbnRlbnRcIik7XG5cbmRteS5hcHBlbmRDaGlsZHJlbihoZWFkZXJXcmFwcGVyLCBwYWdlSGVhZGVyLHRpdGxlQmFzZWxpbmUsIHN1YnRpdGxlQmFuZCk7XG5kbXkuYXBwZW5kQ2hpbGRyZW4ocGFnZVdyYXBwZXIsaGVhZGVyV3JhcHBlcixuYXYsY29udGVudFdyYXBwZXIsZm9vdGVyKCkpO1xuXG5cbmZ1bmN0aW9uIG5ld05hdlRhYihvYmopIHtcbiAgICBjb25zdCBidG4gPSBkbXkuZWwoXCJkaXYubmF2LXRhYlwiLG9iai5uYW1lKTtcbiAgICBvYmouYnV0dG9uID0gYnRuO1xuICAgIGJ0bi5vbmNsaWNrID0gY2xpY2tOYXZUYWIuYmluZChvYmopO1xuXG4gICAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gY2xpY2tOYXZUYWIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBjb250ZW50V3JhcHBlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoKSk7XG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuXG4vL0luaXRpYWwgcGFnZSBsb2FkIC0gZGVmYXVsdCB0byBIb21lXG5jb25zdCBpbml0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHN0YXJ0UGFnZS5yZW5kZXIoKSk7XG4gICAgc3RhcnRQYWdlLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=