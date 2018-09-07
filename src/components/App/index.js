import React, { Component } from 'react';
import './App.css';
import Intro from'../intro';


class App extends Component {

  state = {
    series: [1, 2, 3]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Intro />
        The length of array {this.state.series.length}
      </div>
    );
  }
}

export default App;
