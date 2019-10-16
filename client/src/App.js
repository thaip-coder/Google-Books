import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/index";
import Home from "./components/Home/index";
import Saved from "./components/Saved/index";
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
