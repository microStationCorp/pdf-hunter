import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { queryReducer } from "./reducer/reducer.js";

const middleware = [thunk];

const store = createStore(
  queryReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


export default store;
