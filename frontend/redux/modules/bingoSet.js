// actions
const GAME_START = "GAME_START";
const SELECTING_NUMBER = "SELECTING_NUMBER";

// action creators
function gameStart(playerSet) {
  return {
    type: GAME_START,
    playerSet
  };
}

function selectingNumber(number) {
  return {
    type: SELECTING_NUMBER,
    number
  };
}

// initial state
const initialState = {
  gameStarted: false,
  maxNumber: 25,
  selectedNumber: [],
  player: [[], []],
  turn: true
};
// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case GAME_START:
      return applyGameStart(state, action);
    case SELECTING_NUMBER:
      return applyselectingNumber(state, action);
    default:
      return state;
  }
}
// reducer functions
function applyGameStart(state, action) {
  const { playerSet } = action;
  return {
    ...state,
    gameStarted: true,
    selectedNumber: [],
    turn: true,
    player: playerSet
  };
}
function applyselectingNumber(state, action) {
  const { selectedNumber, turn } = state;
  const { number } = action;
  const updateNumber = () => {
    return [...selectedNumber, number];
  };
  const turnChange = () => {
    if (turn) {
      return false;
    } else {
      return true;
    }
  };
  return {
    ...state,
    selectedNumber: updateNumber(),
    turn: turnChange()
  };
}

// exports
const actionCreators = {
  gameStart,
  selectingNumber
};
export { actionCreators };
// export reducer by default
export default reducer;
