import React, { Component } from 'react'
import avatar from './avatar1.png'

export default class About extends Component {
    render() {
        return (
            <div className="aboutSection">
                <div className="about-item about-left"><span>About Me</span><img src={avatar} alt="avatr"></img></div>
                <div className="about-item about-right"><p>I'm a 21 year-old full-stack developer studying computer science at Jaypee Institute of Information Technology, India.</p></div>
            </div>
        )
    }
}
