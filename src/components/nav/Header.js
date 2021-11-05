import React from 'react';
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <header>
            {/* <div>test</div> */}
            <ul id='left-nav'>
                    <li>Van Biet</li>
                    <li>Nguyen</li>
                </ul>
            <nav>
                <ul id='right-nav'>
                    <li><Link activeClass="active" to="home" spy={true} smooth={true}>home</Link></li>
                    <li><Link  to="about" spy={true} smooth={true}>about</Link></li>
                    <li><Link  to="skills" spy={true} smooth={true}>skills</Link></li>
                    <li><Link  to="salutations" spy={true} smooth={true}>salutations</Link></li>
                    
                    <li onClick={() => console.log('clocked')}>
                        <a href="https://drive.google.com/u/1/uc?id=1wlgxq_NmCJPdKLyaG7fZNIYOZH-TmaOV&export=download">resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}



export default Header;