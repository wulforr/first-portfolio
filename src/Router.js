import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from './Navbar'
import React, { Component } from 'react'
import App from './App'
import About from './About'
// import Contact from './Contact'
import Projects from './Projects'
import Contact from "./Contact";
import {motion} from 'framer-motion'



export default class Router extends Component {

    render() {
      console.log(window.innerWidth,window.innerHeight)
        return (
            <BrowserRouter>
            <div> 


                <Navbar />

            </div>
            <div id="main">

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
            </BrowserRouter>
        )
    }
}
