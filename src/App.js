import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <div className="alert alert-secondary" role="alert">
          A simple secondary alert—check it out!
        </div>
        <div className="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
        <div className="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
        <div className="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>
        <div className="alert alert-info" role="alert">
          A simple info alert—check it out!
        </div>
        <div className="alert alert-light" role="alert">
          A simple light alert—check it out!
        </div>
        <div className="alert alert-dark" role="alert">
          A simple dark alert—check it out!
        </div>
      </div>
    );
  }
}

export default App;