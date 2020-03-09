import React, { Component } from 'react'
import avatar from './avatar1.png'

export default class About extends Component {
    render() {
        return (
            <div className="aboutSection">
                <div className="about-item about-left"><span>About Me</span><img src={avatar} alt="avatr"></img></div>
                <div className="about-item about-right">
                    <p>
                        I'm a 21 year-old full-stack developer studying computer science at Jaypee Institute of Information Technology, India.
                        <span>
                        I am professionally connected with the web development industry and information technology for many years.
                        </span>
                        <span>
                        Well Organised person, problem solver, worked as both team and independent employee with high attention to detail. Fan of Anime and recently basketball.    
                        </span>
                        Interested in entire frontend spectrum and working on ambitious projects with positive people.
                    </p>
                </div>
            </div>
        )
    }
}
