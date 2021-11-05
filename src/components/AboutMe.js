import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

const AboutMe = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
       <div data-aos="zoom-out" id="about">
            <p>
                Creator of <span className='inverted'>Dockure</span>. <span className='inverted'>Fullstack</span> engineer that loves implementing and learning <span className='inverted'>cohesive and decoupled</span> design patterns
                <span className='inverted'>Passionate</span> about youth community work and <span className='inverted'>revitalizing Chinatown</span>
                <br/>
                Knicks fan <span className='inverted'>#bingbong</span>
            </p>
       </div>
    )
}

export default AboutMe;