import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Saved from "./components/Saved";
 

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
