import React from 'react';
import me from './me.jpg'
// import { Container, Row, Col } from 'react-bootstrap'


const Profile = () => {
    return (
       <div className="centered">
           <h1>
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
           {/* <h2 className="anim1">About me</h2> */}
           <img className='prof-pic' alt='me' src={me}/>
       </div>
    )
}

export default Profile;