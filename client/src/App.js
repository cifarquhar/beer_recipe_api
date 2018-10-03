import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import BeerList from "./components/BeerList";
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (

      <Router>

        <div className="App">
          <NavBar />


          <BeerList />
        </div>
      </Router>
    );
  }
}

export default App;
