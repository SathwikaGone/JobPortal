import { applyMiddleware, createStore } from "redux";
import rootReducer from "../src/Redux/reducers";
import { middleware } from "../src/Redux/store";

export const findByTestAt = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = (initialState) => {
  const storeMiddlewares = applyMiddleware(...middleware)(createStore);
  return storeMiddlewares(rootReducer, initialState);
};
