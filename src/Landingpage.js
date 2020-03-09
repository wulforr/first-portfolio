import React, { Component } from 'react'
import {motion} from 'framer-motion'


export default class Landingpage extends Component {
    render() {
        return (
            <div className="landing-grid">
                <div className="landing-grid-item item1">
                    <div className="landing-page-main-text main-text1" >
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity}}
                        >W</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0}}
                        >e</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0}}
                        >b</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.4}}
                        >&nbsp;</motion.div>

                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.2}}
                        >D</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.2}}
                        >e</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.2}}
                        >v</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.4}}
                        >e</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.4}}
                        >l</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.4}}
                        >o</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.6}}
                        >p</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.6}}
                        >e</motion.div>
                        
                        <motion.div
                        animate={{y:[0,20,0,-20,0]}}
                        transition={{duration:2,loop:Infinity,delay:0.6}}
                        >r</motion.div>
                    </div>
                    {/* <div className="landing-page-main-text main-text2">Designer</div> */}
                </div>
                <div className="landing-grid-item item2">
                    <div>
                        <p>
                            Hi, I am Shaurya, an aspiring Front-end Developer and Designer based out of Delhi, India. I create things with code and then turn them into a useful, usable and valuable User Interface.
                        </p>
                        <div className="button-div">
                        <button className="main-page-button">Resume</button>
                        <button className="main-page-button">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
