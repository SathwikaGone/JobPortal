import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducers from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

export const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
