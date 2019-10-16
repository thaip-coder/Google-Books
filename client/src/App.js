import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/index";
import Home from "./components/Home/index";
import Saved from "./components/Saved/index";
 

const App = () => {
 
    return (
      <div className="App">
        <Nav />
        <Home />
        <Saved />
      </div>
    );
  
}

export default App;
