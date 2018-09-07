import React, { Component } from 'react';
import './App.css';
import Intro from'../intro';
import 'whatwg-fetch';
import Series from '../../containers/index'

class App extends Component {

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Intro />
       <Series />
      </div>
    );
  }
}

export default App;
