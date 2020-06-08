import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
            <div class="compdet">
            <h3>{this.props.title}</h3>
            <p class="secondtext">{this.props.where} ({this.props.from}{this.props.to? " - " + this.props.to : "" })</p>
            <ul>
            {
                this.props.classes.map((value)=>{
                    return <li>{value}</li>
                })
            }
            </ul>
            </div>
            </div>
            )
        }
    }
    
export default Widecard
    