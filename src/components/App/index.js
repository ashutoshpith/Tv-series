import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Main from '../Main';
import Series from '../../containers/Series';

class App extends Component {

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Series/>
     
      </div>
    );
  }
}

export default App;
