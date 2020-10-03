import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Make a hot module replacement
const rootEl = document.getElementById("root");
const render = () =>
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootEl
  );

if (module.hot) module.hot.accept("./App.js", () => setTimeout(() => render()));
render();

serviceWorker.unregister();
