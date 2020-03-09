import React, { Component } from 'react'
// let Polaroid = require('polaroid-image');
// import Polaroid from 'polaroid-image/index'

export default class ProjectTile extends Component {
    constructor(){
        super()
        this.state = {
            hovered:false
        }
    }

    HandleOnMouseEnter = (e) => {
        // console.log(e.target,e.target.parentNode,e.target.nextElementSibling)
        console.log("hovered");
        this.setState({
            hovered:true
        })
        // document.querySelector()
        // e.target.nextElementSibling.style.visibility="visible"
    }
    handleOnMouseOut = (e) => {
        this.setState({
            hovered:false
        })
        console.log("unhovered");
        // e.target.nextElementSibling.style.visibility="hidden"
    }
    
    render() {

        return (
        
            <div className="project-tile">
                <div className='front'>

                    <img src={this.props.info.image} alt="project-tile" onMouseEnter={this.HandleOnMouseEnter} hovered={this.HandleOnMouseEnter}/>
                    <div className="project-content">
                        <div className="project-name">{this.props.info.name}</div>
                        <div className="project-desc">{this.props.info.description}</div>
                    </div>
                    <div className="view-on-github">
                    {/* <a className="button" href="ww.jiu.com">View on github</a> */}
                    <button className="project-link"><a href={this.props.info.projectLink}>View on Github</a></button>
                    </div>
                </div>
                <div className="back">
                    <h5>Technologies Used</h5>
                    <ul>
                        {this.props.info.techused.map(ele=>{
                            return(<li>{ele}</li>)
                        })}
                    </ul>
                    <div className="view-on-github">
                    <button className="project-link-back"><a href={this.props.info.projectLink}>View on Github</a></button>
                </div>
                            </div>
            </div>
        )
    }
}
