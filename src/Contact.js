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

    handleContactClick = () => {
        console.log("handled")
    }
    animate = () => {
        gsap.set(".letterhead",{transformOrigin:"0% 0%"})
        var proxy = {transforms:"rotateX(0deg) rotateY(0deg) rotateZ(0deg)"};
        var gsapBox = document.querySelector(".letterhead");
        function applyTransforms () {
            gsapBox.style.transform = proxy.transforms;
            gsapBox.style.transformOrigin = "0% 0%";
          }
        let tl = gsap.timeline({onUpdate:applyTransforms})
        tl.to(".letter",{duration:2,y:170});
        tl.to('.btn',{duration:2,x:300});
        tl.to(proxy,{duration:5,transforms:"rotateX(180deg) rotateY(0deg) rotateZ(0deg)"});
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
                {/* <div className="contact-list-item contact contact-item1">Item1</div>
                <div className="contact-list-item contact contact-item2">Item2</div>
                <div className="contact-list-item contact contact-item3">Item3</div>
                <div className="contact-list-item contact contact-item4">Item4</div> */}

                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                {/* <img src={mailsvg} alt="email" className="email-svg" />
                <div className="contact-email">
                <svg width="639" height="640" viewBox="0 0 439 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="57" y="170" width="324" height="224" rx="12" fill="#64B5F6"/>
                <path d="M219 69L381.813 171.75H56.1872L219 69Z" fill="#64B5F6" className="letterhead"/>
                <g filter="url(#filter0_d)">
                <g filter="url(#filter1_d)">
                <g className="letter">
                <button className='btn'>save</button>
                <rect x="89" width="260" height="289" rx="16" fill="#FAF3F3" />
                <button className='btn'>edit</button>
                </g>
                </g>
                </g>
                <path d="M224.058 273.478C225.9 274.658 225.9 277.35 224.058 278.53L62.3075 382.157C60.3107 383.436 57.689 382.002 57.6892 379.63L57.7015 172.357C57.7017 169.986 60.3235 168.552 62.3202 169.832L224.058 273.478Z" fill="#1E88E5"/>
                <path d="M217.291 284.155C214.912 282.578 214.904 279.087 217.276 277.498L375.545 171.507C378.199 169.729 381.764 171.627 381.771 174.821L382.253 386.08C382.261 389.274 378.705 391.188 376.043 389.423L217.291 284.155Z" fill="#1E88E5"/>
                <path d="M215.369 262.492C218.916 259.886 223.75 259.905 227.275 262.539L379.259 376.08C386.982 381.849 382.875 394.129 373.235 394.091L68.3736 392.885C58.7339 392.847 54.7237 380.534 62.4918 374.826L215.369 262.492Z" fill="#2196F3"/>
                <defs>
                <filter id="filter0_d" x="85" y="0" width="268" height="297" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter1_d" x="86" y="0" width="268" height="298" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="1" dy="5"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
                </svg>
            <button onClick={this.animate}>animate</button> */}
                {/* </div> */}
                {/* <FontAwesomeIcon icon={faFacebookF} size='md' style={{color:'white'}} /> */}
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
