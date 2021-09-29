import React, { useState, useCallback } from 'react';
import { createStencilAdapter } from 'adapters-stencil-to-react';
// import { StencilKitButton, StencilKitLink, StencilKitDiv } from 'stencil-kit-2/react/src/components';
import logo from './logo.svg';
import './App.css';

const AdaptedButton = createStencilAdapter('stencil-kit-button');
const AdaptedLink = createStencilAdapter('stencil-kit-link');
const AdaptedDiv = createStencilAdapter('stencil-kit-div');

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* eslint-disable-next-line */}
        <a href="#" onClick={handleClick}>clicked {count} times</a>

        <AdaptedButton type="button" onClick={handleClick} children={`clicked ${count} times`} />

        <AdaptedButton type="button" onClick={handleClick}>
          clicked {count} times
        </AdaptedButton>

        <AdaptedButton type="button" onClick={handleClick}>
          <AdaptedLink href="#">clicked {count} times</AdaptedLink>
        </AdaptedButton>

        <AdaptedDiv onClick={handleClick}>
          <>
            <AdaptedLink href="#">
              clicked {count} times
            </AdaptedLink>
            <AdaptedButton type="button" onClick={handleClick}>
              <>
                <AdaptedLink href="#">
                  <p>clicked {count} times</p>
                </AdaptedLink>
              </>
            </AdaptedButton> 
          </>
        </AdaptedDiv>

        <AdaptedButton type="button" onClick={handleClick}>
          {/* eslint-disable-next-line */}
          <a href="#">clicked {count} times</a>
        </AdaptedButton>

        <AdaptedDiv onClick={handleClick}>
          {/* eslint-disable-next-line */}
          <a href="#">clicked {count} times</a>
          <AdaptedButton type="button" onClick={handleClick}>
            <AdaptedLink href="#">clicked {count} times</AdaptedLink>
          </AdaptedButton>
        </AdaptedDiv>

      </header>
    </div>
  );
}

export default App;
