webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/modules/bingoSet.js":
/*!***********************************!*\
  !*** ./redux/modules/bingoSet.js ***!
  \***********************************/
/*! exports provided: actionCreators, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCreators", function() { return actionCreators; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


// actions
var GAME_START = "GAME_START";
var SELECTING_NUMBER = "SELECTING_NUMBER"; // action creators

function gameStart(playerSet) {
  return {
    type: GAME_START,
    playerSet: playerSet
  };
}

function selectingNumber(number) {
  return {
    type: SELECTING_NUMBER,
    number: number
  };
} // initial state


var initialState = {
  gameStarted: false,
  maxNumber: 25,
  selectedNumber: [],
  player: [[], []],
  turn: true
}; // reducer

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GAME_START:
      return applyGameStart(state, action);

    case SELECTING_NUMBER:
      return applyselectingNumber(state, action);

    default:
      return state;
  }
} // reducer functions


function applyGameStart(state, action) {
  var playerSet = action.playerSet;
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    gameStarted: true,
    selectedNumber: [],
    turn: true,
    player: playerSet
  });
}

function applyselectingNumber(state, action) {
  var selectedNumber = state.selectedNumber,
      turn = state.turn;
  var number = action.number;

  var updateNumber = function updateNumber() {
    return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedNumber), [number]);
  };

  var turnChange = function turnChange() {
    if (turn) {
      return false;
    } else {
      return true;
    }
  };

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    selectedNumber: updateNumber(),
    turn: turnChange()
  });
} // exports


var actionCreators = {
  gameStart: gameStart,
  selectingNumber: selectingNumber
};
 // export reducer by default

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=index.js.3a52873742fdf6432093.hot-update.js.map