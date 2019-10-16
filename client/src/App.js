import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Saved from "./Saved";
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Saved />
      </div>
    );
  }
}

export default App;
