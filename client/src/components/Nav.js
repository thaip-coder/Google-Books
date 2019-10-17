import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
 
    return (
      <nav>
        <ul className="navbar-nav bg-light">
            <li><h1>Google Book Search</h1></li>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to="/Saved">
            <li>Saved Books</li>
            </Link>
        </ul>
      </nav>
    );
  
}

export default Nav;