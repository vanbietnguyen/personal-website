import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
// import { Element } from 'react-scroll'


const Profile = () => {
    return (
            <div id="home" className="centered marg-bot min-hei" >
                <h1 id="title-text">
                    <span className="inverted">s</span>
                    <span className="anim1 inverted">o</span>
                    <span className=" inverted">f</span>
                    <span className="anim2 inverted">t</span>
                    <span className="inverted">w</span>
                    <span className="anim1 inverted">a</span>
                    <span className="inverted">r</span>
                    <span className="inverted">e</span>
                    <br/>
                    <span className="anim2">E</span>
                    <span className="">n</span>
                    <span className="anim1" >g</span>
                    <span className="" >i</span>
                    <span className="anim2">n</span>
                    <span className="">e</span>
                    <span className="">e</span>
                    <span className="anim1">r</span>
                    <span className=" inverted"></span>
                </h1>
                <img id='prof-pic' alt='me' src="https://github.com/vanbietnguyen/personal-website/blob/dev/.github/meInBus.jpeg?raw=true" />
            </div>
    )
}

export default Profile;