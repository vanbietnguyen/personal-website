import React from 'react';

const Salutations = () => {
    return (
        <div data-aos="zoom-up" id="salutations">
            <ul><li id="know-me">Get to <span className="inverted">know </span>me!</li></ul>
            <ul id="socials">
                <li><a href="https://github.com/vanbietnguyen"><img className="icon" id='gitIcon' src="https://github.com/vanbietnguyen/personal-website/blob/main/.github/githubIcon.png?raw=true" alt=""/></a></li>
                <li><a href="https://www.linkedin.com/in/van-biet-nguyen/"><img className="icon" id='linkedIcon' src="https://raw.githubusercontent.com/vanbietnguyen/personal-website/main/.github/Linkedin-PNG.png" alt=""/></a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=vanbietnguyen@gmail.com"><img className="icon" id='gmailIcon' src="https://github.com/vanbietnguyen/personal-website/blob/main/.github/gmailicon1.png?raw=true" alt=""/></a></li>
            </ul>
        </div>
    )
}


export default Salutations