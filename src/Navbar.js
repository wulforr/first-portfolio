import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class Navbar extends Component {

    openNav = () => {
    document.getElementsByClassName("nav-grid")[0].style.display = "grid";
    document.getElementById("mySidenav").style.width = "25%";
    // document.getElementsByClassName("App")[0].style.opacity="0.5";
    document.getElementById("main").style.opacity="0.5";
  };

  /* Set the width of the side navigation to 0 */
  closeNav = () => {
    document.getElementsByClassName("nav-grid")[0].style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.opacity="1";
  };
  handleNavClick = () => {
    document.getElementsByClassName("nav-grid")[0].style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.opacity="1";
  }
    render() {
        return (
            
            // <div className="nav">
            //     <ul>
            //     <NavLink exact to = "/" className = "navlink" onClick={this.handleNavClick}>Home</NavLink>
            //     <NavLink exact to = "/about" className = "navlink" onClick={this.handleNavClick}>About</NavLink>
            //     <NavLink exact to = "/projects" className = "navlink" onClick={this.handleNavClick}>Work</NavLink>
            //     <NavLink exact to = "/" className = "navlink" onClick={this.handleNavClick}>Contact</NavLink>
            //         {/* <li>Home</li>
            //         <li>About</li>
            //         <li>Work</li>
            //         <li>Contact</li> */}
            //     </ul>
            // </div>
            <React.Fragment>
            <div className="nav-grid">
            <div className="nav-empty-space" onClick={this.closeNav}></div>
      <div id="mySidenav" className="sidenav">
        <div className="closebtn" onClick={this.closeNav}>
          &times;
        </div>
        {/* <h2>Polkaviz</h2> */}
        {/* <NavLink exact to = "/" className = "navlink" onClick={this.handleNavClick}>Home</NavLink>
        <NavLink to = "/alexander" className = "navlink" onClick={this.handleNavClick}>Alexander Network</NavLink>
        <NavLink to = "/kusama" className = "navlink" onClick={this.handleNavClickKusama}>Kusama Network</NavLink> */}
                <NavLink exact to = "/" className = "navlink" onClick={this.handleNavClick}>Home</NavLink>
                <NavLink exact to = "/about" className = "navlink" onClick={this.handleNavClick}>About</NavLink>
                <NavLink exact to = "/projects" className = "navlink" onClick={this.handleNavClick}>Work</NavLink>
                <NavLink exact to = "/contact" className = "navlink" onClick={this.handleNavClick}>Contact</NavLink>
      </div>

      </div>

        <span onClick={this.openNav} className="opennav"> &#9776; </span>
</React.Fragment>
        )
    }
}
