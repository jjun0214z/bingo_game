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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







var _jsxFileName = "C:\\Users\\min\\Documents\\min\\bingo\\frontend\\components\\BingoCell\\Container.js";




var BingoCell =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BingoCell, _Component);

  function BingoCell() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BingoCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BingoCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_handlePlayer", function (player, bingoSet) {
      var turn = bingoSet.turn;

      if (player === "player1" && turn || player === "player2" && !turn) {
        return selectingNumber;
      } else {
        return null;
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BingoCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          player = _this$props.player,
          selectingNumber = _this$props.selectingNumber,
          number = _this$props.number,
          bingoSet = _this$props.bingoSet,
          activeklass = _this$props.activeklass;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Button, {
        activeklass: activeklass,
        onClick: selectingNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, number) // onClick={
      //   (player === "player1" && bingoSet.turn) || (player === "player2" && !bingoSet.turn)
      //     ? selectingNumber
      //     : null
      // }
      ;
    }
  }]);

  return BingoCell;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var Button = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.withConfig({
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
//# sourceMappingURL=index.js.af3380968af6c09391cf.hot-update.js.map