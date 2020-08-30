import React, { Component } from 'react'

class SkillCard extends Component {
    render() {
        return (
            <div className="skillcard">
                <div className="compdet">
                    <h3>{this.props.title}</h3>
                    <ul>
                    {
                        this.props.skills.map((value)=>{
                            return <li>{value}</li>
                        })
                    }
                    </ul>
                </div>
            </div>
            )
        }
    }
    
    export default SkillCard