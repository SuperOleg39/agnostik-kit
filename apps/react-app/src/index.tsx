import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { renderToString } from 'stencil-kit-2/hydrate'
import { applyPolyfills, defineCustomElements } from 'stencil-kit-2/loader'
import './index.css';
import AppPreact from './AppPreact';
import AppStencil from './AppStencil';
import * as serviceWorker from './serviceWorker';

async function mainPreact() {
  (window as any).SERVER = true;
  const fromServer = ReactDOMServer.renderToString(
    <React.StrictMode>
      <AppPreact />
    </React.StrictMode>
  );
  (window as any).SERVER = false;
  
  document.getElementById('root').innerHTML = fromServer;
  
  ReactDOM.hydrate(
    <React.StrictMode>
      <AppPreact />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

async function mainStencil() {
  (window as any).SERVER = true;
  let fromServer = await ReactDOMServer.renderToString(
    <React.StrictMode>
      <AppStencil />
    </React.StrictMode>
  );

  document.getElementById('root').innerHTML = fromServer;

  debugger;

  fromServer = (await renderToString(fromServer)).html;

  document.getElementById('root').innerHTML = fromServer;
  (window as any).SERVER = false;

  debugger;

  ReactDOM.hydrate(
    <React.StrictMode>
      <AppStencil />
    </React.StrictMode>,
    document.getElementById('root')
  );

  debugger;

  await applyPolyfills();
  await defineCustomElements(window);

  debugger;
}

// mainPreact();
mainStencil();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();