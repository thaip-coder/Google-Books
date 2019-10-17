import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Saved from "./components/Saved";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
 

const App = () => {
 
    return (
      <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/Saved" exact component={Saved}/>
      </div>
      </Router>
    );
  
}

export default App;
