webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/BingoPlate/Container.js":
/*!********************************************!*\
  !*** ./components/BingoPlate/Container.js ***!
  \********************************************/
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
/* harmony import */ var _BingoCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BingoCell */ "./components/BingoCell/index.js");







var _jsxFileName = "C:\\Users\\min\\Documents\\min\\bingo\\frontend\\components\\BingoPlate\\Container.js";





var BingoPlate =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BingoPlate, _Component);

  function BingoPlate() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BingoPlate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BingoPlate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_activeKlass", function (selectedNumber, currentNumber) {
      var state = null;
      selectedNumber.forEach(function (number) {
        if (number === currentNumber) {
          state = true;
        }
      });
      return state;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BingoPlate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          playerName = _this$props.playerName,
          playerTarget = _this$props.playerTarget,
          bingoSet = _this$props.bingoSet;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Player, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, playerName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Plate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, playerTarget === 0 ? bingoSet.player[0].map(function (number, idx) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BingoCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
          number: number,
          bingoSet: bingoSet,
          activeklass: _this2._activeKlass(bingoSet.selectedNumber, number),
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        });
      }) : bingoSet.player[1].map(function (number, idx) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BingoCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
          number: number,
          bingoSet: bingoSet,
          activeklass: _this2._activeKlass(bingoSet.selectedNumber, number),
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TxtBingo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "\uC644\uC131\uB41C \uB77C\uC778 : 1"));
    }
  }]);

  return BingoPlate;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var Player = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].strong.withConfig({
  displayName: "Container__Player",
  componentId: "wh520b-0"
})(["margin-bottom:20px;display:block;font-size:20px;font-weight:bold;line-height:24px;"]);
var Plate = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Container__Plate",
  componentId: "wh520b-1"
})(["width:450px;height:450px;border:1px solid #333;&:after{content:\"\";display:block;clear:both;}"]);
var TxtBingo = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "Container__TxtBingo",
  componentId: "wh520b-2"
})(["margin-top:20px;font-size:20px;font-weight:bold;"]);
/* harmony default export */ __webpack_exports__["default"] = (BingoPlate);

/***/ })

})
//# sourceMappingURL=index.js.ea2ed12631d9fdc40171.hot-update.js.map