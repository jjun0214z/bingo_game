webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/BingoCell/index.js":
/*!***************************************!*\
  !*** ./components/BingoCell/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ "./components/BingoCell/Container.js");
/* harmony import */ var _redux_modules_bingoSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/bingoSet.js */ "./redux/modules/bingoSet.js");




var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    selectingNumber: function selectingNumber(event) {
      var target = event.target;
      dispatch(_redux_modules_bingoSet_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].selectingNumber(Number(target.innerText)));
    },
    notTurn: function notTurn(event) {
      var target = event.target;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_Container__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

})
//# sourceMappingURL=index.js.f02d6bf84f294a220045.hot-update.js.map