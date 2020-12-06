import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReudcer from "./rootReducer";

const middlewares = [logger];

export const store = createStore(rootReudcer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
