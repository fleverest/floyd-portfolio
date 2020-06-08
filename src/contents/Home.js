import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/floyd.jpg';
import Social from '../components/Social';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic" alt="floyd"></img>
            <ReactTypingEffect className="typingeffect" text={['Friend floyd = new Friend();','floyd :: forall a. Problem a -> Solution a']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
