import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.SERVER = true;
const fromServer = ReactDOMServer.renderToString(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
window.SERVER = false;

document.getElementById('root').innerHTML = fromServer;

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();