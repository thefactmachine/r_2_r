import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = "Welcome to the world of React with a Variable"
      return (
        <div className="App">
          <h2>{helloWorld}</h2>
        </div>
      );
  }
}

export default App;
