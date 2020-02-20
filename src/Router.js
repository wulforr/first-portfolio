import { Route, Switch, HashRouter } from "react-router-dom";
import Navbar from './Navbar'
import React, { Component } from 'react'
import App from './App'
import About from './About'
// import Contact from './Contact'
import Projects from './Projects'
import Contact from "./Contact";
// import * as THREE from "three";



export default class Router extends Component {

    render() {
      console.log(window.innerWidth,window.innerHeight)
        return (
            <HashRouter>
            <div> 
                <h2>Shaurya <span className="h2span">Vardhan</span></h2>
                
                <Navbar />
                {/* <Contact /> */}
            </div>
            <div id="main">
      {/* <div ref={ref => (this.mount = ref)} /> */}
            
            <Switch>
            <Route
                exact
                path="/"
                render={props => (
                  <App  />
                )}
              />
              <Route
                exact
                path="/about"
                render={props => (
                  <About />
                )}
              />
              <Route
                exact
                path="/projects"
                render={props => (
                  <Projects />
                )}
              />
              <Route
                exact
                path="/contact"
                render={props => (
                  <Contact />
                )}
              />
            </Switch>
            </div>
            </HashRouter>
        )
    }
}
