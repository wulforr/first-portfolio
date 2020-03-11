import React, { Component } from 'react'
import {motion} from 'framer-motion'
import {NavLink} from "react-router-dom"


export default class Landingpage extends Component {
    render() {
        return (
            <div className="landing-grid">
                <div className="landing-grid-item item1">
                    <div className="landing-page-main-text main-text1" >
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity}}
                        >Web</motion.div>

                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.4}}
                        >&nbsp;</motion.div>

                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.2}}
                        >Dev</motion.div>
                          <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.4}}
                        >elo</motion.div>
    
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.6}}
                        >per</motion.div>

                    </div>
                </div>
                <div className="landing-grid-item item2">
                    <div>
                        <p>
                            Hi, I am Shaurya, an aspiring Front-end Developer and Designer based out of Delhi, India. I create things with code and then turn them into a useful, usable and valuable User Interface.
                        </p>
                        <div className="button-div">
                        <button className="main-page-button"><a href="https://drive.google.com/uc?export=download&id=1-CLQW5Ppbru8FptUsCFvgccLp9EyoIqs" download>Resume</a></button>
                        <NavLink exact to ="/contact"><button className="main-page-button navlinkbtn">Contact</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
