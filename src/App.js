import React, { Component } from 'react';
import * as Button from './components/Button/button.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
          <>
            <Button.Success
              text='Submit'
              type='submit'
              onClick={() => { }}
              buttonSize={Button.SIZES.LARGE}
            />
            <Button.Warning
              text='Cancel'
              onClick={() => { }}
              buttonSize={Button.SIZES.MEDIUM}
            />
          </>
        </header>
      </div>
    );
  }
}

export default App;
