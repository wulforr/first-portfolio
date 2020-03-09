import React, { Component } from 'react'
import ProjectTile from './ProjectTile'

export default class Projects extends Component {
    constructor(){
        super()
        this.state = {
            projectsarr : [
                {name:"Polkaviz",
                image:require("./image1.png"),
                description:"Visualization using ReactJs of Polkadot Network (Blockchain based) to help new users get familiar with the platform. I worked on this project during my internship with The Vantage Project",
                rotation:"3deg",
                techused:["React","PHP","API","NODE","MONGO"],
                projectLink: "https://github.com/wulforr/Polkadot"
                },
                {name:"Recipe",
                image:require("./image1.png"),
                description:"A web app to search and view different recipes. Food2Fork API is used for fetching details about different types of recipe",
                rotation:"5deg",
                techused:["React","PHP","API","NODE","MONGO"],
                projectLink: "https://github.com/wulforr/Recipe-App"
                },
                {name:"Yes2HealthyLife",
                image:require("./image1.png"),
                description:"A web app to help users get details about their health such as BMI and suggest food on the basis of their last three BMI",
                rotation:"5deg",
                techused:["React","PHP","API","NODE","MONGO"],
                projectLink: "https://github.com/wulforr/Yes2HealthyLife"
                },
                {name:"Sanidhya",
                image:require("./image1.png"),
                description:"An App made to help missing children get reunited with their families. This project was part of team project.",
                rotation:"-5deg",
                techused:["React","PHP","API","NODE","MONGO"],
                projectLink: "https://github.com/wulforr/sanidhya"
                },
            ]
        }
    }

    handleRightClick = () => {
        // console.log(this.state.projectsarr.shift())
        let arr = this.state.projectsarr
        let ele = arr.shift()
        console.log(ele)
        arr.push(ele)
        console.log(arr)
        this.setState({
            projectsarr:arr
        })
        
    }
    handleLeftClick = () => {
        // console.log(this.state.projectsarr.shift())
        let arr = this.state.projectsarr
        let ele = arr.pop()
        console.log(ele)
        arr.unshift(ele)
        console.log(arr)
        this.setState({
            projectsarr:arr
        })
        
    }

    render() {
        return (
            <div className="projects">
                <div className="projects-title">My Projects</div>
                <div className="projects-all">
                    {
                        this.state.projectsarr.map(ele => {
                            return(
                            <ProjectTile info={ele} />
                        )})
                    }
                </div>
                {/* <div onClick={this.handleRightClick} id="right-btn">Next Project</div>
                <div onClick={this.handleLeftClick} id="left-btn">Previous Project</div> */}
            </div>
        )
    }
}
