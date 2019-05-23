webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PlateWrapper/Container.js":
/*!**********************************************!*\
  !*** ./components/PlateWrapper/Container.js ***!
  \**********************************************/
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
/* harmony import */ var _BingoPlate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BingoPlate */ "./components/BingoPlate/index.js");







var _jsxFileName = "C:\\Users\\min\\Documents\\min\\bingo\\frontend\\components\\PlateWrapper\\Container.js";





var PlateWrapper =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PlateWrapper, _Component);

  function PlateWrapper() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PlateWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PlateWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      playerName: ["player1", "player2"]
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PlateWrapper, [{
    key: "render",
    value: function render() {
      var playerName = this.state.playerName;
      var bingoSet = this.props.bingoSet;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Bingo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PlateWrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, playerName.map(function (name, idx) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BingoPlate__WEBPACK_IMPORTED_MODULE_9__["default"], {
          playerName: name,
          bingoSet: bingoSet,
          playerTarget: idx,
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("playerTurn", {
        turn: bingoSet.trun,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }
  }]);

  return PlateWrapper;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var playerTurn = function playerTurn(_ref) {
  var turn = _ref.turn;
  return turn ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Turn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\uD134: player1") : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Turn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\uD134: player2");
};

var Bingo = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Container__Bingo",
  componentId: "sc-125lhy4-0"
})(["width:1000px;margin:0 auto;padding:100px 0 50px;"]);
var PlateWrap = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Container__PlateWrap",
  componentId: "sc-125lhy4-1"
})(["display:flex;justify-content:space-between;"]);
var Turn = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "Container__Turn",
  componentId: "sc-125lhy4-2"
})(["margin-top:50px;font-size:30px;line-height:40px;font-weight:bold;text-align:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (PlateWrapper);

/***/ })

})
//# sourceMappingURL=index.js.05007cb9101a4a7b45e6.hot-update.js.map