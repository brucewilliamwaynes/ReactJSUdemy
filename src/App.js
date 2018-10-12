import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons :[
      {name:"Abhishek", age:21},
      {name:"Anirban", age:21}
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Ouch! clicked');
    //Don't do this: this.state.person[0].name = "Batman";
    
    /*Changing just the individual element we want to change doesn't work
    *Individual state elements can be mutated without changing the other state element
    * but not within state element.
    * Can you find out a way for it ? (5 Brownie points)
    */
    this.setState({
      persons: [
        {name:newName, age:21},
        {name:"Anirban", age:22}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons : [
        {name: 'Abhishek', age:21},
        {name: event.target.value, age:22}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      padding: '8px',
      border: '1px solid blue'
    }

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
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Abhi') }>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={() => this.switchNameHandler()}>
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
          My Hobbies: Football
        </Person>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hey, I\'m a React-ive App'));
  }
}

export default App;
