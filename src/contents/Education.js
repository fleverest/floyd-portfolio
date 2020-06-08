import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv edu blur">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Graduate Diploma in Data Science" where="the University of Melbourne" from="February 2020" to="Present" classes={["Methods of Mathematical Statistics", "Programming and Software Development", "Advanced Database Systems"]}/>
            <Widecard title="Mikrotik Certified Wireless Engineer" from="2019" classes={["802.11","Wireless Security","RADIUS", "MESH", "Wireless Transparent Bridging"]}/>
            <Widecard title="Mikrotik Certified Network Associate" where="DuxTel Training" from="2019" classes={["TCP/IP","RouterOS","DHCP","ARP","Wireless Networking","Routing","Firewall & NAT","QoS", "PPTP & SSTP"]}/>
            <Widecard title="Master of Science in Pure Mathematics - Incomplete" where="the University of Melbourne" from="2018" to="2019" classes={["Algorithms and Complexity", "Advanced Theoretical Computer Science", "Advanced Topics in Geometry and Topology", "Algebraic Topology"]}/>
            <Widecard title="Bachelor of Science in Pure Mathematics" where="the University of Melbourne" from="2015" to="2017" classes={["Complex Analysis", "Vector Calculus", "Graph Theory", "Database Systems"]}/>
            </div>
            )
        }
    }
    
export default Education
    