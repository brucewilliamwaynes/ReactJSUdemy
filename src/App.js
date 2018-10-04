import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        <h1>Hi, I'm a React App</h1>
        <p>Is this really working ?</p>
        <Person></Person>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hey, I\'m a React-ive App'));
  }
}

export default App;
