import React, { Component } from 'react'

export default class ProjectTile extends Component { 
    render() {

        return (
        
            <div className="project-tile">
                <div className='front'>

                    <img src={this.props.info.image} alt="project-tile"/>
                    <div className="project-content">
                        <div className="project-name">{this.props.info.name}</div>
                        <div className="project-desc">{this.props.info.description}</div>
                    </div>
                    <div className="view-on-github">
                    <button className="project-link"><a href={this.props.info.projectLink}>View on Github</a></button>
                    </div>
                </div>
                <div className="back">
                    <h5>Technologies Used</h5>
                    <ul>
                        {this.props.info.techused.map((ele,index)=>{
                            return(<li key={index}>{ele}</li>)
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
