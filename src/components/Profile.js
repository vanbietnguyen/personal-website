import React from 'react';
import me from '../static/me.jpg'
import Aos from 'aos';
import "aos/dist/aos.css"
// import { Element } from 'react-scroll'


const Profile = () => {
    return (
            <div id="home" className="centered">
                <h1 id="title-text">
                    <span className="anim2">So</span>
                    <span className="anim1">ft</span>
                    <span className="anim4">wa</span>
                    <span className="anim3">re</span>
                    <br/>
                    <span className="anim2">En</span>
                    <span className="anim1">gi</span>
                    <span className="anim4">ne</span>
                    <span className="anim3">er</span>
                    <span className="anim4"></span>
                </h1>
                <img id='prof-pic' alt='me' src={me}/>
            </div>
    )
}

export default Profile;