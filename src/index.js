import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Redux Stuff
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { persistGate } from "redux-persist/integration/react";

// Make a hot module replacement
const rootEl = document.getElementById("root");
const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <persistGate persistor={persistor}>
          <App />
        </persistGate>
      </BrowserRouter>
    </Provider>,
    rootEl
  );

if (module.hot) module.hot.accept("./App.js", () => setTimeout(() => render()));
render();

serviceWorker.unregister();
