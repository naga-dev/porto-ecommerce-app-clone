import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Make a hot module replacement
const rootEl = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootEl);

if (module.hot) module.hot.accept('./App.js', () => setTimeout(() => render()));
render();

serviceWorker.unregister();
