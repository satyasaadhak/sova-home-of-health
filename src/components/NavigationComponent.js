import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  render() {
    return(
      <header>
        <div className="container">
          <div className="logo">
            <img src="/images/logo.webp" alt="Sova - Home Of Health" />
          </div>
          <nav className="navBar">
            <NavLink className="nav-link" to="">
              Home
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navigation;