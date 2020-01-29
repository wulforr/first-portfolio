import React, { Component } from 'react'

export default class Landingpage extends Component {
    render() {
        return (
            <div className="landing-grid">
                <div className="landing-grid-item item1">
                    <div className="landing-page-main-text main-text1">Web Developer</div>
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
