webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/BingoCell/Container.js":
/*!*******************************************!*\
  !*** ./components/BingoCell/Container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "C:\\Users\\min\\Documents\\min\\bingo\\frontend\\components\\BingoCell\\Container.js";




var BingoCell =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BingoCell, _Component);

  function BingoCell() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BingoCell);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BingoCell).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BingoCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          player = _this$props.player,
          selectingNumber = _this$props.selectingNumber,
          notTurn = _this$props.notTurn,
          number = _this$props.number,
          bingoSet = _this$props.bingoSet,
          activeklass = _this$props.activeklass;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Button, {
        activeklass: activeklass,
        onClick: player === "player1" && bingoSet.turn || player === "player2" && !bingoSet.turn ? selectingNumber : notTurn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, number);
    }
  }]);

  return BingoCell;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var Button = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
  displayName: "Container__Button",
  componentId: "sc-110784a-0"
})(["width:20%;height:20%;float:left;border:1px solid #333;background-color:", ";outline:none;color:", ";"], function (props) {
  if (props.activeklass) return "#287ac6";
}, function (props) {
  if (props.activeklass) return "#fff";
});
/* harmony default export */ __webpack_exports__["default"] = (BingoCell);

/***/ })

})
//# sourceMappingURL=index.js.3b99875727a250a01c74.hot-update.js.map