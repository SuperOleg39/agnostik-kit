import React, { useState, useCallback } from 'react';
import { createPreactAdapter } from 'adapters-preact-to-react';
import { Button, Link, Div } from 'components-preact';
import logo from './logo.svg';
import './App.css';

const AdaptedButton = createPreactAdapter(Button);
const AdaptedLink = createPreactAdapter(Link);
const AdaptedDiv = createPreactAdapter(Div);

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

        <AdaptedButton type="button" onClick={handleClick} children={`clicked ${count} times`} />

        <AdaptedButton type="button" onClick={handleClick}>
          clicked {count} times
        </AdaptedButton>

        <AdaptedButton type="button" onClick={handleClick}>
          <AdaptedLink href="#">clicked {count} times</AdaptedLink>
        </AdaptedButton>

        <AdaptedDiv onClick={handleClick}>
          {() => (
            <>
              <AdaptedLink href="#">
                clicked {count} times
              </AdaptedLink>
              <AdaptedButton type="button" onClick={handleClick}>
                {() => (
                  <>
                    <AdaptedLink href="#">
                      <p>clicked {count} times</p>
                    </AdaptedLink>
                  </>
                )}
              </AdaptedButton> 
            </>
          )}
        </AdaptedDiv>

        <AdaptedButton type="button" onClick={handleClick}>
          <a href="#">clicked {count} times</a>
        </AdaptedButton>

        <AdaptedDiv onClick={handleClick}>
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
