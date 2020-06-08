import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv blur">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Graduate Diploma in Data Science" where="the University of Melbourne" from="February 2020" to="Present"/>
            <Widecard title="Master of Science in Pure Mathematics" where="the University of Melbourne" from="2018" to="2019"/>
            <Widecard title="Bachelor of Science in Pure Mathematics" where="the University of Melbourne" from="2015" to="2017"/>
            </div>
            )
        }
    }
    
export default Education
    