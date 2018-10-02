import React, { Component } from 'react';
import './App.css';
import BeerList from "./components/BeerList";

class App extends Component {

  render() {
    return (
      <div className="App">
        <BeerList />
      </div>
    );
  }
}

export default App;
