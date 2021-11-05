import React from 'react';
import gitIcon from '../static/githubIcon.png'
import inIcon from '../static/Linkedin-PNG.png'
import gmailIcon from '../static/gmailicon1.png'

const Salutations = () => {
    return (
        <div data-aos="zoom-down" id="salutations">
            <ul><li id="know-me">Get to <span className="inverted">know </span>me!</li></ul>
            <ul id="socials">
                <li><a href="https://github.com/vanbietnguyen"><img className="icon" id='gitIcon' src={gitIcon} alt=""/></a></li>
                <li><a href="https://www.linkedin.com/in/van-biet-nguyen/"><img className="icon" id='linkedIcon' src={inIcon} alt=""/></a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=vanbietnguyen@gmail.com"><img className="icon" id='gmailIcon' src={gmailIcon} alt=""/></a></li>
            </ul>
        </div>
    )
}


export default Salutations