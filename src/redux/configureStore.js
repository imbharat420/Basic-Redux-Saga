import { combineReducers, createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core";
import userReducer from "./ducks/user";
import { watcherSaga } from "./sagas/rootSaga.js";

const reducer = combineReducers({
  user: userReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];


const store = createStore(reducer, {}, applyMiddleware(...middleware));


sagaMiddleware.run(watcherSaga);

export default store;