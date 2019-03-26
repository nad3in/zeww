import React, { Component } from 'react'
import '../NavBar/NavBar.css';
import {Link , Route} from 'react-router-dom';
class NavBar extends Component {
    render() {
        return ( 
<nav className="navbar navbar-expand-lg navbar-light bg-light zewwNavBar">
  <img className="logo" href="#" src={require("../images/logo.png")}/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/whyzeww">Why Zeww?</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/pricing" > Pricing </Link>
      </li> 
      <li className="nav-item">
        <Link className="nav-link" to="/aboutus" > About Us </Link>
      </li>
    </ul>
  </div>
  <Route path="/" />
  <Route path="/" />
  <Route path="/" />
</nav>
        )
    }
}

export default NavBar