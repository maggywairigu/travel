 import React from 'react';
 import '../App.css';
 import { Button } from './Button';
 import './HeroSection.css';

function HeroSection() {
  <script src="https://kit.fontawesome.com/c61c466504.js" crossorigin="anonymous"></script>
  return (
    <div className='herocontainer'>
        <video src='/videos/video-2.mp4' autoPlay loop muted></video>
        
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
         <div className='herobtns'>
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
            <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER <i className="fa-sharp fa-solid fa-circle-play"></i></Button>  
         </div>
         
    </div>
  )
}

export default HeroSection