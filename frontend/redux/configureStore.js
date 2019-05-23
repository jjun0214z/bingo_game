import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bingoSet from "./modules/bingoSet";

const env = process.env.NODE_ENV;
const middlewares = [thunk];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  bingoSet
});

let store = initialState => createStore(reducer, applyMiddleware(...middlewares));

export default store();
