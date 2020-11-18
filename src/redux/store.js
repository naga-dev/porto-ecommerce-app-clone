import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReudcer from "./rootReducer";

const middlewares = [logger];

const store = createStore(rootReudcer, applyMiddleware(...middlewares));

export default store;
