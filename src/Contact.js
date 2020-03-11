import React, { Component } from 'react'
// import mailsvg from './undrawenv.svg'
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import * as emailjs from 'emailjs-com'
library.add(fab)


//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

export default class Contact extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            text:''
        }
    }

    handlenamechange = (e) => {
        // e.preventDefault()
        // console.log(e)
        this.setState({
            name: e.target.value
        })
    }
    handletextchange = (e) => {
        // e.preventDefault()
        // console.log(e)
        this.setState({
            text: e.target.value
        })
    }
    handleemailchange = (e) => {
        // console.log(e)
        this.setState({
            email: e.target.value
        })
    }
    sendemail = () => {
        const { name, email, text } = this.state
        let templateParams = {
            from_name: email,
            to_name: 'gsshaurya@gmail.com',
            subject: 'portfolio-contact',
            message_html: text,
            name:name
           }     
           
        emailjs.send(
            'gmail',
            'template_P1VIFv5G',
             templateParams,
            'user_hAvtSsgUoRgwCqDpsdjFQ'
           )
        console.log("Email sent")

    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
            <div className="contact-section">
                <div className="contact-left">
                    <span>Get In Touch</span>
                </div>
                <div className="contact-right">
                    <p>If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below or send an email to gsshaurya@gmail.com and ~let's talk.</p>
                <div className="form">
                    <label className="form-label">Name</label>
                    <input type="text" className="forminput"  onChange={this.handlenamechange} value={this.state.name} placeholder="Enter your name"></input>
                    <label className="form-label">Email</label>
                    <input type="text" className="forminput" value={this.state.email} onChange={this.handleemailchange} placeholder="Enter your email"></input>
                    <label className="form-label">Message</label>
                    <textarea className="forminput" value={this.state.text} onChange={this.handletextchange} placeholder="Enter your message"/>
                    <button className="contact-btn" onClick={this.sendemail}>Message Me</button>
                </div>
                <div className="social-buttons">
                    <a href="https://facebook.com/" className="social-button facebook"><FontAwesomeIcon icon={['fab', 'facebook']} /> </a>
                    <a href="https://twitter.com/" className="social-button twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    <a href="https://github.com/" className="social-button github"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    <a href="https://instagram.com/" className="social-button instagram"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    <a href="https://linkedin.com/" className="social-button linkedin"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>

                </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
